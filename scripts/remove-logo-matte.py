"""
Logo da marca em public/brand/logo-dg-contabilidade.png

- Sem argumentos: remove moldura preta/branca opaca (flood-fill a partir das bordas).
- Com caminho de arquivo: copia esse PNG para public/brand/logo-dg-contabilidade.png
  e, por padrão, aplica o mesmo tratamento. Use --no-matte se o PNG já tiver alpha limpo
  (ex.: export do remove.bg / ChatGPT com transparência real).
"""
from __future__ import annotations

import argparse
import shutil
import sys
from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image


def is_matte_pixel(r: int, g: int, b: int, a: int) -> bool:
    """Pixels opacos da moldura externa (preto ou branco), não atravessa transparência."""
    if a < 200:
        return False
    if r < 55 and g < 55 and b < 55:
        return True
    if r > 235 and g > 235 and b > 235:
        return True
    return False


def flood_transparent(rgba: np.ndarray) -> np.ndarray:
    h, w, _ = rgba.shape
    out = rgba.copy()
    visited = np.zeros((h, w), dtype=bool)
    q: deque[tuple[int, int]] = deque()

    def try_push(y: int, x: int) -> None:
        if y < 0 or y >= h or x < 0 or x >= w or visited[y, x]:
            return
        r, g, b, a = out[y, x]
        if not is_matte_pixel(int(r), int(g), int(b), int(a)):
            return
        visited[y, x] = True
        q.append((y, x))

    for x in range(w):
        try_push(0, x)
        try_push(h - 1, x)
    for y in range(h):
        try_push(y, 0)
        try_push(y, w - 1)

    while q:
        y, x = q.popleft()
        out[y, x, 3] = 0
        for dy, dx in ((-1, 0), (1, 0), (0, -1), (0, 1)):
            ny, nx = y + dy, x + dx
            if ny < 0 or ny >= h or nx < 0 or nx >= w or visited[ny, nx]:
                continue
            r, g, b, a = out[ny, nx]
            if not is_matte_pixel(int(r), int(g), int(b), int(a)):
                continue
            visited[ny, nx] = True
            q.append((ny, nx))

    return out


def main() -> int:
    parser = argparse.ArgumentParser(description="Atualiza logo em public/brand/")
    parser.add_argument(
        "source",
        nargs="?",
        help="PNG de origem (copia para public/brand/logo-dg-contabilidade.png)",
    )
    parser.add_argument(
        "--no-matte",
        action="store_true",
        help="Não aplicar flood-fill (use com PNG já transparente)",
    )
    args = parser.parse_args()

    root = Path(__file__).resolve().parents[1]
    dest = root / "public" / "brand" / "logo-dg-contabilidade.png"
    dest.parent.mkdir(parents=True, exist_ok=True)

    if args.source:
        src = Path(args.source).expanduser().resolve()
        if not src.is_file():
            print(f"Arquivo não encontrado: {src}", file=sys.stderr)
            return 1
        shutil.copy2(src, dest)
        print(f"Copiado: {src} -> {dest}")

    if not dest.is_file():
        print(f"Missing file: {dest}", file=sys.stderr)
        return 1

    if args.no_matte:
        img = Image.open(dest).convert("RGBA")
        img.save(dest, optimize=True)
        print(f"Salvo (sem matte): {dest}")
        return 0

    img = Image.open(dest).convert("RGBA")
    arr = np.array(img)
    arr = flood_transparent(arr)
    Image.fromarray(arr, "RGBA").save(dest, optimize=True)
    print(f"Atualizado (moldura removida): {dest}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

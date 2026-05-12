"""
Remove outer black / white matte from logo PNG via edge flood-fill.
Keeps the silver disc and black typography inside (not connected to image border).
"""
from __future__ import annotations

import sys
from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image


def is_edge_matte(r: int, g: int, b: int, a: int) -> bool:
    if a < 12:
        return True
    # Near-black frame
    if r < 55 and g < 55 and b < 55:
        return True
    # Near-white outer ring
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
        if not is_edge_matte(int(r), int(g), int(b), int(a)):
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
            if not is_edge_matte(int(r), int(g), int(b), int(a)):
                continue
            visited[ny, nx] = True
            q.append((ny, nx))

    return out


def main() -> int:
    root = Path(__file__).resolve().parents[1]
    path = root / "public" / "brand" / "logo-dg-contabilidade.png"
    if not path.exists():
        print(f"Missing file: {path}", file=sys.stderr)
        return 1

    img = Image.open(path).convert("RGBA")
    arr = np.array(img)
    arr = flood_transparent(arr)
    Image.fromarray(arr, "RGBA").save(path, optimize=True)
    print(f"Updated {path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

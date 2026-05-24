function PageBanner({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-emerald-900/10 bg-[linear-gradient(135deg,#f8fafc_0%,#ecfdf5_38%,#e0f2fe_100%)] px-5 pt-32 pb-16 sm:px-6 lg:px-8 lg:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(6,78,59,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,78,59,0.05)_1px,transparent_1px)] bg-size-[40px_40px]" />
      <div className="pointer-events-none absolute top-24 right-[12%] -z-10 h-56 w-56 rounded-full bg-sky-200/35 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[8%] -z-10 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl" />

      <div className="mx-auto max-w-4xl animate-fade-up">
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-sky-700 sm:text-sm">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">{subtitle}</p>
        ) : null}
        {children}
      </div>
    </section>
  )
}

export default PageBanner

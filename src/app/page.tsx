export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <main className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Test Site
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          A quick Next.js test site, up and running.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://nextjs.org/docs"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-200 transition"
          >
            Next.js Docs
          </a>
          <a
            href="https://github.com/thomaskoetsier/test-site"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
          >
            GitHub Repo
          </a>
        </div>
      </main>
    </div>
  );
}

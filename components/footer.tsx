export function Footer() {
  return (
    <footer className="relative mx-auto max-w-5xl px-6 py-10">
      <div className="glass flex flex-col items-center justify-between gap-4 rounded-2xl px-6 py-6 text-sm text-white/40 sm:flex-row">
        <span>© {new Date().getFullYear()} Rifat Hossain. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <a href="mailto:abirmubar@gmail.com" className="transition-colors hover:text-white">
            Email
          </a>
          <a
            href="https://t.me/Rifat237"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Telegram
          </a>
          <a href="#top" className="transition-colors hover:text-white">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

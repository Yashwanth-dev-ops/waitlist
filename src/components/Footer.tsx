export default function Footer() {
  return (
    <footer className="relative py-12 sm:py-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-center gap-2.5">
              {/* Waveform icon */}
              <div className="flex items-end gap-[2px] h-5">
                {[0.4, 0.7, 1, 0.6, 0.8, 0.5].map((h, i) => (
                  <div
                    key={i}
                    className="w-[2px] rounded-full bg-gradient-to-t from-accent-purple to-accent-blue"
                    style={{ height: `${h * 100}%` }}
                  />
                ))}
              </div>
              <span className="text-lg font-bold tracking-tight font-heading">
                <span className="text-white">Voxera</span>
                <span className="gradient-text-static"> AI</span>
              </span>
            </div>
            <p className="text-sm text-text-muted text-center sm:text-left">
              Built for real-world automation, not demos.
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center sm:items-end gap-2">
            <p className="text-xs text-text-muted">
              © {new Date().getFullYear()} Voxera AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

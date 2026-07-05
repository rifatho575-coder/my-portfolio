export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base">
      {/* base grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* aurora blobs */}
      <div className="absolute -top-40 left-1/4 h-[36rem] w-[36rem] rounded-full bg-blue/30 blur-[120px] animate-aurora" />
      <div className="absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full bg-violet/30 blur-[120px] animate-aurora-slow" />
      <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-cyan/20 blur-[120px] animate-aurora" />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030712_85%)]" />
    </div>
  );
}

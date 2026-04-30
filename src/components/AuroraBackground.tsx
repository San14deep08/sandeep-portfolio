export function AuroraBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Violet orb — top left */}
      <div
        className="animate-aurora-1 absolute -left-[10%] -top-[10%] h-[600px] w-[600px] rounded-full opacity-[0.18]"
        style={{
          background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Indigo orb — top right */}
      <div
        className="animate-aurora-2 absolute -right-[5%] top-[5%] h-[450px] w-[450px] rounded-full opacity-[0.13]"
        style={{
          background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)',
          filter: 'blur(70px)',
          animationDelay: '-6s',
        }}
      />

      {/* Cyan orb — center right */}
      <div
        className="animate-aurora-3 absolute right-[10%] top-[40%] h-[500px] w-[500px] rounded-full opacity-[0.10]"
        style={{
          background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
          filter: 'blur(90px)',
          animationDelay: '-10s',
        }}
      />

      {/* Pink orb — bottom center */}
      <div
        className="animate-aurora-4 absolute -bottom-[10%] left-[30%] h-[650px] w-[650px] rounded-full opacity-[0.08]"
        style={{
          background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)',
          filter: 'blur(100px)',
          animationDelay: '-4s',
        }}
      />

      {/* Subtle violet secondary — bottom left */}
      <div
        className="animate-aurora-2 absolute -bottom-[5%] -left-[5%] h-[350px] w-[350px] rounded-full opacity-[0.10]"
        style={{
          background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)',
          filter: 'blur(60px)',
          animationDelay: '-15s',
        }}
      />
    </div>
  )
}

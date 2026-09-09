export function MathMotif() {
  return (
    <svg
      viewBox="0 0 480 480"
      className="h-full w-full"
      role="img"
      aria-label="Illustration of a coordinate plane, compass and geometric construction representing Mathematics"
    >
      {/* coordinate plane */}
      <line x1="40" y1="240" x2="440" y2="240" stroke="#0F2A47" strokeWidth="1.5" opacity="0.35" />
      <line x1="240" y1="40" x2="240" y2="440" stroke="#0F2A47" strokeWidth="1.5" opacity="0.35" />
      {Array.from({ length: 9 }).map((_, i) => (
        <line
          key={`h${i}`}
          x1="40"
          y1={40 + i * 50}
          x2="440"
          y2={40 + i * 50}
          stroke="#0F2A47"
          strokeWidth="0.5"
          opacity="0.12"
        />
      ))}
      {Array.from({ length: 9 }).map((_, i) => (
        <line
          key={`v${i}`}
          x1={40 + i * 50}
          y1="40"
          x2={40 + i * 50}
          y2="440"
          stroke="#0F2A47"
          strokeWidth="0.5"
          opacity="0.12"
        />
      ))}

      {/* parabola curve */}
      <path
        d="M 90 380 Q 240 60 390 380"
        fill="none"
        stroke="#C79A3E"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* angle arc + triangle construction */}
      <path d="M240 240 L 340 240" stroke="#0F2A47" strokeWidth="2" />
      <path d="M240 240 L 300 155" stroke="#0F2A47" strokeWidth="2" />
      <path
        d="M 280 240 A 40 40 0 0 0 267 206"
        fill="none"
        stroke="#0F2A47"
        strokeWidth="2"
      />

      {/* compass circle */}
      <circle cx="150" cy="150" r="46" fill="none" stroke="#0F2A47" strokeWidth="2" opacity="0.7" />
      <line x1="150" y1="104" x2="150" y2="196" stroke="#0F2A47" strokeWidth="1.5" opacity="0.5" />
      <line x1="104" y1="150" x2="196" y2="150" stroke="#0F2A47" strokeWidth="1.5" opacity="0.5" />

      {/* floating numerals */}
      <text x="360" y="120" fontFamily="Fraunces, serif" fontSize="34" fill="#C79A3E" opacity="0.85">
        π
      </text>
      <text x="60" y="330" fontFamily="Fraunces, serif" fontSize="30" fill="#0F2A47" opacity="0.35">
        x²
      </text>
      <text x="380" y="330" fontFamily="Fraunces, serif" fontSize="26" fill="#0F2A47" opacity="0.35">
        √
      </text>

      {/* data points on curve */}
      <circle cx="90" cy="380" r="5" fill="#0F2A47" />
      <circle cx="240" cy="82" r="5" fill="#0F2A47" />
      <circle cx="390" cy="380" r="5" fill="#0F2A47" />
    </svg>
  );
}

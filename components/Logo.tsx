export default function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lc-gold" x1="0" y1="0" x2="0.85" y2="1">
          <stop offset="0%" stopColor="#f0d878" />
          <stop offset="48%" stopColor="#e3c34f" />
          <stop offset="100%" stopColor="#9c7a1a" />
        </linearGradient>
      </defs>

      {/* Anillo de mando: los 5 colores de Magic como marco */}
      <path
        d="M50 4 A46 46 0 0 1 93.72 35.55 L84.26 38.63 A36 36 0 0 0 50 14 Z"
        fill="#e3c34f"
      />
      <path
        d="M93.72 35.55 A46 46 0 0 1 77.17 87.24 L71.12 78.88 A36 36 0 0 0 84.26 38.63 Z"
        fill="#4f8ffc"
      />
      <path
        d="M77.17 87.24 A46 46 0 0 1 22.83 87.24 L28.88 78.88 A36 36 0 0 0 71.12 78.88 Z"
        fill="#b34ff5"
      />
      <path
        d="M22.83 87.24 A46 46 0 0 1 6.28 35.55 L15.74 38.63 A36 36 0 0 0 28.88 78.88 Z"
        fill="#ff5757"
      />
      <path
        d="M6.28 35.55 A46 46 0 0 1 50 4 L50 14 A36 36 0 0 0 15.74 38.63 Z"
        fill="#2ed573"
      />
      <path
        d="M50 4 A46 46 0 1 1 49.999 4"
        fill="none"
        stroke="#e3c34f"
        strokeWidth="1.25"
      />
      <path
        d="M50 14 A36 36 0 1 1 49.999 14"
        fill="none"
        stroke="#e3c34f"
        strokeWidth="1.05"
      />

      {/* Casa */}
      <path
        d="M20 48 L50 22 L80 48 L76.2 52 L50 29.2 L23.8 52 Z"
        fill="url(#lc-gold)"
      />
      <path
        d="M27 48 L27 73 L33 73 L33 43 Z M73 48 L73 73 L67 73 L67 43 Z"
        fill="#e3c34f"
      />

      {/* Cartas */}
      <path
        d="M27.2 48.5 L40.5 41.5 L48.2 65.2 L34.7 71.8 Z"
        fill="#0a0a12"
        stroke="#e3c34f"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
      <path
        d="M72.8 48.5 L59.5 41.5 L51.8 65.2 L65.3 71.8 Z"
        fill="#0a0a12"
        stroke="#e3c34f"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />

      {/* Escudo */}
      <path
        d="M37 37.2 Q50 32.8 63 37.2 L63 58.2 Q62.2 68.5 50 77 Q37.8 68.5 37 58.2 Z"
        fill="#0a0a12"
        stroke="#e3c34f"
        strokeWidth="1.65"
        strokeLinejoin="round"
      />

      {/* Corona */}
      <path
        d="M41 50 L43.4 42.4 L50 48.1 L56.6 42.4 L59 50 L57.3 57.2 Q50 59.3 42.7 57.2 Z"
        fill="url(#lc-gold)"
        stroke="#e3c34f"
        strokeWidth="0.55"
        strokeLinejoin="round"
      />
      <path
        d="M43.2 57.7 Q50 59.4 56.8 57.7 L56.2 60 Q50 61.5 43.8 60 Z"
        fill="#e3c34f"
      />
    </svg>
  );
}

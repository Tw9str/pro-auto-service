type LogoProps = {
  className?: string;
};

export function Logo({ className = '' }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 62"
      role="img"
      aria-label="Pro Auto Service"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="39"
        fontStyle="italic"
        fontWeight="900"
        letterSpacing="-.5"
        paintOrder="stroke fill"
        stroke="#050608"
        strokeWidth="1.1"
        strokeLinejoin="round"
      >
        <text x="5" y="39" fill="#ed1b2f">
          PRO
        </text>
        <text x="112" y="39" fill="#f5f7f8" letterSpacing="1.5">
          AUTO
        </text>
      </g>

      <g aria-hidden="true">
        <path d="M7 53h86" stroke="#ed1b2f" strokeWidth="2" />
        <path d="M218 53h75" stroke="#596069" strokeWidth="1" />
        <text
          x="108"
          y="57"
          fill="#b6bac0"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="10"
          fontWeight="700"
          letterSpacing="6.5"
        >
          SERVICE
        </text>
      </g>
    </svg>
  );
}

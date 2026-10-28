import React from "react";

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  variant?: "gold" | "badge" | "monochrome";
  className?: string;
  glow?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 32,
  variant = "gold",
  className = "",
  glow = true,
  ...props
}) => {
  const strokeColor =
    variant === "monochrome" ? "currentColor" : "url(#kartikGoldGradient)";
  const junctionColor =
    variant === "monochrome" ? "currentColor" : "url(#kartikGoldGradient)";

  if (variant === "badge") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width={size}
        height={size}
        fill="none"
        className={`inline-block shrink-0 ${className}`}
        role="img"
        aria-label="Karthik monogram logo badge"
        {...props}
      >
        <defs>
          <linearGradient
            id="kartikBadgeGold"
            gradientUnits="userSpaceOnUse"
            x1="20"
            y1="16"
            x2="180"
            y2="230"
          >
            <stop offset="0%" stopColor="#FCE59F" />
            <stop offset="20%" stopColor="#DEB259" />
            <stop offset="45%" stopColor="#B88328" />
            <stop offset="72%" stopColor="#E2B85E" />
            <stop offset="90%" stopColor="#9E6914" />
            <stop offset="100%" stopColor="#7A4D0A" />
          </linearGradient>
          <clipPath id="badgeBoundaryClip">
            <rect x="0" y="16" width="200" height="208" />
          </clipPath>
        </defs>

        <rect width="64" height="64" rx="14" fill="#101114" />

        <g
          transform="translate(32, 32) scale(0.24) translate(-98, -120)"
          clipPath="url(#badgeBoundaryClip)"
        >
          <line
            x1="98"
            y1="16"
            x2="98"
            y2="230"
            stroke="url(#kartikBadgeGold)"
            strokeWidth="12"
            strokeLinecap="butt"
          />
          <line
            x1="60"
            y1="22"
            x2="98"
            y2="22"
            stroke="url(#kartikBadgeGold)"
            strokeWidth="12"
            strokeLinecap="square"
          />
          <line
            x1="62"
            y1="22"
            x2="98"
            y2="58"
            stroke="url(#kartikBadgeGold)"
            strokeWidth="12"
            strokeLinecap="butt"
          />
          <path
            d="M 60 22 C 44 42, 24 100, 24 162 C 24 188, 27 210, 29 230"
            stroke="url(#kartikBadgeGold)"
            strokeWidth="12"
            strokeLinecap="butt"
          />
          <line
            x1="34"
            y1="34"
            x2="102"
            y2="102"
            stroke="url(#kartikBadgeGold)"
            strokeWidth="12"
            strokeLinecap="butt"
          />
          <line
            x1="102"
            y1="94"
            x2="52"
            y2="198"
            stroke="url(#kartikBadgeGold)"
            strokeWidth="12"
            strokeLinecap="butt"
          />
          <path
            d="M 98 22 L 138 22 C 164 22, 178 38, 178 60 C 178 82, 164 98, 138 98 L 98 98"
            stroke="url(#kartikBadgeGold)"
            strokeWidth="12"
            strokeLinecap="butt"
            strokeLinejoin="miter"
          />
          <line
            x1="94"
            y1="94"
            x2="178"
            y2="230"
            stroke="url(#kartikBadgeGold)"
            strokeWidth="12"
            strokeLinecap="butt"
          />
          <circle cx="98" cy="98" r="7.5" fill="url(#kartikBadgeGold)" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 240"
      width={size}
      height={size}
      fill="none"
      className={`inline-block shrink-0 ${className}`}
      role="img"
      aria-label="Karthik monogram logo"
      {...props}
    >
      <defs>
        {variant !== "monochrome" && (
          <linearGradient
            id="kartikGoldGradient"
            gradientUnits="userSpaceOnUse"
            x1="20"
            y1="16"
            x2="180"
            y2="230"
          >
            <stop offset="0%" stopColor="#FCE59F" />
            <stop offset="20%" stopColor="#DEB259" />
            <stop offset="45%" stopColor="#B88328" />
            <stop offset="72%" stopColor="#E2B85E" />
            <stop offset="90%" stopColor="#9E6914" />
            <stop offset="100%" stopColor="#7A4D0A" />
          </linearGradient>
        )}
        <clipPath id="kartikBoundaryClip">
          <rect x="0" y="16" width="200" height="208" />
        </clipPath>
        {glow && variant !== "monochrome" && (
          <filter id="kartikGoldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="3"
              floodColor="#000000"
              floodOpacity="0.45"
            />
          </filter>
        )}
      </defs>

      <g
        filter={glow && variant !== "monochrome" ? "url(#kartikGoldGlow)" : undefined}
        clipPath="url(#kartikBoundaryClip)"
      >
        {/* 1. Central Vertical Stem */}
        <line
          x1="98"
          y1="16"
          x2="98"
          y2="230"
          stroke={strokeColor}
          strokeWidth="12"
          strokeLinecap="butt"
        />

        {/* 2. Top Horizontal Bar */}
        <line
          x1="60"
          y1="22"
          x2="98"
          y2="22"
          stroke={strokeColor}
          strokeWidth="12"
          strokeLinecap="square"
        />

        {/* 3. Diagonal Brace under top bar */}
        <line
          x1="62"
          y1="22"
          x2="98"
          y2="58"
          stroke={strokeColor}
          strokeWidth="12"
          strokeLinecap="butt"
        />

        {/* 4. Left Arc (Shield) */}
        <path
          d="M 60 22 C 44 42, 24 100, 24 162 C 24 188, 27 210, 29 230"
          stroke={strokeColor}
          strokeWidth="12"
          strokeLinecap="butt"
        />

        {/* 5. Upper-Left Diagonal of K */}
        <line
          x1="34"
          y1="34"
          x2="102"
          y2="102"
          stroke={strokeColor}
          strokeWidth="12"
          strokeLinecap="butt"
        />

        {/* 6. Lower-Left Diagonal of K */}
        <line
          x1="102"
          y1="94"
          x2="52"
          y2="198"
          stroke={strokeColor}
          strokeWidth="12"
          strokeLinecap="butt"
        />

        {/* 7. 'R' Upper Loop */}
        <path
          d="M 98 22 L 138 22 C 164 22, 178 38, 178 60 C 178 82, 164 98, 138 98 L 98 98"
          stroke={strokeColor}
          strokeWidth="12"
          strokeLinecap="butt"
          strokeLinejoin="miter"
        />

        {/* 8. 'R' Right Leg */}
        <line
          x1="94"
          y1="94"
          x2="178"
          y2="230"
          stroke={strokeColor}
          strokeWidth="12"
          strokeLinecap="butt"
        />

        {/* Central Junction Anchor */}
        <circle cx="98" cy="98" r="7.5" fill={junctionColor} />
      </g>
    </svg>
  );
};

export default Logo;

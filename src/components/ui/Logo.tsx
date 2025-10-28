import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizeClasses =
    size === "sm"
      ? "w-6 h-6"
      : size === "lg"
      ? "w-12 h-12"
      : "w-8 h-8"; // default md

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* ✅ Use direct public path — no import needed */}
      <img
        src="/logo.png" // <-- your file in /public/logo.png
        alt="TalentFlow Logo"
        className={`${sizeClasses} object-contain rounded-md`}
      />

      {/* Logo Text */}
      <span className="font-bold text-gray-900 text-base sm:text-lg md:text-xl">
        TalentFlow
      </span>
    </div>
  );
};

export default Logo;

import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  scrolled?: boolean;
  isHomePage?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className,
  scrolled = false,
  isHomePage = false,
}) => {
  return (
    <Link
      to="/"
      className={cn(
        "flex items-center gap-3 font-medium",
        isHomePage && !scrolled ? "text-white" : "text-[#2fd680]",
        className
      )}
    >
      <img
        src={`${import.meta.env.BASE_URL}logo.png`}
        alt="HotelHub Logo"
        className="h-10 w-10 object-contain"
        onError={(e) => {
          console.error('Logo failed to load');
          e.currentTarget.style.display = 'none';
        }}
      />
      <span className="text-2xl font-bold tracking-tight">
        HOTEL
        <span
          className={cn(
            isHomePage && !scrolled ? "text-white" : "text-[#2fd680]"
          )}
        >
          HUB
        </span>
      </span>
    </Link>
  );
};

export default Logo;

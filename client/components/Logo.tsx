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
        "flex items-center font-medium",
        isHomePage && !scrolled ? "text-white" : "text-[#2fd680]",
        className
      )}
    >
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

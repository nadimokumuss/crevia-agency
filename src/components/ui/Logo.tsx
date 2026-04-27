import Image from "next/image";
import { cn } from "@/lib/cn";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo({
  width = 140,
  height = 40,
  className,
}: LogoProps) {
  return (
    <Image
      src="/images/logo.png"
      alt="Crevia Agency"
      width={width}
      height={height}
      className={cn("object-contain", className)}
      priority
    />
  );
}

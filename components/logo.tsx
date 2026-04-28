import Image from "next/image";

type LogoProps = {
  className?: string;
  title?: string;
  variant?: "light" | "dark";
};

export function Logo({
  className = "",
  title = "AltCrew",
  variant = "light",
}: LogoProps) {
  const src =
    variant === "dark" ? "/logos/altcrew-light.svg" : "/logos/altcrew-dark.svg";

  return (
    <Image
      src={src}
      alt={title}
      width={240}
      height={64}
      priority
      className={`inline-block w-auto ${className}`}
    />
  );
}

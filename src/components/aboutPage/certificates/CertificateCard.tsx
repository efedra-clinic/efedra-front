import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface CertificateCardProps {
  certificate: string;
  className?: string;
}

export default function CertificateCard({
  certificate,
  className = "",
}: CertificateCardProps) {
  return (
    <div
      className={twMerge(
        "relative w-full h-full aspect-[295/255] md:aspect-[334/384]",
        className
      )}
    >
      <Image
        src={certificate}
        alt="certificate"
        fill
        className="object-cover rounded-[16px] border border-beige"
      />
    </div>
  );
}

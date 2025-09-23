import { Review } from "@/types/review";
import Image from "next/image";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface ReviewCardProps {
  review: Review;
  className?: string;
}

export default function ReviewCard({
  review,
  className = "",
}: ReviewCardProps) {
  const { name, photo, direction, text } = review;

  return (
    <div
      className={twMerge(
        clsx(
          `flex flex-col h-full p-6 rounded-[20px] border border-beige`,
          className
        )
      )}
    >
      <div className="flex gap-3 items-center mb-[26px] lg:mb-8">
        <div className="relative w-16 h-16 rounded-full">
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div>
          <h3 className="mb-1.5 font-evolenta text-[15px] font-normal leading-[133%] uppercase">
            {name}
          </h3>
          <p className="text-[13px] font-normal leading-[120%]">{direction}</p>
        </div>
      </div>
      <div className="flex-grow flex flex-col justify-center">
        <p className="h-fit text-[14px] font-light leading-[120%]">{text}</p>
      </div>
    </div>
  );
}

import EstimatedReadingTime from "@/components/shared/estReadingTime/estimatedReadingTime";
import { Post } from "@/types/post";
import Image from "next/image";
import DirectionTag from "../../shared/directionTag/DirectionTag";
import Link from "next/link";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import { urlFor } from "@/utils/getUrlForSanityImage";

interface ArticleTwoProps {
  post: Post;
}

export default function ArticleTwo({ post }: ArticleTwoProps) {
  const { title, description, image, direction, slug } = post;

  return (
    <Link
      href={`/blog/${slug}`}
      className="block xl:w-[calc(50%-7px)] h-full rounded-[20px] overflow-hidden"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimation({ y: 20 })}
        className="flex flex-col h-full px-4 py-5 bg-gray-light"
      >
        <div className="flex-grow relative w-full mb-4 rounded-[12px] overflow-hidden">
          <Image
            src={urlFor(image).fit("crop").url()}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <h3 className="mb-5 font-evolenta text-[15px] font-normal leading-[133%] uppercase">
          {title}
        </h3>

        <p className="mb-6 md:mb-5 text-[12px] font-light leading-[120%] line-clamp-5 md:line-clamp-6">
          {description}
        </p>
        <div className="flex gap-3 items-center">
          <DirectionTag
            className="px-3 py-1 rounded-full bg-white"
            direction={direction}
          />
          <EstimatedReadingTime
            className="px-3 py-1 rounded-full bg-white"
            post={post}
          />
        </div>
      </motion.div>
    </Link>
  );
}

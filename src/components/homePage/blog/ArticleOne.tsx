import SecondaryButton from "@/components/shared/buttons/SecondaryButton";
import { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import { urlFor } from "@/utils/getUrlForSanityImage";

interface ArticleOneProps {
  post: Post;
}

export default function ArticleOne({ post }: ArticleOneProps) {
  const { title, description, image, slug } = post;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInAnimation({ x: 30 })}
      className="md:w-[calc(50%-8px)] mb-5 md:mb-0"
    >
      <Link href={`/blog/${slug}`}>
        <div className="px-4 py-5 rounded-[20px] bg-gray-light">
          <h3 className="mb-5 font-evolenta text-[24px] font-normal leading-[133%] uppercase">
            {title}
          </h3>
          <div className="xl:flex gap-9 mb-5 xl:mb-4">
            <p className="mb-6 text-[12px] font-light leading-[120%] line-clamp-5 xl:line-clamp-4">
              {description}
            </p>
            <SecondaryButton className="xl:w-[165px] xl:mt-7 px-5 lg:px-[22px] xl:h-14 shrink-0">
              Читати далі
            </SecondaryButton>
          </div>
          <div className="relative h-[202px] xl:h-[344px] rounded-[20px] overflow-hidden">
            <Image
              src={urlFor(image).fit("crop").url()}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

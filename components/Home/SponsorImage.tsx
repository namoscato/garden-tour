import cn from "classnames";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import classes from "./SponsorImage.module.scss";

interface Props {
  src: StaticImport;
  alt: string;
  href: string;
  className?: string;
}

export const SponsorImage = ({ src, alt, href, className }: Props) => {
  return (
    <a
      href={`${href}?utm_source=kenton-garden-tour`}
      target="_blank"
      className={classes.root}
    >
      <Image
        src={src}
        alt={alt}
        className={cn(classes.image, className)}
        unoptimized
      />
    </a>
  );
};

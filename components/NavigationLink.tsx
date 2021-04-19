import cn from "classnames";
import { useRouter } from "next/router";
import classes from "./NavigationLink.module.scss";

interface Props {
  children: string;
  href: string;
}

export default function NavigationLink({ children, href }: Props) {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(classes.root, { [classes.active]: router.asPath === href })}
    >
      {children}
    </a>
  );
}

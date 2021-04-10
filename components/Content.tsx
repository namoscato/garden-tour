import classes from "./Content.module.scss";

interface Props {
  children: React.ReactNode;
}

export default function Content({ children }: Props) {
  return <main className={classes.root}>{children}</main>;
}

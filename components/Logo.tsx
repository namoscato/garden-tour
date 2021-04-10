import classes from "./Logo.module.scss";

export default function Logo() {
  return (
    <div className={classes.root}>
      <img src="/images/logo.png" width={150} height={161} />
    </div>
  );
}

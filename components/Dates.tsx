import classes from "./Dates.module.scss";

export default function Dates() {
  return (
    <ul className={classes.root}>
      <li>
        <div className={classes.day}>July 16 – 17</div>
        <div className={classes.time}>8:30pm – 11pm</div>
      </li>
      <li>
        <div className={classes.day}>July 17 – 18</div>
        <div className={classes.time}>10am – 4pm</div>
      </li>
    </ul>
  );
}

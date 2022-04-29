import classes from "./Dates.module.scss";

export default function Dates() {
  return (
    <ul className={classes.root}>
      <li>
        <div className={classes.day}>July 22 – 23</div>
        <div className={classes.time}>8:30pm – 11pm</div>
      </li>
      <li>
        <div className={classes.day}>July 23 – 24</div>
        <div className={classes.time}>10am – 4pm</div>
      </li>
    </ul>
  );
}

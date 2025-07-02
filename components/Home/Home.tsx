import cn from "classnames";
import Dates from "components/Dates";
import { YEAR } from "components/Dates/constants";
import Link from "next/link";
import classes from "./Home.module.scss";
import { Sponsors } from "./Sponsors";

export const Home = () => {
  return (
    <div className={classes.root}>
      <h1 className="title">{YEAR} Garden Tour</h1>
      <Dates />
      <div className={classes.callToAction}>
        <Link
          href="/guide"
          className={cn("button", classes.callToActionButton)}
        >
          View Guide
        </Link>
        <span>
          or&nbsp;
          <a
            href="/files/2025%20Garden%20Tour%20Map.pdf"
            target="_blank"
            download
          >
            Download
          </a>
        </span>
      </div>
      <h1 className="title">About</h1>
      <p>
        The Ken-Ton Garden Tour is one of the most anticipated events of the
        summer in the Ken-Ton community. It&rsquo;s an annual celebration of
        color that showcases the hard work and dedication of local gardeners. As
        time goes on, the Ken-Ton Garden Tour continues to engender a sense of
        civic pride. <Link href="/about">Read more</Link>.
      </p>
      <Sponsors />
    </div>
  );
};

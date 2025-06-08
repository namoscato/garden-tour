import { SponsorImage } from "./SponsorImage";
import classes from "./Sponsors.module.scss";
import lavocatsImage from "./lavocats.jpg";
import madeForGoodImage from "./made-for-good.jpg";
import policeClubImage from "./police-club.jpg";
import rotaryClubImage from "./rotary-club.jpg";

export const Sponsors = () => {
  return (
    <>
      <h1 className="title">Sponsors</h1>
      <div className={classes.root}>
        <div className={classes.column}>
          <SponsorImage
            src={lavocatsImage}
            alt="Lavocats Family Greenhouse and Nursery"
            href="https://www.lavocatsnursery.com/"
            className={classes.image}
          />
          <SponsorImage
            src={madeForGoodImage}
            alt="Made for Good"
            href="https://www.villageofkenmore.com/made-for-good-shop.html"
            className={classes.image}
          />
        </div>
        <div className={classes.column}>
          <SponsorImage
            src={rotaryClubImage}
            alt="Rotary Club of Kenmore"
            href="https://www.kenmorerotary.org/"
            className={classes.image}
          />
          <SponsorImage
            src={policeClubImage}
            alt="The Town of Tonawanda Police Club"
            href="https://ttpoliceclub.com/"
            className={classes.image}
          />
        </div>
      </div>
    </>
  );
};

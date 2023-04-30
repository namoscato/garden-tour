import "@typeform/embed/build/css/widget.css";
import Content from "components/Content";
import Layout from "components/Layout";

export default function Register() {
  return (
    <Layout title="Rules & Agreement">
      <Content>
        <p>
          The Ken-Ton Garden Tour Committee welcomes your interest and
          participation in this year&rsquo;s Garden Tour by opening your own
          garden to visitors on the specified days and times of the event.
          Participating gardens will be identified on a map with an accompanying
          description in the Ken-Ton Garden Tour booklet, which will be made
          available to the public; personal information will <em>not</em> be
          published. Booklets will be inserted into an edition of the Ken-Ton
          Bee and made available at the Town of Tonawanda Aquatic and Fitness
          Center on the days of the event. In late June, the maps and garden
          descriptions will be available online.
        </p>
        <p>
          Below are some rules you, as a participant, must abide by to in order
          to participate:
        </p>
        <ul>
          <li>
            Agree to welcome visitors to your garden during the set hours and
            days of the event;
          </li>
          <li>
            Agree to display the official Garden Tour sign on your front lawn
            during the set hours and days of the event, and remove the sign
            afterward to indicate to potential visitors that your garden is no
            longer available to view (signs will be distributed in July);
          </li>
          <li>
            You are under no obligation to serve refreshments, but if you choose
            to do so, do not serve alcohol;
          </li>
          <li>
            Confine any pets to areas away from visitors, and be sure your
            property is free of all animal droppings;
          </li>
          <li>
            Be sure that all paths are clear of debris, equipment, toys, etc.
            and safe for visitors. Any known hazards should be identified and
            guarded in some fashion;
          </li>
          <li>
            Please do not allow unknown visitors to enter your home for any
            reason such as to use the restroom. The Town will not be responsible
            for any theft or damage that occurs on or to your property;
          </li>
          <li>
            Keep your property secure during the event and lock all doors to
            your home;
          </li>
          <li>
            Do not leave your garden unattended during the set hours and days of
            the event and always be sure to have someone available to stay at
            your property should you need to leave unexpectedly and wish to
            remain open;
          </li>
          <li>
            Rope off any areas of your property that you do not want visitors to
            walk on;
          </li>
          <li>In the event of an emergency, call 911 immediately.</li>
        </ul>
        <p>
          By checking the box below, you agree to the items set forth above, and
          certify that all information on this application is accurate. You
          further agree to hold the Town of Tonawanda harmless for any claims
          made against it, which arise out of your participation in the Garden
          Tour.
        </p>
      </Content>
    </Layout>
  );
}

import "@typeform/embed/build/css/widget.css";
import Content from "components/Content";
import Layout from "components/Layout";

export default function Register() {
  return (
    <Layout title="Rules & Agreement">
      <Content>
        <p>
          Thank you for your interest and participation in this year’s Ken-Ton
          Garden Tour by agreeing to open your garden to visitors on the
          specified days and times of the event. Participating gardens will be
          identified on a map with an accompanying description, both online and
          in the Ken-Ton Garden Tour guidebook; this information will be made
          available to the public. Personal information (e.g., name, phone
          number, email address, etc.) will not be published. Guidebooks will be
          inserted into the Ken-Ton Bee and made available at the Town of
          Tonawanda Aquatic and Fitness Center on the days of the event.
        </p>
        <p>
          Below are several rules that you, as a participant, must agree to and
          abide by in order to participate:
          <ul>
            <li>
              You agree to welcome visitors to your garden during the set hours
              and days of the event;
            </li>
            <li>
              You agree to display the official Garden Tour sign on your front
              lawn during the set hours and days of the event and remove the
              sign afterward to indicate that you are no longer available
              accepting visitors (signs will be distributed in the beginning of
              July);
            </li>
            <li>
              While you are under no obligation to serve refreshments, you agree
              not to serve alcohol;
            </li>
            <li>
              You agree to confine any pets to areas away from visitors and
              ensure that your property is free of all animal droppings;
            </li>
            <li>
              You agree to clear all paths of debris, equipment, toys, etc. to
              ensure that visitors can safely access your property;
            </li>
            <li>
              You agree to identify and guard against any known hazards on your
              property to avoid injury;
            </li>
            <li>
              You agree to rope off any restricted areas of your property;
            </li>
            <li>
              You agree to appropriately secure your home (e.g., lock all doors
              and windows, etc.) and not allow visitors to enter for any reason,
              including to use your bathroom (the Town of Tonawanda will not be
              responsible for any theft, damage, or injury that occurs on or to
              your property);
            </li>
            <li>
              You agree not to leave your property unattended during the set
              hours and days of the event (should you need to leave for any
              reason, you agree to always have a trusted family member or friend
              on site during the set hours and days of the event);
            </li>
            <li>
              You agree to call 911 in the event of an emergency or suspicious
              activity.
            </li>
          </ul>
        </p>
        <p>
          By checking the box below, you agree to read and abide by the Rules &
          Guidelines Agreement and certify that all information included in this
          application is true and accurate. You further agree to hold the Town
          of Tonawanda harmless for any claims made against it which arise out
          of your participation in the Ken-Ton Garden Tour.
        </p>
      </Content>
    </Layout>
  );
}

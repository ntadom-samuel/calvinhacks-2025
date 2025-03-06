import { PartnerContainer, PartnerImages } from "./PartnersElement";

import girls_who_code from "../../image/Girls_Who_Code.png";
import google_developers_group from "../../image/GDG.png";
// Work

export default function PartnerSection() {
  return (
    <PartnerContainer>
      <h2>PARTNERS</h2>
      <PartnerImages>
        <img src={girls_who_code} alt="girls who code" />
        <img src={google_developers_group} alt="google developers group" />
      </PartnerImages>
    </PartnerContainer>
  );
}

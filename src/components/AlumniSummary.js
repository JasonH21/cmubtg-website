import React from "react";
import Row from "react-bootstrap/Row";
import TeamPhoto from "./TeamPhoto";
import CalvinPhoto from "../images/team/calvin.jpg";
import JennyPhoto from "../images/team/jenny.jpeg";
import KaranPhoto from "../images/alumni/karan.jpg";
import SuePhoto from "../images/alumni/sue.jpg";
import MichellePhoto from "../images/alumni/michelle.jpg";
import EmilyPhoto from "../images/alumni/emily.jpg";
import SpencerPhoto from "../images/alumni/spencer.jpg";
import AshwinPhoto from "../images/alumni/ashwin.jpg";
import AnnettePhoto from "../images/alumni/annette.jpg";
import NicPhoto from "../images/alumni/nic.jpg";

/* 
memberName = member's name
role = current company
imageUrl = ***Photo
description (if appropriate) = academic background, graduation year, former role 
*/

function AlumniSummary() {
  return (
    <React.Fragment>
      <Row id="people">
        <TeamPhoto
          memberName="Calvin Lui"
          role="Microsoft"
          imageUrl={CalvinPhoto}
          description={"BS, Information Systems, 2020, former president."}
          profile="https://www.linkedin.com/in/calvinhklui/"
        ></TeamPhoto>

        <TeamPhoto
          memberName="Jenny Zhu"
          role="Spotify"
          imageUrl={JennyPhoto}
          description={"BS, Information Systems, 2020, former head of curation."}
          profile="https://www.linkedin.com/in/jenny-z-34b65ba7/"
        ></TeamPhoto>

        <TeamPhoto
          memberName="Ashwin Rao"
          role="PayPal"
          imageUrl={AshwinPhoto}
          description={"MS, Product Management, 2020, former product manager."}
          profile="https://www.linkedin.com/in/ashwinraog/"
        ></TeamPhoto>

        <TeamPhoto
          memberName="Karan Bokil"
          role="Microsoft"
          imageUrl={KaranPhoto}
          description={"BS, Information Systems, 2019, former president."}
          profile="https://www.linkedin.com/in/karanbokil/"
        ></TeamPhoto>
      </Row>
      <Row>
        <TeamPhoto
          memberName="Spencer Burleigh"
          role="Rent the Backyard (YC S2019)"
          imageUrl={SpencerPhoto}
          description={"BS, Statistics and Machine Learning, on leave, former vice president of technology."}
          profile="https://www.linkedin.com/in/spencerburleigh/"
        ></TeamPhoto>

        <TeamPhoto
          memberName="Emily Hirao"
          role="Amperity"
          imageUrl={EmilyPhoto}
          description={"BS, Business Administration, 2018, former president."}
          profile="https://www.linkedin.com/in/emilyhirao/"
        ></TeamPhoto>

        <TeamPhoto
          memberName="Michelle Cho"
          role="IBM"
          imageUrl={MichellePhoto}
          description={"BS, Business Administration, 2017, former president."}
          profile="https://www.linkedin.com/in/michelle-wcho/"
        ></TeamPhoto>

        <TeamPhoto
          memberName="Sue Park"
          role="Comcast"
          imageUrl={SuePhoto}
          description={"Former president."}
          profile="https://www.linkedin.com/in/parksusanna/"
        ></TeamPhoto>
      </Row>
      <Row>
         <TeamPhoto
          memberName="Annette Jeffs"
          role="Publicis Sapient"
          imageUrl={AnnettePhoto}
          description={"BS, Business Administration, 2018, former vice president."}
          profile="https://www.linkedin.com/in/annettejeffs/"
        ></TeamPhoto>

        <TeamPhoto
          memberName="Nic Cheung"
          role="Deloitte"
          imageUrl={NicPhoto}
          description={"BS, Business Administration, 2018, former vice president."}
          profile="https://www.linkedin.com/in/nic-cheung-08860986/"
        ></TeamPhoto>
      </Row>
    </React.Fragment>
  );
}

export default AlumniSummary;

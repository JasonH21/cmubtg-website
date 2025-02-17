import React from "react";
import Row from "react-bootstrap/Row";
import TeamPhoto from "./TeamPhoto";
import EricPhoto from "../images/team/eric.jpg";
import WillPhoto from "../images/team/will.jpg";
import MattPhoto from "../images/team/matt.jpg";
import YvonnePhoto from "../images/team/yvonne.jpg";
import EvanPhoto from "../images/team/evan.jpeg";

function TeamSummary() {
  return (
    <React.Fragment>
      <Row id="people">
        <TeamPhoto
          memberName="Eric Cheng"
          role="President"
          imageUrl={EricPhoto}
          description={
            "Eric studies business at Carnegie Mellon. Fun fact: Eric is probably BTG’s best chef. He cooked this very website, too!"
          }
          profile="https://www.linkedin.com/in/eric-cheng986/"
        ></TeamPhoto>

        <TeamPhoto
          memberName="Will Zeng"
          role="Head of Operations"
          imageUrl={WillPhoto}
          description={
            "William is a junior studying Statistics and Machine Learning. He enjoys game theory and games of chance."
          }
          profile="https://www.linkedin.com/in/william-zeng/"
        ></TeamPhoto>

        <TeamPhoto
          memberName="Yvonne Liang"
          role="Head of Finance"
          imageUrl={YvonnePhoto}
          description={
            "Yvonne is a junior studying business. She enjoys hikes and lakes."
          }
          profile="https://www.linkedin.com/in/yvonne-liang-1b9a56190/"
        ></TeamPhoto>

        <TeamPhoto
          memberName="Matthew Guo"
          role="Head of Design"
          imageUrl={MattPhoto}
          description={
            "Matthew studies information systems and human-computer interaction. Having grown up in Sydney and Shanghai, he is always willing to explore more of Pittsburgh."
          }
          profile="https://www.linkedin.com/in/matthew-guo-003781173/"
        ></TeamPhoto>
      </Row>

      <Row>
        <TeamPhoto
          memberName="Evan Feder"
          role="Head of Research"
          imageUrl={EvanPhoto}
          description={
            "'Uhm I'm a black belt in shaolin kung fu. I've played the drums for 9 years. I threw the first pitch at a pirates game. Played semi-professional Magic the Gathering. Made the top CMU meme of the month, March 2019. Sat in a meeting with former Chair of the Federal Reserve Paul Volcker.' Evan is a senior studying information systems, in addition to statistics and machine learning."
          }
          profile="https://www.linkedin.com/in/evanfeder/"
        ></TeamPhoto>
      </Row>
    </React.Fragment>
  );
}

export default TeamSummary;

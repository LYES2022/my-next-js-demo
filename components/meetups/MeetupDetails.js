import { Fragment } from "react";
import classes from "./MeetupDetail.module.css";

const MeetupDetails = (props) => {
  return (
    <main className={classes.main}>
      <img src={props.image} />
      <h2>{props.title}</h2>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </main>
  );
};

export default MeetupDetails;

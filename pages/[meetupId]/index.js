import { Fragment } from "react";
import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";

import { useRouter } from "next/router";
import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetUpDetaill(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetails
        key={props.meetupData.id}
        title={props.meetupData.title}
        image={props.meetupData.image}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://lila_saadoudi:lilasaadoudi00..@cluster0.49rd1at.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://lila_saadoudi:lilasaadoudi00..@cluster0.49rd1at.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  return {
    props: {
      meetupData: {
        id: selectMeetup._id.toHexString(),
        image: selectMeetup.image,
        title: selectMeetup.title,
        address: selectMeetup.address,
        description: selectMeetup.description,
      },
    },
  };
}
export default MeetUpDetaill;

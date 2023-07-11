import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Brouse Huge List Of Highly Active React Meetups "
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://lila_saadoudi:lilasaadoudi00..@cluster0.49rd1at.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        description: meetup.description,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps() {
//   return {
//     props: {
//       meetups: DUUMY_MEETUPS,
//     },
//   };
// }
export default HomePage;

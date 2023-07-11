import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetUp = () => {
  const router = useRouter();
  const addMeetUpHandler = async (meetUpData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetUpData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  };

  return (
    <Fragment>
      <Head>
        <title>Add A New Meetup</title>
        <meta name="description" content="Add New Meetup " />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </Fragment>
  );
};

export default NewMeetUp;

import { MongoClient } from "mongodb";

async function GetAllMeetups(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://lila_saadoudi:lilasaadoudi00..@cluster0.49rd1at.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const result = await meetupsCollection.find().toArray();

  client.close();
}

export default GetAllMeetups;

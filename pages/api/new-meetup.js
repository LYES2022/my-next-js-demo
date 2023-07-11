import { MongoClient } from "mongodb";

async function Handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://lila_saadoudi:lilasaadoudi00..@cluster0.49rd1at.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "meetup inserted!" });
  }
}

export default Handler;

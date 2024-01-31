import dotenv from "dotenv";

dotenv.config();

const mongoUser = process.env.MONGO_USERNAME || "";
const mongoPwd = process.env.MONGO_PASSWORD || "";
const mongoUrl = `mongodb+srv://${mongoUser}:${mongoPwd}@cluster0.8tchvpr.mongodb.net/`;
const serverPort = process.env.SERVER_PORT;

export const config = {
  mongo: {
    username: mongoUser,
    password: mongoPwd,
    url: mongoUrl,
  },
  server: {
    port: serverPort,
  },
};

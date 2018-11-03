import mongoose from 'mongoose';
import MongoMemoryServer from 'mongodb-memory-server';
import supertest from 'supertest';

let MongoServer;

export default (server) => {
  supertest(server);
};

export const startDB = async () => {
  MongoServer = new MongoMemoryServer();
  const mongoUri = await MongoServer.getConnectionString();
  await mongoose.connect(mongoUri, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

export const stopDB = () => {
  mongoose.disconnect();
  MongoServer.stop();
};
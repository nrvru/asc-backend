import mongoose from 'mongoose';
import Bluebird from 'bluebird';
import config from './config';

mongoose.Promise = Bluebird;

const db = mongoose.createConnection(config.mongodb.uri, {
  promiseLibrary: Bluebird,
});

export default db;

import mongoose from 'mongoose';
import db from '../db';

const Schema = mongoose.Schema;

const athleteSchema = new Schema({
  surname: String,
  name: String,
  patronymic: String,
  dob: Date,
  gender: Boolean,
});

const Athlete = db.model('Athlete', athleteSchema);

export default Athlete;


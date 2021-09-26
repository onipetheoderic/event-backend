import mongoose from "mongoose";
import { nanoid } from "nanoid";

export interface EventDocument extends mongoose.Document {
  name: string;
  location: string;
  date: string;
  expectedWeather: string;
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema = new mongoose.Schema(
  {
    eventId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(10),
    },
    name: { type: String, default: true },
    location: { type: String, default: true },
    expectedWeather: { type: String, default: true },
    date: { type: Date, default: true },
  },
  { timestamps: true, versionKey: false }
);

const Event = mongoose.model<EventDocument>("Event", EventSchema);

export default Event;

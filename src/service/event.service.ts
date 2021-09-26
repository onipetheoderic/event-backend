import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";
import Event, { EventDocument } from "../model/event.model";

export function createEvent(input: DocumentDefinition<EventDocument>) {
  return Event.create(input);
}

export function findEvent(
  query: FilterQuery<EventDocument>,
  options: QueryOptions = { lean: true }
) {
  return Event.findOne(query, {}, options);
}

export function getEvents() {
  return Event.find({}).select("-__v");
}

export function findAndUpdate(
  query: FilterQuery<EventDocument>,
  update: UpdateQuery<EventDocument>,
  options: QueryOptions
) {
  console.log(query, "the query", update, "the update");
  return Event.findOneAndUpdate(query, update, options);
}

export function deleteEvent(query: FilterQuery<EventDocument>) {
  return Event.deleteOne(query);
}

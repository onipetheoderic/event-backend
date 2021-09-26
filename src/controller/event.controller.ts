import { Request, Response } from "express";
import { get } from "lodash";
import {
  createEvent,
  findEvent,
  findAndUpdate,
  deleteEvent,
  getEvents,
} from "../service/event.service";

export async function createEventHandler(req: Request, res: Response) {
  const body = req.body;
  const event = await createEvent({ ...body });
  return res.send(event);
}

export async function updateEventHandler(req: Request, res: Response) {
  const eventId = get(req, "params.eventId");
  const update = req.body;

  const event = await findEvent({ eventId });
  if (!event) {
    return res.sendStatus(404);
  }
  const updatedEvent = await findAndUpdate({ eventId }, update, { new: true });
  return res.send(updatedEvent);
}

export async function getEventHandler(req: Request, res: Response) {
  const eventId = get(req, "params.eventId");
  const event = await findEvent({ eventId });

  if (!event) {
    return res.sendStatus(404);
  }
  return res.send(event);
}

export async function getAllEventHandler(req: Request, res: Response) {
  const events = await getEvents();
  return res.send(events);
}

export async function deleteEventHandler(req: Request, res: Response) {
  const eventId = get(req, "params.eventId");

  const event = await findEvent({ eventId });

  if (!event) {
    return res.sendStatus(404);
  }
  await deleteEvent({ eventId });
  return res.status(200).json({ message: "delete successfully" });
}

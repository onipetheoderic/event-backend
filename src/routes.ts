import { Express, Request, Response } from "express";
import {
  createEventHandler,
  updateEventHandler,
  getEventHandler,
  deleteEventHandler,
  getAllEventHandler,
} from "./controller/event.controller";

import { validateRequest } from "./middleware";

import {
  createEventSchema,
  updateEventSchema,
  deleteEventSchema,
} from "./schema/event.schema";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.get("/api/events", getAllEventHandler);

  // Create a event
  app.post(
    "/api/events",
    [validateRequest(createEventSchema)],
    createEventHandler
  );

  // Update a event
  app.put(
    "/api/events/:eventId",
    [validateRequest(updateEventSchema)],
    updateEventHandler
  );

  // Get a event
  app.get("/api/events/:eventId", getEventHandler);

  // Delete a event
  app.delete(
    "/api/events/:eventId",
    [validateRequest(deleteEventSchema)],
    deleteEventHandler
  );
}

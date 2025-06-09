import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { location } from "./location";

export const locationLog = sqliteTable("locationLog", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  slug: text().notNull(),
  lat: real().notNull(),
  long: real().notNull(),
  startedAt: int().notNull(),
  endedAt: int().notNull(),
  locationId: int().notNull().references(() => location.id),
  description: text(),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});

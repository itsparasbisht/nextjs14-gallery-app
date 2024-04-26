import { sql } from "drizzle-orm";
import {
  serial,
  timestamp,
  pgTable,
  varchar,
  index,
} from "drizzle-orm/pg-core";

export const images = pgTable(
  "image",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    url: varchar("url", { length: 1024 }).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at"),
  },
  (table) => ({
    nameIndex: index("name_idx").on(table.name),
  })
);

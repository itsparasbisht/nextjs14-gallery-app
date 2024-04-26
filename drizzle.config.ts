import type { Config } from "drizzle-kit";
import "dotenv/config";

console.log(process.env.POSTGRES_URL);

export default {
  schema: "./server/db/schema.ts",
  out: "./server/db/drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL as string,
  },
  verbose: true,
  strict: true,
} satisfies Config;

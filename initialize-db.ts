99123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384import { db } from "./db";import { users, projects, sessions } from "@shared/schema";import { scrypt, randomBytes } from "crypto";import { promisify } from "util";import { sql, eq } from "drizzle-orm";const scryptAsync = promisify(scrypt);async function hashPassword(password: string): Promise<string> {  const salt = randomBytes(16).toString("hex");  const buf = (await scryptAsync(password, salt, 64)) as Buffer;  return `${buf.toString("hex")}.${salt}`;}export async function initializeDatabase() {  try {    console.log("Initializing database...");        // First, try to create tables using Drizzle sql template literals    await db.execute(sql`      CREATE TABLE IF NOT EXISTS "sessions" (        "sid" varchar PRIMARY KEY,        "sess" jsonb NOT NULL,        "expire" timestamp NOT NULL      );            CREATE INDEX IF NOT EXISTS "IDX_session_expire" ON "sessions" ("expire");            CREATE TABLE IF NOT EXISTS "users" (        "id" varchar PRIMARY KEY DEFAULT gen_random_uuid(),        "name" text NOT NULL,        "email" text NOT NULL UNIQUE,        "password" text NOT NULL,        "created_at" timestamp DEFAULT now() NOT NULL,        "updated_at" timestamp DEFAULT now() NOT NULL      );            CREATE TABLE IF NOT EXISTS "projects" (        "id" varchar PRIMARY KEY DEFAULT gen_random_uuid(),        "title" text NOT NULL,        "user_id" varchar NOT NULL,        "stack_preference" text[] DEFAULT '{}' NOT NULL,        "context" jsonb NOT NULL,        "artifacts" jsonb,        "created_at" timestamp DEFAULT now() NOT NULL,        "updated_at" timestamp DEFAULT now() NOT NULL,        FOREIGN KEY ("user_id") REFERENCES "users"("id")      );            CREATE TABLE IF NOT EXISTS "project_versions" (        "id" varchar PRIMARY KEY DEFAULT gen_random_uuid(),        "project_id" varchar NOT NULL,        "version_note" text,        "context" jsonb NOT NULL,        "artifacts" jsonb,        "created_at" timestamp DEFAULT now() NOT NULL,        FOREIGN KEY ("project_id") REFERENCES "projects"("id")      );    `);    // Check if test user exists, if not create it    const existingUser = await db.select().from(users).where(eq(users.email, 'test@email.com'));        if (existingUser.length === 0) {      console.log("Creating test user...");      const hashedPassword = await hashPassword("test123");            await db.insert(users).values({        name: "Test User",        email: "test@email.com",        password: hashedPassword,      });            console.log("Test user created: test@email.com / test123");    } else {      console.log("Test user already exists");    }    console.log("Database initialized successfully!");  } catch (error) {    console.error("Database initialization error:", error);    // Don't throw, just log the error so the server can still start  }} Project Planner Prompt Library
"✓ Timeout reached, proceeding to analysis even though Greptile status unavailable"
[Status] Greptile status check failed (current progress: 0): Cannot GET ...[Status] Incrementing progress from 0 to 10[Status] Greptile status check failed (current progress: 10): Cannot GET ...[Status] Incrementing progress from 10 to 20...[Status] Greptile status check failed (current progress: 40): Cannot GET ...[Status] ✓ Timeout reached, proceeding to analysis even though Greptile status unavailable
[Status] Greptile status check failed (current progress: 0): Cannot GET ...[Status] Incrementing progress from 0 to 10[Status] Greptile status check failed (current progress: 10): Cannot GET ...[Status] Incrementing progress from 10 to 20...[Status] Greptile status check failed (current progress: 40): Cannot GET ...[Status] ✓ Timeout reached, proceeding to analysis even though Greptile status unavailable
Poll 1: status="indexing" → increment progressPoll 2-4: status="indexing" → keep incrementingPoll 5: progress >= 40 → set status="analyzing" → run queries (60-90s)Poll 6-10: status="analyzing" → return immediately with "Analysis in progress..."Poll 11: queries finish → set status="completed" → return resultsPoll 12+: status="completed" → return cached results immediately
Poll 1: status="indexing" → increment progressPoll 2-4: status="indexing" → keep incrementingPoll 5: progress >= 40 → set status="analyzing" → run queries (60-90s)Poll 6-10: status="analyzing" → return immediately with "Analysis in progress..."Poll 11: queries finish → set status="completed" → return resultsPoll 12+: status="completed" → return cached results immediately
Make, test, iterate… Project Planner Prompt Library
Make, test, iterate… Project Planner Prompt Library
Files
See all usage
Claim your free domain up to $13
Search for a domain
Workflows
Ask Agent…
Ask Agent…
5m • 5 minutes ago
Secrets are accessible to anyone who has access to this App. To restrict secret access, you must update App invite permissions. For more information, visit our documentation.
Secrets are accessible to anyone who has access to this App. To restrict secret access, you must update App invite permissions. For more information, visit our documentation.
Configurations are similar to secrets, but should only be used for non-sensitive information. They're useful for having a variable that's different between your published app and when testing on Replit.
99123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384
import { db } from "./db";import { users, projects, sessions } from "@shared/schema";import { scrypt, randomBytes } from "crypto";import { promisify } from "util";import { sql, eq } from "drizzle-orm";const scryptAsync = promisify(scrypt);async function hashPassword(password: string): Promise<string> {  const salt = randomBytes(16).toString("hex");  const buf = (await scryptAsync(password, salt, 64)) as Buffer;  return `${buf.toString("hex")}.${salt}`;}export async function initializeDatabase() {  try {    console.log("Initializing database...");        // First, try to create tables using Drizzle sql template literals    await db.execute(sql`      CREATE TABLE IF NOT EXISTS "sessions" (        "sid" varchar PRIMARY KEY,        "sess" jsonb NOT NULL,        "expire" timestamp NOT NULL      );            CREATE INDEX IF NOT EXISTS "IDX_session_expire" ON "sessions" ("expire");            CREATE TABLE IF NOT EXISTS "users" (        "id" varchar PRIMARY KEY DEFAULT gen_random_uuid(),        "name" text NOT NULL,        "email" text NOT NULL UNIQUE,        "password" text NOT NULL,        "created_at" timestamp DEFAULT now() NOT NULL,        "updated_at" timestamp DEFAULT now() NOT NULL      );            CREATE TABLE IF NOT EXISTS "projects" (        "id" varchar PRIMARY KEY DEFAULT gen_random_uuid(),        "title" text NOT NULL,        "user_id" varchar NOT NULL,        "stack_preference" text[] DEFAULT '{}' NOT NULL,        "context" jsonb NOT NULL,        "artifacts" jsonb,        "created_at" timestamp DEFAULT now() NOT NULL,        "updated_at" timestamp DEFAULT now() NOT NULL,        FOREIGN KEY ("user_id") REFERENCES "users"("id")      );            CREATE TABLE IF NOT EXISTS "project_versions" (        "id" varchar PRIMARY KEY DEFAULT gen_random_uuid(),        "project_id" varchar NOT NULL,        "version_note" text,        "context" jsonb NOT NULL,        "artifacts" jsonb,        "created_at" timestamp DEFAULT now() NOT NULL,        FOREIGN KEY ("project_id") REFERENCES "projects"("id")      );    `);    // Check if test user exists, if not create it    const existingUser = await db.select().from(users).where(eq(users.email, 'test@email.com'));        if (existingUser.length === 0) {      console.log("Creating test user...");      const hashedPassword = await hashPassword("test123");            await db.insert(users).values({        name: "Test User",        email: "test@email.com",        password: hashedPassword,      });            console.log("Test user created: test@email.com / test123");    } else {      console.log("Test user already exists");    }    console.log("Database initialized successfully!");  } catch (error) {    console.error("Database initialization error:", error);    // Don't throw, just log the error so the server can still start  }}
import { db } from "./db";
import { users, projects, sessions } from "@shared/schema";
import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";
import { sql, eq } from "drizzle-orm";

const scryptAsync = promisify(scrypt);

async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString("hex");
  const buf = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${buf.toString("hex")}.${salt}`;
}

export async function initializeDatabase() {
  try {
    console.log("Initializing database...");
    
    // First, try to create tables using Drizzle sql template literals
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS "sessions" (
        "sid" varchar PRIMARY KEY,
        "sess" jsonb NOT NULL,
        "expire" timestamp NOT NULL
      );
      
      CREATE INDEX IF NOT EXISTS "IDX_session_expire" ON "sessions" ("expire");
      
      CREATE TABLE IF NOT EXISTS "users" (
        "id" varchar PRIMARY KEY DEFAULT gen_random_uuid(),
        "name" text NOT NULL,
        "email" text NOT NULL UNIQUE,
        "password" text NOT NULL,
        "created_at" timestamp DEFAULT now() NOT NULL,
        "updated_at" timestamp DEFAULT now() NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS "projects" (
        "id" varchar PRIMARY KEY DEFAULT gen_random_uuid(),
        "title" text NOT NULL,
        "user_id" varchar NOT NULL,
        "stack_preference" text[] DEFAULT '{}' NOT NULL,
        "context" jsonb NOT NULL,
        "artifacts" jsonb,
        "created_at" timestamp DEFAULT now() NOT NULL,
        "updated_at" timestamp DEFAULT now() NOT NULL,
        FOREIGN KEY ("user_id") REFERENCES "users"("id")
      );
      
      CREATE TABLE IF NOT EXISTS "project_versions" (
        "id" varchar PRIMARY KEY DEFAULT gen_random_uuid(),
        "project_id" varchar NOT NULL,
        "version_note" text,
        "context" jsonb NOT NULL,
        "artifacts" jsonb,
        "created_at" timestamp DEFAULT now() NOT NULL,
        FOREIGN KEY ("project_id") REFERENCES "projects"("id")
      );
    `);

    // Check if test user exists, if not create it
    const existingUser = await db.select().from(users).where(eq(users.email, 'test@email.com'));
    
    if (existingUser.length === 0) {
      console.log("Creating test user...");
      const hashedPassword = await hashPassword("test123");
      
      await db.insert(users).values({
        name: "Test User",
        email: "test@email.com",
        password: hashedPassword,
      });
      
      console.log("Test user created: test@email.com / test123");
    } else {
      console.log("Test user already exists");
    }

    console.log("Database initialized successfully!");
  } catch (error) {
    console.error("Database initialization error:", error);
    // Don't throw, just log the error so the server can still start
  }
}


Spaces: 2
Checkpoint made
Fix error in code analysis status retrieval and processing
Worked for 1 minute
Checkpoint made
•
Free
•
Published your App
Checkpoint made
Add more robust error handling for fetching project analysis data
Worked for 55 seconds
Checkpoint made
•
Free
•
Published your App
Checkpoint made
Improve error logging for status endpoint to catch detailed error information
Worked for 1 minute
Checkpoint made
Improve authentication middleware with detailed logging and error handling
Worked for 40 seconds
Checkpoint made
•
Free
•
Published your App
Checkpoint made
Fix errors that prevent code analysis from completing
Worked for 1 minute
Checkpoint made
•
Free
•
Published your App
Checkpoint made
Improve status checking to prevent infinite indexing loops
Worked for 57 seconds
Open file
[Status] Greptile status check failed (current progress: 0): Cannot GET ...
[Status] Incrementing progress from 0 to 10
[Status] Greptile status check failed (current progress: 10): Cannot GET ...
[Status] Incrementing progress from 10 to 20
...
[Status] Greptile status check failed (current progress: 40): Cannot GET ...
[Status] ✓ Timeout reached, proceeding to analysis even though Greptile status unavailable
Rolled back to 'Improve status updates and error handling during project analysis'
View original chat
Checkpoint made
•
Free
•
Published your App
Checkpoint made
Improve project analysis by addressing status endpoint performance and errors
Worked for 14 seconds
Open file
Poll 1: status="indexing" → increment progress
Poll 2-4: status="indexing" → keep incrementing
Poll 5: progress >= 40 → set status="analyzing" → run queries (60-90s)
Poll 6-10: status="analyzing" → return immediately with "Analysis in progress..."
Poll 11: queries finish → set status="completed" → return results
Poll 12+: status="completed" → return cached results immediately
Checkpoint made
Improve status check to avoid re-running analysis queries
Worked for 1 minute
Checkpoint made
•
Free
•
Published your App
Scroll to latest
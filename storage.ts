999123456789101112131415161718192021222324252627282930313233343536373839import { type User, type InsertUser, type UpsertUser, type Project, type InsertProject, type ProjectVersion, type InsertProjectVersion, type Template, type InsertTemplate, type Prompt, type InsertPrompt, type TaskGroup, type InsertTaskGroup, type Task, type InsertTask, type Favorite, type InsertFavorite, type PromptHistory, type InsertPromptHistory, type ConstitutionRule, type InsertConstitutionRule, type GithubToken, type InsertGithubToken, type ConversationHistory, type InsertConversationHistory, type CodeAnalysis, type InsertCodeAnalysis, type Context, users, projects, projectVersions, templates, prompts, taskGroups, tasks, favorites, promptHistory, constitutionRules, githubTokens, conversationHistory, codeAnalyses } from "@shared/schema";import { randomUUID } from "crypto";import { db } from "./db";import { eq, count, sql } from "drizzle-orm";import connectPg from "connect-pg-simple";import session from "express-session";import createMemoryStore from "memorystore";import { PersistentFileStorage } from "./persistent-storage";import { templateData } from "./data/templates";import { promptsData } from "./data/prompts";export interface IStorage {  // User operations  getUser(id: string): Promise<User | undefined>;  getUserByEmail(email: string): Promise<User | undefined>;  createUser(user: InsertUser): Promise<User>;  upsertUser(user: UpsertUser): Promise<User>;  // Project operations  getProject(id: string, userId?: string, sessionId?: string): Promise<Project | undefined>;  getProjectsByUserId(userId: string): Promise<Project[]>;  getProjectsBySessionId(sessionId: string): Promise<Project[]>;  getAllProjects(): Promise<Project[]>;  createProject(project: InsertProject): Promise<Project>;  updateProject(id: string, updates: Partial<Project>, userId?: string, sessionId?: string): Promise<Project>;  deleteProject(id: string, userId?: string, sessionId?: string): Promise<void>;  // Version operations  getProjectVersions(projectId: string): Promise<ProjectVersion[]>;  createProjectVersion(version: InsertProjectVersion): Promise<ProjectVersion>;  // Template operations  getAllTemplates(): Promise<Template[]>;  getTemplatesByCategory(category: string): Promise<Template[]>;  getTemplate(id: string): Promise<Template | undefined>;  createTemplate(template: InsertTemplate): Promise<Template>;  // Prompt operations  getAllPrompts(options?: { category?: string; platform?: string; tier?: string; minQuality?: number }): Promise<Prompt[]>; Project Planner Prompt Library
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
999123456789101112131415161718192021222324252627282930313233343536373839
import { type User, type InsertUser, type UpsertUser, type Project, type InsertProject, type ProjectVersion, type InsertProjectVersion, type Template, type InsertTemplate, type Prompt, type InsertPrompt, type TaskGroup, type InsertTaskGroup, type Task, type InsertTask, type Favorite, type InsertFavorite, type PromptHistory, type InsertPromptHistory, type ConstitutionRule, type InsertConstitutionRule, type GithubToken, type InsertGithubToken, type ConversationHistory, type InsertConversationHistory, type CodeAnalysis, type InsertCodeAnalysis, type Context, users, projects, projectVersions, templates, prompts, taskGroups, tasks, favorites, promptHistory, constitutionRules, githubTokens, conversationHistory, codeAnalyses } from "@shared/schema";import { randomUUID } from "crypto";import { db } from "./db";import { eq, count, sql } from "drizzle-orm";import connectPg from "connect-pg-simple";import session from "express-session";import createMemoryStore from "memorystore";import { PersistentFileStorage } from "./persistent-storage";import { templateData } from "./data/templates";import { promptsData } from "./data/prompts";export interface IStorage {  // User operations  getUser(id: string): Promise<User | undefined>;  getUserByEmail(email: string): Promise<User | undefined>;  createUser(user: InsertUser): Promise<User>;  upsertUser(user: UpsertUser): Promise<User>;  // Project operations  getProject(id: string, userId?: string, sessionId?: string): Promise<Project | undefined>;  getProjectsByUserId(userId: string): Promise<Project[]>;  getProjectsBySessionId(sessionId: string): Promise<Project[]>;  getAllProjects(): Promise<Project[]>;  createProject(project: InsertProject): Promise<Project>;  updateProject(id: string, updates: Partial<Project>, userId?: string, sessionId?: string): Promise<Project>;  deleteProject(id: string, userId?: string, sessionId?: string): Promise<void>;  // Version operations  getProjectVersions(projectId: string): Promise<ProjectVersion[]>;  createProjectVersion(version: InsertProjectVersion): Promise<ProjectVersion>;  // Template operations  getAllTemplates(): Promise<Template[]>;  getTemplatesByCategory(category: string): Promise<Template[]>;  getTemplate(id: string): Promise<Template | undefined>;  createTemplate(template: InsertTemplate): Promise<Template>;  // Prompt operations  getAllPrompts(options?: { category?: string; platform?: string; tier?: string; minQuality?: number }): Promise<Prompt[]>;
import { type User, type InsertUser, type UpsertUser, type Project, type InsertProject, type ProjectVersion, type InsertProjectVersion, type Template, type InsertTemplate, type Prompt, type InsertPrompt, type TaskGroup, type InsertTaskGroup, type Task, type InsertTask, type Favorite, type InsertFavorite, type PromptHistory, type InsertPromptHistory, type ConstitutionRule, type InsertConstitutionRule, type GithubToken, type InsertGithubToken, type ConversationHistory, type InsertConversationHistory, type CodeAnalysis, type InsertCodeAnalysis, type Context, users, projects, projectVersions, templates, prompts, taskGroups, tasks, favorites, promptHistory, constitutionRules, githubTokens, conversationHistory, codeAnalyses } from "@shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db";
import { eq, count, sql } from "drizzle-orm";
import connectPg from "connect-pg-simple";
import session from "express-session";
import createMemoryStore from "memorystore";
import { PersistentFileStorage } from "./persistent-storage";
import { templateData } from "./data/templates";
import { promptsData } from "./data/prompts";

export interface IStorage {
  // User operations
  getUser(id: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  upsertUser(user: UpsertUser): Promise<User>;

  // Project operations
  getProject(id: string, userId?: string, sessionId?: string): Promise<Project | undefined>;
  getProjectsByUserId(userId: string): Promise<Project[]>;
  getProjectsBySessionId(sessionId: string): Promise<Project[]>;
  getAllProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: string, updates: Partial<Project>, userId?: string, sessionId?: string): Promise<Project>;
  deleteProject(id: string, userId?: string, sessionId?: string): Promise<void>;

  // Version operations
  getProjectVersions(projectId: string): Promise<ProjectVersion[]>;
  createProjectVersion(version: InsertProjectVersion): Promise<ProjectVersion>;

  // Template operations
  getAllTemplates(): Promise<Template[]>;
  getTemplatesByCategory(category: string): Promise<Template[]>;
  getTemplate(id: string): Promise<Template | undefined>;
  createTemplate(template: InsertTemplate): Promise<Template>;

  // Prompt operations
  getAllPrompts(options?: { category?: string; platform?: string; tier?: string; minQuality?: number }): Promise<Prompt[]>;


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
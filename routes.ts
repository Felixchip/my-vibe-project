9999123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051import type { Express, RequestHandler } from "express";import { createServer, type Server } from "http";import session from "express-session";import passport from "passport";import Stripe from "stripe";import { randomUUID } from "crypto";import { storage } from "./storage";import { PersistentFileStorage } from "./persistent-storage";import { setupGoogleAuth } from "./googleAuth";import { generateAllArtifacts, calculateCompletionPercentage, analyzeAndCreateProject } from "./services/generator";import { generateReplitZip, generatePromptPack, generateMarkdownReport, generateModularDocumentExport } from "./services/exporter";import { compileContext } from "./services/compiler";import { getAISuggestions } from "./services/vibe-ai";import { openai } from "./services/openai";import { PromptPDFGenerator } from "./services/pdf-generator";import { jwtService } from "./services/jwt";import { ExtensionAuthService } from "./services/extension-auth";import { reviewCodeWithGreptile, startGreptileIndexing, getGreptileIndexingStatus, runSecurityAudit, runArchitectureMapping, runDocumentationGeneration, type AnalysisResults } from "./services/greptile";import { createShadowRepository, deleteShadowRepository } from "./services/github-shadow";import { insertProjectSchema, contextSchema, type Context, type InsertCodeAnalysis } from "@shared/schema";// Initialize Stripelet stripe: Stripe | null = null;if (process.env.STRIPE_SECRET_KEY) {  stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {    apiVersion: "2025-10-29.clover",  });}// Authentication middlewareconst isAuthenticated: RequestHandler = (req, res, next) => {  if (req.isAuthenticated()) {    return next();  }  res.status(401).json({ message: "Unauthorized" });};// Authentication middleware that accepts BOTH session cookies AND JWT bearer tokensconst authenticateSessionOrJWT: RequestHandler = (req, res, next) => {  try {    // First try session authentication (cookies)    if (req.isAuthenticated()) {      console.log("[Auth] Session authenticated");      return next();    }    // Then try JWT bearer token authentication    const authHeader = req.get('authorization');    if (!authHeader) {      console.log("[Auth] No auth header provided");      return res.status(401).json({ message: "Missing or invalid authorization header" }); Project Planner Prompt Library
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
9999123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051
import type { Express, RequestHandler } from "express";import { createServer, type Server } from "http";import session from "express-session";import passport from "passport";import Stripe from "stripe";import { randomUUID } from "crypto";import { storage } from "./storage";import { PersistentFileStorage } from "./persistent-storage";import { setupGoogleAuth } from "./googleAuth";import { generateAllArtifacts, calculateCompletionPercentage, analyzeAndCreateProject } from "./services/generator";import { generateReplitZip, generatePromptPack, generateMarkdownReport, generateModularDocumentExport } from "./services/exporter";import { compileContext } from "./services/compiler";import { getAISuggestions } from "./services/vibe-ai";import { openai } from "./services/openai";import { PromptPDFGenerator } from "./services/pdf-generator";import { jwtService } from "./services/jwt";import { ExtensionAuthService } from "./services/extension-auth";import { reviewCodeWithGreptile, startGreptileIndexing, getGreptileIndexingStatus, runSecurityAudit, runArchitectureMapping, runDocumentationGeneration, type AnalysisResults } from "./services/greptile";import { createShadowRepository, deleteShadowRepository } from "./services/github-shadow";import { insertProjectSchema, contextSchema, type Context, type InsertCodeAnalysis } from "@shared/schema";// Initialize Stripelet stripe: Stripe | null = null;if (process.env.STRIPE_SECRET_KEY) {  stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {    apiVersion: "2025-10-29.clover",  });}// Authentication middlewareconst isAuthenticated: RequestHandler = (req, res, next) => {  if (req.isAuthenticated()) {    return next();  }  res.status(401).json({ message: "Unauthorized" });};// Authentication middleware that accepts BOTH session cookies AND JWT bearer tokensconst authenticateSessionOrJWT: RequestHandler = (req, res, next) => {  try {    // First try session authentication (cookies)    if (req.isAuthenticated()) {      console.log("[Auth] Session authenticated");      return next();    }    // Then try JWT bearer token authentication    const authHeader = req.get('authorization');    if (!authHeader) {      console.log("[Auth] No auth header provided");      return res.status(401).json({ message: "Missing or invalid authorization header" });
import type { Express, RequestHandler } from "express";
import { createServer, type Server } from "http";
import session from "express-session";
import passport from "passport";
import Stripe from "stripe";
import { randomUUID } from "crypto";
import { storage } from "./storage";
import { PersistentFileStorage } from "./persistent-storage";
import { setupGoogleAuth } from "./googleAuth";
import { generateAllArtifacts, calculateCompletionPercentage, analyzeAndCreateProject } from "./services/generator";
import { generateReplitZip, generatePromptPack, generateMarkdownReport, generateModularDocumentExport } from "./services/exporter";
import { compileContext } from "./services/compiler";
import { getAISuggestions } from "./services/vibe-ai";
import { openai } from "./services/openai";
import { PromptPDFGenerator } from "./services/pdf-generator";
import { jwtService } from "./services/jwt";
import { ExtensionAuthService } from "./services/extension-auth";
import { reviewCodeWithGreptile, startGreptileIndexing, getGreptileIndexingStatus, runSecurityAudit, runArchitectureMapping, runDocumentationGeneration, type AnalysisResults } from "./services/greptile";
import { createShadowRepository, deleteShadowRepository } from "./services/github-shadow";
import { insertProjectSchema, contextSchema, type Context, type InsertCodeAnalysis } from "@shared/schema";

// Initialize Stripe
let stripe: Stripe | null = null;
if (process.env.STRIPE_SECRET_KEY) {
  stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-10-29.clover",
  });
}

// Authentication middleware
const isAuthenticated: RequestHandler = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Unauthorized" });
};

// Authentication middleware that accepts BOTH session cookies AND JWT bearer tokens
const authenticateSessionOrJWT: RequestHandler = (req, res, next) => {
  try {
    // First try session authentication (cookies)
    if (req.isAuthenticated()) {
      console.log("[Auth] Session authenticated");
      return next();
    }

    // Then try JWT bearer token authentication
    const authHeader = req.get('authorization');
    if (!authHeader) {
      console.log("[Auth] No auth header provided");
      return res.status(401).json({ message: "Missing or invalid authorization header" });


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
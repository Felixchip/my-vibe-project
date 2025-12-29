999123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899100101102103104105106107108109110111112113114import passport from "passport";import { Strategy as GoogleStrategy } from "passport-google-oauth20";import type { Express } from "express";import { storage } from "./storage";export function setupGoogleAuth(app: Express) {  if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {    throw new Error("GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET must be set");  }  // Use custom domain for OAuth callback  const callbackURL = "https://vibekit.cc/auth/google/callback";  console.log(`✓ Setting up Google OAuth with callback: ${callbackURL}`);  // Configure Google OAuth Strategy  passport.use(    new GoogleStrategy(      {        clientID: process.env.GOOGLE_CLIENT_ID,        clientSecret: process.env.GOOGLE_CLIENT_SECRET,        callbackURL,        scope: ["profile", "email"],      },      async (accessToken, refreshToken, profile, done) => {        try {          console.log('Google OAuth callback triggered for user:', profile.id);          console.log('User email:', profile.emails?.[0]?.value);          console.log('User name:', profile.name?.givenName, profile.name?.familyName);                    // Upsert user in database          const user = await storage.upsertUser({            id: profile.id,            email: profile.emails?.[0]?.value ?? null,            firstName: profile.name?.givenName ?? null,            lastName: profile.name?.familyName ?? null,            profileImageUrl: profile.photos?.[0]?.value ?? null,          });          console.log('User successfully upserted:', user.id, user.email);          done(null, user);        } catch (error) {          console.error('Error upserting user in Google OAuth callback:', error);          done(error as Error);        }      }    )  );  // Serialize user to session  passport.serializeUser((user: any, done) => {    done(null, user.id);  });  // Deserialize user from session  passport.deserializeUser(async (id: string, done) => {    try {      const user = await storage.getUser(id);      done(null, user);    } catch (error) {      done(error);    }  });  // Google OAuth routes  app.get(    "/auth/google",    (req, res, next) => {      console.log('Initiating Google OAuth flow...');            // Store the return URL from query parameter      if (req.query.returnTo && typeof req.query.returnTo === 'string') {        (req.session as any).returnTo = req.query.returnTo;      }            passport.authenticate("google", {        scope: ["profile", "email"],        accessType: 'offline',        prompt: 'consent'      })(req, res, next);    }  );  app.get(    "/auth/google/callback",    (req, res, next) => {      console.log('Google OAuth callback received');      console.log('Query params:', req.query);            passport.authenticate("google", {        failureRedirect: "/?error=auth_failed",        failureMessage: true      })(req, res, next);    },    (req, res) => {      console.log('Google OAuth authentication successful');            // Redirect to stored returnTo URL or home      const returnTo = (req.session as any).returnTo || "/";      delete (req.session as any).returnTo; // Clean up            res.redirect(returnTo);    }  );  app.get("/api/logout", (req, res) => {    req.logout(() => {      res.redirect("/");    });  });  console.log("✓ Google OAuth authentication configured");} Project Planner Prompt Library
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
999123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899100101102103104105106107108109110111112113114
import passport from "passport";import { Strategy as GoogleStrategy } from "passport-google-oauth20";import type { Express } from "express";import { storage } from "./storage";export function setupGoogleAuth(app: Express) {  if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {    throw new Error("GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET must be set");  }  // Use custom domain for OAuth callback  const callbackURL = "https://vibekit.cc/auth/google/callback";  console.log(`✓ Setting up Google OAuth with callback: ${callbackURL}`);  // Configure Google OAuth Strategy  passport.use(    new GoogleStrategy(      {        clientID: process.env.GOOGLE_CLIENT_ID,        clientSecret: process.env.GOOGLE_CLIENT_SECRET,        callbackURL,        scope: ["profile", "email"],      },      async (accessToken, refreshToken, profile, done) => {        try {          console.log('Google OAuth callback triggered for user:', profile.id);          console.log('User email:', profile.emails?.[0]?.value);          console.log('User name:', profile.name?.givenName, profile.name?.familyName);                    // Upsert user in database          const user = await storage.upsertUser({            id: profile.id,            email: profile.emails?.[0]?.value ?? null,            firstName: profile.name?.givenName ?? null,            lastName: profile.name?.familyName ?? null,            profileImageUrl: profile.photos?.[0]?.value ?? null,          });          console.log('User successfully upserted:', user.id, user.email);          done(null, user);        } catch (error) {          console.error('Error upserting user in Google OAuth callback:', error);          done(error as Error);        }      }    )  );  // Serialize user to session  passport.serializeUser((user: any, done) => {    done(null, user.id);  });  // Deserialize user from session  passport.deserializeUser(async (id: string, done) => {    try {      const user = await storage.getUser(id);      done(null, user);    } catch (error) {      done(error);    }  });  // Google OAuth routes  app.get(    "/auth/google",    (req, res, next) => {      console.log('Initiating Google OAuth flow...');            // Store the return URL from query parameter      if (req.query.returnTo && typeof req.query.returnTo === 'string') {        (req.session as any).returnTo = req.query.returnTo;      }            passport.authenticate("google", {        scope: ["profile", "email"],        accessType: 'offline',        prompt: 'consent'      })(req, res, next);    }  );  app.get(    "/auth/google/callback",    (req, res, next) => {      console.log('Google OAuth callback received');      console.log('Query params:', req.query);            passport.authenticate("google", {        failureRedirect: "/?error=auth_failed",        failureMessage: true      })(req, res, next);    },    (req, res) => {      console.log('Google OAuth authentication successful');            // Redirect to stored returnTo URL or home      const returnTo = (req.session as any).returnTo || "/";      delete (req.session as any).returnTo; // Clean up            res.redirect(returnTo);    }  );  app.get("/api/logout", (req, res) => {    req.logout(() => {      res.redirect("/");    });  });  console.log("✓ Google OAuth authentication configured");}
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import type { Express } from "express";
import { storage } from "./storage";

export function setupGoogleAuth(app: Express) {
  if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
    throw new Error("GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET must be set");
  }

  // Use custom domain for OAuth callback
  const callbackURL = "https://vibekit.cc/auth/google/callback";

  console.log(`✓ Setting up Google OAuth with callback: ${callbackURL}`);

  // Configure Google OAuth Strategy
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL,
        scope: ["profile", "email"],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          console.log('Google OAuth callback triggered for user:', profile.id);
          console.log('User email:', profile.emails?.[0]?.value);
          console.log('User name:', profile.name?.givenName, profile.name?.familyName);
          
          // Upsert user in database
          const user = await storage.upsertUser({
            id: profile.id,
            email: profile.emails?.[0]?.value ?? null,
            firstName: profile.name?.givenName ?? null,
            lastName: profile.name?.familyName ?? null,
            profileImageUrl: profile.photos?.[0]?.value ?? null,
          });

          console.log('User successfully upserted:', user.id, user.email);
          done(null, user);
        } catch (error) {
          console.error('Error upserting user in Google OAuth callback:', error);
          done(error as Error);
        }
      }
    )
  );

  // Serialize user to session
  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });

  // Deserialize user from session
  passport.deserializeUser(async (id: string, done) => {
    try {
      const user = await storage.getUser(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });

  // Google OAuth routes
  app.get(
    "/auth/google",
    (req, res, next) => {
      console.log('Initiating Google OAuth flow...');
      
      // Store the return URL from query parameter
      if (req.query.returnTo && typeof req.query.returnTo === 'string') {
        (req.session as any).returnTo = req.query.returnTo;
      }
      
      passport.authenticate("google", {
        scope: ["profile", "email"],
        accessType: 'offline',
        prompt: 'consent'
      })(req, res, next);
    }
  );

  app.get(
    "/auth/google/callback",
    (req, res, next) => {
      console.log('Google OAuth callback received');
      console.log('Query params:', req.query);
      
      passport.authenticate("google", {
        failureRedirect: "/?error=auth_failed",
        failureMessage: true
      })(req, res, next);
    },
    (req, res) => {
      console.log('Google OAuth authentication successful');
      
      // Redirect to stored returnTo URL or home
      const returnTo = (req.session as any).returnTo || "/";
      delete (req.session as any).returnTo; // Clean up
      
      res.redirect(returnTo);
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout(() => {
      res.redirect("/");
    });
  });

  console.log("✓ Google OAuth authentication configured");
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
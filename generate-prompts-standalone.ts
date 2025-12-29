9912345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758596061626364656667import { generateStructuredPrompt, promptTemplates } from './server/services/prompt-generator';import fs from 'fs/promises';async function main() {  console.log(`Starting generation of ${promptTemplates.length} prompts...`);    const generatedPrompts = [];  let successCount = 0;  let errorCount = 0;  for (const template of promptTemplates) {    try {      console.log(`Generating: ${template.title}...`);      const prompt = await generateStructuredPrompt(template);      generatedPrompts.push(prompt);      successCount++;            // Add a small delay to avoid rate limiting      await new Promise(resolve => setTimeout(resolve, 1000));    } catch (error: any) {      console.error(`Failed to generate ${template.title}:`, error.message);      errorCount++;    }  }  console.log(`\nGeneration complete: ${successCount} success, ${errorCount} failed`);  // Read existing prompts file  const promptsFilePath = "./server/data/prompts.ts";  let promptsFileContent = await fs.readFile(promptsFilePath, "utf-8");  // Find the end of the existing prompts array (before the closing bracket)  const lastPromptIndex = promptsFileContent.lastIndexOf("];");    if (lastPromptIndex === -1) {    throw new Error("Could not find prompts array in file");  }  // Generate the new prompts code  const newPromptsCode = generatedPrompts.map(p => `  {    title: ${JSON.stringify(p.title)},    description: ${JSON.stringify(p.description)},    content: ${JSON.stringify(p.content)},    blueprint: ${JSON.stringify(p.blueprint, null, 2).split('\n').join('\n    ')},    category: ${JSON.stringify(p.category)},    tags: ${JSON.stringify(p.tags)},    platform: ${JSON.stringify(p.platform)},    qualityScore: ${JSON.stringify(p.qualityScore)},    rating: ${JSON.stringify(p.rating)},    downloads: ${JSON.stringify(p.downloads)},    tier: ${JSON.stringify(p.tier)}  }`).join(',\n');  // Insert new prompts before the closing bracket  const updatedContent =     promptsFileContent.slice(0, lastPromptIndex) +     ',\n' + newPromptsCode + '\n' +    promptsFileContent.slice(lastPromptIndex);  // Write back to file  await fs.writeFile(promptsFilePath, updatedContent, "utf-8");  console.log(`\n✅ Successfully wrote ${successCount} new prompts to ${promptsFilePath}`);}main().catch(console.error); Project Planner Prompt Library
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
9912345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758596061626364656667
import { generateStructuredPrompt, promptTemplates } from './server/services/prompt-generator';import fs from 'fs/promises';async function main() {  console.log(`Starting generation of ${promptTemplates.length} prompts...`);    const generatedPrompts = [];  let successCount = 0;  let errorCount = 0;  for (const template of promptTemplates) {    try {      console.log(`Generating: ${template.title}...`);      const prompt = await generateStructuredPrompt(template);      generatedPrompts.push(prompt);      successCount++;            // Add a small delay to avoid rate limiting      await new Promise(resolve => setTimeout(resolve, 1000));    } catch (error: any) {      console.error(`Failed to generate ${template.title}:`, error.message);      errorCount++;    }  }  console.log(`\nGeneration complete: ${successCount} success, ${errorCount} failed`);  // Read existing prompts file  const promptsFilePath = "./server/data/prompts.ts";  let promptsFileContent = await fs.readFile(promptsFilePath, "utf-8");  // Find the end of the existing prompts array (before the closing bracket)  const lastPromptIndex = promptsFileContent.lastIndexOf("];");    if (lastPromptIndex === -1) {    throw new Error("Could not find prompts array in file");  }  // Generate the new prompts code  const newPromptsCode = generatedPrompts.map(p => `  {    title: ${JSON.stringify(p.title)},    description: ${JSON.stringify(p.description)},    content: ${JSON.stringify(p.content)},    blueprint: ${JSON.stringify(p.blueprint, null, 2).split('\n').join('\n    ')},    category: ${JSON.stringify(p.category)},    tags: ${JSON.stringify(p.tags)},    platform: ${JSON.stringify(p.platform)},    qualityScore: ${JSON.stringify(p.qualityScore)},    rating: ${JSON.stringify(p.rating)},    downloads: ${JSON.stringify(p.downloads)},    tier: ${JSON.stringify(p.tier)}  }`).join(',\n');  // Insert new prompts before the closing bracket  const updatedContent =     promptsFileContent.slice(0, lastPromptIndex) +     ',\n' + newPromptsCode + '\n' +    promptsFileContent.slice(lastPromptIndex);  // Write back to file  await fs.writeFile(promptsFilePath, updatedContent, "utf-8");  console.log(`\n✅ Successfully wrote ${successCount} new prompts to ${promptsFilePath}`);}main().catch(console.error);
import { generateStructuredPrompt, promptTemplates } from './server/services/prompt-generator';
import fs from 'fs/promises';

async function main() {
  console.log(`Starting generation of ${promptTemplates.length} prompts...`);
  
  const generatedPrompts = [];
  let successCount = 0;
  let errorCount = 0;

  for (const template of promptTemplates) {
    try {
      console.log(`Generating: ${template.title}...`);
      const prompt = await generateStructuredPrompt(template);
      generatedPrompts.push(prompt);
      successCount++;
      
      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error: any) {
      console.error(`Failed to generate ${template.title}:`, error.message);
      errorCount++;
    }
  }

  console.log(`\nGeneration complete: ${successCount} success, ${errorCount} failed`);

  // Read existing prompts file
  const promptsFilePath = "./server/data/prompts.ts";
  let promptsFileContent = await fs.readFile(promptsFilePath, "utf-8");

  // Find the end of the existing prompts array (before the closing bracket)
  const lastPromptIndex = promptsFileContent.lastIndexOf("];");
  
  if (lastPromptIndex === -1) {
    throw new Error("Could not find prompts array in file");
  }

  // Generate the new prompts code
  const newPromptsCode = generatedPrompts.map(p => `  {
    title: ${JSON.stringify(p.title)},
    description: ${JSON.stringify(p.description)},
    content: ${JSON.stringify(p.content)},
    blueprint: ${JSON.stringify(p.blueprint, null, 2).split('\n').join('\n    ')},
    category: ${JSON.stringify(p.category)},
    tags: ${JSON.stringify(p.tags)},
    platform: ${JSON.stringify(p.platform)},
    qualityScore: ${JSON.stringify(p.qualityScore)},
    rating: ${JSON.stringify(p.rating)},
    downloads: ${JSON.stringify(p.downloads)},
    tier: ${JSON.stringify(p.tier)}
  }`).join(',\n');

  // Insert new prompts before the closing bracket
  const updatedContent = 
    promptsFileContent.slice(0, lastPromptIndex) + 
    ',\n' + newPromptsCode + '\n' +
    promptsFileContent.slice(lastPromptIndex);

  // Write back to file
  await fs.writeFile(promptsFilePath, updatedContent, "utf-8");

  console.log(`\n✅ Successfully wrote ${successCount} new prompts to ${promptsFilePath}`);
}

main().catch(console.error);



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
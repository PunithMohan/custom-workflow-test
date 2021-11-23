const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const commitCount = core.getInput('commit-count');
  console.log(`Commit Count ${commitCount}!`);
  const commitsCounts = 4;
  core.setOutput("commitsCounts", commitsCounts);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}

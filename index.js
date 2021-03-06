const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const commitCount = core.getInput('commit-count');
  console.log(`Commit Count ${commitCount}!`);
  
  //get input label name
  const LabelName1 = core.getInput('LabelName');
  console.log(`LabelName ${LabelName1}!`);
  
  //get input label name
  const Comments1 = core.getInput('Comments');
  console.log(`Comments1 ${Comments1}!`);
  
  var CommitsCounts = commitCount;
  core.setOutput("CommitsCounts", CommitsCounts);
  const labelName = core.getInput('LabelName');
  var labelname = labelName;
  core.setOutput("labelname", labelname);
  var comments = core.getInput('Comments');
  core.setOutput("comments", comments);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}

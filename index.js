/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 * 
 * Redirect `GET /` to `/stats`, pass `POST /` to Probot's middleware
 *
 * @param {import('@vercel/node').NowRequest} request
 * @param {import('@vercel/node').NowResponse} response
 */
const {createNodeMiddleware, createProbot} = require("probot");

module.exports = (app, request, response) => {

  app.log.info("Yay, the app was loaded!");

  const middleware = createNodeMiddleware(app, { probot: createProbot(),});

  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!\n- Remember to include any code snippets, CLI outcomes, and/or screenshots/GIFs that come with your issue.\n- Remember to link relevant issues to yours whenever possible.\n- Remember to stay patient! While waiting for a response, head on over to our discussions page if there hasn’t been a response."
    });
    return context.octokit.issues.createComment(issueComment);
  });

  app.on("pull_request.opened", async (context) => {
    const prComment = context.issue({
	body: "Thanks for making this pull request!\n- Remember to include any code snippets, CLI outcomes, and/or screenshots/GIFs that come with your issue.\n- Remember to link relevant issues to yours whenever possible.\n- Out of good pull request habit, remember to fork the main repo, and create your own branches before committing any changes to the code, where you can then choose to create a pull request back to the main branch"
    });
    return context.octokit.issues.createComment(prComment)
  })
  middleware(request, response);
};



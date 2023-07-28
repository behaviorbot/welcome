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
const app = require("./index.js");
const middleware = createNodeMiddleware(app, { probot: createProbot(),});

module.exports = (app, request, response) => {
  
  app.log.info("Yay, the app was loaded!");


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

//q: I am getting this error: TypeError: appFn is not a function, how do I fix it?
//a: You need to export a function from your index.js file. This function will be called with the app object, and the request and response objects from the HTTP request. See the example above for more details.
//q: How do I do that?
//a: You can use the following code as a starting point:
//module.exports = (app, request, response) => {
//  // Your code here
//};



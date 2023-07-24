# Probot & Vercel example

This repository is an example of how to deploy the "Hello, World" of probot apps to [Vercel](https://vercel.com).

## Create the GiHub App

We will first start by running the app localy in order to create the GitHub App and initialize the environment variables.

1. Install dependencies
```
npm install
```

2. Start the server
```
npm start
```

3. Go to http://localhost:3000/, click `Register GitHub App` and select the app name of your choice.

4. Select the repository (or organization) where your GitHub App will be installed. _It can be completly different from the GitHub App repo_

Well done! Your GitHub app has been created but is not running yet. You can close the process with `Ctrl+C` in your terminal.
Note that a file called `.env` has been created. It contains all the necessary informations to run your app localy or remotely.

## Run localy

If you want to run your GitHub App localy, you can use
```
npm start
```

## Deploy on Vercel

In this section, we will continuously deployed your GitHub App using [Vercel](https://vercel.com).

1. On your vercel Dashboard, create a new a project.

2. Select your GitHub App's repository.

3. Select a project name and expand the `Environment Variables` view.

4. Open the file `.env` and copy all the variables to Vercel Environment Variables.

5. Hit deploy !

Your app is now running on Vercel but it is not listening to the correct Webhook url.

6. Go to your [GitHub App page](https://github.com/settings/apps) and `Edit` your app.

7. Replace the `Webhook URL` with `https://<my-vercel-project-name>.vercel.app/api/github/webhooks`.

8. Save

Your GitHub App is now configured to send webhooks to your Vercel app. The [api/github/webhooks/index.js](api/github/webhooks/index.js) file is handling requests to `POST /api/github/webhooks`. You can now open an issue on the repo where your app is installed.

## Other examples[^1]
- [Using TypeScript + Vercel](https://github.com/oscard0m/example-vercel-ts) by [@oscard0m](https://github.com/oscard0m)

[^1]: Do you have any other examples you would like to share? Feel free to open a Pull Request and share yours!

## License

[ISC](LICENSE)

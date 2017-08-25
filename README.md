# welcome

> a GitHub App built with [probot](https://github.com/probot/probot) that welcomes new users based off maintainer defined comments that should be located in a `.github/config.yml`

The 3 plugins it combines with are
### New Issue Welcome:
[new-issue-welcome](https://github.com/behaviorbot/new-issue-welcome)
<img width="801" alt="screen shot 2017-07-17 at 1 31 50 pm" src="https://user-images.githubusercontent.com/13410355/28288547-5f83aa8e-6af4-11e7-9692-eb41d42431e2.png">

### New PR Welcome: 
[new-pr-welcome](https://github.com/behaviorbot/new-pr-welcome)
<img width="802" alt="screen shot 2017-07-07 at 10 40 26 am" src="https://user-images.githubusercontent.com/13410355/28288851-679f582a-6af5-11e7-8dd8-b85b6c33e16b.png">

### First PR Merge:
[first-pr-merge](https://github.com/behaviorbot/first-pr-merge)
<img width="807" alt="screen shot 2017-07-17 at 1 58 37 pm" src="https://user-images.githubusercontent.com/13410355/28289605-1ab81a76-6af8-11e7-8f78-6a1b3948df36.png">

## Usage

1. [Install the bot](https://github.com/apps/welcome) on the intended repositories. The plugin requires the following **Permissions and Events**:

- Pull requests: **Read & Write**
- Issues: **Read & Write**

2. Create a `.github/config.yml` file to check for content of the comments:

``` yaml
# Configuration for welcome - https://github.com/behaviorbot/welcome

# Configuration for new-issue-welcome - https://github.com/behaviorbot/new-issue-welcome

# Comment to be posted to on first time issues
newIssueWelcomeComment: >
  Thanks for opening your first issue here! Be sure to follow the issue template!

# Configuration for new-pr-welcome - https://github.com/behaviorbot/new-pr-welcome

# Comment to be posted to on PRs from first time contributors in your repository
newPRWelcomeComment: >
  Thanks for opening this pull request! Please check out our contributing guidelines.

# Configuration for first-pr-merge - https://github.com/behaviorbot/first-pr-merge

# Comment to be posted to on pull requests merged by a first time user
firstPRMergeComment: >
  Congrats on merging your first pull request! We here at behaviorbot are proud of you! 

# It is recommend to include as many gifs and emojis as possible!
```

You can opt out of having the bot comment on first time pull requests, pull request merges, or new issues by not filling in a value for each app's respective field.

For some inspiration about what kind of content to include in your `.github/config` files, check out [Electron's Configuration](https://github.com/electron/electron/blob/master/.github/config.yml).

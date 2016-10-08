# About ClearMessagesBot
The bot clears/deletes all the messages on a particular channel. The command for that is *`!clearMessages`*.

### TODO
1. Auto-delete messages as soon as they are some time units old. For example - delete messages which are 24 hours old.

## Deploying the Bot to Heroku

#### Deploy Automatically

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/praneetsharma/ClearMessagesBot-Discord)

Note - Go to the heroku app page and change the running dyno from web to worker.

#### Deploy Manually
Run the following commands to deploy the bot manually on Heroku
* Create a git clone - `git clone https://github.com/praneetsharma/ClearMessagesBot-Discord`
* Go to the local repo directory - `cd ClearMessagesBot-Discord`
* Create heroku app - `heroku create clear-messages-bot-discord`
* Set the buildpack for created app - `heroku buildpacks:set heroku/nodejs`
* Push the app to heroku - `git push heroku master`
* Start the bot app - `heroku ps:scale worker=1`

## Installation

* Node.js 6.0.0 or newer version is required.
* Install discord.js: `npm install discord.js`

## Adding the Bot on a Discord Channel
* Go to https://discordapp.com/developers/applications/me and create a new application.
* Open your application and add a bot user.
* Go to https://discordapp.com/oauth2/authorize?&client_id=YYYY&scope=bot by replacing YYYY with application's Client ID. This will add the bot user to the channel/server you select.
* Use the App Bot User token in clear-messages.js

## Running the Bot
To start the bot, run the following command: `node clear-messages.js`

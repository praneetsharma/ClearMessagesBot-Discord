# About ClearMessagesBot
The bot clears/deletes all the messages on a particular channel.

# Installation

* Node.js 6.0.0 or newer version is required.
* Install discord.js: `npm install discord.js`

# Adding the Bot on a Discord Channel
* Go to https://discordapp.com/developers/applications/me and create a new application.
* Open your application and add a bot user.
* Go to https://discordapp.com/oauth2/authorize?&client_id=YYYY&scope=bot by replacing YYYY with application's Client ID. This will add the bot user to the channel/server you select.
* Use the App Bot User token in clear-messages.js

# Running the Bot
To start the bot, run the following command: `node clear-messages.js`

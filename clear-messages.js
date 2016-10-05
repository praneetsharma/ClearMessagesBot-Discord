/*
  A bot to clear/delete messages of a channel

  Usage: !clearMessages  ==> clears all messages of
  that channel on which the command was run

*/

const CLEAR_MESSAGES = '!clearMessages';

const Discord = require('discord.js');
const bot = new Discord.Client();

// Token of my bot
const token = 'MjMxMjk3Mzg3OTU4NzYzNTIw.CtaOnA.eiqE_DIaS2hHW_c-k4jWLHR1Eu8';

bot.on('ready', () => {
  console.log('ClearMessagesBot is Ready!');
  bot.on('message', message => {
    if (message.content == CLEAR_MESSAGES) {

      // TODO use the commented legacy code to perform
      // some other TODOS and then delete the legacy code
      /*if ( ! message.channel.permissionsFor(message.sender).hasPermission("manageMessages") ) {
        msg.channel.sendMessage("Sorry, you don't have the permission to execute the command");
      } else if ( ! message.channel.permissionsFor(bot.user).hasPermission("manageMessages") ) {
        msg.channel.sendMessage("Sorry, I don't have the permission to execute the command");
      } */

      // TODO 1. Check if the user has enough permissions
      // TODO 2. Check if I have the permission to execute the command

      // Only delete messages if the channel type is TextChannel
      // DO NOT delete messages in DM Channel or Group DM Channel
      if (message.channel.type == 'text') {
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
            messagesDeleted = messages.array().length; // number of messages deleted

            // Logging the number of messages deleted on both the channel and console.
            message.channel.sendMessage("Deletion of messages successful. Total messages deleted: "+messagesDeleted);
            console.log('Deletion of messages successful. Total messages deleted: '+messagesDeleted)
          })
          .catch(err => {
            console.log('Error while doing Bulk Delete');
            console.log(err);
          });
      }
    }
  });
});


bot.login(token);

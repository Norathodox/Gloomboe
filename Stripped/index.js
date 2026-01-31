const { Client, Events, GatewayIntentBits, Intents, Collection, MessageFlags} = require("discord.js");
const { botKey } = require("./config.json");
const fs = require("fs");
const path = require("path");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageTyping,
  ],
}); //gives intents for ses

client.login(botKey);



client.commands = new Collection();

client.once(Events.ClientReady, (readyClient) => {
  const channel = client.channels.cache.get("1112805993286484059");
  //once client is ready, simple stuff
  console.log("Hi Gloomboe");
  if (!channel) return console.error("The channel does not exist!");
});

client.on(Events.message, (message) => {
  if (message.author.bot) return;
  
});



/*
  setTimeout(() => {
    //The timeout is set to: 60 seconds
    //This is the first time out. It will be the grand one that will trigger the reset of the server for safety reasons. When more then 6 people or so are on the server the server will start to lag. (In the future possibly make the timeout dynamic based on the amount of players on the server)
    command.stdin.write(
      "/tell @a Server is resetting in 30 seconds...I recommend you land\n"
    );
    setTimeout(() => {
      cleanUp(); //this will kill all processes on the server using an sh command to read the system information the node module can't read. (isn't that neat :D)
      channel.send(
        "Server is restarting with a total of: " + errors + " errors"
      );
      command.kill();
    }, 30000);
  }, 21600000); //6 hours
  */

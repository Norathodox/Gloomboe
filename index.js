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
    GatewayIntentBits.MessageContent
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

client.on(Events.MessageCreate, async (message) => {
  if (message.author.bot) return;
  const channel = client.channels.cache.get("1112805993286484059");
  if (!channel) return console.error("The channel does not exist!");
  if (message.content.includes("Brag") || message.content.includes("brag")) {
    await message.reply("Logan.");
  } else if (message.content.includes("juice") || message.content.includes("Juice")) {
    await message.react("🧃");
  } else if (message.content.includes("God") || message.content.includes("god")) {
    await message.reply("https://tenor.com/view/cat-meme-gif-7962678019719258229");
  } else if (message.content.includes("Gloomboe") || message.content.includes("gloomboe")) {
    await message.reply("https://tenor.com/view/hal9000-gif-22241038");
  } else if (message.content.includes("Rain") || message.content.includes("Bungus") || message.content.includes("rain") || message.content.includes("bungus")) {
    await message.reply("https://tenor.com/view/risk-of-rain-risk-of-rain-returns-risk-of-rain-2-bustling-fungus-bungus-gif-10235144301174499116");
  } else if (message.content.includes("Monkey") || message.content.includes("monkey")) {
    await message.reply("https://tenor.com/view/monkey-gif-22203444");
  }
  //https://tenor.com/view/monkey-gif-22203444

  //
  //channel.send(`Message received: ${message.content}`);
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

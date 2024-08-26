//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
  module.exports.config = {
  name: "uid",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ARIF BABU",
  description: "THIS BOT IS MR ARIF BABU",
  commandCategory: "facebook profile php",
  cooldowns: 5
};

module.exports.run = function({ api, event }) {
  if (Object.keys(event.mentions) == 0) return api.sendMessage(`${event.senderID}`, event.threadID, event.messageID);
  else {
    for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`${Object.values(event.mentions)[i].replace('@', '')}: ${Object.keys(event.mentions)[i]}`, event.threadID);
    return;
  }
}          
module.exports.config = {
  name: "groupname",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "ARIF BABU",
  description: "THIS BOT IS MADE BY ARIF BABU",
  commandCategory: "BOX-NAME-CHANGED", 
  usages: "GROUP-NAME", 
  cooldowns: 0,
  dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
  var name = args.join(" ")
  if (!name) api.sendMessage("GROUP KA NAAM LIKHO", event.threadID, event.messageID)
  else api.setTitle(name, event.threadID, () => api.sendMessage(`GROUP NAME CHANGE HO GYA`, event.threadID, event.messageID));
}
/////////////////////////////////////////////////////////////////////@prem-babu3608///////////////////
//////////////////////////////////////////////////
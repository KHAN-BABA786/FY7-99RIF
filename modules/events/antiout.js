module.exports.config = {
  name: "antiout",
  eventType: ["log:unsubscribe"],
  version: "0.0.1",
  credits: "ARIF BABU",
  description: "THIS BOT IS MADE BY ARIF BABU"
};

module.exports.run = async({ event, api, Threads, Users }) => {
  let data = (await Threads.getData(event.threadID)).data || {};
  if (!data.antiout) return;
  if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
  const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
  const type = (event.author == event.logMessageData.leftParticipantFbId) ? "tự rời" : "bị quản trị viên đá";
  if (type == "tự rời") {
      api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
          if (error) {
              api.sendMessage(`SORRY ARIF BOSS APKE DUSMAN ${name} KO DOBARA ADD NAHI KR PAYA LAGTA HAI YE MUJHE BLOCK KR KE BHAAG GYA HAI 😂`, event.threadID)
          } else api.sendMessage(`BOSDIKE ${name} BHAAG KE KAHA JA RAHA HAI ABHI TERI MAA KI CHUDAI BAAKI HAI RANDI KE KIDE 😈`, event.threadID);
      })
  }
}
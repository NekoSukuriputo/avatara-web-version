const users = require("@/app/dataMocks/users.json");
export default function getConversationById(id) {
  let userData = {
    name: "Bosque",
  };
  users.forEach((item) => {
    item.users.forEach((user) => {
      if (user.id === id) {
        userData = user;
        return;
      }
    });
  });
  return userData
}

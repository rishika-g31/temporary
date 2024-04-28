const os = require("os");
const currentos = {
  name: os.userInfo(),
  release: os.release(),
};
console.log(currentos);

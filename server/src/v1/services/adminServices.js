let login = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(data);
      if (data.username === "admin" && data.password === "12345") {
        res = true;
        resolve(res);
      } else {
        res = false;
        resolve(res);
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = { login };

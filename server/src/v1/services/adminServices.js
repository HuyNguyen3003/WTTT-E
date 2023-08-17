let login = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
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

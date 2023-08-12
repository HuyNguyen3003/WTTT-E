let login = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      res = data.user === "admin" && data.password === "12345";
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = { login };

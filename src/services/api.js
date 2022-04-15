import axios from "axios";
module.exports.login = async (email, password) => {
  return new Promise(function (resolve, reject) {
    axios
      .post("https://api.petsalva.com/api/v1/autenticacao/entrar", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        resolve(response);
      })
      .catch(function (error) {
        console.log(error.data);
        reject(false);
      });
  });
};

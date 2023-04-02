const path = require("path");

exports.getLoginPage = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "public", "views", "login.html"));
};

exports.postUserSignUp = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ where: { email: email } })
    .then((user) => {
      if (user) {
        res.send(
          `<script>alert('We're sorry, but that email is currently living its best life elsewhere.'); window.location.href='/'</script>`
        );
      } else {
        User.create({
          name: name,
          email: email,
          password: password,
        });
      }
    })
    .catch((err) => console.log(err));
};

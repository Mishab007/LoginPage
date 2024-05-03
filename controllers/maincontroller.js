const { use } = require("../Router/user");

const Array = [];

const object = {
  getSignup: (req, res) => {
    res.render("signup");
  },
  postSignup: (req, res) => {
    const { username, email, password, confirm_password } = req.body;

    const userExits = Array.find((item) => {
      return item.email == email;
    });
    if (userExits) {
      res.send("User already exists with this email.");
    } else {
      Array.push(req.body);
      req.session.secure=password
      console.log(email);
      console.log(Array);
      res.render("index");
    }
  },
  getLogin: (req, res) => {
    res.render("login");
  },
  postLogin: (req, res) => {
    const { email, password } = req.body;
    const logindata = Array.find((item) => {
      return item.email == email && item.password == password;
    });
    console.log(logindata);
    if (logindata) {
        req.session.secure=password
      res.render("index");
    } else {
      res.render("signup");
    }
  },
  getIndex : (req,res)=>{
    res.render("index")
  },
  getDistroy : (req, res) => {
    // Destroy the session or remove the authentication token
    
    // For sessions
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
        res.status(500).send('Error logging out');
      } else {
        res.redirect('/login'); // Redirect to the login page after logout
      }
    });
} };

module.exports = object;

const express = require("express");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { sendMail } = require("../utility/nodemailer");

//signup user
module.exports.signup = async function signup(req, res) {
  try {
    // console.log('req appeared')
    let dataObj = req.body;


    const emailExists = await User.findOne({ email: dataObj.email });
    if (emailExists) {
      return res.json({
        error: "Email already exists",
      });
    }

    const usernameExists = await User.findOne({ username: dataObj.username });
    if (usernameExists) {
      return res.json({
        error: "Username is already in use",
      });
    }

    let user = await User.create(dataObj);
    sendMail("signup", user);

    if (!user)
      return res.json({
        error: "error while sign up",
      });

    return res.json({
      message: "User Signed Up",
      data: user,
    });
  } catch (err) {
    //console.log('here', err.message)

    return res.status(400).json({
      message: err.message,
    });
  }
};

//USER LOGIN
module.exports.login = async function loginUser(req, res) {
  try {
    const data = req.body;
    if (!data.email || !data.password) {
      res.status(400);
      res.json({ error: "All fields are mandatory!" });
    }
    const user = await User.findOne({ email: data.email });

    if (user && (await user.matchPassword(data.password))) {
      const accessToken = jwt.sign(
        {
          user: {
            username: user.username,
            email: user.email,
            id: user.id,
          },
        },
        process.env.JWT_TOKEN,
        { expiresIn: "30d" }
      );
      res.status(200).json({ accessToken });
    } else {
      res.status(401);
      throw new Error("email or password is not valid");
    }
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

//login user

// module.exports.login = async function loginUser(req, res) {
//   try {
//     let data = req.body;

//     if (data.email) {
//       let user = await User.findOne({ email: data.email });
//       if (user && user.password == data.password) {
//         //bcrypt -> compare
//         const accessToken =jwt.sign({
//             user: {
//                 username: user.username,
//                 email: user.email,
//                 id: user.id,
//             },
//             JWT_KEY,
//             {expiresIn:1*100*60}
//         })
//         res.json({accessToken});
//         }

//         else {
//           return res.json({
//             message: "wrong credentials",
//           });
//         }

//       }
//      else {
//       return res.json({
//         message: "Empty Field",
//       });
//     }
//     }
//    catch (err) {
//     return res.json({
//       message: err.message,
//     });
//   }

// };

//isAuthorized to check role

module.exports.isAuthorized = function isAuthorized(role) {
  return function (req, res, next) {
    if (role.include(req, role) == true) {
      next();
    } else {
      res.status(401).json({
        message: "User not authorized",
      });
    }
  };
};

//protect route
// module.exports.protectRoute = async function protectRoute(req, res, next) {
//   try {
//     let token;
//     if (req.cookies.login) {
//       console.log(req.cookies);
//       token = req.cookie.login;
//       let payload = jwt.verify(token, JWT_KEY);
//       if (payload) {
//         const user = await User.findbyId(payload);
//         req.role = user.role;
//         req.id = user.id;
//         next();
//       } else {
//         res.json({
//           message: "Please Login Again",
//         });
//       }
//     } else {
//       const client = req.get("User-Agent");
//       if (client.include("Mozilla" == true)) {
//         return res.redirect("/login");
//       }
//       res.json({
//         message: "please login",
//       });
//     }
//   } catch (err) {
//     return res.json({
//       message: err.message,
//     });
//   }
// };

//forget password
module.exports.forgetpassword = async function forgetpassword(req, res) {
  let { email } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      const resetToken = user.createResetToken();
      let resetPasswordLink = `${req.protocal}://${req.get(
        "host"
      )}/resetpassword/${resetToken}`; // //domain name for reset password link
      //send email to user
      //nodemailer
      let obj = {
        resetPasswordLink: resetPasswordLink,
        email: email,
      };
      sendMail("resetpassword", obj);
      return res.json({
        message: "mail sent",
      });
    } else {
      return res.json({
        message: "please signup",
      });
    }
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

//reset password
module.exports.resetpassword = async function resetpassword(req, res) {
  try {
    const token = req.parmas.token;
    let { password, confirmpassword } = req.body;
    const user = await User.findOne({ resetToken: token });
    if (user) {
      user.resetPasswordHandler(password, confirmpassword);
      await user.save();
      res.json({
        message: "password changed sucesfully",
      });
    } else {
      res.json({
        message: "Not a user",
      });
    }
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};

//logout
module.exports.logout = function logout(req, res) {
  res.cookie("login", "", { maxAge: 1 });
  res.json({
    message: "user logged out sucesfully",
  });
};

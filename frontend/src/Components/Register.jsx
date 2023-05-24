import React, { useState, Component } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import img1 from "./images/navLogo.png";
import { Modal, ModalHeader } from "reactstrap";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export const Register = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setcPass] = useState("");
  const [name, setName] = useState("");
  const [uname, setUname] = useState("");

  async function Submit(e) {
    e.preventDefault();
    const values = {
      name,
      username: uname,
      email,
      password: pass,
      confirmPassword: cpass,
    };
    const { data } = await axios.post(
      "http://localhost:4000/user/signup",
      values
    );
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success("Registered successfully.Proceed to Login");
      navigate("/Login");
    }
  }

  return (
    <div className="center2">
      <div className="bg5 ">
        <Modal
          className="pop2"
          contentClassName="pop2"
          size="lg"
          isOpen={true}
          toggle={() => props.setmodal(!props.modal)}
        >
          <ModalHeader>
            <div className="rightCross">
              <NavLink className="nav-link " to="../Home">
                <AiFillCloseCircle />
              </NavLink>{" "}
            </div>
            <div className="aligncenter">
              <h1>Create a Guided Travels account</h1>
              <div className="quicksand">
                <h2 style={{ color: "#574A4A" }}>
                  <i>WE PLAN, YOU PACK</i>
                </h2>
                <h8 style={{ color: "#736A6A" }}>
                  Experience the beauty of Nepal.
                </h8>
              </div>
            </div>
          </ModalHeader>
          <div className="quicksand18">
            <form
              action="POST"
              className="login-form needs-validation"
              onSubmit={Submit}
              novalidate
            >
              <label htmlFor="Name" className="form-label">
                FullName*
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="email form-control"
                id="Name"
                value={name}
                required
              />

              <label htmlFor="Username" className="form-label">
                Username*
              </label>
              <input
                onChange={(e) => setUname(e.target.value)}
                type="text"
                id="Username"
                className="email form-control"
                value={uname}
                required
              />

              <label htmlFor="email" className="form-label">
                E-mail*
              </label>
              <input
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                id="email"
                className="email form-control"
              />

              <label htmlFor="password" className="form-label">
                Password*
              </label>
              <input
                value={pass}
                required
                onChange={(e) => setPass(e.target.value)}
                type="password"
                id="password"
                name="password "
                className="email form-control"
              />

              <label htmlFor="confirmpassword" className="form-label">
                Confirm Password*
              </label>
              <input
                value={cpass}
                required
                onChange={(e) => setcPass(e.target.value)}
                type="password"
                id="confirmpassword"
                name="Confirmpassword "
                className="email form-control"
              />
              <br />
              <button type="submit" className="btn btn-success btn-lg">
                SignUp
              </button>
            </form>
            <div className="text-center">
              <Link to="../Login">
                <button className="btn btn-link">
                  <h5>Already have an account? Login Here.</h5>
                </button>
              </Link>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

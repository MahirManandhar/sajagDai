import React from "react";
import { useRef, useState } from "react";
import { Modal, ModalHeader } from "reactstrap";
import { NavLink } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-hot-toast";
export default function PlanTrip(props) {
  // const [date, setDate] = useState("");
  const dateInputRef = useRef(null);
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [result, setResult] = useState(null);

  const handleChange1 = (e) => {
    setStartDate(e.target.value);
  };
  const handleChange2 = (e) => {
    setEndDate(e.target.value);
  };

  async function Submit(e) {
    e.preventDefault();
    try {
      console.log(destination);
      const values = {
        destination,
        startDate,
        endDate,
      };
      console.log(values);
      const res = await axios.post("http://localhost:4000/user/login", values);
      if (res.error) {
        toast.error(res.error);
      }
      // else {
      //   props.onFormSwitch("userprofile");
      //   localStorage.setItem("token", res.data.accessToken);
      //   toast.success("Logged in successfully");
      //   history("/LoginHome");
      // }
    } catch (err) {
      alert("Wrong Details");
      console.log(err);
    }
  }
  const calculateDaysBetweenDates = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffInMilliseconds = Math.abs(end - start);
    const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    setResult(days);
  };
  console.log(startDate, endDate)
  console.log(result)
  return (
    <div className="center2">
      <div className=" bg5 ">
        <Modal
          className="pop3"
          contentClassName="pop3"
          size="lg"
          isOpen={true}
          toggle={() => props.setmodal(!props.modal)}
        >
          <ModalHeader>
            {" "}
            <div className="cross1">
              <NavLink className="nav-link " to="../Home">
                <AiFillCloseCircle />
              </NavLink>{" "}
            </div>{" "}
            <div className="quicksand20">
              <b>Plan a New Trip</b>
            </div>
          </ModalHeader>{" "}
          <br />
          <form
            action="POST"
            className="login-form"
            onSubmit={Submit}
            novalidate
          >
            <label htmlFor="destination" className="form-label"></label>
            <input
              onChange={(e) => setDestination(e.target.value)}
              type="text"
              placeholder="Where?"
              id="destination"
              name="destination"
              className="email "
              value={destination}
              required
            />

            <label htmlFor="startDate" className="form-label quicksand18">
              <b>Start Date*</b>
            </label>
            <input
              type="date"
              className="email "
              id="startDate"
              onChange={handleChange1}
              ref={dateInputRef}
            />

            <label htmlFor="endDate" className="form-label quicksand18">
              <b>End Date*</b>
            </label>
            <input
              type="date"
              className="email "
              id="endDate"
              onChange={handleChange2}
              ref={dateInputRef}
            />
            {/*<p>Selected Date: {date}</p>*/}
            <br />
            <div className="aligncenter1">
       
                <button type="submit" onClick={calculateDaysBetweenDates} className="btn btn-danger btn-lg">
                  Start Planning
                </button>
            
            </div>
            <br />
            <br />
          </form>
        </Modal>
      </div>
    </div>
  );
}

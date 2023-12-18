import React, { useState } from "react";
import "./adduser.css";
import axios from "axios";
const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const addUser = async (e) => {
    e.preventDefault();
    console.log(name, email, gender);
    try {
      await axios.post("http://localhost:3002/users", {
        name,
        email,
        gender,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="box">
      <h2>Add User Form</h2>
      <form onSubmit={addUser}>
        <div className="form-group">
          <label htmlFor="">User name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Gender</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUser;

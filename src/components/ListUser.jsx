import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ListUser = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:3002/users");
      console.log(response.data);
      setUsers(response.data);
    };
    fetch();
  }, []);
  return (
    <>
      <Button className="my-3" onClick={() => navigate("/adduser")}>
        Add User
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.num}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ListUser;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Container, Card } from "react-bootstrap";

function ViewUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:4000/user/viewprofileall",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUsers(response.data.users);

    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.message || "Failed to fetch users"
      );
    }
  };

  return (
    <Container>
      <Card className="shadow p-4">
        <h3 className="mb-4">
          Registered Users
        </h3>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}

export default ViewUsers;
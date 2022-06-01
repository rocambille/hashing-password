import { useEffect, useState } from "react";

import User from "./User";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }

        throw new Error();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <User data={user} />
        </li>
      ))}
    </ul>
  );
}

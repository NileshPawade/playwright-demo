import { useEffect, useState } from "react";
import axios from "axios";
import "./Users.css";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    } catch (err) {
      alert("Error fetching users");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const sortByName = () => {
    const sorted = [...users].sort((a, b) => a.name.localeCompare(b.name));
    setUsers(sorted);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="users-container">
      <div className="users-card">
        <h2>Users</h2>
        <button className="sort-button" onClick={sortByName}>Sort by Name</button>

        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

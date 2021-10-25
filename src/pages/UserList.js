import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const UserList = () => {
  const history = useHistory();
  const addUserHandler = () => {
    history.push("/add_user");
  };

  const userData = useSelector((state) => state.user);
  const role = useSelector((state) => state.form.role);
  console.log(role);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((vals, index) => (
            <tr key={index}>
              <td>{vals.name}</td>
              <td>{vals.number}</td>
              <td>{vals.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {role === "Admin" && <button onClick={addUserHandler}>Add User</button>}
    </>
  );
};

export default UserList;

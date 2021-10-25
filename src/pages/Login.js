import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import useForm from "../custom-hooks/useForm";
import { addFormData } from "../reducers/formReducer";

const Login = ({ operation }) => {
  const [usernameValid, setUsernameValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);

  const history = useHistory();

  const dispatch = useDispatch();

  const form = useSelector((state) => state);

  useEffect(() => {
    console.log(form);
  }, [form]);

  const { entity: username, onChnageHandler: usernameHandler } = useForm();
  const { entity: password, onChnageHandler: passwordHandler } = useForm();
  const { entity: id, onChnageHandler: idHandler } = useForm();
  const { entity: address, onChnageHandler: addressHandler } = useForm();
  const { entity: number, onChnageHandler: numberHandler } = useForm();
  const { entity: role, onChnageHandler: roleHandler } = useForm();
  const { entity: name, onChnageHandler: nameHandler } = useForm();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!username) {
      setUsernameValid(false);
      return;
    }

    if (!password) {
      setPasswordValid(false);
      return;
    }

    if (number.length !== 10) {
      return;
    }

    dispatch(
      addFormData({
        data: { username, password, id, address, name, number, role }
      })
    );

    history.push("/userlist");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="username">Username</label>

        <input
          value={username}
          type="text"
          placeholder="username"
          id="username"
          onChange={usernameHandler}
        />
        {usernameValid === false && <p>Username is required</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>

        <input
          value={password}
          type="password"
          placeholder="password"
          id="password"
          onChange={passwordHandler}
        />
        {passwordValid === false && <p>Password is required</p>}
      </div>
      <div>
        <label htmlFor="id">Id</label>

        <input
          value={id}
          type="text"
          placeholder="id"
          id="id"
          onChange={idHandler}
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>

        <input
          value={address}
          type="address"
          placeholder="Address"
          id="address"
          onChange={addressHandler}
        />
      </div>
      <div>
        <label htmlFor="name">Name</label>

        <input
          value={name}
          type="text"
          placeholder="name"
          onChange={nameHandler}
        />
      </div>
      <div>
        <label htmlFor="number">Phone Number</label>

        <input
          value={number}
          type="number"
          placeholder="Phone Number"
          id="number"
          onChange={numberHandler}
        />
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <select required value={role} id="role" onChange={roleHandler}>
          <option defaultValue>Select Role</option>
          <option>Admin</option>
          <option>Normal</option>
        </select>
      </div>
      <button>{operation}</button>
    </form>
  );
};

export default Login;

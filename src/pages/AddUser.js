import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import useForm from "../custom-hooks/useForm";
import { addUser } from "../reducers/userReducer";

const AddUser = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user);
  useEffect(() => {
    console.log(data);
  }, [data]);

  const { entity: name, onChnageHandler: nameHandler } = useForm();
  const { entity: address, onChnageHandler: addressHandler } = useForm();
  const { entity: number, onChnageHandler: numberHandler } = useForm();
  const history = useHistory();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addUser({ name, address, number }));
    history.push("/userlist");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={nameHandler}
      />
      <input
        type="address"
        placeholder="address"
        value={address}
        onChange={addressHandler}
      />
      <input
        type="number"
        placeholder="Phone Number"
        value={number}
        onChange={numberHandler}
      />
      <button>Add User</button>
    </form>
  );
};

export default AddUser;

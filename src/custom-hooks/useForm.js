import { useState } from "react";

const useForm = () => {
  const [entity, setEntity] = useState("");

  const onChnageHandler = (e) => {
    const value = e.target.value;
    setEntity(value);
  };

  return { entity, onChnageHandler };
};

export default useForm;

import { useState, useContext } from "react";
import UserContext from "../contexts/userContext";

function UserBio() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("null");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, age });
  };
  return (
    <div className="flex items-center">
      <p>Enter Name : </p>

      <input
        type="text"
        name="userName"
        value={username}
        onChange={(e) => {
          return setUsername(e.target.value);
        }}
        id="userName"
        placeholder="User's Name"
        className="w-40 py-3 px-5 text-lg mx-5 rounded-full"
      />

      <br />

      <p>Enter Age : </p>

      <input
        type="number"
        name="age"
        value={age}
        onChange={(e) => {
          return setAge(e.target.value);
        }}
        id="userAge"
        placeholder="User's Age"
        className="w-40 py-3 px-5 text-lg mx-5 rounded-full"
      />
      <button
        onClick={handleSubmit}
        className="border-black box-border  rounded-full"
      >
        {" "}
        Show Preview
      </button>
    </div>
  );
}

export default UserBio;

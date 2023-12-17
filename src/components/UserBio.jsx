import { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";

function UserBio() {
  const [username, setUsername] = useState("User");
  const [age, setAge] = useState(15);

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
    setAge(e.target.value);
    setUser({ username, age });
  };
  const handleClear = (e) => {
    e.preventDefault();
    setUsername("User");
    setAge("15");
    setUser({ username, age });
  };
  return (
    <div className="flex items-center bg-orange-200 min-h-min  min-w-min p-10 rounded-3xl justify-center">
      <p>Enter Name : </p>

      <input
        type="text"
        name="userName"
        value={username}
        onChange={handleSubmit}
        id="userName"
        placeholder="User's Name"
        className="w-40 py-3 px-5 text-lg mx-5 rounded-full"
      />

      <br />

      <p>Enter Age : </p>

      <input
        type="number"
        name="age"
        required
        value={age}
        onChange={handleSubmit}
        id="userAge"
        placeholder="User's Age"
        className="w-40 py-3 px-5 text-lg mx-5 rounded-full"
      />
      <button
        onClick={handleSubmit}
        className="md:w-40 bg-orange-700 hover:bg-blue-dark text-white  py-2 px-4 rounded-lg mt-3 hover:bg-orange-600"
      >
        {" "}
        Show Preview
      </button>
      <button
        onClick={handleClear}
        className="md:w-30 mx-5 bg-orange-700 hover:bg-blue-dark text-white  py-2 px-4 rounded-lg mt-3 hover:bg-orange-600"
      >
        {" "}
        Clear
      </button>
    </div>
  );
}

export default UserBio;

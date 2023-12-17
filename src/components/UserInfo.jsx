import { useContext } from "react";
import UserContext from "../contexts/userContext";

function UserInfo() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Please Check again</div>;
  }
  return <div>Hello {user.username}</div>;
}

export default UserInfo;

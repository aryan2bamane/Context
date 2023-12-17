import UserBio from "./components/UserBio";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <>
      <div className=" m-0 p-0 flex flex-col h-screen w-screen bg-sky-400 justify-center items-center">
        <UserBio />
        <UserInfo />
      </div>
    </>
  );
}

export default App;

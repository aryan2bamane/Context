import UserBio from "./components/UserBio";
import UserCard from "./components/UserCard";
import UserContextProvider from "./contexts/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="  py-20 flex flex-col h-screen w-screen bg-sky-400 justify-start items-center">
        <UserBio />

        <UserCard />
      </div>
    </UserContextProvider>
  );
}

export default App;

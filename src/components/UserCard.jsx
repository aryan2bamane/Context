import { useContext } from "react";
import UserContext from "../contexts/userContext";

function UserCard() {
  const { user } = useContext(UserContext);

  return (
    <div className="w-full justify-center flex ">
      <h1>Preview : </h1>
      <div className="bg-orange-200 min-h-min  w-2/3 p-10 rounded-3xl my-5">
        <div className="flex items-center my-5">
          <img className="h-24 w-24 mx-5 rounded-full" src="/adi.png" alt="" />
          <h1 className="font-mono text-4xl"> Meet{user.username},</h1>
        </div>
        <div id="details" className="text-2xl">
          <p>
            <span className="mx-10"></span>
            {user.username} is a {user.age} years old lively third-year B.Tech
            student, effortlessly showcases his skills as a quick learner and a
            natural problem solver. He is quite the ace when it comes to
            programming and web development, displaying his technical prowess.
            But hey, {user.username} is not just about coding; he have got this
            knack for leading teams through different challenges. When he is not
            buried in code, you will catch {user.username} out and about in
            nature, trekking and capturing its beauty through his lens. And oh,
            he is also a gaming enthusiast diving headfirst into those immersive
            video game worlds where strategy meets fun. {user.username} have mix
            of diverse interests and skills that paints him as someone ready to
            conquer any challenge. Overall, Whether it`&#39;`s technology or
            exploring the great outdoors,
            {user.username} have got that perfect blend that sets him up for
            success.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;

import Createprofile from "../../components/players/Createprofile";

export default function Lobby() {
  const admin = true;
  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-main">
      <Createprofile></Createprofile>
    </div>
  );
}

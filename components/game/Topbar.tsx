import Btn from "../../components/default/Btn";
import { variation as t } from "../../components/default/Btn";

export default function Topbar({
  time,
  round,
  roomname,
}: {
  time: number;
  round: string;
  roomname: string;
}) {
  return (
    <div className="flex items-center bg-white text-white bg-opacity-10 justify-between rounded-2xl mb-4 py-2 px-8">
      <div className="flex items-center">
        <h3 className="font-semibold text-xl mr-3 p-2 bg-blue-500 rounded-full">
          {time}s
        </h3>
        <h3 className="font-semibold text-xl">round {round}</h3>
      </div>
      <h3 className="font-bold text-2xl">{roomname}</h3>
      <Btn
        type={t.Danger}
        content="Leave"
        click={() => {
          console.log("leave");
        }}
      ></Btn>
    </div>
  );
}

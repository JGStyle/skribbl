import CanvasUI from "../components/CanvasUI";
import Btn from "../components/default/Btn";
import { variation as t } from "../components/default/Btn";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-main">
      <h1 className="text-white">test</h1>
      <CanvasUI />
      <div>
        <Btn click={() => console.log("t")} type={t.Dark} content="dark"></Btn>
        <Btn
          click={() => console.log("t")}
          type={t.Light}
          content="light"
        ></Btn>
        <Btn
          click={() => console.log("t")}
          type={t.Success}
          content="success"
        ></Btn>
        <Btn
          click={() => console.log("t")}
          type={t.Danger}
          content="danger"
        ></Btn>
      </div>
    </div>
  );
}

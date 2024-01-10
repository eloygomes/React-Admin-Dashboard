import ChartBox from "../../components/chatbot/ChartBox";
import TopBox from "../../components/topBox/TopBox";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox />
      </div>
      <div className="box box3">
        <ChartBox />
      </div>
      <div className="box box4">
        <ChartBox />
      </div>
      <div className="box box5">
        <ChartBox />
      </div>
      <div className="box box6">BOX6</div>
      <div className="box box7">BOX7</div>
      <div className="box box8">BOx8</div>
      <div className="box box9">BOX9</div>
    </div>
  );
};

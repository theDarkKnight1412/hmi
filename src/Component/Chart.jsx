import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Link } from "react-router-dom";
const Chart = ({ titleInChart, timestamp, linkTo}) => {
  return (
    <div className=" w-full mt-5 h-[58vh] shadow-xl bg-[white] rounded-lg">
      <div className="w-[90%] m-auto h-[58vh]">
        <div className="flex justify-center">
          <p className="inline text-3xl font-bold py-3 uppercase text-[#0AA89A]">
            Response System {titleInChart}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[100vh]">
            <Line data={timestamp} />
          </div>
          <Link to={linkTo}>
            <button className="bg-[#0AA89A] hover:bg-[#15dbcb] text-white p-2 rounded-lg "> {titleInChart} Chart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Chart;

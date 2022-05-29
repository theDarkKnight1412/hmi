import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Box = ({ title, valueParameter }) => {
  const value = 1;
  return (
    <div className="w-full">
      <div className="h-[30vh] bg-[white] shadow-xl rounded-lg">
        <div className="w-[90%] m-auto h-[30vh]">
          <div>
            <p className="text-[#0AA89A] text-center font-bold py-4 uppercase">
              {title}
            </p>
            <div></div>
            <div></div>
            <div className="w-full flex justify-center">
              <div className="w-[22vh]">
                <CircularProgressbar
                  styles={buildStyles({
                      pathColor:`#0AA89A`,
                      textColor:`#0AA89A`
                  })}
                  value={valueParameter}
                  maxValue={10}
                  text={valueParameter}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;

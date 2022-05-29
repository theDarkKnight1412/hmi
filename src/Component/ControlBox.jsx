import React from "react";
const ControlBox = ({
  kp,
  ti,
  td,
  pidMode,
  changeValve1,
  changeValve2,
  valve1,
  valve2,
  isPidMode,
  recording,
  isRecording,
  statusPID,
  statusValve1,
  statusValve2

}) => {
  return (
    <div className="w-full text-[#0AA89A] ">
      <div className="w-[95%] h-[90vh] shadow-xl m-auto bg-white rounded-lg">
        <div>
          <p className="font-bold py-4 uppercase ml-6 text-[#0AA89A] ">
            Control Box
          </p>
          <div className=" ">
            <div className="border-t-2 border-[#0AA89A] w-[80%] h-[25vh] m-auto">
              <div className="">
                <p className="pt-4 font-bold ">Parameter Value:</p>
              </div>
              <div className="flex py-1 pt-2 gap-6">
                <div className="m-2">Kp</div>
                <div className="m-2">{kp}</div>
              </div>
              <div className="flex py-1 gap-7">
                <div className="m-2">Ki</div>
                <div className="m-2">{ti}</div>
              </div>
              <div className="flex py-1 gap-7">
                <div className="m-2">Kd</div>
                <div className="m-2">{td}</div>
              </div>
            </div>
            <div className="w-[80%] m-auto h-[30vh]">
              <p className="font-bold py-2">Mode:</p>
              <div className="flex justify-center">
                <button
                  onClick={isPidMode}
                  className="m-2 px-2 py-1 hover:bg-[#15dbcb] bg-[#0AA89A] text-white rounded-md"
                >
                  {!statusPID ? "Set Manual Mode" : "Set PID MODE"}
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={changeValve1}
                  className="m-2 border-2 rounded-md px-2"
                >
                  {!statusValve1 ? " Close Valve 1" : " Open Valve 1"}
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={changeValve2}
                  className="m-2 border-2 rounded-md px-2"
                >
                  {!statusValve2 ? "Close Valve 2" : "Open Valve 2"}
                </button>
              </div>
              <div className="flex justify-center">
                <button onClick={recording} className="m-2 border-2 rounded-md px-2">
                  {isRecording ? "Start Recording" : "Stop Recording"}
                </button>
              </div>
            </div>
            <div className="w-[80%] m-auto h-[28vh]">
              <p className="font-bold py-2">Status:</p>
              <div className="flex p-3 gap-5">
                <div>Control Valve 1</div>
                <div>{!statusValve1 ? "Opened" : "Closed"}</div>
              </div>
              <div className="flex p-3 gap-5">
                <div>Control Valve 2</div>
                <div>{!statusValve2 ? "Opened" : "Closed"}</div>
              </div>
              <div className="flex p-3 gap-[3.6rem]">
                <div>PID Mode</div>
                <div>{statusPID ? "Non Active" : "Active"}</div>
              </div>
              <div className="flex p-3 gap-[1.7rem]">
                <div>Manual Mode</div>
                <div>{!statusPID ? "Non Active" : "Active"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ControlBox;
import React, { useEffect, useState } from "react";
import Box from "../Component/Box";
import Chart from "../Component/Chart";
import ControlBox from "../Component/ControlBox";
import { ref, onValue, set } from "firebase/database";
import { db } from "../Firebase";
import { Routes, Route, Link } from "react-router-dom";

const Content = () => {
  const [pidMode, setPidMode] = useState(null);
  const [valve1, setValve1] = useState(null);
  const [valve2, setValve2] = useState(null);
  const [kp, setKp] = useState(0);
  const [ti, setTi] = useState(0);
  const [td, setTd] = useState(0);
  const [levelMixed, setLevelMixed] = useState(0);
  const [levelOil, setLevelOil] = useState(0);
  const [statusPID, setStatusPID] = useState(null);
  const [statusValve1, setStatusValve1] = useState(null);
  const [statusValve2, setStatusValve2] = useState(null);
  const [arr1, setArr1] = useState([]);
  const [arr2, setArr2] = useState([]);
  const [date1, setDate1] = useState([]);
  const [date2, setDate2] = useState([]);
  const [timestamp, setTimeStamp] = useState({
    labels: arr1.map((arr) => arr),
    datasets: [
      {
        label: "Level Air",
        data: date1.map((arr) => arr),
      },
    ],
  });
  const [timestamp2, setTimeStamp2] = useState({
    labels: arr2.map((arr) => arr),
    datasets: [
      {
        label: "Level Air",
        data: date2.map((arr) => arr),
      },
    ],
  });
  const [isRecording, setIsRecording] = useState(true);

  const isPidMode = () => {
    setPidMode(!pidMode);
  };
  const changeValve1 = () => {
    setValve1(!valve1);
  };
  const changeValve2 = () => {
    setValve2(!valve2);
  };
  const recording = () => {
    console.log(isRecording);
    setIsRecording(!isRecording);
  };
  const templateReadWrite = (value, path) => {
    if (undefined) {
      console.log("masih dalam keadaan undefined");
      function writeUserData() {
        set(ref(db, path), {
          mode: value,
        });
      }
      writeUserData();
    } else if (!value) {
      console.log("read pid berjalan");
      function writeUserData() {
        set(ref(db, path), {
          mode: !value,
        });
      }
      writeUserData();
    } else {
      function writeUserData() {
        console.log("!read pid berjalan");
        set(ref(db, path), {
          mode: !value,
        });
      }
      writeUserData();
    }
  };
  useEffect(() => {
    const statPidRef = ref(db, "status/pidMode");
    onValue(statPidRef, (snapshot) => {
      const data = snapshot.val();
      setStatusPID(data.mode);
      console.log(statusPID);
    });
    templateReadWrite(statusPID, "status/pidMode");
  }, [pidMode]);
  useEffect(() => {
    const statValve1Ref = ref(db, "status/controlValve1");
    onValue(statValve1Ref, (snapshot) => {
      const data = snapshot.val();
      setStatusValve1(data.mode);
      console.log(statusValve1);
    });
    templateReadWrite(statusValve1, "status/controlValve1");
  }, [valve1]);
  useEffect(() => {
    const statValve2Ref = ref(db, "status/controlValve2");
    onValue(statValve2Ref, (snapshot) => {
      const data = snapshot.val();
      setStatusValve2(data.mode);
      console.log(statusValve2);
    });
    templateReadWrite(statusValve2, "status/controlValve2");
  }, [valve2]);

  useEffect(() => {
    const kpRef = ref(db, "parameterValue/Kp");
    const tiRef = ref(db, "parameterValue/Ti");
    const tdRef = ref(db, "parameterValue/Td");
    const mixedRef = ref(db, "levelValue/valueMixed/value");
    const oilRef = ref(db, "levelValue/valueOil/value");

    onValue(kpRef, (snapshot) => {
      const data = snapshot.val();
      setKp(data);
    });
    onValue(tiRef, (snapshot) => {
      const data = snapshot.val();
      setTi(data);
    });
    onValue(tdRef, (snapshot) => {
      const data = snapshot.val();
      setTd(data);
    });
    onValue(mixedRef, (snapshot) => {
      const data = snapshot.val();
      setLevelMixed(data);
    });
    onValue(oilRef, (snapshot) => {
      const data = snapshot.val();
      setLevelOil(data);
    });
  }, [kp, ti, td]);
  useEffect(() => {
    setArr1([...arr1, levelMixed]);
    setDate1([...date1, Date.now()]);
    setTimeStamp({
      labels: date1.map((arr) => arr),
      datasets: [
        {
          label: "Level Mixed",
          data: arr1.map((arr) => arr),
        },
      ],
    });
  }, [date1]);
  useEffect(() => {
    setArr2([...arr2, levelOil]);
    setDate2([...date2, Date.now()]);
    setTimeStamp2({
      labels: date2.map((arr) => arr),
      datasets: [
        {
          label: "Level Oil",
          data: arr2.map((arr) => arr),
        },
      ],
    });
  }, [levelOil]);
  return (
    <div className="w-[90%] h-[95vh] m-auto">
      <div className="flex w-[95%] m-auto">
        <div className="flex-[4] mt-6 h-[90vh]">
          <div className="flex justify-evenly gap-2">
            <Box title="Level Mixed Value" valueParameter={levelMixed} />
            <Box title="Level Oil Value" valueParameter={levelOil} />
            <Box title="" />
          </div>
          <div>
            <Routes>
              <Route
                path="/"
                element={
                  <Chart
                    arr1={arr1}
                    arr2={arr2}
                    titleInChart={"Mixed"}
                    timestamp={timestamp}
                    linkTo={"/oil"}
                  />
                }
              />
              <Route
                path="/oil"
                element={
                  <Chart
                    arr1={arr1}
                    arr2={arr2}
                    titleInChart={"Oil"}
                    timestamp={timestamp2}
                    linkTo={"/"}
                  />
                }
              />
            </Routes>
          </div>
        </div>
        <div className="flex-[1] mt-6">
          <ControlBox
            kp={kp}
            ti={ti}
            td={td}
            pidMode={pidMode}
            changeValve1={changeValve1}
            changeValve2={changeValve2}
            valve1={valve1}
            valve2={valve2}
            statusPID={statusPID}
            statusValve1={statusValve1}
            statusValve2={statusValve2}
            isPidMode={isPidMode}
            recording={recording}
            isRecording={isRecording}
          />
        </div>
      </div>
    </div>
  );
};
export default Content;

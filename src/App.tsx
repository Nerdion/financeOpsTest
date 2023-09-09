import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState<number[]>([0, 0, 0]);
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((old) => {
        let temp = [...old];
        temp[counter] += 1;
        return temp;
      });
      setCounter((oldIdx) => (oldIdx + 1) % count.length);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  const updateCount = (idx: number) => {
    setCount((old) => {
      let temp = [...old];
      temp[idx] += 1;
      return temp;
    });
  };

  return (
    <>
      {count.map((eachBtn, idx) => {
        return (
          <div key={idx + "btn"}>
            <p>{eachBtn}</p>
            <button
              onClick={() => {
                updateCount(idx);
              }}
            >
              click {eachBtn}
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
import Axios from "axios";
function App() {
  const [num, SetNum] = useState([]);

  
  const FindPrimeNumber = async () => {
    try {
      const res = await Axios.get("http://20.244.56.144/numbers/primes");
      SetNum([...res.data.numbers]);
    } catch (error) {
      console.log(error);
    }
  };
  
  const FindFibinocciNumber = async () => {
    try {
      const res = await Axios.get("http://20.244.56.144/numbers/fibo");
      SetNum([...res.data.numbers]);
    } catch (error) {
      console.log(error);
    }
  };
  
  const findEvenNumber = async () => {
    try {
      const res = await Axios.get("http://20.244.56.144/numbers/even");
      SetNum([...res.data.numbers]);
    } catch (error) {
      console.log(error);
    }
  };
  const findRandomNumber = async () => {
    try {
      const res = await Axios.get("http://20.244.56.144/numbers/rand");
      SetNum([...res.data.numbers]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <div>
          <h1>Average Calculator</h1>
          <h3>Note:</h3>
          <ul>
          <li>P-Prime</li>
          <li>F-Fibinocci</li>
          <li>E-EVEN</li>
          <li>R-Random </li>
          </ul>
        </div>
        <div className="buttons">
          <button className="btn" onClick={FindPrimeNumber}>P</button>
          <button className="btn" onClick={FindFibinocciNumber}>F</button>
          <button className="btn" onClick={findEvenNumber}>E</button>
          <button className="btn" onClick={findRandomNumber}>R</button>
        </div>
        <div className="display ">
          {num.map((result) => {
            return (
              <div>
                {result}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';

function App() {

  const [height, setHeight] = useState();
  const [mass, setMass] = useState();
  const [bmi, setBmi] = useState();

  const calculate = (e) => {
    e.preventDefault();
    const formValid = +height > 0 && +mass > 0;
    if (!formValid) {
      return;
    }
    const bmi = (+mass / (+height) ** 2) * 10000;
    setBmi(bmi.toFixed(4));
    setHeight('');
    setMass('');
  };

  return (
    <>
      <div className="App">
        <form onSubmit={calculate}>
          <div className='divContainer'>
            <h1 className="label">BMI Calculator</h1>
            <label className="label">Height :  </label>
            <input placeholder='Enter height in CM' value={height} onChange={(e) => setHeight(e.target.value)} /><br />
            <label className="label">Weigth : </label>
            <input placeholder='Enter Weight in Kg' value={mass} onChange={(e) => setMass(e.target.value)} /><br />
            <button className="btn" type="submit">calculate</button>

            <p className="label">BMI : {bmi}</p>
          </div>
          <div className='paraDiv'>
            <strong>BMI Categories :</strong>
            <p>Underweight = Less than 18.5</p>
            <p>Normal weight = 18.5 to 24.9</p>
            <p>Overweight = 25 to 29.9</p>
            <p> Obesity = 30 or greater</p>
          </div>

        </form>
      </div>

    </>
  );
}

export default App;

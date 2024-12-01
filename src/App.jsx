import React, { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [mortgageType, setMortgageType] = useState("repayment");
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);

  const calculateRepayments = () => {
    const monthlyRate = rate / 100 / 12;
    const totalMonths = term * 12;

    let calculatedMonthlyPayment = 0;

    if (mortgageType === "repayment") {
      calculatedMonthlyPayment =
        (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalMonths));
    } else {
      calculatedMonthlyPayment = amount * monthlyRate;
    }

    const calculatedTotalRepayment =
      mortgageType === "repayment"
        ? calculatedMonthlyPayment * totalMonths
        : calculatedMonthlyPayment * totalMonths;

    setMonthlyPayment(calculatedMonthlyPayment.toFixed(2));
    setTotalRepayment(calculatedTotalRepayment.toFixed(2));
  };

  return (
    <div>
      <div className="container calculator_container">
        <div className="calculator">
          <div className="mortgage_calculator">
            <div className="container morgage_container">
              <div className="paragraf_mort">
                <h2>Mortgage Calculator</h2>
                <span
                  onClick={() => {
                    setAmount("");
                    setTerm("");
                    setRate("");
                    setMonthlyPayment("");
                    setTotalRepayment("");
                  }}
                >
                  Clear All
                </span>
              </div>
              <div className="mort_inputs">
                <h4>Mortgage Amount</h4>
                <div className="amount">
                  <span>£</span>
                  <input
                    id="amount"
                    type="number"
                    placeholder="300,000"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                  />
                </div>
                <div className="paragrafs">
                  <h4>Mortgage Term</h4>
                  <h4>Interest rate</h4>
                </div>
                <div className="term">
                  <div className="left">
                    <input
                      id="term"
                      type="number"
                      placeholder="25"
                      value={term}
                      onChange={(e) => setTerm(Number(e.target.value))}
                    />
                    <span>years</span>
                  </div>
                  <div className="right">
                    <input
                      id="rate"
                      type="number"
                      placeholder="5.25"
                      value={rate}
                      onChange={(e) => setRate(Number(e.target.value))}
                    />
                    <span>%</span>
                  </div>
                </div>
              </div>
              <div className="type">
                <h4>Mortgage Type</h4>
                <div className="repayment">
                  <input
                    type="radio"
                    name="Repayment"
                    id="repayment"
                    checked={mortgageType === "repayment"}
                    onChange={() => setMortgageType("repayment")}
                  />
                  <label htmlFor="repayment">Repayment</label>
                </div>

                <div className="only">
                  <input
                    type="radio"
                    name="Repayment"
                    id="only"
                    checked={mortgageType === "interestOnly"}
                    onChange={() => setMortgageType("interestOnly")}
                  />
                  <label htmlFor="only">Interest Only</label>
                </div>
              </div>
              <div className="button">
                <button onClick={calculateRepayments}>
                  <div className="icon_button">
                    <i className="fa-solid fa-calculator"></i>
                  </div>
                  <div className="title_button">Calculate Repayments</div>
                </button>
              </div>
            </div>
          </div>
          <div className="results_calculator">
            <div className="container results_conainer">
              <h2>Your results</h2>
              <p>
                Your results are shown below based on the information you
                provided. To adjust the results, edit the form and click
                “calculate repayments” again.
              </p>
              <div className="block">
                <div className="block_top">
                  <h3>Your monthly repayments</h3>
                  <span>£{monthlyPayment}</span>
                </div>
                <div className="block_bottom">
                  <h3>Total you'll repay over the term</h3>
                  <span>£{totalRepayment}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

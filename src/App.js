import bg from "./assets/bg-main-desktop.png";

import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";

import { useState } from "react";

function App() {
  const [cardName, setCardName] = useState("John Doe");
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [month, setMonth] = useState("00");
  const [date, setDate] = useState("00");
  const [cvc, setCvc] = useState("000");

  return (
    <>
      <div
        className="h-screen bg-no-repeat font-['Space_Grotesk']"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container mx-auto grid grid-cols-2">
          <div className="flex flex-col gap-6 w-fit h-screen justify-center relative ml-10">
            <CardFront
              name={cardName}
              cardNum={cardNumber}
              expiry={`${month}/${date}`}
            />
            <CardBack cvv={cvc} />
          </div>
          <div className="flex flex-col gap-4 self-center max-w-md">
            <label htmlFor="card-holder">CARDHOLDER NAME</label>
            <input
              className="border px-2 py-1"
              type="text"
              placeholder="e.g Jhon Doe"
              onChange={(e) => {
                if (e.target.value === "") {
                  setCardName("John Doe");
                } else {
                  setCardName(e.target.value);
                }
              }}
            />

            <label htmlFor="">CARD NUMBER</label>
            <input
              className="border px-2 py-1"
              type="text"
              maxLength={16}
              placeholder="eg. 1234 5678 1234"
              onChange={(e) => {
                if (e.target.value === "") {
                  setCardNumber("0000 0000 0000 0000");
                } else {
                  let val = e.target.value;
                  let newVal = [];
                  val.split("").forEach((e, i) => {
                    if (i % 4 === 0) {
                      newVal.push(" ");
                    }
                    newVal.push(e);
                  });
                  val = newVal.join("");
                  setCardNumber(val);
                }
              }}
            />

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <label htmlFor="Expiry">Expiry Date</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    className="border px-2 py-1"
                    type="text"
                    maxLength={2}
                    placeholder="01"
                    onChange={(e) => {
                      setMonth(e.target.value);
                    }}
                  />
                  <input
                    className="border px-2 py-1"
                    type="text"
                    maxLength={2}
                    placeholder="01"
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="cvc">CVC</label>
                <input
                  className="border px-2 py-1"
                  type="text"
                  maxLength={3}
                  placeholder="eg. 123"
                  onChange={(e) => {
                    setCvc(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

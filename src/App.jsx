import { useCallback, useEffect, useState } from "react";
import { getCurrencyList, getCurrencyValue } from "./api/currency";
import bgImg from "./assets/bg.png";
import InputBox from "./components/InputBox";

function App() {
   const [amount, setAmount] = useState(100);
   const [from, setFrom] = useState("INR");
   const [to, setTo] = useState("USD");
   const [convertedAmount, setConvertedAmount] = useState(0);
   const [options, setOptions] = useState([]);

   useEffect(() => {
      const getList = async () => {
         try {
            const list = await getCurrencyList();
            setOptions(list);
         } catch (error) {
            console.error("Error fetching currency list:", error);
         }
      };
      getList();
   }, []);

   const swap = () => {
      setFrom(to);
      setTo(from);
   };

   const convert = useCallback(async () => {
      try {
         const data = await getCurrencyValue(from);
         const rate = data.rates[to.toUpperCase()];

         if (rate) {
            setAmount(amount);
            const convertedValue = (amount * rate).toFixed(4);
            // Remove zeros and decimal point if not needed
            const cleanValue = parseFloat(convertedValue).toString();
            setConvertedAmount(cleanValue);
         } else if (from === to) {
            setConvertedAmount(amount);
         }
      } catch (error) {
         console.error("Error converting currency:", error);
      }
   }, [from, to, amount]);

   useEffect(() => {
      if (from && amount >= 0) {
         convert();
      }
   }, [from, amount, convert]);

   return (
      <div
         className="relative w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
         style={{ backgroundImage: `url(${bgImg})` }}
      >
         <div className="w-fit relative z-10 overflow-hidden">
            {/* Animated Glow Effect */}
            <div className="absolute -z-1 opacity-90 w-[100svw] h-[100svh] -left-[calc(100vw/3)] -top-[calc(100vw/3)] pointer-events-none">
               <div className="glow-animation -z-1"></div>
            </div>

            <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-[3px] bg-white/30 shadow-xl z-2">
               <form
                  onSubmit={(e) => {
                     e.preventDefault();
                     convert();
                  }}
               >
                  <div className="w-full mb-1">
                     <InputBox
                        label="From"
                        amount={amount}
                        currencyOption={options}
                        onCurrencyChange={(currency) => setFrom(currency)}
                        selectCurrency={from}
                        onAmountChange={(val) => setAmount(val)}
                     />
                  </div>

                  <div className="relative w-full h-0.5">
                     <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 bg-white rounded-2xl hover:bg-gray-100 border-gray-100 flex justify-center items-center text-white cursor-pointer transition-all"
                        onClick={swap}
                     >
                        <svg
                           className="size-12"
                           focusable="false"
                           viewBox="0 0 24 24"
                        >
                           <path
                              transform="rotate(90 12 12)"
                              stroke="#155dfc"
                              strokeWidth="1"
                              fill="#155dfc"
                              d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"
                           ></path>
                        </svg>
                     </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                     <InputBox
                        label="To"
                        amount={convertedAmount}
                        currencyOption={options}
                        onCurrencyChange={(currency) => setTo(currency)}
                        selectCurrency={to}
                        amountDisable
                     />
                  </div>
                  <button
                     type="submit"
                     className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-pointer transition-all hover:bg-blue-700"
                  >
                     Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
}

export default App;

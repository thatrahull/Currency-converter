import { useId } from "react";

const currencyFlags = {
   USD: "🇺🇸",
   EUR: "🇪🇺",
   GBP: "🇬🇧",
   JPY: "🇯🇵",
   CNY: "🇨🇳",
   INR: "🇮🇳",
   ARS: "🇦🇷",
   BRL: "🇧🇷",
   CAD: "🇨🇦",
   CLP: "🇨🇱",
   COP: "🇨🇴",
   CRC: "🇨🇷",
   CUP: "🇨🇺",
   DOP: "🇩🇴",
   GTQ: "🇬🇹",
   GYD: "🇬🇾",
   HTG: "🇭🇹",
   HNL: "🇭🇳",
   JMD: "🇯🇲",
   MXN: "🇲🇽",
   NIO: "🇳🇮",
   PAB: "🇵🇦",
   PEN: "🇵🇪",
   PYG: "🇵🇾",
   SRD: "🇸🇷",
   TTD: "🇹🇹",
   UYU: "🇺🇾",
   VES: "🇻🇪",
   ALL: "🇦🇱",
   AMD: "🇦🇲",
   AZN: "🇦🇿",
   BAM: "🇧🇦",
   BGN: "🇧🇬",
   BYN: "🇧🇾",
   CHF: "🇨🇭",
   CZK: "🇨🇿",
   DKK: "🇩🇰",
   GEL: "🇬🇪",
   HRK: "🇭🇷",
   HUF: "🇭🇺",
   ISK: "🇮🇸",
   MDL: "🇲🇩",
   MKD: "🇲🇰",
   NOK: "🇳🇴",
   PLN: "🇵🇱",
   RON: "🇷🇴",
   RSD: "🇷🇸",
   RUB: "🇷🇺",
   SEK: "🇸🇪",
   TRY: "🇹🇷",
   UAH: "🇺🇦",
   AFN: "🇦🇫",
   BDT: "🇧🇩",
   BTN: "🇧🇹",
   BND: "🇧🇳",
   KHR: "🇰🇭",
   HKD: "🇭🇰",
   IDR: "🇮🇩",
   IRR: "🇮🇷",
   IQD: "🇮🇶",
   ILS: "🇮🇱",
   JOD: "🇯🇴",
   KZT: "🇰🇿",
   KPW: "🇰🇵",
   KRW: "🇰🇷",
   KWD: "🇰🇼",
   KGS: "🇰🇬",
   LAK: "🇱🇦",
   LBP: "🇱🇧",
   MYR: "🇲🇾",
   MVR: "🇲🇻",
   MNT: "🇲🇳",
   MMK: "🇲🇲",
   NPR: "🇳🇵",
   OMR: "🇴🇲",
   PKR: "🇵🇰",
   PHP: "🇵🇭",
   QAR: "🇶🇦",
   SAR: "🇸🇦",
   SGD: "🇸🇬",
   LKR: "🇱🇰",
   SYP: "🇸🇾",
   TWD: "🇹🇼",
   TJS: "🇹🇯",
   THB: "🇹🇭",
   TMT: "🇹🇲",
   AED: "🇦🇪",
   UZS: "🇺🇿",
   VND: "🇻🇳",
   YER: "🇾🇪",
   DZD: "🇩🇿",
   AOA: "🇦🇴",
   BWP: "🇧🇼",
   BIF: "🇧🇮",
   XAF: "🇨🇲",
   CVE: "🇨🇻",
   KMF: "🇰🇲",
   CDF: "🇨🇩",
   DJF: "🇩🇯",
   EGP: "🇪🇬",
   ERN: "🇪🇷",
   ETB: "🇪🇹",
   GMD: "🇬🇲",
   GHS: "🇬🇭",
   GNF: "🇬🇳",
   KES: "🇰🇪",
   LSL: "🇱🇸",
   LRD: "🇱🇷",
   LYD: "🇱🇾",
   MGA: "🇲🇬",
   MWK: "🇲🇼",
   MRU: "🇲🇷",
   MUR: "🇲🇺",
   MAD: "🇲🇦",
   MZN: "🇲🇿",
   NAD: "🇳🇦",
   NGN: "🇳🇬",
   RWF: "🇷🇼",
   STN: "🇸🇹",
   SCR: "🇸🇨",
   SLL: "🇸🇱",
   SOS: "🇸🇴",
   ZAR: "🇿🇦",
   SSP: "🇸🇸",
   SDG: "🇸🇩",
   SZL: "🇸🇿",
   TZS: "🇹🇿",
   TND: "🇹🇳",
   UGX: "🇺🇬",
   XOF: "🇸🇳",
   ZMW: "🇿🇲",
   ZWL: "🇿🇼",
   AUD: "🇦🇺",
   FJD: "🇫🇯",
   NZD: "🇳🇿",
   PGK: "🇵🇬",
   SBD: "🇸🇧",
   TOP: "🇹🇴",
   VUV: "🇻🇺",
   WST: "🇼🇸",
   XCD: "🇪🇨",
   BBD: "🇧🇧",
   BSD: "🇧🇸",
   BHD: "🇧🇭",
};

function InputBox({
   label,
   amount,
   onAmountChange,
   onCurrencyChange,
   currencyOption = [],
   selectCurrency = "usd",
   amountDisable = false,
   currencyDisable = false,
   className = "",
}) {
   const amountInputId = useId();

   return (
      <div
         className={`bg-white/80 border-2 border-gray-200 p-3 rounded-lg ${className} flex ${className}`}
      >
         <div className="w-2/3">
            <label
               htmlFor={amountInputId}
               className="text-black/40 mb-2 inline-block"
            >
               {label}
            </label>
            <input
               id={amountInputId}
               className="outline-none w-full bg-transparent font-[Tahoma,_sans-serif] font-medium text-2xl text-gray-800 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
               type="number"
               inputMode="numeric"
               placeholder="Amount"
               disabled={amountDisable}
               value={amount}
               onChange={(e) => {
                  onAmountChange(Number(e.target.value));
                  e.target.value = Number(e.target.value);
               }}
            />
         </div>
         <div className="relative w-1/3 h-full flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 inline-block w-full pointer-events-none">
               Currency
            </p>
            <div className="relative gap-2 w-full h-full py-1 flex justify-center items-center bg-gray-100 rounded-xl outline-2 outline-gray-300 cursor-pointer z-1 overflow-hidden">
               <span className="text-3xl pointer-events-none">
                  {currencyFlags[selectCurrency] || "🏳️"}
               </span>
               <p className="relative font-medium text-xl">{selectCurrency}</p>
               <select
                  className="absolute inset-0 opacity-0 text-center"
                  value={selectCurrency}
                  onChange={(e) =>
                     onCurrencyChange && onCurrencyChange(e.target.value)
                  }
                  disabled={currencyDisable}
               >
                  {currencyOption.map((currency) => (
                     <option key={currency} value={currency}>
                        {currency}
                     </option>
                  ))}
               </select>
            </div>
         </div>
      </div>
   );
}

export default InputBox;

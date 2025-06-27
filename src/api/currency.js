import axios from "axios";

// fetches the latest exchange rates for a given currency
export async function getCurrencyValue(currency) {
   const response = await axios.get(
      `https://api.frankfurter.app/latest?from=${currency}`
   );
   if (response.status !== 200) {
      throw new Error("Failed to fetch currency data");
   }
   return response.data;
}

// fetches the latest exchange rates for a given currency
export async function getCurrencyList() {
   const response = await axios.get("https://api.frankfurter.app/currencies");
   if (response.status !== 200) {
      throw new Error("Failed to fetch currency list");
   }
   return Object.keys(response.data);
}

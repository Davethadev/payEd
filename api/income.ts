import { supabase } from "../supabase/api";

export default async function getIncome() {
  //   const data = (await axios.get("/api/Expenses/get-all-expense")) as Data;
  //   console.log("in here", data);
  //   return data.data.data.$values;

  let response = await supabase.from("Incomes").select("*");
  return response;
}

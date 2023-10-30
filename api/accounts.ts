import { supabase } from "../supabase/api";

export async function getAccountDetail(id: string) {
  // const data = (await axios.get(
  //   "https://payed-backend.onrender.com/api/Budgets/" + id
  // )) as Data;
  // console.log("in here", data);
  // return data.data.data;

  let response = await supabase
    .from("Account")
    .select("*")

    // Filters
    .eq("school", id)
    .select();

  return response;
}

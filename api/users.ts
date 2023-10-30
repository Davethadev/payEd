import { SupabaseClient } from "@supabase/supabase-js";
import { supabase } from "../supabase/api";

export async function getUser(
  id: string,
  client: SupabaseClient<any, "public", any>
) {
  // const data = (await axios.get(
  //   "https://payed-backend.onrender.com/api/Budgets/get-all-budget"
  // )) as Data;
  // console.log("in here", data);
  // return data.data.data.$values;

  console.log("in this place", id);
  let response = await client.from("PUsers").select("*").eq("user", id);
  return response;
}

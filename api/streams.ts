import { supabase } from "../supabase/api";
import axios from "./axios";

type Data = {
  data: {
    data: {
      $values: {
        $id: string;
        amount: number;
        budget_Id: string;
        budget_name: string;
        dateCreated: string;
        description: string;
        status: number;
        user_Id: string;
      }[];
    };
  };
};

export async function getStreams() {
  // const data = (await axios.get(
  //   "https://payed-backend.onrender.com/api/Budgets/get-all-budget"
  // )) as Data;
  // console.log("in here", data);
  // return data.data.data.$values;

  let response = await supabase.from("Streams").select("*");
  return response;
}

export async function getStreamIncome(id: string) {
  //   const data = (await axios.get("/api/Expenses/get-all-expense")) as Data;
  //   console.log("in here", data);
  //   return data.data.data.$values;

  let response = await supabase
    .from("Incomes")
    .select("*")
    .eq("stream", parseInt(id));
  return response;
}

export async function getStreamDetail(id: string) {
  // const data = (await axios.get(
  //   "https://payed-backend.onrender.com/api/Streams/" + id
  // )) as Data;
  // console.log("in here", data);
  // return data.data.data;

  let response = await supabase
    .from("Streams")
    .select("name, amount")

    // Filters
    .eq("id", id)
    .select();

  return response;
}

export async function createStream({
  name,
  description,
  school,
}: {
  name: string;
  description: string;
  school: string;
}) {
  const response = await supabase
    .from("Streams")
    .insert([
      {
        name: name,
        description: description,
        school: parseInt(school),
      },
    ])
    .select();

  return response;
}

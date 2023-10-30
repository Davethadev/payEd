import { useSupabaseClient } from "@supabase/auth-helpers-react";
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

export async function getBudgets() {
  // const data = (await axios.get(
  //   "https://payed-backend.onrender.com/api/Budgets/get-all-budget"
  // )) as Data;
  // console.log("in here", data);
  // return data.data.data.$values;

  let response = await supabase.from("Budgets").select("*");
  return response;
}

export async function getBudgetDetail(id: string) {
  // const data = (await axios.get(
  //   "https://payed-backend.onrender.com/api/Budgets/" + id
  // )) as Data;
  // console.log("in here", data);
  // return data.data.data;

  let response = await supabase
    .from("Budgets")
    .select("name")

    // Filters
    .eq("id", id)
    .select();

  return response;
}

export async function createBudget({
  name,
  description,
  school,
}: {
  name: string;
  description: string;
  school: string;
}) {
  const response = await supabase
    .from("Budgets")
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

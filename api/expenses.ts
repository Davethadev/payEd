import { supabase } from "../supabase/api";
import { getAccountDetail } from "./accounts";
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

export async function getExpenses(id: string) {
  //   const data = (await axios.get("/api/Expenses/get-all-expense")) as Data;
  //   console.log("in here", data);
  //   return data.data.data.$values;

  console.log("here in the stuff", id);
  let response = await supabase
    .from("Expenses")
    .select("*")
    .eq("budget", parseInt(id))
    .select();
  return response;
}

export async function getAllExpenses() {
  //   const data = (await axios.get("/api/Expenses/get-all-expense")) as Data;
  //   console.log("in here", data);
  //   return data.data.data.$values;

  let response = await supabase.from("Expenses").select("*");
  return response;
}

export async function payExpense({
  amount,
  id,
  budget_id,
}: {
  amount: string;
  id: string;
  budget_id: string;
}) {
  const response = await supabase
    .from("Expenses")
    .update([
      {
        status: true,
      },
    ])
    .eq("id", parseInt(id))
    .select();

  if (response.error) return response.error;

  let getbudget = await supabase
    .from("Budgets")
    .select("balance")
    .eq("id", parseInt(budget_id));

  if (getbudget.error) {
    return getbudget.error;
  }

  const budgets = await supabase
    .from("Budgets")
    .update([
      {
        balance: parseInt(getbudget.data[0].balance) - parseInt(amount),
      },
    ])
    .eq("id", parseInt(budget_id))
    .select();

  return budgets;
}

export async function createExpense({
  title,
  description,
  amount,
  date,
  budget_id,
}: {
  title: string;
  description: string;
  amount: string;
  date: Date | null;
  budget_id: string;
}) {
  const response = await supabase
    .from("Expenses")
    .insert([
      {
        title,
        description,
        amount: parseInt(amount),
        due_date: date,
        budget: budget_id,
      },
    ])
    .select();

  return response;
}

export async function seedBudget({
  amount,
  budget_id,
}: {
  amount: string;
  budget_id: string;
}) {
  let getbudget = await supabase
    .from("Budgets")
    .select("balance")
    .eq("id", parseInt(budget_id));

  if (getbudget.error) {
    return getbudget.error;
  }
  const response = await supabase
    .from("Budgets")
    .update([
      {
        balance: parseInt(getbudget.data[0].balance) + parseInt(amount),
      },
    ])
    .eq("id", parseInt(budget_id))
    .select();

  if (response.error) return response.error;

  const account = await getAccountDetail("1");

  if (account.error) return account.error;

  const updatedAccount = await supabase
    .from("Account")
    .update([
      {
        balance: parseInt(account.data[0].balance) - parseInt(amount),
      },
    ])
    .eq("id", account.data[0].id)
    .select();

  return updatedAccount;
}

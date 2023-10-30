import { supabase } from "../supabase/api";

export async function login() {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: "someone@email.com",
    password: "WvwPzofTYAdmAteaKgDd",
  });
}

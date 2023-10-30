import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Database } from "../supabase/supatypes";

export const supabaseClient = useSupabaseClient<Database>();

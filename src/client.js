import { createClient } from "@supabase/supabase-js";

const url = "https://dgtzekljkjppifbgnbtl.supabase.co";
const API_KEY = "sb_publishable_o0vWAOzKANgG95UIj___4A_EdC3OTwS";
export const supabase = createClient(url, API_KEY);

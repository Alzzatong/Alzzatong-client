import { createClient, SupabaseClient } from '@supabase/supabase-js'


// console.log(process.env.NEXT_PUBLIC_SUPABASE_URL)
// console.log(process.env.NEXT_PUBLIC_SUPABASE_KEY)
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_KEY || "";
const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || "";


export const supabase : SupabaseClient = createClient(supabaseUrl, supabaseKey)



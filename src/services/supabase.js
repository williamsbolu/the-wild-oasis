import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fwhxdkotpccplxpmezxz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3aHhka290cGNjcGx4cG1lenh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyNzIzMzcsImV4cCI6MjAxNTg0ODMzN30.XcYY3fsF5-mBx25mnbh8tNd7ilVwfdtGMf3IzqyJHD0";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;

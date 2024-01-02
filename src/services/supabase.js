/* eslint-disable no-unused-vars */
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://jtrjlfjjesjhjzqqryvw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0cmpsZmpqZXNqaGp6cXFyeXZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQxODc5NzksImV4cCI6MjAxOTc2Mzk3OX0.zZLomc3wWEH39W9WPXsda9gc1dMd4gDu8deEReHNmZw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

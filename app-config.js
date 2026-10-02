// PUBLIC config — safe to commit to the GitHub Pages repo.
// The anon key is a PUBLISHABLE key by design (Supabase auth + the Edge Function's JWT check
// protect the data). It is NOT a secret. The service-role key, the Google Drive / Apps Script
// links and all credentials live ONLY in the Edge Function's secrets, never here.
window.APP_CONFIG = {
  SUPABASE_URL: "https://izuryjcrbftttdzgfvwq.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_ojdQPnicDgd7z0WC9lOXAA_Rv4qHceq",
  DATA_FUNCTION: "dashboard-data"
};

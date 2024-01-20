const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://sqtqarjvzaxqttdjbgcp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxdHFhcmp2emF4cXR0ZGpiZ2NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1ODcxMzEsImV4cCI6MjAyMTE2MzEzMX0.kvXSP7Qdoy6pPWuS8AzNKTnuovVg7cqo45WF_cK1w2U";
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;

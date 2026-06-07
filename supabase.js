const SUPABASE_URL = 'https://rcmaxffaiqpswpalhwwh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjbWF4ZmZhaXFwc3dwYWxod3doIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxMjg1MjYsImV4cCI6MjA5NTcwNDUyNn0.MxDDI3mAlPHt4fdxQfW7eWoIyCp8pwVwiIyOv20uO1U';

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
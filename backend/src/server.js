require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();

app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

app.get("/api/transactions", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("transactions")
      .select(`
        transaction_id,
        amount,
        currency,
        payment_method,
        transaction_timestamp,
        status,
        risk_classification
      `)
      .order("transaction_timestamp", { ascending: false });

    if (error) {
      console.error(error);
      return res.status(500).json({
        error: "Failed to retrieve transactions"
      });
    }

    res.json({
      count: data.length,
      transactions: data
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Internal server error"
    });
  }
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "PayGuard API"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`PayGuard API running on port ${PORT}`);
});
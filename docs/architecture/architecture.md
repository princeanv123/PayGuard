# PayGuard — Technical Architecture

## 1. Product

PayGuard is an AI-enabled payment risk and dispute operations platform.

The initial implementation focuses on transaction monitoring and operational workflows using synthetic payment transaction data.

---

## 2. Sprint 1 Scope

Sprint 1 delivers the first transaction-management vertical slice:

- PAY-10 — Generate Synthetic Transaction Data
- PAY-7 — View Transaction List
- PAY-8 — Filter Transactions
- PAY-9 — View Transaction Details

### Sprint Goal

> Establish the PayGuard transaction foundation and deliver the first operational workflow for viewing, filtering, and inspecting payment transactions.

---

## 3. Architecture

PayGuard will use a modular web application architecture.

```text
                    PAYGUARD
                       |
          +------------+------------+
          |                         |
       Frontend                   Backend
     React + Vite              Node.js + Express
          |                         |
          +---------- REST ---------+
                       |
                 PostgreSQL
                  / Supabase
                       |
                Transaction Data
                       |
              Synthetic Dataset
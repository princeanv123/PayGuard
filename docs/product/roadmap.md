# PayGuard — Product Roadmap

## Roadmap Principle
Build the operational workflow progressively:

**Foundation → Monitor → Detect → Investigate → Assist → Resolve → Measure**

## MVP Roadmap

| Phase | Outcome | Scope | Jira Area |
|---|---|---|---|
| 1 | Transaction foundation | Synthetic data, list, search/filter, details | PAY-7 to PAY-10 |
| 2 | Identify attention-worthy transactions | Risk and exception detection | PAY-12 to PAY-14 |
| 3 | Investigation workspace | Investigation context and workflow | PAY-15 to PAY-17 |
| 4 | AI-assisted investigation | AI investigation capabilities | PAY-18 to PAY-21 |
| 5 | Resolution workflow | Case creation, management, resolution/reopen | PAY-22 onward |
| 6 | Operational measurement | Dashboard and analytics | PAY-33 onward |

## Sprint 1
**Goal:** Establish the PayGuard transaction foundation and deliver the first operational workflow for viewing, filtering, and inspecting payment transactions.

Current stories:
- PAY-10 — Generate Synthetic Transaction Data
- PAY-7 — View Transaction List
- PAY-8 — Filter Transactions
- PAY-9 — View Transaction Details

Current status:
- PAY-10 completed.
- PAY-7 backend API completed; frontend/search remain.

## Future Discovery Areas
Potential future integrations include xMatters, Jira, monitoring/Grafana/Prometheus, mobile, and additional payment-provider integrations. These should be validated before becoming committed roadmap items.

## Roadmap Governance
Review roadmap decisions using user evidence, outcome metrics, feasibility, dependencies, risk, effort, and strategic alignment.

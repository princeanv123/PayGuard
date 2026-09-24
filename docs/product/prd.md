# PayGuard — PRD

## Feature
**Transaction Monitoring Foundation**

## Related Jira Stories
- PAY-10 — Generate Synthetic Transaction Data
- PAY-7 — View Transaction List
- PAY-8 — Filter Transactions
- PAY-9 — View Transaction Details

## Problem Statement
Payment operations analysts need a fast way to locate and inspect payment transactions so they can identify transactions requiring attention and begin investigation.

## User Story
> As a payment operations analyst, I want to view payment transactions so that I can quickly identify transactions requiring attention.

## Goals
- Provide a reliable transaction data source.
- Display essential transaction information.
- Support transaction search.
- Support transaction filtering.
- Provide a path to detailed transaction inspection.

## Non-Goals
This release does not attempt to:
- automatically make fraud decisions,
- replace a payment processor,
- resolve cases automatically,
- provide the complete AI investigation workflow,
- implement all external integrations.

## Functional Requirements
### FR-1
Display Transaction ID.

### FR-2
Display Amount and Currency.

### FR-3
Display Payment Channel/Method.

### FR-4
Display Transaction Timestamp.

### FR-5
Display Payment Status.

### FR-6
Display Risk Level/Classification.

### FR-7
Allow transaction search.

### FR-8
Allow transaction filtering. Filtering is separately tracked under PAY-8.

## Data Model
Current transaction fields:
- id
- transaction_id
- amount
- currency
- transaction_timestamp
- merchant_name
- payment_method
- status
- risk_classification
- failure_reason
- created_at
- updated_at

## Technical Architecture
```text
React Frontend
      |
      v
Node.js / Express API
      |
      v
Supabase PostgreSQL
      |
      v
transactions
```

Current endpoint:

`GET /api/transactions`

## Acceptance Criteria
PAY-7:
1. Transaction ID displayed.
2. Amount and currency displayed.
3. Payment channel displayed.
4. Transaction timestamp displayed.
5. Payment status displayed.
6. Risk level displayed.
7. Analyst can search.
8. Analyst can filter.

PAY-10:
1. Successful transactions exist.
2. Failed transactions exist.
3. Pending transactions exist.
4. Reversed transactions exist.
5. Suspicious transactions exist.
6. Normal transactions exist.

## Open Questions
- Which attributes matter most for triage?
- Which search fields are used most?
- Which filters are essential?
- What context is needed before starting an investigation?

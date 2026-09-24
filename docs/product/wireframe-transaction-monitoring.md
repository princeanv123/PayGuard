# PayGuard — Transaction Monitoring Wireframe

## Screen: Transaction Monitoring

Low-fidelity wireframe for the first operational workflow delivered by PayGuard.

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│ PAYGUARD                                      🔔 Notifications   👤 Analyst │
├─────────────────────────────────────────────────────────────────────────────┤
│ Transaction Monitoring                                                      │
│                                                                             │
│ Search transactions  [ Transaction ID / Merchant / ... ]  [Search]          │
│                                                                             │
│ ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐                │
│ │ Total      │ │ Successful │ │ Failed     │ │ Suspicious │                │
│ │   200      │ │    120     │ │    40      │ │    35      │                │
│ └────────────┘ └────────────┘ └────────────┘ └────────────┘                │
│                                                                             │
│ Transactions                                                               │
│                                                                             │
│ ┌──────────┬──────────┬────────┬─────────┬────────────┬──────────┬────────┐│
│ │ ID       │ Amount   │ Curr.  │ Channel │ Timestamp  │ Status   │ Risk   ││
│ ├──────────┼──────────┼────────┼─────────┼────────────┼──────────┼────────┤│
│ │ PG-000048│ 10,158.19│ INR   │ CARD    │ 24 Sep...  │ SUCCESS  │ NORMAL ││
│ │ PG-000174│ 8,462.39 │ EUR   │ UPI     │ 24 Sep...  │ SUCCESS  │ NORMAL ││
│ │ PG-000156│ 20,080.46│ INR   │ CARD    │ 23 Sep...  │ SUCCESS  │ NORMAL ││
│ │ PG-000101│ 2,768.14 │ USD   │ BANK... │ 23 Sep...  │ FAILED   │ NORMAL ││
│ │ PG-000091│ 32,608.04│ GBP   │ WALLET  │ 23 Sep...  │ FAILED   │ SUSP.  ││
│ └──────────┴──────────┴────────┴─────────┴────────────┴──────────┴────────┘│
│                                                                             │
│                         [ 1 ] [ 2 ] [ 3 ] ... [ 20 ]                      │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Primary User Flow

```text
Open Transaction Monitoring
          ↓
Search transaction
          ↓
Review transaction list
          ↓
Identify status / risk
          ↓
Select transaction
          ↓
Transaction Details (PAY-9)
```

## PAY-7 Mapping

| UI element | Acceptance Criterion |
|---|---|
| Transaction ID column | AC1 |
| Amount + Currency columns | AC2 |
| Channel column | AC3 |
| Timestamp column | AC4 |
| Status column | AC5 |
| Risk column | AC6 |
| Search box | AC7 |
| Filtering controls | AC8 / PAY-8 |

## Design Principles

- Keep the transaction list as the primary workspace.
- Make transaction ID easy to scan.
- Keep amount and currency together.
- Make status and risk immediately visible.
- Search should be accessible without navigating away.
- Filtering will be implemented under PAY-8.
- Selecting a transaction will lead to PAY-9.
- Avoid unnecessary dashboard elements until validated by user needs.

## Scope Note

This is a low-fidelity product wireframe, not a final visual design. It is intended to communicate information architecture, workflow, and acceptance-criteria coverage before frontend implementation.

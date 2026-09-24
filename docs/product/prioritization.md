# PayGuard — Prioritization

## Framework
Use:
- Outcome-based prioritization
- RICE
- MoSCoW
- Dependency and technical-risk assessment

No framework replaces product judgment.

## RICE
**RICE = Reach × Impact × Confidence ÷ Effort**

Document assumptions behind every estimate.

## MoSCoW
- Must Have — required for the release outcome
- Should Have — valuable but deferrable
- Could Have — useful enhancement
- Won't Have — intentionally deferred this release

## MVP Example

| Capability | Current Release Role | Reason |
|---|---|---|
| Synthetic transaction data | Must Have | Enables development/testing |
| Transaction list | Must Have | Establishes monitoring workflow |
| Transaction filtering | Must Have | Enables triage |
| Transaction details | Must Have | Enables inspection |
| AI investigation | Later phase | Depends on investigation context |
| External alert integrations | Later phase | Depends on stable core workflow |

## Prioritization Questions
1. What problem does it solve?
2. Which outcome does it influence?
3. What evidence supports the problem?
4. How many users/workflows are affected?
5. What is the expected impact?
6. How confident are we?
7. What is the effort?
8. What dependencies exist?
9. What risk does it introduce?
10. What happens if we defer it?

## Reprioritization
Priorities should change when new evidence changes expected value, risk, dependency, or user need.

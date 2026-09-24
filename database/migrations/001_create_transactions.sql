-- PayGuard — PAY-10
-- Synthetic Transaction Data
-- Sprint 1

create table if not exists public.transactions (
    id uuid primary key default gen_random_uuid(),

    transaction_id text not null unique,

    amount numeric(18,2) not null
        check (amount >= 0),

    currency text not null
        check (char_length(currency) = 3),

    transaction_timestamp timestamptz not null,

    merchant_name text not null,

    payment_method text not null
        check (payment_method in (
            'CARD',
            'BANK_TRANSFER',
            'UPI',
            'WALLET'
        )),

    status text not null
        check (status in (
            'SUCCESSFUL',
            'FAILED',
            'PENDING',
            'REVERSED'
        )),

    risk_classification text not null
        check (risk_classification in (
            'NORMAL',
            'SUSPICIOUS'
        )),

    failure_reason text,

    created_at timestamptz not null default now(),

    updated_at timestamptz not null default now()
);

create index if not exists idx_transactions_timestamp
    on public.transactions (transaction_timestamp desc);

create index if not exists idx_transactions_status
    on public.transactions (status);

create index if not exists idx_transactions_risk
    on public.transactions (risk_classification);

create index if not exists idx_transactions_merchant
    on public.transactions (merchant_name);

-- Keep the table protected when accessed through the Supabase Data API.
alter table public.transactions enable row level security;

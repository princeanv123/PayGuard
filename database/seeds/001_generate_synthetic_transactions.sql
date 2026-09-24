-- PayGuard — PAY-10
-- Synthetic Transaction Data Generator
-- Sprint 1
--
-- Generates 200 realistic synthetic payment transactions.
-- No real customer or payment data is used.

insert into public.transactions (
    transaction_id,
    amount,
    currency,
    transaction_timestamp,
    merchant_name,
    payment_method,
    status,
    risk_classification,
    failure_reason
)
select
    'PG-' || lpad(gs::text, 8, '0') as transaction_id,

    round(
        (100 + random() * 49900)::numeric,
        2
    ) as amount,

    case (gs % 4)
        when 0 then 'INR'
        when 1 then 'USD'
        when 2 then 'EUR'
        else 'GBP'
    end as currency,

    now() - ((random() * 30)::int || ' days')::interval
        - ((random() * 24)::int || ' hours')::interval
        as transaction_timestamp,

    case (gs % 10)
        when 0 then 'NovaMart'
        when 1 then 'CloudCart'
        when 2 then 'UrbanPay'
        when 3 then 'QuickServe'
        when 4 then 'BlueRetail'
        when 5 then 'PrimeGoods'
        when 6 then 'MetroStore'
        when 7 then 'TechWorld'
        when 8 then 'GreenBasket'
        else 'GlobalShop'
    end as merchant_name,

    case (gs % 4)
        when 0 then 'CARD'
        when 1 then 'BANK_TRANSFER'
        when 2 then 'UPI'
        else 'WALLET'
    end as payment_method,

    case (gs % 10)
        when 0 then 'FAILED'
        when 1 then 'FAILED'
        when 2 then 'PENDING'
        when 3 then 'REVERSED'
        else 'SUCCESSFUL'
    end as status,

    case
        when gs % 7 = 0
          or gs % 11 = 0
        then 'SUSPICIOUS'
        else 'NORMAL'
    end as risk_classification,

    case (gs % 10)
        when 0 then 'INSUFFICIENT_FUNDS'
        when 1 then 'BANK_DECLINED'
        else null
    end as failure_reason

from generate_series(1, 200) as gs;

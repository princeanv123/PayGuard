import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch(
          'http://localhost:5000/api/transactions'
        )

        if (!response.ok) {
          throw new Error('Failed to retrieve transactions')
        }

        const data = await response.json()
        setTransactions(data.transactions)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTransactions()
  }, [])

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.transaction_id
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )

  const suspiciousCount = transactions.filter(
    (transaction) =>
      transaction.risk_classification.toLowerCase() === 'suspicious'
  ).length

  const failedCount = transactions.filter(
    (transaction) =>
      transaction.status.toLowerCase() === 'failed'
  ).length

  return (
    <main>
      <header>
        <div>
          <p>PayGuard</p>
          <h1>Transaction Monitoring</h1>
        </div>
      </header>

      <input
        type="text"
        placeholder="Search by transaction ID..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      {loading && <p>Loading transactions...</p>}

      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <div>
          <section className="summary-grid">
            <div className="summary-card">
              <span>Total Transactions</span>
              <strong>{transactions.length}</strong>
            </div>

            <div className="summary-card">
              <span>Suspicious</span>
              <strong>{suspiciousCount}</strong>
            </div>

            <div className="summary-card">
              <span>Failed</span>
              <strong>{failedCount}</strong>
            </div>
          </section>

          <p>
            Showing {filteredTransactions.length} of {transactions.length}{' '}
            transactions
          </p>

          <table>
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Amount</th>
                <th>Currency</th>
                <th>Payment Method</th>
                <th>Timestamp</th>
                <th>Status</th>
                <th>Risk</th>
              </tr>
            </thead>

            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.transaction_id}>
                  <td>{transaction.transaction_id}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.currency}</td>
                  <td>{transaction.payment_method}</td>
                  <td>{transaction.transaction_timestamp}</td>

                  <td>
                    <span
                      className={`status-badge status-${transaction.status.toLowerCase()}`}
                    >
                      {transaction.status}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`risk-badge risk-${transaction.risk_classification.toLowerCase()}`}
                    >
                      {transaction.risk_classification}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  )
}

export default App
import { useEffect, useState } from 'react'

function App() {
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/transactions')

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

  return (
    <div>
      <h1>PayGuard</h1>
      <h2>Transaction Monitoring</h2>

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
          <p>
  Showing{' '}
  {
    transactions.filter((transaction) =>
      transaction.transaction_id
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    ).length
  }{' '}
  of {transactions.length} transactions
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
              {transactions
  .filter((transaction) =>
    transaction.transaction_id
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )
  .map((transaction) => (
                <tr key={transaction.transaction_id}>
                  <td>{transaction.transaction_id}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.currency}</td>
                  <td>{transaction.payment_method}</td>
                  <td>{transaction.transaction_timestamp}</td>
                  <td>{transaction.status}</td>
                  <td>{transaction.risk_classification}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default App
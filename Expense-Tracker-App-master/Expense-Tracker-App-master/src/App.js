import './index.css';
import { Header, Balance, AccountSummary, History, Transactions } from './Components'

function App() {
  return (
      <div className="container">
          <Header/>
          <Balance />
          <AccountSummary />
          <History />
          <Transactions />
      </div>
  );
}

export default App;

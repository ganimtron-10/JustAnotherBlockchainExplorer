import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import Homepage from './components/Homepage';
import BlockPage from './components/BlockPage';
import TransactionPage from './components/TransactionPage';

function App() {
  return <Router>
    <Switch>
      <Route exact path="/">
        <Homepage></Homepage>
      </Route>
      <Route path="/block">
        <BlockPage></BlockPage>
      </Route>
      <Route path="/transaction">
        <TransactionPage></TransactionPage>
      </Route>
    </Switch>
  </Router>
}

export default App;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import BlockPage from './components/BlockPage';
import Homepage from './components/Homepage';

function App() {
  return <Router>
    <Switch>
      <Route exact path="/">
        <Homepage></Homepage>
      </Route>
      <Route path="/block">
        <BlockPage></BlockPage>
      </Route>
    </Switch>
  </Router>
}

export default App;

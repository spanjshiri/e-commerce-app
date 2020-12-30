import './App.css';
import './pages/homepage/homepage.component';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import NotFound from './pages/notFound/notFound.component';

const HatsPage: any = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/hats' component={HatsPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;

// Core
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

// Components
import SetListPage from "./pages/SetListPage";
import FavoriteListPage from "./pages/FavoriteListPage";
import Header from './components/Header';

// Styles
import './App.css';

function App() {
    const history = createBrowserHistory()
    return (
        <Router history={history}>
            <Header/>
            <Switch>
                <Route exact path="/sets" component={() => <SetListPage />} />
                <Route exact path="/favorites" component={() => <FavoriteListPage />} />
                <Redirect to="/sets" />
            </Switch>
        </Router>
    );
}

export default App;

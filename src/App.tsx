import React, {FC} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import './App.less';
import HomePage from "./pages/Home";
import Header from "./components/layouts/Header";
import DesktopLayout from "./components/layouts/DesktopLayout";
import LayoutWithSidebar from "./components/layouts/LayoutWithSidebar";
import KPIDashboardPage from "./pages/KPIDashboard";
import EPathshalaDashboard from "./pages/EPathshalaDashboard";
import MentoringDashboardPage from "./pages/MentoringDashboard";

const App: FC = () => (
    <div className="App">
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/kpi" component={KPIDashboardPage}/>
                <Route exact path="/e-pathshala" component={EPathshalaDashboard}/>
                <Route exact path="/mentoring" component={MentoringDashboardPage}/>
                <LayoutWithSidebar path={'/'} component={DesktopLayout}/>
                <Redirect
                    to={{
                        pathname: '/',
                    }}
                />
            </Switch>
        </Router>
    </div>
);

export default App;

import React from "react";
import { Router, Route ,Switch} from "dva/router";
import Main from "./pages/main/index.js";
import DailyLog from "./pages/dailylogDetail/index.js";
import Manage from "./pages/manage/index";
import Edit from "./pages/edit/index";
import EditDetail from "./components/editcard/detail";
import QuestionPool from "./pages/questionpoolDetail/index";
import QuestionPoolPC from './pages/questionpoolDetail_PC/index';
import SignInPage from "./pages/signIn/index";
import StatisticalPerson from "./pages/statisticalPerson/index";
import logDetailsPC from "./pages/logDetails_PC/index.js";
import DailyLogPC from './pages/dailylogdDetail_PC/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Main} exact></Route>
        <Route path="/manage" component={Manage}></Route>
        <Route path="/dailylog/:id" component={DailyLog}></Route>
        <Route path="/dailylogpc/:id" component={DailyLogPC}></Route>
        <Route path="/edit" component={Edit} exact></Route>
        <Route path="/edit/:id" component={EditDetail} exact></Route>
        <Route path="/questionpool/:id" component={QuestionPool}></Route>
        <Route path="/questionpoolpc/:id" component={QuestionPoolPC}></Route>
        <Route path="/logdetailsPC/:id" component={logDetailsPC}></Route>
        <Route path="/signIn/:campus?" component={SignInPage}></Route>
        <Route path="/statisticalPerson/:id" component={StatisticalPerson}></Route>
      </Switch>
    </Router>
  );
}

export default RouterConfig;

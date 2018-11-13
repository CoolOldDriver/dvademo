import React , {Component}from 'react';
import { connect } from "dva";
import Header from '../../components/layout/header/index'
import NavLayout from '../../components/layout/nav/index'
import Log from '../../components/log/index'
import QuestionPool from '../../components/question_pool/index';
import ScheduleTable from '../../components/scheduling_table/index';
import "./index.less";

class Main extends Component {
  constructor(){
    super();
    this.state={
    }
  }
  componentWillMount() {
  }

  componentDidMount() {
    this.getCampus();
  }

  //切换校区
  handleMenuClick(val) {
    const { dispatch } = this.props;
    dispatch({
      type: `example/switchCampus`,
      payload: {
        currentCampus: val
      }
    }).then(() => {
       const { changeCampus } =  this.props;
       if( changeCampus ) {
         window.location.reload();
       }else {
         return false;
       }
    })
  }

  getCampus() {
    const { dispatch } = this.props;
    dispatch({
      type: `example/getCampus`,
      payload: {}
    })
  }

  render() {
    const {navTab} = this.props;
      return (
        <div className="main">
            <Header handleClick={ this.handleMenuClick.bind(this) } currentCampus={this.props.currentCampus}/>
            <NavLayout/>
            {
              navTab === "dailylog" && <Log/>
            }
            {
              navTab === "questionpool" && <QuestionPool/>
            }
            {
              navTab === "scheduletable" && <ScheduleTable/>
            }
        </div>
      )
  }
}
function mapStateToProps(state) {
  return {
    navTab : state.example.navTab,
    isSuccess: state.example.isSuccess,
    changeCampus: state.example.changeCampus,
    currentCampus: state.example.campusInfo
  };
}
export default connect(mapStateToProps)(Main);

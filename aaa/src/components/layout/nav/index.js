import React from "react";
import { connect } from 'dva';
import $ from "jquery";
import "./index.less";
import { trans } from '../../../utils/i18n';

class LayoutNav extends React.Component {
  componentDidMount() {
      $('.layout_nav>div:eq(0)').css({
        color:"#3388DD"
      })
      $('.layout_nav>div:eq(0) a').css({
        color:"#3388DD"
      })
  }
  changeTab(value,index){
    $('.layout_nav>div').css({
      color:"rgba(0,0,0,0.65)"
    })
    $('.layout_nav>div a').css({
      color:"rgba(0,0,0,0.65)"
    })
    var aa = ".layout_nav>div:eq("+index+")";
    $(aa).css({
      color:"#3388DD"
    })
    var cc = ".layout_nav>div:eq("+index+") a";
    $(cc).css({
      color:"#3388DD"
    })
    const { dispatch } = this.props;
    dispatch({
        type:`example/save`,
        payload:{
          navTab:value
        }
    })
  }
  render() {
    return (
      <div className="layout_nav">
         <div className="nav" onClick={this.changeTab.bind(this,"dailylog",0)}>
              <div className="center" >
                  <a><i className="iconfont">&#xe606;</i></a>
                  <p>{trans('global.logbook','日志薄')}</p>
              </div>
          </div>
          <div className="nav" onClick={this.changeTab.bind(this,"questionpool",1)}>
              <div className="center" >
                  <a><i className="iconfont">&#xe60a;</i></a>
                  <p>{trans('global.questionPool','问题池')}</p>
              </div>
          </div>
          <div className="nav" onClick={this.changeTab.bind(this,"scheduletable",2)}>
              <div className="center" >
                  <a><i className="iconfont">&#xe68c;</i></a>
                  <p>{trans('global.scheduleList','排班表')}</p>
              </div>
          </div>
        <div>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
       // getDailyLogListData : state.example.getDailyLogListData,
    };
  }
export default connect(mapStateToProps)(LayoutNav);

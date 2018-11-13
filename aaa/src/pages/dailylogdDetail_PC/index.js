import React , {Component}from 'react';
import { connect } from "dva";
import { Link } from "dva/router";
import {Icon, Tabs, Dropdown, Menu} from 'antd';
import { DatePicker } from 'antd-mobile';
import moment from 'moment';
import "./index.less";
import WramWall from "../../components/warmwall_PC/index";
import Card from "../../components/question_pool/card";
import Banner from '../../components/banner/index';
import Read from './../../pages/read/index';
import { trans, locale } from '../../utils/i18n';
const TabPane = Tabs.TabPane;

class DailyLogPC extends Component {
  constructor(){
    super();
    var time = this.formatTime(new Date());
    this.state={
      packswitch:true,
      id: window.location.hash.slice(11),
      dayTime: '',
      formatDayTime: '',
      sendTime: '',
      tab: '1'
    }
  }
  componentDidMount(){
     this.getSource('',this.state.tab);
    
  }
  getSource(time,key){
    var obj = {};
    const hashID = window.location.hash.slice(11);
    if(!time){
      obj.id = hashID;
    }else{
      obj.id = hashID;
      obj.dateId = time;
    }
    const {  dispatch } = this.props;
    if(key == 1){
      dispatch({
          type: `example/getWarmWallForweek`,
          payload: obj
        }).then(() => {
          const { isSuccess, getWarmWallForweekData } = this.props;
          if( isSuccess && getWarmWallForweekData.dailyHeader ){
            var sendTime = new Date(getWarmWallForweekData.dailyHeader.createTime);
            this.setState({
              dayTime: new Date(getWarmWallForweekData.dailyHeader.createTime),
              formatDayTime: getWarmWallForweekData.dailyHeader.createTime,
              sendTime: this.formatTime(sendTime,2)
            });
          }
        })
    }else if(key == 2){
      dispatch({
          type: `example/getQuestionPoolList`,
          payload: obj
        }).then(() => {
          const { isSuccess, getQuestionPoolListData } = this.props;
        })
    }
  }
  formatTime(value, type){
    if(!value) return;
    var y = value.getFullYear(),
        m = value.getMonth() < 9 ? '0' + Number(value.getMonth()+1) : value.getMonth()+1,
        d = value.getDate() < 10 ? '0' + Number(value.getDate()) : Number(value.getDate());
    var endTime ;
    type == 1 ? endTime = y + '-' + m + '-' + d : endTime = y + '' + m + '' + d;
    return endTime;
  }
  changeTime(value){
    var time = this.formatTime(value,1);
    var sendTime = this.formatTime(value,2);
    this.setState({
      dayTime: value,
      formatDayTime: time,
      sendTime: sendTime
    })
    this.getSource(sendTime,this.state.tab);
  }
  callback(key) {
      const {dispatch,getWarmWallForweekData} = this.props;
      const hashID = window.location.hash.slice(11);
      const info = getWarmWallForweekData.dailyHeader;
      this.setState({
          tab: key
      })
      // let date = info.createTime ? new Date(info.createTime) : new Date();
      this.getSource(this.state.sendTime,key);
    }
  renderEtcNumber(person){
    return trans('logDetail.personNumber','等${person}人',{'person': person})
  }

  render() {
    const { getWarmWallForweekData, getQuestionPoolListData } = this.props;
    const info = getWarmWallForweekData.dailyHeader;
    const packswitchvalue = this.state.packswitch ? "caret-up" : "caret-down";
    const type = getQuestionPoolListData.isWeekTeacher || "";
    const lg = locale();
    var path = {
      pathname: '/statisticalPerson/' + this.state.id,
      state: {logid: this.state.id}
    };
    
    return (
      <div>
        <Banner />
        <div className="dailyDetail">
          <div className="dailyDetail_left">
            <div className="dalilyDetail_message">
              { 
                  this.state.packswitch
                    && <div className="packcontent">
                          <div>{trans('logDetail.totalweek','总值周：')} {info && <span>{info.week_teacher}</span>}</div>
                          <div className="forday">{trans('logDetail.dayTeacher','值日老师：')} 
                              {
                                  info && info.day_teacher.slice(0,3).map(function(resul,index){
                                      return  <span key={index}>{resul.isWrite ? <span className="write">{resul.name}</span> : <span>{resul.name}</span>}</span>
                                  })
                              }
                          </div>
                          <div className="reader">
                              <div>{trans('logDetail.readPerson','阅读人数：')}</div>
                              <div className="readerImageBox">
                                  {
                                      info && info.reader.reader.slice(0,5).map((res,index)=>{
                                          return <div className="readerImage" key={index}>
                                                      <img src={res} alt=""/>
                                                  </div>
                                      })
                                  }
                              </div>
                              <div className="etcNumber">
                                  {info && <span>{this.renderEtcNumber(info.reader.count)}</span>} 
                                  {info && info.reader && <Link to={path}><Icon type="double-right" /></Link>}
                              </div>
                          </div>
                    </div>
              }
            </div>
            <div className="dalilyDetail_list">
              <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)} className="daily_tabs" >
                    <TabPane tab={trans('logDetail.warmwall','暖心墙')} key="1" >
                            {getWarmWallForweekData
                              && <WramWall info={getWarmWallForweekData.WarmWallForweek}/>}
                            {!getWarmWallForweekData || getWarmWallForweekData.length == 0
                              && <div style={{textAlign:'center'}}>{trans('global.noData','暂无更多数据')}</div>}
                    </TabPane>
                    <TabPane tab={trans('global.questionPool','问题池')} key="2">
                            {getQuestionPoolListData && getQuestionPoolListData.map((res,index)=>{
                                return <Card info={res} key={index} typeCard={type}/>
                            })}
                            {!getQuestionPoolListData || getQuestionPoolListData.length == 0 && <div style={{textAlign:'center'}}>{trans('global.noData','暂无更多数据')}</div>}
                    </TabPane>
                </Tabs>
            </div>
          </div>
          <div className="dailyDetail_left">
                <Read />
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    navTab : state.example.navTab,
    isReviewModalVisible:state.example.isReviewModalVisible,
    getWarmWallForweekData:state.example.getWarmWallForweekData,
    getQuestionPoolListData:state.example.getQuestionPoolListData,
    isSuccess: state.example.isSuccess,
    changeCampus: state.example.changeCampus,
    campusInfo: state.example.campusInfo,
    ifDataId: state.example.ifDataId
  };
}
export default connect(mapStateToProps)(DailyLogPC);

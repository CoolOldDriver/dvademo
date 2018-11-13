import React , {Component}from 'react';
import { connect } from "dva";
import { Link } from "dva/router";
import {Icon, Tabs, Dropdown, Menu} from 'antd';
import { DatePicker } from 'antd-mobile';
import moment from 'moment';
import "./index.less";
import WramWall from "../../components/warmwall/index";
import Card from "../../components/question_pool/card";
import { trans, locale } from '../../utils/i18n';
const TabPane = Tabs.TabPane;

class DailyLog extends Component {
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
     this.getCampus();
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
  handleMenuClick(e) {
      const { dispatch } = this.props;
      let self = this;
      dispatch({
        type: `example/switchCampus`,
        payload: {
          currentCampus: e.key
        }
      }).then(() => {
         const { changeCampus, ifDataId } =  this.props;
         if( changeCampus && !ifDataId ) {
           window.location.href = "/";
         }else if(changeCampus && ifDataId) {
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

  checkLange = (e) => {
    let target = e.target,
        lang = target.getAttribute("data-lang");
    e.preventDefault();
    this.props.dispatch({
      type: 'example/setLanguage',
      payload: {
        languageCode: lang
      }
    }).then(() => {
      const { isSuccess } = this.props;
      if(isSuccess){
        window.location.reload();
      }else{
        return false;
      }
    })
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
    const menu = (
      <Menu onClick={this.handleMenuClick.bind(this)}>
          <Menu.Item key="1">
            <a className="school-name"><Icon type="environment" className="area-icon" theme="outlined" /> {trans('global.wenxi','文溪校区')}</a>
          </Menu.Item>
          <Menu.Item key="2">
            <a className="school-name"><Icon type="environment" className="area-icon" theme="outlined" /> {trans('global.kids','幼儿园')}</a>
          </Menu.Item>
      </Menu>
    );
    let currentCampus = this.props.campusInfo;
    return (
      <div className="dailyLog">
        <div className="dailylogheader">
          <div className="header">
              <Link to="/" className="arrowRight"><Icon type="left-circle-o" style={{fontSize:'0.45rem'}}/></Link>
              <div className="data">

                {info && <DatePicker mode="date" format="YYYY-MM-DD" title="选择日期" extra="Optional" value={this.state.dayTime} onChange={this.changeTime.bind(this)}>
                        <span className="timeSelect">{this.state.formatDayTime}<Icon type="calendar" className="calendar"/></span>
                    </DatePicker>
                }
              </div>
              <a className="language_icon">
                {lg == 'en'
                  && <span data-lang="zh" onClick={this.checkLange} className="icon">中文</span>
                }
                {lg != 'en'
                  && <span data-lang="en" onClick={this.checkLange} className="icon">English</span>
                }
              </a>
              <div className="seleCampus">
                <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter">
                    <a className="ant-dropdown-link drop-content">
                    { currentCampus == 1 && <span>{trans('global.wenxi','文溪校区')}</span> }
                    { currentCampus == 2 && <span>{trans('global.kids','幼儿园')}</span> }
                    { currentCampus == "" && <span>{trans('global.switchCampus','切换园区')}</span> } <Icon type="down" />
                    </a>
                </Dropdown>
              </div>
              <div className="packswitch">
                  <Icon type={packswitchvalue} style={{fontSize:'0.45rem'}} onClick={()=>{
                      if(packswitchvalue === "caret-up"){
                          this.setState({
                              packswitch:false
                          })
                      }else{
                          this.setState({
                              packswitch:true
                          })
                      }
                  }}/>
              </div>
          </div>
          {
              this.state.packswitch
              && <div className="packcontent">
                  <div>{trans('logDetail.totalweek','总值周：')}{info && <span>{info.week_teacher}</span>}</div>
                  <div className="forday">{trans('logDetail.dayTeacher','值日老师：')}
                      {
                          info && info.day_teacher.slice(0,3).map(function(resul,index){
                              return  <div key={index}>{resul.isWrite ? <span className="write">{resul.name}</span> : <span>{resul.name}</span>}</div>
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
                      {info && <span>{this.renderEtcNumber(info.reader.count)}</span>}
                      {info && info.reader && <Link to={path}><Icon type="double-right" /></Link>}
                  </div>
              </div>
          }
          </div>
          <div className="dailylogContent">
              <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
                  <TabPane tab={trans('logDetail.warmwall','暖心墙')} key="1">
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
export default connect(mapStateToProps)(DailyLog);

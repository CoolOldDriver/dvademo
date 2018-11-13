import React , {Component}from 'react';
import { connect } from "dva";
import { Link } from "dva/router";
import "./index.less";
import {Tabs, Icon, Dropdown, Modal, Button, message, Menu} from 'antd';
import {DatePicker} from 'antd-mobile';
import moment from 'moment';
import EditCard from '../../components/editcard/index';
import EditModal from '../../components/editmodal/index';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';
import { trans, locale } from '../../utils/i18n';
const TabPane = Tabs.TabPane;
const confirm = Modal.confirm;

class EditPC extends Component {
  constructor(){
    super();
    this.state={
      packswitch: true,
      editVisible: false,
      editValue: {},
      tab: window.location.hash.slice(12)?window.location.hash.slice(12):'1',
      moreswitch: false,
      flag: false,
      dateTime: '',
      formatDayTime: this.fomatDate(new Date(),1),
      sendTime: this.fomatDate(new Date(),2),
      dayTime: new Date(),
      publishTxt: trans('editLog.publishLog','发布日志')
    }
  }
  componentDidMount(){
    this.getSource(this.state.tab);
    this.getCampus();
  }
  getQueryString(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
  callback(key){
      const {dispatch} = this.props;
      this.setState({
          tab: key
      })
      this.getSource(key,this.state.sendTime);
  }
  getSource(key,value){
    const { dispatch } = this.props;
    var obj = {};
    if(value){
      obj.dateId = value;
    }
    if(key == 1){
      dispatch({
          type:`example/getWarmWallEditList`,
          payload: obj
        })
    }
    if(key == 2){
        dispatch({
            type: `example/getQuestionPoolEditList`,
            payload: obj
          })
    }
  }
  edit(res){
     this.setState({
         editVisible: true,
         editValue: res
     })
  }
  fomatDate(value,type){
      if(!value) return;
      var y = value.getFullYear(),
          m = value.getMonth() < 9 ? '0' + Number(value.getMonth()+1) : value.getMonth()+1,
          d = value.getDate() < 10 ? '0' + Number(value.getDate()) : Number(value.getDate());
      var endTime ;
      type == 1 ? endTime = y + '-' + m + '-' + d : endTime = y + '' + m + '' + d;
      return endTime;
  }
  setRelease(){
      const { dispatch } = this.props;
      dispatch({
          type: `example/setRelease`,
          payload: {
              dateId: this.state.sendTime
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
  moreswitch(index){

      if(document.getElementById("box" + index)){
          document.getElementById("box" + index).style.display="block";
      }
      if(document.getElementById("icon" + index).type==="down"){
          document.getElementById("box" + index).style.display="none";
          this.setState({
              moreswitch:false
          })
      }else{
          document.getElementById("box" + index).style.display="block";
          this.setState({
              moreswitch:true
          })
      }
  }
  markIssue(id,status,index){
      const { dispatch } = this.props;
      dispatch({
          type: `example/getMoreForIssue`,
          payload: {
              id: id,
              is_solve: status
          }
      })
      let value = 'content' + index
      document.querySelector('.' + value).style.display= "none";
  }
  markLog(id,status){
      const { dispatch } = this.props;
      dispatch({
          type: `example/getMoreForLog`,
          payload: {
              id: id,
              status: status
          }
      })
  }
  deleteContent( id, type ){
      const { dispatch } = this.props;
      confirm({
          title: trans('editLog.warmTips','温馨提示'),
          content: trans('editLog.confirmContent','确认删除该条信息？'),
          onOk(){
              dispatch({
                  type: `example/deleteContent`,
                  payload: {
                      id: id,
                      type: type
                  }
              })
          },
          okText: trans('global.confirm','确认'),
          cancelText: trans('global.cancel','取消')
      })


  }

  showContent(index) {
      let value = 'content' + index
      let display = document.querySelector('.' + value).style.display
      if(display == 'none'){
          document.querySelector('.' + value).style.display = 'block';
          return
      }
      if(display == 'block'){
          document.querySelector('.' + value).style.display = 'none'
      }
  }
  handleDate(date){
      var time = this.fomatDate(date,1);
      var sendTime = this.fomatDate(date,2);
      const {dispatch} = this.props;
      this.setState({
          dayTime: date,
          formatDayTime: time,
          sendTime: sendTime
      });
      this.getSource(this.state.tab,sendTime);
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
      const { getWarmWallEditListData, getQuestionPoolEditListData, isSuccess, tipsInfo } = this.props;
      var timestamp_nowon =(new Date()).valueOf();//现在时间戳
      const timestamp_now = moment(timestamp_nowon).format("YYYY-MM-DD");
      const isforweek = getWarmWallEditListData.isWeekTeacher ?  true :false;
      const isPublish = getWarmWallEditListData.isPublish ? true : false;
      const isQforweek = getQuestionPoolEditListData.isWeekTeacher ?  true :false;
      const isQPublish = getQuestionPoolEditListData.isPublish ? true : false;
     //修改成可修改的时间
      const dateFormat  = 'YYYY-MM-DD';
      //当前园区
      let currentCampus = this.props.campusInfo;
      //切换园区菜单
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

      const lg = locale();

      return (
        <div className="edit">
            <div className="header">
                <Link to="/">
                  <Icon type="left-circle-o" style={{fontSize:'0.45rem',color:'#1890ff'}}/>
                </Link>
                <div className="date">
                    <DatePicker
                        mode="date"
                        format="YYYY-MM-DD"
                        title={trans('warmwall.selectDate','选择日期')}
                        extra="Optional"
                        value={this.state.dayTime}
                        onChange={this.handleDate.bind(this)}>
                        <span className="timeSelect">{this.state.formatDayTime}<Icon type="calendar" className="calendar"/></span>
                    </DatePicker>
                </div>
                <a className="language_icon">
                  {lg == 'en'
                    && <span data-lang="zh" onClick={this.checkLange} className="icon">中文</span>
                  }
                  {lg != 'en'
                    && <span data-lang="en" onClick={this.checkLange} className="icon">English</span>
                  }
                </a>
                {this.state.tab == 1  &&
                    <div>
                        <div className="selectCampus">
                            <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter">
                                <a className="ant-dropdown-link drop-content">
                                { currentCampus == 1 && <span>{trans('global.wenxi','文溪校区')}</span> }
                                { currentCampus == 2 && <span>{trans('global.kids','幼儿园')}</span> }
                                { currentCampus == "" && <span>{trans('global.switchCampus','切换园区')}</span> } <Icon type="down" />
                                </a>
                            </Dropdown>
                        </div>

                        { isforweek && !isPublish
                            ? <a className="btn canPublish" onClick={this.setRelease.bind(this,1)}>{this.state.publishTxt}</a>
                            : <a className="btn notPublish">{trans('editLog.publishLog','发布日志')}</a>
                        }
                    </div>
                }
            </div>
            <div>
                <Tabs defaultActiveKey={this.state.tab} onChange={this.callback.bind(this)}>
                    <TabPane tab={trans('logDetail.warmwall','暖心墙')} key="1">
                    <div className="addnew">

                    </div>
                    <div>
                        {isSuccess && getWarmWallEditListData.content
                        && getWarmWallEditListData.content.map((res,index)=>{
                            var path = {
                                pathname:'/editpc/'+res.id,
                                state:{
                                        type:1,
                                        editValue:res,
                                        order:index
                                        }
                                }
                            return <div className="cardbox" key={index}>
                                        <EditCard key={index} info={res}/>
                                        {!isPublish &&
                                         <div>
                                          {isforweek?
                                            <div className="cardutil">
                                                <Link className="border" to={path}>{trans('editLog.editContent','编辑')}</Link>
                                                { res.isSelf ?
                                                <a onClick={this.deleteContent.bind(this,res.id,0)}>{trans('editLog.deleteContent','删除')}</a>
                                                : <div className="inline">
                                                {
                                                    res.status==1?
                                                    <a onClick={this.markLog.bind(this,res.id,0)}>{trans('editLog.hiddenContent','隐藏')}</a>
                                                    :
                                                    <a onClick={this.markLog.bind(this,res.id,1)}>{trans('editLog.showContent','显示')}</a>

                                                }
                                                </div>
                                                }

                                            </div>:
                                            <div className="cardutil">
                                            { res.isSelf &&
                                                <div>
                                                <Link className="border" to={path}>{trans('editLog.editContent','编辑')}</Link>
                                                 <a onClick={this.deleteContent.bind(this,res.id,0)}>{trans('editLog.deleteContent','删除')}</a>
                                                </div>
                                            }
                                            </div>}
                                        </div>}


                                    </div>
                        }) }
                    </div>
                    <div className="nomore">{!isSuccess && tipsInfo && <span>{tipsInfo}</span>}</div>
                    <div className="nomore">{ isSuccess && tipsInfo == "" && <span>{trans('editLog.noAnymore','没有更多了')}</span>}</div>
                    </TabPane>
                    <TabPane tab={trans('global.questionPool','问题池')} key="2">
                    <div className="addnew">
                    </div>
                    <div>
                        {isSuccess && getQuestionPoolEditListData.content && getQuestionPoolEditListData.content.map((res,index)=>{
                            var path = {
                                pathname:'/edit/'+res.id,
                                state:{
                                        type:2,
                                        editValue:res,
                                        order:index
                                        }
                                }
                            const icon = this.state.moreswitch ? "up" : "down";
                            const id = "icon"+ index;
                            return <div className="cardbox" key={index}>
                                        <EditCard key={index} type={2} info={res}/>
                                        { !isQPublish &&
                                            <div>
                                            {isQforweek?
                                              <div className="cardutil">
                                              <Link className="border" to={path}>{trans('editLog.editContent','编辑')}</Link>
                                              <div className="cardMore"
                                              onClick={(index)=>{
                                                  if(icon == "down"){
                                                      this.setState({
                                                          moreswitch:true
                                                      })
                                                      if(document.getElementById("box" + index)){
                                                          document.getElementById("box" + index).style.display="none";
                                                      }
                                                  }else{
                                                      this.setState({
                                                          moreswitch:false
                                                      })
                                                      if(document.getElementById("box" + index)){
                                                          document.getElementById("box" + index).style.display="block";
                                                      }
                                                  }
                                              }}>
                                                      <span onClick={this.showContent.bind(this,index)}>{trans('editLog.more','更多')}</span>
                                                      {this.state.moreswitch ?
                                                      <Icon type="down" id={id}/>
                                                      : <Icon type="up" id={id}/>
                                                      }
                                                      <div className={"content"+index} style={{display:"none"}}>
                                                          <a>
                                                              <i className="iconfont">&#xe608;</i>
                                                              {
                                                                  res.is_solve==1?
                                                                  <span onClick={this.markIssue.bind(this,res.id,0,index)}>{trans('editLog.markWillSolve','标记未解决')}</span>
                                                                  :
                                                                  <span onClick={this.markIssue.bind(this,res.id,1,index)}>{trans('editLog.markSolved','标记解决')}</span>

                                                              }
                                                          </a>
                                                          {res.isSelf ? <a>
                                                              <i className="iconfont">&#xe623;</i>
                                                              <span onClick={this.deleteContent.bind(this,res.id,1)}>{trans('editLog.deleteContent','删除')}</span>
                                                          </a>
                                                          : null}

                                                      </div>
                                              </div>
                                          </div>:
                                          <div className="cardutil">
                                          { res.isSelf &&
                                              <div>
                                              <Link class="border" to={path}>{trans('editLog.editContent','编辑')}</Link>
                                              <a onClick={this.deleteContent.bind(this,res.id,1)}>{trans('editLog.deleteContent','删除')}</a>
                                              </div>
                                          }
                                        </div>}
                                      </div>}


                                    </div>
                        }) }
                    </div>
                    <div className="nomore">{ !isSuccess && tipsInfo && <span>{tipsInfo}</span>}</div>
                    <div className="nomore">{ isSuccess && tipsInfo == "" && <span>{trans('editLog.noAnymore','没有更多了')}</span>}</div>
                    </TabPane>
                </Tabs>
            </div>
            { !isPublish && this.state.tab == '1' && <EditModal type='1' editVisible={this.state.editVisible} editValue={this.state.editValue} publishTime={this.state.sendTime}/> }
            { !isQPublish && this.state.tab == '2' && <EditModal type='2' editVisible={this.state.editVisible} editValue={this.state.editValue} publishTime={this.state.sendTime}/> }
        </div>
      )
  }
}
function mapStateToProps(state) {
  return {
    getWarmWallEditListData : state.example.getWarmWallEditListData,
    getQuestionPoolEditListData:state.example.getQuestionPoolEditListData,
    isSuccess: state.example.isSuccess,
    tipsInfo: state.example.tipsInfo,
    changeCampus: state.example.changeCampus,
    campusInfo: state.example.campusInfo,
  };
}
export default connect(mapStateToProps)(EditPC);

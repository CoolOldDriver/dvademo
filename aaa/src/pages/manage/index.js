import React , {Component}from 'react';
import { connect } from "dva";
import { Button, Tabs, Icon, Pagination, Modal,Upload, message } from 'antd';
import { trans } from '../../utils/i18n';
import { Link } from "dva/router";

import './index.less';
import Read from './../read/index';
import Banner from './../../components/banner/index';
import QuestionPool from './../../components/questionPool_PC';
import TableList from './../../components/schedule_PC';
const TabPane = Tabs.TabPane;

class Manage extends Component {
  constructor(){
  super();
  this.state={
    visible: false,
    number: 0,
    value: "",
    picId : "",
    current: 3,
  }
}
componentWillMount(){
  
}
componentDidMount(){
  let { info } = this.props;
  this.getLogData();
  const cardinfo = info || {};
}

showModal = () => {
  this.setState({
    visible: true,
  });
}

handleOk = (e) => {
  this.setState({
    visible: false,
  });
}

handleCancel = (e) => {
  this.setState({
    visible: false,
  });
}
//改变页数
onChangePage = (page) => {
  this.setState({
    current: page,
  });
}

handleValue = (e) => {
  this.setState({value:e.target.value})
}

handleNumber = (e) => {
  let { number } = this.state;
  let results = e.target.value.length;
  this.setState({number:results})
}

handleSubmitContent = () => {
  let { value, picId } = this.state;
  const { dispatch } = this.props;
  dispatch({
      type:`example/sendWallContent`, 
      payload:{
        
      }
    })
  this.setState({value:""})
}

getLogData = () => {
  const { dispatch } = this.props;
    dispatch({
        type:`example/getDailyLogList`, 
        payload:{}
      })
}

sendSubmitQuestion = () => {
  const { dispatch } = this.props;
  dispatch({
      type:`example/sendSubmitQuestion`, 
      payload:{}
    })
  this.setState({value:""})
}


onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
      console.log(info.file.response);
      this.setState({
        picId:info.file.response.id
      })
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }

handlePush = (path) => {
  // console.log(path)
  // console.log(window.location)
  window.location.hash = `#${path.pathname}`;
}

render() { 
  const props = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    headers: {
      authorization: 'authorization-text',
    }
  };
    let { number } = this.state;
    let { getDailyLogListData, info } = this.props;
    const cardinfo = info || {};
    let list = getDailyLogListData && getDailyLogListData.map((res,index) => {
    var path = {
      pathname:'/dailylogpc/'+res.id,
      state:{logid:res.id}
    }
    var path1 = {
      pathname: '/logdetailsPC/'+cardinfo.id,
      state: {id:cardinfo.id}
    }
      return <Link to={path} key={index} >
               <div 
                    className="dailyLogs"
                    onClick={this.showModal}
                >
                        <div className="avatar">
                          <img src={res.bg || '//yungu-newsletter.oss-cn-beijing.aliyuncs.com/noData.png'}/>
                        </div>
                        <div className="daily_content">
                            <p className="daily_time">{res.createTime}</p>
                              <div className="author">
                                {trans('log.weekTeacher','值周老师：')}{res.week_teacher}
                              </div>
                              <div className="daily_type">
                                  {res.typeValue}
                              </div>
                              <div className="daily_img">
                                {
                                    res.day_teacher.slice(0,4).map(function(resul,index){
                                        return  <div key={index}>
                                                    <img src={resul.image}/>
                                                </div>
                                    })
                                }
                              </div>
                              <div className="daily_btn"> 
                                <Link to="" className="translate">翻译</Link>
                                <Link to={path1} className="lookDetail">{trans('questionPool.lookDetail','查看详情')}</Link>
                              </div>
                        </div>
                </div> 
        </Link>
    })
    
    return (
     <div className="manage">
        <Banner />
        <div className="content">
          <div className="left">
              <div className="top">
                  <div className="nav">
                    <Tabs defaultActiveKey="1" type="card"  className="ant-tabs-tab">
                      <TabPane tab="暖心墙" key="1" >
                          <input type="text" 
                            className="inputs" 
                            placeholder="写一条你今天想说的话"
                            value={this.state.value}
                            onChange={this.handleValue}
                            onKeyUp={this.handleNumber}
                            />
                          <div className="pic">  
                              <Upload
                                  {...props}
                                  onChange={this.onChange.bind(this)}
                              >
                              <Button style={{border:'none'}}>
                                  <Icon type="picture" />图片
                              </Button>
                              </Upload>
                              <span className="number">{number}字</span>
                              <Button type="primary" onClick={this.handleSubmitContent}>提交</Button>
                          </div>
                      </TabPane>
                      <TabPane tab="问题池" key="2">                
                      <input type="text" 
                             className="inputs" 
                             placeholder="写一条你今天发现的问题"
                             value={this.state.value}
                             onChange={this.handleValue}
                             onKeyUp={this.handleNumber}
                       />
                          <div className="pic">
                              <Upload {...props} onChange={this.onChange.bind(this)}>
                                  <Button style={{border:'none'}}>
                                    <Icon type="picture" />图片
                                  </Button>
                              </Upload>
                              <span className="number">{number}字</span>
                              <Button type="primary" onClick={this.sendSubmitQuestion}>提交</Button>
                          </div>
                      </TabPane>
                    </Tabs>
                  </div>
              </div>
              <div className="dailyList">
                <Tabs defaultActiveKey="1" className="ant-tabs-tab tab-style" type="card">
                  <TabPane  tab="日志薄" key="1">
                      {list}
                  </TabPane>
                  <TabPane tab="问题池" key="2">
                      <QuestionPool />
                  </TabPane>
                  <TabPane tab="排班表" key="3">
                      <TableList />
                  </TabPane>
                </Tabs>
              </div>
              <Pagination  
                total={500}
                current={this.state.current} 
                onChange={this.onChangePage} 
                defaultPageSize={10}
              />
          </div>
          <Read />
          
        </div>
    </div>
  )
}
}
function mapStateToProps(state) {
  return {
    getLogData: state.example.getLogData,
    getDailyLogListData : state.example.getDailyLogListData,
  };
}
export default connect(mapStateToProps)(Manage);

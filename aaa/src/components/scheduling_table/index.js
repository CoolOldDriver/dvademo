import React ,{ Component }from "react";
import { connect } from 'dva';
import { Collapse ,Tag ,Table, Modal, Button, Select, message } from 'antd';
import { trans } from '../../utils/i18n';
import "./index.less";
import { getScheduleDate } from "../../services/example";
const Panel = Collapse.Panel;
const Option = Select.Option;

class TableList extends Component {
  constructor(){
    super();
    this.state = {
      loading: false,
      visible: false,
      record: {},
      teacherList: [],
      tag: '',
      showOption: false,
      dateValue: ''
    }
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
        type: `example/getScheduleList`,
        payload: {
        }
      })
  }
  callback(key) {
    if(!key) return;
  }

  //显示申请表
  changeDuty(record, tag, sign) {
    return; //暂时屏蔽
    const { isForweek } = this.props;

    //清空modal
    this.resetModal();

    //true:值周老师，false:值日老师
    let source = record.dayTeacher || [];
    let sourceList =  source.length > 0 ? source.concat() : [];

    //当前是值周老师，并且点击的是值周老师
    if(isForweek && sign) {
      this.setState({
        visible: true,
        record: record,
        tag: tag.id ? tag.id : '',
        teacherList: [sourceList[0]]
      })
    }else if(isForweek && !sign) {
      message.warning( trans('scheduleList.canChangeWeek', '您只能与值周老师换班哟！') );
      return false;
    }

    //当前是值日老师，并且点击的是值日老师
    if(!isForweek && !sign) {
      sourceList.shift(0);
      this.setState({
        visible: true,
        record: record,
        tag: tag.id ? tag.id : '',
        teacherList: sourceList

      })
    }else if(!isForweek && sign){
      message.warning( trans('scheduleList.canChangeDay','您只能与值日老师换班哟！') );
      return false;
    }
  }

  //获取当前老师值班时间
  getSheduleDate() {
    const { dispatch } = this.props;
    dispatch({
      type: `example/getScheduleDate`,
      payload: {
      }
    }).then( () => {
      const { isSuccess } = this.props;
      if(isSuccess){
        this.setState( {
          showOption: true
        })
      }
    })
  }

  //清空表单
  resetModal() {
    this.setState({
      record: {},
      teacherList: [],
      tag: '',
      dateValue: ''
    })
  }

  //取消
  handleCancel = (e) => {
    this.resetModal();
    this.setState({
      visible: false
    });
  }

  //form表单提交
  handleOk = (e) => {
    const { dispatch } = this.props;
    const { record } = this.state;
    if(!this.state.dateValue) {
      message.error( trans('scheduleList.selectTime','请选择换班时间') );
      return false;
    }else if(!this.state.tag){
      message.error( trans('scheduleList.selectTeacher','请选择换班老师') );
      return false;
    }
    var obj = {
      currentDate: record ? record.time : '',
      changeDate: this.state.dateValue,
      changeTeacher: this.state.tag
    }
    dispatch({
      type: `example/sendChangeDate`,
      payload: obj
    }).then( () => {
      const { isSuccess } = this.props;
      if(isSuccess){
        this.resetModal();
        this.setState({
          visible: false
        })
      }
    })
  }

  renderWeek(number){
    //渲染第n周
    return trans('scheduleList.weekNumber','第${weekNumebr}周',{'weekNumebr' : number});
  }
  render() {
    const { getScheduleListColums, getSheduleDateList} = this.props;
    let optionList = this.state.teacherList || [];
    let recordSource = this.state.record || {};
    let dateList = this.state.showOption ? getSheduleDateList : [];
    const columns = [{
            title: trans('scheduleList.week','星期'),
            dataIndex: 'week',
            key: 'week',
            width: '20%',
            render: text => <span>{text}</span>,
          }, {
            title: trans('scheduleList.date','日期'),
            dataIndex: 'time',
            key: 'time',
            width: '30%'
          },{
            title: trans('logDetail.dayTeacher','值日老师'),
            key: 'dayTeacher',
            dataIndex: 'dayTeacher',
            width: '50%',
            render: (tags, record) => (
              <span>
                {tags.map((tag,index) => {
                  if(index == 0){
                    return (<Tag
                              color="red"
                              key={tag.id}
                              style={{margin:'0.1rem'}}
                              onClick={this.changeDuty.bind(this, record, tag, true)}>
                                {tag.name}
                              </Tag>);
                  }else{
                    return (<Tag
                              color="blue"
                              key={tag.id}
                              style={{margin:'0.1rem'}}
                              onClick={this.changeDuty.bind(this, record,tag, false)}>
                                {tag.name}
                              </Tag>);
                  }
                })}
                <Tag
                  style={{display: 'none'}}
                  color="#87d068"
                  onClick={this.changeDuty.bind(this, record, "", this.props.isForweek)}>
                  { trans('scheduleList.wantToChange', '我要换班')}
                </Tag>
              </span>
            ),
          }];
      let teacherOptions = optionList.map((item, index) => {
          return (<Option value={item.id} key={index}>{item.name}</Option>);
      });
      let dateListOption = dateList.map((item, index) => {
        return (<Option value={item.key}>{item.time}</Option>)
      })
    return (
      <div className="tablelist" >
         { getScheduleListColums.length > 0
          ? <Collapse  onChange={this.callback.bind(this)} accordion>
              {getScheduleListColums && getScheduleListColums.map((item,index) => {
                var list = item.list || [],
                    dayTeacher = list.dayTeacher || [];
                var panelHeader = (
                      <div className="panelHeader">
                        <span className="weekIndex">{this.renderWeek(item.weekNumber)}</span>
                    </div>);
                return (
                  <Panel header={panelHeader} key={item.id}>
                    <Table columns={columns} dataSource={list} pagination={false}/>
                  </Panel>
                )
              })}
            </Collapse>
          : <p  className="noDataTips">暂无排班/No data.</p>
         }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    getScheduleListColums: state.example.getScheduleListColums,
    getSheduleDateList: state.example.getSheduleDateList,
    isSuccess: state.example.isSuccess,
    isForweek: state.example.isForweek
  };
}
export default connect(mapStateToProps)(TableList);

import React from "react";
import { connect } from 'dva';
import { Link } from "dva/router";
import { trans } from '../../utils/i18n';
import "./index.less";
class LogList extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
        type:`example/getDailyLogList`,
        payload:{
        }
      })
  }
  render() {
    const { getDailyLogListData } = this.props;
    return (
      <div className="loglist" >
        {
            getDailyLogListData  && getDailyLogListData.length > 0
            ? getDailyLogListData.map((res,index) => {
                    var path = {
                        pathname:'/dailylog/'+res.id,
                        state:{logid:res.id}
                    }
                    return <Link to={path} className={res.type} key={index}>
                                {!res.isRead && <div className="point"></div>}
                                <div className="log_bg">
                                    <img src={res.bg || '//yungu-newsletter.oss-cn-beijing.aliyuncs.com/noData.png'} alt=""/>
                                </div>
                                <div className="log_article">
                                    <div className="time">{res.createTime}</div>
                                    <div className="teacher">{trans('log.weekTeacher','值周老师：')}{res.week_teacher}</div>
                                    <div className="intro">
                                        <div>{res.typeValue}</div>
                                        <div className="intro_user">
                                            {
                                                res.day_teacher.slice(0,4).map(function(resul,index){
                                                    return  <div className="intro_img" key={index}>
                                                                <img  alt="" src={resul.image}/>
                                                            </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                        </Link>
                })
            : <div style={{textAlign:'center',fontSize:'14px'}}>{trans('global.noData','暂无更多数据')}</div>
        }
        <Link to="/edit" className="addbtn">
            +
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        getDailyLogListData : state.example.getDailyLogListData,
    };
  }
  export default connect(mapStateToProps)(LogList);

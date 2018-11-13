import React from "react";
import { connect } from 'dva';
import "./index.css";
import { Link ,Icon} from "dva/router";
import moment from "moment";
import { trans } from '../../utils/i18n';
class Card extends React.Component {
  constructor(){
    super();
    this.state={
        cardbg:"",
        cardvalue:"",
        moreswitch:false,
        isTranslate : false
    }
  }
  componentDidMount() {
    const { dispatch, info } = this.props;
    const cardinfo = info || {};
    //var timestamp_now =(new Date()).valueOf();//现在时间戳
    //const timestamp_now1 = moment(timestamp_now).format("YYYY-MM-DD");
    const timestamp_create = moment(cardinfo.createTime).format("YYYY-MM-DD");
    var reg = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
    timestamp_create.match(reg);
    var date = new Date();
    date.getFullYear();  // 获取完整的年份(4位,1970)
    date.getMonth();  // 获取月份(0-11,0代表1月,用的时候记得加上1)
    date.getDate();  // 获取日(1-31)
    const days = date.getDate() - RegExp.$3;
    if( date.getFullYear() == RegExp.$1 && date.getMonth()+1 == parseInt(RegExp.$2) ){
      if(days <= 7){
        this.setState({
          cardbg: " #3388DD",
          cardvalue: trans('questionPool.newProblem','新问题')
        })
      }else if( 7 < days && days <= 14) {
        this.setState({
          cardbg: "#E69817",
          cardvalue: trans('questionPool.leftover','遗留')
        })
      }else{
        this.setState({
          cardbg: "#CC4728",
          cardvalue: trans('questionPool.leftover','遗留')
        })
      }
    }else{
      this.setState({
        cardbg: "#CC4728",
        cardvalue: trans('questionPool.leftover','遗留')
      })
    }
  }
  showContent( type ){
    if( type ){
      this.setState({
        moreswitch: false
      })
    }else{
      this.setState({
        moreswitch: true
      })
    }

  }

  operTranslate( value ){
    const { dispatch } = this.props;
    dispatch({
      type: 'example/getTranslate',
      payload: {
        content: value
      }
    }).then(() => {
      const { isSuccess } = this.props;
      if(isSuccess){
        this.setState({
          isTranslate: true
        });
      }else{
        return false;
      }
    })

  }
  showPreText(){
    this.setState({
      isTranslate: false
    })
  }

  render() {
    const { info, getQuestionPoolCardData, getTranslateData } = this.props;
    const cardinfo = info || {};
    const createtime = moment(cardinfo.createTime).format("YYYY-MM-DD");
    const statetime = moment(cardinfo.stateTime).format("YYYY-MM-DD");
    var path = {
      pathname: '/questionpoolpc/'+cardinfo.id,
      state: {id:cardinfo.id}
    }
    
    //const cardType = typeCard || "";
    return (
      <div className="card" >
          <Link to={path}>
            <div className="intro">
              {cardinfo.isSolved
                ? <div className="stateMark solved">
                    {trans('questionPool.toSolve','解决')}
                  </div>
                : <div className="stateMark"
                      style={{background:this.state.cardbg}}>
                        {this.state.cardvalue}
                  </div>
              }
              <div className="content">
                { !this.state.isTranslate
                    ? <span>{cardinfo.content}</span>
                    : <span>{getTranslateData}</span>
                }
              </div>
            </div>
            <div className="createTime"><span>{trans('questionPool.firstMention','首次提出时间：')}</span>{createtime}</div>
            <div className="state">
                {cardinfo.stateTime
                ? <div>{statetime}{trans('questionPool.haveProgress','有新进展')}</div>
                : <div>{trans('questionPool.publish','前发布', {day: createtime})}</div>
                }
            </div>
          </Link>
          <div className="utilBox">
              {!this.state.isTranslate
              ? <div className="border" onClick={this.operTranslate.bind(this,cardinfo.content)} >
                  <i className="iconfont">&#xe684;</i>
                  <span>{trans('warmwall.translate','翻译')}</span>
                </div>
              : <div className="border" onClick={this.showPreText.bind(this)}>
                  <i className="iconfont">&#xe684;</i>
                  <span>{trans('warmwall.preText','原文')}</span>
                </div>
              }
              
                <div>
                  <Link to={path}>{trans('questionPool.lookDetail','查看详情')}</Link>
                </div>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      getQuestionPoolCardData:state.example.getQuestionPoolCardData,
      getTranslateData: state.example.getTranslateData,
      isSuccess: state.example.isSuccess
  };
}
export default connect(mapStateToProps)(Card);

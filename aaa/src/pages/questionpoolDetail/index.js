import React , {Component}from 'react';
import { connect } from "dva";
import { Link } from "dva/router";
import {Icon,Modal,Select,message,Form,Input} from 'antd';
import "./index.less";
import Slider from "../../components/slider/index";
import ReviewModal from '../../components/review/reviewModal';
import Review from '../../components/review/index';
import TextArea from 'antd/lib/input/TextArea';
import { trans, locale } from '../../utils/i18n';
const Option = Select.Option;

class QuestionPool extends Component {
  constructor() {
    super();
    this.state={
      packswitch: true,
      isReviewState: false,
      sameFeelingState: false,
      foolowState: false,
      isTranslate: false,
      haveOption: false,
      teacherId: '',
      visible: false,
      confirmLoading: false,
      titleContent: '',
      textValue: '',
      showContent: false,
      modalVisible: false,
      userName: '',
      revieeId: 0
    }
  }
  componentDidMount(){
      this.getMainContent();
  }
  getMainContent(){
      const { dispatch } = this.props;
      const hashID = window.location.hash.slice(15);
      dispatch({
          type: `example/getQuestionPoolCard`,
          payload: {
              id: hashID
          }
        })
  }
  showTalkModal(visible){
    this.setState({
        modalVisible: visible
    })
  }

  changeState(id,name,user){
    this.setState({
        revieeId: id,
        userName: name
    })
  }

  changeReviewState(id,name){
      const {dispatch} = this.props;
      this.showTalkModal(true);
      this.setState({
          isReviewState:true,
          name: name
      })

      dispatch({
          type: `example/getReview`,
          payload: {
              id: id,
              type: 2
          }
      })
  }
  sameFeeling(){
      const hashID = window.location.hash.slice(15);
      this.setState({
          sameFeelingState: true
      })
      const { dispatch } = this.props;
      dispatch({
          type: `example/getPoolCradState`,
          payload: {
              id: hashID,
              type: 2
          }
      })
  }
  foolow(){
      const hashID = window.location.hash.slice(15);
      this.setState({
          id: hashID,
          foolowState: true
      })
      const {dispatch} = this.props;
      dispatch({
          type: `example/getPoolCradState`,
          payload: {
              id: hashID,
              type: 3
          }
      })
  }
  operTranslate(value){
      const { dispatch } = this.props;
      dispatch({
          type: 'example/getTranslate',
          payload: {
            content : value
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
  showModal(status){
    if(status == 'select'){
      this.setState({
        visible: true,
        showContent: false,
        titleContent: trans('global.pleaseSelect','请选择')
      })
    }else if(status == 'solve'){
      this.setState({
        visible: true,
        showContent: true,
        titleContent: trans('questionDetail.fillInCase','填写解决方案')
      })
    }
      this.setState({
          visible: true
      });
  }
  handleChange(value){
      this.setState({
          teacherId: value
      })
  }
  handleFocus(){
      const { dispatch, getQuestionPoolCardData, match:{params} } = this.props;
      const poolInformation = getQuestionPoolCardData || {};
      if( poolInformation.content && !poolInformation.content.staffName && poolInformation.content.isForWeek ){
          //获取指派老师
          dispatch({
              type: `example/getTeacherList`,
              payload: {
                  id: params.id
              }
          })
          this.setState({
              haveOption : true
          })
      }else{
          this.setState({
              haveOption : false
          })
      }
  }
  handleCommit(status){
      const {dispatch,match:{params}} = this.props;
      if(!status){
        if(!this.state.teacherId){
          message.error(trans('global.selectAssign','请选择指派人员~'));
          return;
        }
        dispatch({
            type: `example/selectPerson`,
            payload: {
                id: params.id,
                userId: this.state.teacherId
            }
        }).then(() => {
            if(this.props.isSuccess){
                this.setState({
                    visible: false,
                    teacherId: ''
                });
                this.getMainContent();
            }else{
                return false;
            }
        })
      }else{
        let solveCase = document.querySelector(".solveCase"),
              textValue = solveCase.value;
        this.setState({
          textValue
        })
        if(textValue == ''){
          message.error(trans('questionDetail.pleaseFillIn','请填写解决方案~'));
          return;
        }
        dispatch({
          type: `example/postSolved`,
          payload: {
              id: params.id,
              content: textValue
          }
      }).then(() => {
          if(this.props.isSuccess){
            solveCase.value = "";
              this.setState({
                  visible: false,
                  textValue: ''
              });
              this.getMainContent();
          }else{
              return false;
          }
      })
      }

  }
  handleCancel(){
      this.setState({
          visible: false,
          teacherId: ''
      })
      let solveCase = document.querySelector(".solveCase");
      solveCase ? solveCase.value = "" : '';
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
    const { getQuestionPoolCardData, isgetReviewListData, getReviewListData, sameFeelingCount, foolowCount, getTranslateData, getTeacherListData } = this.props;
    const stateclass = getQuestionPoolCardData.isSolved ? "statebox solved" : "statebox unsolved";
    const state = getQuestionPoolCardData.isSolved ? trans('questionDetail.haveSolved','已解决') : trans('questionPool.newProblem','新问题');
    const cardinfo = getQuestionPoolCardData || {};
    const cardinfo_content = cardinfo.content || {};
    const reviewCount = cardinfo.review || {};
    const hashID = window.location.hash.slice(15);
    const style1 = this.state.foolowState ? "activied border" : "border";
    const style2 = this.state.sameFeelingState ? "activied border" : "border";
    const foolow = this.state.foolowState ? foolowCount+1 : foolowCount;
    const feeling = this.state.sameFeelingState ? sameFeelingCount+1 : sameFeelingCount;
    const teacherOption = this.state.haveOption ? getTeacherListData : [];
    const lg = locale();
    return (
      <div className="questionpool">
          <div className="header">
              <Link to="/" className="back">
                  <Icon type="left-circle-o" style={{fontSize:'0.45rem'}}/>
                  {/* <a>返回</a> */}
              </Link>
              <div className={stateclass}>
                  <div className="state"> </div>
                  <div>{state}</div>
              </div>
              <div style={{opacity:'0'}}><i className="iconfont">&#xe65c;</i></div>
              <a className="language_icon">
                {lg == 'en'
                  && <span data-lang="zh" onClick={this.checkLange} className="icon">中文</span>
                }
                {lg != 'en'
                  && <span data-lang="en" onClick={this.checkLange} className="icon">English</span>
                }
              </a>
          </div>
          {
              cardinfo.content &&
                <Slider info={cardinfo.content.bg}/>
          }
          <div className="content">
              { cardinfo.content &&
                  <div className="value">
                    {
                        !this.state.isTranslate
                        ? <span>{cardinfo.content.value}</span>
                        : <span>{getTranslateData}</span>
                    }
                  </div>
              }
              { cardinfo.content &&
                  <p>{trans('questionPool.firstMention','首次提出时间：')}
                    <span>{cardinfo.content.createTime}</span>
                  </p>
              }
              { cardinfo.content &&
                  <p>{trans('questionPool.firstMentionPerson','首次提出人：')}
                    <span>{cardinfo.content.createName}</span>
                  </p>
              }
              { cardinfo.content &&
                  <p>{trans('questionPool.problemManager','问题负责人：')}
                    { !cardinfo.isSolved ?
                        <span>
                            {cardinfo.content.processingInfo && cardinfo.content.processingInfo.userName
                            ? <em>{ cardinfo.content.processingInfo.userName }
                                  { cardinfo.content.processingInfo.userId == cardinfo.content.currentUserId
                                    && <a  style={{marginLeft:'3px'}} onClick={this.showModal.bind(this,'solve')}>
                                        {trans('questionDetail.goToSolved','去解决')}
                                      </a>
                                  }
                              </em>
                            : <em>{ cardinfo.content.isForWeek
                                    ? <a onClick={this.showModal.bind(this,'select')}>
                                        {trans('questionDetail.assignNow','现在指派')}
                                      </a>
                                    : <a style={{color:'rgba(0,0,0,0.65)'}}>
                                        {trans('questionDetail.willAssign','暂未指派')}
                                      </a>
                                  }
                              </em>
                            }
                        </span> :
                        <span>
                          { cardinfo.content.processingInfo && cardinfo.content.processingInfo.userName
                              && <em>{cardinfo.content.processingInfo.userName}</em>
                          }
                        </span>
                    }
                  </p>
              }
          </div>
          {
             cardinfo.isSolved &&
             <div className="solution">
                <div>
                  <i className="iconfont">&#xe608;</i>
                  <span>{trans('questionDetail.resultRecord','最终解决方案及过程记录')}</span>
                </div>
                <div className="solution-value">{cardinfo.content.solution}</div>
             </div>
           }
           {
               cardinfo.content &&
               <div className="ques-util">
               {
                   !this.state.isTranslate
                   ? <div className="border" onClick={this.operTranslate.bind(this,cardinfo.content.value)}><i className="iconfont">&#xe684;</i> {trans('warmwall.translate','翻译')}</div>
                   : <div className="border" onClick={this.showPreText.bind(this)}><i className="iconfont">&#xe684;</i> {trans('warmwall.preText','原文')}</div>

               }
              {
                  cardinfo.content && cardinfo.content.isSameFeeling
                  ? <div className="activied border"> <Icon type="heart-o" />{trans('questionDetial.sameFeeling','同感')}{sameFeelingCount && <span>({sameFeelingCount})</span>}</div>
                  : <div className={style2} onClick={this.sameFeeling.bind(this)}><Icon type="heart-o" /> {trans('questionDetial.sameFeeling','同感')}{feeling && <span>({feeling})</span>}</div>
              }
              {
                  cardinfo.content && cardinfo.content.isFollow
                  ? <div className="activied border"><Icon type="pushpin-o" /> {trans('questionDetail.followUp','跟进')}{foolowCount && <span>({foolowCount}</span>})</div>
                  : <div className={style1} onClick={this.foolow.bind(this)}><Icon type="pushpin-o" /> {trans('questionDetail.followUp','跟进')}{foolow && <span>({foolow}</span>})</div>
              }
              <div
                onClick={this.changeReviewState.bind(this,hashID,cardinfo_content.createName)}
                style={{fontSize:'14px'}}>
                  <div className="reviewModal">
                      <i className="iconfont">&#xe654;</i>{trans('global.comment','评论')}{reviewCount.reviewCount != null && reviewCount.reviewCount != 0 && <span>({reviewCount.reviewCount})</span>}
                  </div>

              </div>
          </div>

          }

          {
            this.state.modalVisible
            && <ReviewModal
              type="review"
              changeState={this.changeState.bind(this)}
              showModal={this.showTalkModal.bind(this)}
              reviewId={this.state.revieeId || 0}
              reviewType={2}
              name={this.state.userName}
              reviewCount={reviewCount.reviewCount}
              dnId={hashID} />
          }

          {
            this.state.isReviewState
            && isgetReviewListData &&
            <div className="cardcontent">
              {/* {
                  getReviewListData && getReviewListData.map((res,index)=>{
                      return <div>
                      { !res.parentInfo ? <QuestionCard info={res} key={index}/>
                      : <div>
                          <Review review={res} reviewType={2} key={index}/>
                      </div>
                      }</div>
                  })
              } */}
            {
              getReviewListData
                  && <Review
                  showModal={this.showTalkModal.bind(this)}
                  review={getReviewListData[hashID]}
                  reviewType={2}
                  dnId={hashID}
                  changeState={this.changeState.bind(this)}/>
            }
           </div>
          }

         <Modal title={this.state.titleContent} okText="确认" centered={true} maskClosable={false} cancelText="取消" visible={this.state.visible} onOk={this.handleCommit.bind(this,this.state.showContent)} confirmLoading={this.state.confirmLoading} onCancel={this.handleCancel.bind(this)} closable={false}>
             <div style={{textAlign: 'center'}}>
                  {!this.state.showContent ?
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder={trans('global.selectAssign','请选择指派人员')}
                        searchPlaceholder="no data"
                        optionFilterProp="children"
                        value={this.state.teacherId}
                        onChange={this.handleChange.bind(this)}
                        onFocus={this.handleFocus.bind(this)}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="">{trans('global.pleaseSelect','请选择')}</Option>
                        {
                            teacherOption && teacherOption.map((item,index) => {
                                return <Option value={item.id} key={item.id}>{item.teacherName}</Option>
                            })
                        }
                    </Select> :
                    <TextArea rows={4} className="solveCase"/>
                    }
             </div>
         </Modal>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    getQuestionPoolCardData : state.example.getQuestionPoolCardData,
    isgetReviewListData:state.example.isgetReviewListData,
    getReviewListData:state.example.getReviewListData,
    sameFeelingCount:state.example.sameFeelingCount,
    foolowCount:state.example.foolowCount,
    getTranslateData:state.example.getTranslateData,
    getTeacherListData: state.example.getTeacherListData,
    isSuccess: state.example.isSuccess
  };
}
export default connect(mapStateToProps)(QuestionPool);

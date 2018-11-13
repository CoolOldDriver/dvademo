import React , {Component}from 'react';
import { connect } from "dva";
import {Icon,Input,Form,message} from 'antd';
import ReviewPC from "../review_PC/index";
import Slider from "../slider/index";
// import ReviewModal from '../review_PC/reviewModal';
import ReviewModals from "../review_PC/view-modal";
import Heart from "./heart";
import { trans } from '../../utils/i18n';
import "./index1.less";
class Warmwall extends Component {
  constructor(){
    super();
    this.state={
        isReadMore: false,
        isShowForday: true,
        isTranslate: false,
        isShowHeart: false,
        isReviewState: false,
        heartCountState: false,
        translateStatus: [],
        modalVisible: false,
        itemId: 0,
        warmwallId: '',
        name: '',
        user: ''
    }
  }

  componentDidMount(){
      const { dispatch, info } = this.props;
      const hashID = window.location.hash.slice(11);
      const infoData = info || {}
      dispatch({
          type: `example/getReviewListData`,
          payload: {
              id: infoData.id,
              type: "log"
          }
      });
      dispatch({
          type: `example/getWarmWallForday`,
          payload: {
              id: hashID
          }
      })
  }

  componentWillReceiveProps(nextProps){
      if(nextProps.getWarmWallFordayData.length != this.props.getWarmWallFordayData.length){
          var translateStatus = [];
          nextProps.getWarmWallFordayData.map((item,index) => {
              translateStatus[index] = false;
          });
          this.setState({
              translateStatus : translateStatus
          })
      }
  }

  readMore(){
      this.setState({
          isReadMore:true
      })
  }

  showHeart(id){
      this.setState({
          heartCountState: true
      })
      const {dispatch} = this.props;
      dispatch({
          type: `example/getHeartCount`,
          payload: {
              id: id
          }
        })
      document.getElementById(id).className="border activite"
  }

  showTranslate(isFirst, value, index){
      const { dispatch } = this.props;
      dispatch({
          type: `example/getTranslate`,
          payload: {
              content: value
          }
      }).then(() => {
          const { isSuccess } = this.props;
          if(isSuccess){
              if(!isFirst){
                  var traArr = this.state.translateStatus;
                  traArr[index] = true;
                  this.setState({
                      translateStatus: traArr
                  });
              }else if(isFirst){
                  this.setState({
                      isTranslate: true
                  })
              }
          }else{
              return false;
          }
      })

  }

  showPreText(isFirst,index){
      if(!isFirst){
          var traArr2 = this.state.translateStatus;
          traArr2[index] = false;
          this.setState({
              translateStatus: traArr2
          });
      }else if(isFirst){
          this.setState({
              isTranslate: false
          })
      }

  }

  //评论框的显隐
  showModal(visible){
        this.setState({
            modalVisible: visible
        })
  }

// showModal(){
//     let { modalVisible } = this.state;
//     this.setState({
//         modalVisible: !modalVisible
//     })
// }

  changeState(id, infoname, user, dnId){
      this.setState({
          itemId: id,
          name: infoname,
          user: user,
          warmwallId: dnId
      })
  }

  changeReviewState(id, infoname, user){
      const { dispatch } = this.props;
      this.setState({
          isReviewState: true,
      })
      this.showModal(true);
      this.changeState(0, infoname, user, id);

      if(document.getElementById("review" + id)){
          document.getElementById("review" + id).style.display="block";
      }
      dispatch({
          type:`example/getReview`,
          payload:{
              id: id,
              type: 1
          }
      })
  }

  getReview(value){
      const {dispatch} = this.props;
      dispatch({
          type: `example/save`,
          payload: {
              isReviewModalVisible: true,
              reviewModalVisibleValue: value
          }
      })
  }

  render() {
      const { dispatch, getTranslateData, getWarmWallFordayData, getHeartCountData, info, isgetReviewListData, getReviewListData, isSuccess } = this.props;
      const { modalVisible } = this.state;
      const hashID = window.location.hash.slice(11);
      //const translateStyle = this.state.isTranslate ? "border activite" : "border";
      const translateStyle = "border";
      const infoData = info || {};
      const infoname = infoData.author ? infoData.author.name : "";
      const heartCount = this.state.heartCountState ? infoData.heartCount+1 : infoData.heartCount;
      const heartstate = this.state.heartCountState ? "border activite" : "border";
      return (
        <div className="warmwall" style={{overflowY:'scroll'}}>
            <div className="one">
                {
                    infoData.id && <div>
                    {infoData.bg
                    && <Slider info={infoData.bg}/>}
                    <div className="warmwall-content">
                        <div className="portrait">
                            {infoData.author && <img src={info.author.portrait} alt=""/>}
                        </div>
                        <div className="intro">
                            <div>
                                {infoData.author && <span className="name">{info.author.name}</span>}
                                <span className="type">{trans('warmwall.asWeek','值周')}</span>
                            </div>
                            {this.state.isReadMore ? <div className="content-auto">
                                            {
                                                !this.state.isTranslate ? <span>{infoData.value}</span>
                                                : <span>{getTranslateData}</span>
                                            }
                                        </div>
                                : <div className="content">
                                    {
                                        !this.state.isTranslate ? <span>{infoData.value}</span>
                                        : <span>{getTranslateData}</span>
                                    }
                                    {infoData.value.length > 30 && <div className="read">
                                        <span className="point">...</span>
                                        <span className="more" onClick={this.readMore.bind(this)}>{trans('warmwall.readMore','阅读更多')}</span>
                                    </div>}
                                </div>
                            }
                        </div>
                    </div>
                
                        <div className="warmwall-util">
                                { !this.state.isTranslate ?
                                <div className={translateStyle} onClick={this.showTranslate.bind(this,true,infoData.value)}>
                                    <i className="iconfont">&#xe684;</i>
                                    <span>{trans('warmwall.translate' , '翻译')}</span>
                                </div>
                                :
                                <div className={translateStyle} onClick={this.showPreText.bind(this,true)}>
                                    <Icon type="file-text" />
                                    <span>{trans('warmwall.preText' , '原文')}</span>
                                </div>}
                                <Heart isPraise={infoData.isPraise} id={infoData.id} heartCount={infoData.heartCount}/>
                                <div className="reviewModal" onClick={this.changeReviewState.bind(this,infoData.id,infoname,'week')}>
                                    <i className="iconfont icons">&#xe654;</i>{trans('global.comment', '评论')}
                                    {infoData.reviewCount != null
                                    && infoData.reviewCount != 0
                                    && <span>({infoData.reviewCount})</span>}
                                </div>
                        </div>
                    </div>
                }
            </div>

            {
                this.state.modalVisible 
                &&  <div className="two">
                        <div className="show-modal">
                                <ReviewModals />
                        </div> 
                        <div className="reviewlistdatas">
                             {isgetReviewListData
                                && this.state.isReviewState
                                        && <ReviewPC
                                            user="week"
                                            showModal={this.showModal.bind(this)}
                                            changeState={this.changeState.bind(this)}
                                            review={getReviewListData[infoData.id]}
                                            dnId={infoData.id}
                                            reviewType={1}
                                            reviewCount={infoData.reviewCount}/>
                                    }
                        </div>
                    </div>
            }

             <div className="three"> 
                    {
                    this.state.isShowForday
                        ? <div className="warmwall-forday">
                        { getWarmWallFordayData
                            && getWarmWallFordayData.map((res,index)=>{
                                const id = "review"+res.id;
                                var getAuthor = res.author ? res.author : {};
                                return <div
                                        key={index}
                                        className="forday">
                                            {res.bg && <Slider info={res.bg}/>}
                                            <div className="forday-content">
                                                { !this.state.translateStatus[index] ?
                                                    <div className="forday-content-intro">{res.value && <span>{res.value}</span>}</div>
                                                :<div className="forday-content-intro">{getTranslateData}</div>

                                                }
                                                <div className="forday-content-portrait">
                                                    <div className="name">{res.author.name}</div>
                                                    <div className="portrait">
                                                        {res.author.portrait && <img src={res.author.portrait} alt=""/>}
                                                    </div>
                                                    <span>{trans('warmwall.from','来自')}</span>
                                                </div>
                                            </div>
                                            <div className="warmwall-util">
                                                {
                                                    !this.state.translateStatus[index] ?
                                                    <div className={translateStyle} onClick={this.showTranslate.bind(this,false,res.value,index)}>
                                                        <i className="iconfont">&#xe684;</i>
                                                        <span>{trans('warmwall.translate','翻译')}</span>
                                                    </div>
                                                    :
                                                    <div className={translateStyle} onClick={this.showPreText.bind(this,false,index)}>
                                                        <i className="iconfont">&#xe684;</i>
                                                        <span>{trans('warmwall.preText','原文')}</span>
                                                    </div>
                                                }
                                                <Heart isPraise={res.isPraise} id={res.id} heartCount={res.heartCount}/>
                                                <div 
                                                // onClick={this.changeReviewState.bind(this,res.id,getAuthor.name,"day")}
                                                >
                                                <div className="reviewModal">
                                                    <i className="iconfont">&#xe654;</i>
                                                    {trans('global.comment','评论')}{res.reviewCount != null && res.reviewCount != 0 && <span>({res.reviewCount})</span>}
                                                </div>
                                                </div>
                                            </div> 
                                            {
                                                isgetReviewListData  &&
                                                <div id={id}>
                                                <ReviewPC user="day"
                                                    showModal={this.showModal.bind(this)}
                                                    changeState={this.changeState.bind(this)}
                                                    reviewCount={infoData.reviewCount}
                                                    review={getReviewListData[res.id] || []}
                                                    reviewType={1}
                                                    dnId={res.id}
                                                    isshow={this.state.isReviewState}/>
                                                </div>
                                            } 
                                    </div>
                                })
                        }</div>
                        : null
                    }  
            </div>
            
        </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    getWarmWallForweekData : state.example.getWarmWallForweekData,
    getTranslateData: state.example.getTranslateData,
    getWarmWallFordayData: state.example.getWarmWallFordayData,
    getReviewListData:state.example.getReviewListData,
    getHeartCountData:state.example.getHeartCountData,
    isgetReviewListData:state.example.isgetReviewListData,
    isSuccess: state.example.isSuccess
  };
}
export default connect(mapStateToProps)(Warmwall);

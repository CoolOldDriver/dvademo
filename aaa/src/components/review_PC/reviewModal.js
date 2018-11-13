import React from "react";
import { connect } from 'dva';
import {Input,Form,message} from 'antd';
// import "./index.less";
import Review from "./index";
import { trans } from '../../utils/i18n';
const FormItem = Form.Item;
const { TextArea } = Input;
class ReviewModal extends React.Component {
  constructor(){
        super();
        this.state={
            modalVisible: false,
            isReviewListShow: false
        }
  }
  issue(id){
    const { dispatch, reviewId, dnId, form, reviewType, user} = this.props;
    const{ validateFields } = form;
        validateFields(( errs, values )=>{
            if(errs) return;
            if(!values.modalTitle){
                message.error(trans('publishDetial.cannotFull','发布内容不能为空'));
                return false;
            }
            dispatch({
                type: `example/addReview`,
                payload: {
                    data: values.modalTitle,
                    reviewId: reviewId,
                    type: reviewType,
                    dnId: dnId,
                    user: user
                }
            }).then(() => {
                const { isSuccess } = this.props;
                if(isSuccess){
                    this.props.showModal(false);
                    dispatch({
                        type: `example/getReview`,
                        payload: {
                            type:reviewType,
                            id:dnId
                        }
                    })
                }else{
                    return false;
                }
            })
        })
  }
  hideModalFun(){
      this.props.showModal(false);
  }
  ifIOS(){
    var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isIOS) {
　　　 return true;
    }
    return false;
  }
  focusFun(){
    let review_modal = document.querySelector(".review-modal"),
        shadeElement = document.getElementById("shade"),
        ftTextarea = review_modal.getElementsByTagName("textarea")[0];
    if(this.ifIOS()){
         // 这两行就是关键代码
        let top = document.body.scrollTop,
            winHeight = window.innerHeight;
        review_modal.style.top = (top + 60) + 'px';
         // 这两行就是关键代码 END
        setTimeout(() => {
            document.body.scrollTop = top;
            review_modal.style.top = (window.innerHeight) + 'px';
            review_modal.style.bottom = 'auto';
          }, 50);
    }
    document.addEventListener("touchmove", this.handleScroll);
    shadeElement.style.display = "block";
  }
  blurFun(){
    let review_modal = document.querySelector(".review-modal"),
        shadeElement = document.getElementById("shade"),
        ftTextarea = review_modal.getElementsByTagName("textarea")[0];
    review_modal.style.position = "fixed";
    //shadeElement.style.display = "none";
    review_modal.style.bottom = 0;
    review_modal.style.top = 'auto';
    //shadeElement.style = "";

    document.removeEventListener("touchmove", this.handleScroll);
  }
  handleScroll(ev){
    ev.preventDefault();
  }
  renderReplay(name){
    return trans('global.replayToName','回复：${personName}',{'personName': name})
  }
  render() {
    const { type, name, reviewCount, form, reviewType, getReviewListData, dnId } = this.props;
    const { getFieldDecorator } = form;
    let info = this.renderReplay(name);
    const reviewData = getReviewListData || [];
    const ids = 'modal' + name;
    return (
        <div className = "Modal">
            <div className = "review-modal">
                <div className = "modal">
                    <FormItem>
                        {
                          getFieldDecorator("modalTitle", {})
                          (
                            <TextArea
                              placeholder={info}
                              autosize
                              onFocus={this.focusFun.bind(this)}
                              onBlur={this.blurFun.bind(this)}/>
                          )
                        }
                    </FormItem>
                    <a className="btn" onClick={this.issue.bind(this,name)}>
                      {trans('publishDetial.publishButton','发布')}
                    </a>
                </div>
            </div>
            <div className="mask" id="shade" onClick={this.hideModalFun.bind(this)}></div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      reviewModalVisibleValue:state.example.reviewModalVisibleValue,
      isSuccess: state.example.isSuccess
  };
}
export default connect(mapStateToProps)(Form.create()(ReviewModal));

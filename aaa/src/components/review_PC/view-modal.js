import React from "react";
import { connect } from 'dva';
import {Input,Form,message,Button} from 'antd';
// import Review from "./index";
import './view-modal.css';
import { trans } from '../../utils/i18n';
const FormItem = Form.Item;
const { TextArea } = Input;
class ReviewModals extends React.Component {
  constructor(){
        super();
        this.state={
            modalVisible: false,
            isReviewListShow: false,
            modalVisible:true
        }
  }
  
  issue(id){
    const { dispatch, reviewId, dnId, form, reviewType, user, value} = this.props;
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
  
  renderReplay(name){
    return trans('global.replayToName','回复：${personName}',{'personName': name})
  }
  
  render() {
    const { type, name, reviewCount, form, reviewType, getReviewListData, dnId } = this.props;
    const { getFieldDecorator } = form;
    let info = this.renderReplay(name);
    return (
        <div >
            <div >
                <div className="content_post">
                    <FormItem>
                        {
                          getFieldDecorator("modalTitle", {})
                          (
                            <TextArea
                              placeholder={info}
                              className="textarea"

                              />
                          )
                        }
                    </FormItem>
                    <Button className="btn-post" type="primary" onClick={this.issue.bind(this,name)}>
                      {trans('publishDetial.publishButton','发布')}
                    </Button>
                </div>
            </div>
            
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
export default connect(mapStateToProps)(Form.create()(ReviewModals));

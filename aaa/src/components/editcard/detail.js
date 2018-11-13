import React from "react";
import { connect } from 'dva';
import {Input,message,Upload,Modal,Form,Row,Col,Button} from 'antd';
import { Link } from "dva/router";
import { trans } from '../../utils/i18n';
import "./index.less";
const { TextArea } = Input;
const FormItem = Form.Item;
class EditEetail extends React.Component {
  constructor(props){
    super();
    this.state={
        previewVisible: false,
        previewImage: '',
        bigModalVisible:false,
        fileList: [],
        list:[],
        canRoute: ''
    }
  }
  componentDidMount() {
    const {location} = this.props;
    this.setState({
        fileList:location.state.editValue.image,
        list:location.state.editValue.image
    })
    var bigModal_dialog = document.getElementById("bigModal_dialog");
    bigModal_dialog.style.marginTop = '0.8rem';
  }
  edit(){
      this.setState({
        modalVisible:true
      })
  }
  handleCancel = (e) => {
    this.setState({ previewVisible: false })
  }

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }
 normFile = (e) => {
     if (Array.isArray(e)) {
        return e;
      }
      let {file, fileList} = e;
      if(fileList.length > 10) {
        message.error(trans('publishDetial.uploadError','上传错误'));
        return;
      }
  
      if(file.size > 200 * 1024 * 1024) {
        message.error(trans('publishDetial.uploadTooBig','上传的附件不能超过200M哟！'));
        return;
      }
      if(file.status == 'error') {
        fileList.pop();
        message.error(trans('global.errorTips','服务器出错了，请稍后重试！'));
        return;
      }
  
      if(file.status == 'uploading') {
        return;
      }
      if(file.response && file.status == 'done') {
        let fileList1 =  this.state.fileList.concat();
        fileList1 = fileList1.concat(file.response.data);
        this.setState({fileList: fileList1});
      }
      if(file.status == 'removed') {
        if(!this.state.flag){
          //this.handleRemove(file);
        }
  
      }
      return e && this.state.fileList;
  
  }

  shrink(){
    this.setState({ 
        bigModalVisible:false
    });
  }
  deleteImg(key){
     this.state.fileList.splice(key,1);
     this.setState({
        fileList:this.state.fileList
     })
  }
  issue(){
    const {dispatch,form,location,isaddIssue} = this.props;
    const {state} = location;
    const{validateFields} = form;
        validateFields((errs,values)=>{
            if(errs) return;
            if(!values.content){
              message.error(trans('publishDetial.cannotFull','发布内容不能为空~'));
              return;
            }
            dispatch({
                type:`example/addIssue`,
                payload:
                  {
                      mode:1,
                      content:values.content,
                      images:this.state.fileList,
                      type:state.type,
                      dnId:state.editValue.id
                }
            }).then(() => {
              const {submitStatus,history} = this.props;
              if(submitStatus){
                this.setState({
                  canRoute: true
                })
               history.push('/edit?type='+state.type);
              }else{
                this.setState({
                  canRoute: false
                })
              }
            })
        })
        if(isaddIssue){
          if(state.type==1){
            dispatch({
            type:`example/getWarmWallEditList`,
            payload:{
            }
            })
          }
          if(state.type==2){
            dispatch({
              type:`example/getQuestionPoolEditList`,
              payload:{
              }
            })
          }
        }
  }
  showBig(){
      this.setState({
        bigModalVisible:true
      })
  }
  render() {
    const { editvalue, form, location } = this.props;
    const { state } = location;
    const { previewVisible, previewImage, fileList } = this.state;
    const { getFieldDecorator } = form;
    const uploadButton = (
      <div>
        <i className="iconfont" style={{fontSize:'21px'}}>&#xe62e;</i>
      </div>
    );
    const value = editvalue || trans('publishDetial.writeProblem','写一条你今天发现的问题……');
    return (
       <div id="edit" className="edit-modal modalheight" style={{bottom:0,top:0}}>
           <div className="big-modal">
               <div className="bookfix">
                  <Link to={"/edit?type=" + state.type}>
                    <i className="iconfont">&#xe6ad;</i>
                  </Link>
                </div>
                <div className="bigModal" id="bigModal_dialog">
                  <FormItem style={{ marginBottom: 5}}>
                      {getFieldDecorator('content', {
                      initialValue: state.editValue.value,
                      })(
                      <TextArea placeholder={value} rows={6}/>
                      )}
                  </FormItem>
                </div>
            </div>
            <div className="editmodal">
                <div className="clearfix" style={{width:'100%'}}>
                  <Row>
                    <Col span={12}>
                      <FormItem style={{ marginBottom: 5}}>
                        {getFieldDecorator('files', {
                            getValueFromEvent: this.normFile.bind(this),
                        })(
                            <Upload
                              action="/api/multipleUpload"
                              listType="picture-card"
                              onPreview={this.handlePreview}
                              multiple={true}
                            >
                              {fileList.length >= 9 ? null : uploadButton}
                            </Upload>
                        )}
                      </FormItem>
                    </Col>
                    <Col span={12}>
                      <div className="operButton">
                        <a>
                          <Button 
                            type="primary" 
                            onClick={this.issue.bind(this)}>
                            {trans('publishDetial.publishButton','发布')}
                          </Button>
                        </a>
                      </div>
                      {/*<Link to="/edit" onClick={this.issue.bind(this)}>发布</Link> */}
                    </Col>
                  </Row>
                  <Modal 
                    visible={previewVisible} 
                    footer={null} 
                    onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                  </Modal>
              </div>
            </div>
            <div className="imgList">
              {
                  this.state.fileList 
                  && this.state.fileList.map((res,index)=>{
                      const url = res.url || res.thumbUrl
                      return <div className="imageBox" key={index}>
                                  <img src={url}/>
                                  <i className="iconfont" onClick={this.deleteImg.bind(this,index)}>&#xe613;</i>
                              </div>
                  })
              }
             </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        isaddIssue:state.example.isaddIssue,
        submitStatus: state.example.submitStatus
    };
  }
  export default connect(mapStateToProps)(Form.create()(EditEetail));

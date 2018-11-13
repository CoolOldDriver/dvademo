import React from "react";
import { connect } from 'dva';
import {Input,message,Upload,Modal,Form,Button,Icon,Row,Col} from 'antd';
import { Link } from "dva/router";
import { trans } from '../../utils/i18n';
import "./index.less";
const { TextArea } = Input;
const FormItem = Form.Item;
let commitStatus = false; //禁止重复提交标识
class EditModal extends React.Component {
  constructor(props){
    super();
    this.state={
        previewVisible: false,
        previewImage: '',
        bigModalVisible:false,
        fileList: [],
        list:[]
    }
  }
  componentDidMount() {
  }
  edit(){
    this.setState({
      modalVisible: true
    })
  }
  handleCancel = (e) => {
    this.setState({ 
      previewVisible: false 
    })
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
      if(this.state.fileList.length > 10) {
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
      if (file.status === 'done') {
        let fileList1 =  this.state.fileList.concat();
        fileList1 = fileList1.concat(file.response.data);
        this.setState({fileList: fileList1});
        //message.success(`${info.file.name} file uploaded successfully`);
      }

      if(file.status == 'removed') {
        if(!this.state.flag){
          this.handleRemove(file);
        }
      }
      return e && this.state.fileList;
  }


  handleUploadChange = ({ file, fileList }) => {
    this.state.fileList && this.state.fileList.map((el) => {
      if(el.uid == file.uid) {
        let postFile = {};
        if(file.response && file.status === "done") {
          let { data } = el.response;
          postFile.url = data[0].url || '';
          postFile.key = data[0].key;
        } else {
          postFile.status = 'error';
          postFile.response = file.message || trans('global.errorTips','服务器出错了，请稍后重试！');
        }
        this.state.list.push(postFile);
        return;
      }
    })
    this.setState({
      fileList: [...this.state.list],
    });
  }
  shrink(){
    this.setState({
      bigModalVisible:false
    });
    let editmodal = document.getElementById('J_editmodal'),
        bigModal = document.getElementById("bigModal"),
        editmodalTextarea = editmodal.getElementsByTagName('textarea')[0];
    editmodal.style.position = 'fixed';
    editmodal.style.top = '';
    editmodal.style.bottom = '0';
    bigModal.style.marginTop = '0';
  }
  deleteImg(key){
     let imgList = this.state.fileList.concat();
     imgList.splice(key,1);
     this.setState({
        fileList: imgList
     })
  }
  issue(){
    const { dispatch, form, type, editVisible, editValue, isaddIssue, publishTime } = this.props;
    const{ validateFields } = form;
    if(commitStatus) return;
        validateFields((errs,values)=>{
            if(errs) return;
            if(!values.content){
              message.error(trans('publishDetial.cannotFull','发布内容不能为空~'));
              return;
            }
            commitStatus = true;
            dispatch({
              type:`example/addIssue`,
              payload:{
                  mode: editVisible? 1: 0,
                  content:values.content,
                  images:this.state.fileList,
                  type:type,
                  dnId:editValue.id,
                  dateId: publishTime
              }
            }).then(() => {
              const {submitStatus} = this.props;
              if(submitStatus){
                this.shrink();
                form.resetFields();
                this.setState({
                  fileList : []
                });
                commitStatus = false;
              }else{
                commitStatus = false;
                return false;
              }
            })
        })
      //   this.setState({
      //     bigModalVisible:false
      // });
      if(isaddIssue){
        if(type==1){
          dispatch({
            type:`example/getWarmWallEditList`,
            payload:{
              dateId: publishTime
            }
          })
        }
        if(type==2){
          dispatch({
            type: `example/getQuestionPoolEditList`,
            payload: {
              dateId: publishTime
            }
          })
        }
      }
  }
  showBig(){
      this.setState({
        bigModalVisible: true
      })
  }

  textAreaBlur() {
    let editmodal = document.getElementById('J_editmodal'),
        bigModal = document.getElementById("bigModal");
        editmodal.style.top = '0';
        bigModal.style.marginTop = '1rem';
    document.removeEventListener("touchmove", this.handleScroll);
  }

  textAreaFocus() {
    let editmodal = document.getElementById('J_editmodal'),
        bigModal = document.getElementById("bigModal"),
        editmodalTextarea = editmodal.getElementsByTagName('textarea')[0];
    editmodal.style.top = '0';
    bigModal.style.marginTop = '1rem';
    editmodal.style.position= 'absolute';
    editmodal.scrollIntoView();
    document.addEventListener("touchmove", this.handleScroll);
    this.showBig();
  }

  handleScroll (ev){
    ev.preventDefault();
  }


  render() {
    const { editvalue, form, editValue, type, publishTime } = this.props;
    const { previewVisible, previewImage, fileList } = this.state;
    const { getFieldDecorator } = form;
    const uploadButton = (
        <i className="iconfont" style={{fontSize:'0.7rem'}}>&#xe62e;</i>
    );
    const editmodal = this.state.bigModalVisible ? "edit-modal modalheight"  : "edit-modal"
    const value = editvalue || trans('publishDetial.writeProblem','写一条你今天发现的问题……');
    const textareaStyle = this.state.bigModalVisible ? 'bigHeight' : 'smallHeight'
    return (
       <div>
         <div id="J_editmodal" className="edit-modal">
                <div>
                  <div className="big-modal">
                   {
                     this.state.bigModalVisible 
                      && <div className="bookfix">
                           <i className="iconfont" onClick={this.shrink.bind(this)}>&#xe6ad;</i>
                         </div>
                    }
                    <div className="bigModal" id="bigModal">
                        <FormItem style={{ marginBottom: 5}}>
                            {getFieldDecorator('content', {
                              initialValue: editValue.value,
                            })(
                              <TextArea
                                onFocus={this.textAreaFocus.bind(this)}
                                onBlur={this.textAreaBlur.bind(this)}
                                className={textareaStyle}
                                placeholder={
                                  type == 1 
                                  ? trans('publishDetial.writeWarmEvent','写一写今天暖心的事情……') 
                                  : trans('publishDetial.writeProblem','写一条你今天发现的问题……')
                                }
                              />
                            )}
                        </FormItem>
                      </div>
                  </div>
                  {this.state.bigModalVisible 
                    && <div className="clearfix">
                        <Row>
                          <Col span={12}>
                            <FormItem style={{ marginBottom: 5,textAlign: 'center'}}>
                                {getFieldDecorator('files', {
                                    getValueFromEvent: this.normFile.bind(this),
                                    //initialValue: this.state.fileList || [],
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
                              {/* <Link to="edit" onClick={this.issue.bind(this)}><Button type="primary">发布</Button></Link> */}
                              <Button type="primary" onClick={this.issue.bind(this)}>{trans('publishDetial.publishButton','发布')}</Button>
                            </div>
                          </Col>
                        </Row>

                        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                          <img alt="example" style={{ width: '100%' }} src={previewImage} />
                        </Modal>
                      </div>}

                    {this.state.bigModalVisible 
                      && <div className="imgList">
                        {
                          this.state.fileList 
                          && this.state.fileList.map((res,index)=>{
                              const url = res.url || res.thumbUrl
                              return <div className="imageBox" key={index}>
                                          <img src={url} alt=""/>
                                          <i className="iconfont" onClick={this.deleteImg.bind(this,index)}>&#xe613;</i>
                                      </div>
                          })
                        }
                    </div>}
                    
                </div>
         </div>
         {/* <div id="J_mask" className="mask"></div> */}
       </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        isaddIssue: state.example.isaddIssue,
        submitStatus: state.example.submitStatus
    };
  }
  export default connect(mapStateToProps)(Form.create()(EditModal));

import React , {Component}from 'react';
import { connect } from "dva";
import q_pic from './img/1.png';
import read_sort from './img/2.png';
import './index.css';

class Read extends Component {
    constructor(){
        super();
        this.state={
          
        }
      }

      componentDidMount () {
        this.getQuestionData();
        this.getReadData();
      }

      getQuestionData = () => {
        const { dispatch } = this.props;
        dispatch({
            type:`example/getQuestionList`, 
            payload:{}
          })
      }
      getReadData = () => {
        const { dispatch } = this.props;
        dispatch({
            type:`example/getReadList`, 
            payload:{}
          })
      }

      render(){
        let { getQuestionData, getReadData } = this.props;
        let question_list = getQuestionData && getQuestionData.map((item) => {
            return <div key={item.key}>
                          <div className="question_content">
                              <p className="q_name">{item.name} / {item.author}</p>
                              <div>{item.val}</div>
                          </div>
            </div>
          })
          
          let read_list = getReadData && getReadData.map((item) => {
            return <div key={item.key}>
                      <p className="read_title">川溪/NIKE  <span className="read_quantity">已阅读89篇</span></p>
                  </div>
          })
          return (
              <div>
                    <div className="right">
                            <div className="needResolve">
                                <div className="question_logo">
                                    <img src={q_pic}/>
                                    最需要解决的问题
                                </div>
                                {question_list}
                            </div>
                            <div className="readBoard">
                                <div className="question_logo">
                                    <img src={read_sort}/>
                                    阅读排行榜
                                </div>
                                {read_list}
                            </div>
                    </div>
              </div>
          )
      }
}


function mapStateToProps(state) {
    return {
      getQuestionData: state.example.getQuestionData,
      getReadData: state.example.getReadData
    };
  }
  export default connect(mapStateToProps)(Read);
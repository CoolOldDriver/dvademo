import React from "react";
import { connect } from 'dva';
import {Tabs} from 'antd';
import "./index.less";
import Card from './card';
import { trans } from '../../utils/i18n';
const TabPane = Tabs.TabPane;
class QuestionPool extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
        type: `example/getQuestionPoolList`,
        payload: {
          isSolved: 0
        }
      })
  }
  callback(key){
    const { dispatch } = this.props;
    if(key == 1 || key == 2){
      dispatch({
        type: `example/getQuestionPoolList`,
        payload: {
          isSolved: key-1
        }
      })
    }else{
      dispatch({
        type: `example/getQuestionPoolList`,
        payload: {
          isSolved: 2
        }
      })
    }

  }
  render() {
    const { getQuestionPoolListData } = this.props;
    const info = [
      trans('questionPool.waitToSolve','待解决'),
      trans('questionDetail.haveSolved','已解决'),
      trans('questionPool.mine','我的')
    ];
    const type = getQuestionPoolListData.isWeekTeacher || "";

    return (
      <div className="poollist" >
         <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
                { info
                 && info.map((res,index)=>{
                      return <TabPane
                              tab={res}
                              key={index+1}>
                              { getQuestionPoolListData
                                && getQuestionPoolListData.map((res,index)=>{
                                    return <Card info={res} key={index} typeCard={type}/>
                                   })
                              }
                              { !getQuestionPoolListData || getQuestionPoolListData.length == 0
                                && <div className="nomore">{trans('questionPool.noProblem','暂无问题')}</div>
                              }
                            </TabPane>
                    })
                }
            </Tabs>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      getQuestionPoolListData : state.example.getQuestionPoolListData,
  };
}
export default connect(mapStateToProps)(QuestionPool);

import React from "react";
import { connect } from 'dva';
import "./index.less";
import ReviewModal from "../review/reviewModal"

class QuestionCard extends React.Component {
  componentDidMount() {
  }
  render() {
    const { info } = this.props;
    const cardinfo = info || {}
    return (
      <div className="questioncard" >
         <div className="cardbox">
            <div className="aside">
                <div className="image">
                    <img src={cardinfo.portrait} alt=""/>
                </div>
            </div>
            <div className="article">
                <div className="name">{cardinfo.authorName}</div>
                <div className="value">{cardinfo.content}</div>
            </div>
            <div>
              {cardinfo.isgood 
              ? <i className="iconfont good">&#xe628;</i>
              : <i className="iconfont">&#xe61c;</i>}
            </div>
         </div>
         <div className="util min">
            <div>
              <i className="iconfont">&#xe684;</i>
            </div>
            <div>
              <ReviewModal 
               type="icon" 
               name={ cardinfo.authorName } 
               reviewId={ cardinfo.id } 
               reviewtype={2}/>
            </div>
            <div>
              <i className="iconfont">&#xe67c;</i>
            </div>
         </div>   
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
    };
  }
  export default connect(mapStateToProps)(QuestionCard);

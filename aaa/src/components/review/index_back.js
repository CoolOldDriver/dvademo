import React from "react";
import { connect } from 'dva';
import "./index.less";
import ReviewModal from './reviewModal';
class Review extends React.Component {
    constructor(){
        super();
        this.state={
            reviewVisble:false
        }
    }
    componentDidMount(){
    }
    showVisible(){
        this.setState({
            reviewVisble:true
        })
    }
    setStar(id){
        const {dispatch} = this.props;
        dispatch({
            type:`example/setStar`,
            payload:{
              id:id
            }
        })
        document.getElementById(id).className="iconfont good"
    }
  render() {

    const {review,reviewType,dnId,isSetStar,user} = this.props;
    const reviewData = review || [];
    return (
        <div className="reviewlist">
                {reviewData && reviewData.map((res, index)=>{
                    return <div key={index + '-' + res.id} className="reviewbox">
                        <div className="reviewHead">
                        {
                            res.parentInfo ? 
                            <div className="Image">
                            <div className="left">
                                <div className="reviewImage">
                                    <img src={res.portrait} alt=""/>
                                </div>
                                <i className="iconfont">&#xe603;</i>
                                <div className="reviewImage first">
                                <img src={res.parentInfo.portrait} alt=""/>
                                </div>

                                <span>{res.parentInfo.authorName}</span>
                            </div>
                                {/* star =0 没有打 */}
                                <div className="star">
                                    {res.star ==1 ? 
                                        <i className="iconfont good">&#xe628;</i>
                                    : <i className="iconfont" id={res.id} onClick={this.setStar.bind(this,res.id)}>&#xe628;</i>}
                                </div>
                            </div>
                        :<div className="Image">
                        <div className="left">
                            <div className="reviewImage first"><img src={res.portrait} alt=""/></div>
                            <span>{res.authorName}</span>
                        </div>
                            <div className="star">
                                {res.star ==1 ? 
                                    <i className="iconfont good">&#xe628;</i>
                                : <i className="iconfont" id={res.id} onClick={this.setStar.bind(this,res.id)}>&#xe628;</i>}
                            </div>
                        </div>
                        }
                        </div>
                        <div className="reviewContent">
                            {res.content}
                        </div>
                        <div className="reviewUtil">
                            <ReviewModal type="icon" user={user} name={res.authorName} reviewId={res.id} dnId={dnId} reviewType={reviewType}/>
                            {/* <i className="iconfont util">&#xe67c;</i> */}
                        </div>
                    </div>
                })}
            </div>
    );
  }
}

function mapStateToProps(state) {
    return {
    };
  }
export default connect(mapStateToProps)(Review);

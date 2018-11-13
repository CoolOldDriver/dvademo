import React from "react";
import { connect } from 'dva';
import "./index1.less";
import ReviewModals from './view-modal';
class ReviewPC extends React.Component {
    constructor(){
        super();
        this.state = {
            reviewVisble: false,
            modalVisible:false,
            flag:false,
        }
    }
    
    showModal(){
        let { flag } = this.state;
        this.setState({
            flag :!flag
        })
  }

    setStar(id){
        const { dispatch } = this.props;
        dispatch({
            type: `example/setStar`,
            payload: {
              id: id
            }
        })
        document.getElementById(id).className = "iconfont good"
    }
    getShowModal( id,name ){
        console.log(this.props.showModal(true));
        const { user, dnId } = this.props;
        this.props.showModal(true);
        this.props.changeState(id, name, user, dnId);
    }
render() {
    const { review, reviewType, dnId, isSetStar, user, reviewCount, getReviewListData } = this.props;
    const reviewData = review || [];
    // const infoData = info || {};
    return (
        <div className="reviewlist1">
                { reviewData
                 && reviewData.map((res, index)=>{
                    return <div key={index + '-' + res.id} className="reviewbox">
                        <div className="reviewHead">
                          {
                              res.parentInfo
                              ? <div className="Image">
                                  <div className="left">
                                      <div className="reviewImage">
                                        <img src={res.portrait} alt=""/>
                                      </div>
                                      <i className="iconfont iconft">&#xe603;</i>
                                      <div className="reviewImage first">
                                        <img src={res.parentInfo.portrait} alt=""/>
                                      </div>
                                      <span className="author-name">{res.parentInfo.authorName}</span>
                                  </div>
                                  {/* star =0 没有打 */}
                                  <div className="star">
                                      {res.star ==1
                                        ? <i className="iconfont good">&#xe628;</i>
                                        : <i className="iconfont" id={res.id} onClick={this.setStar.bind(this,res.id)}>&#xe628;</i>
                                      }
                                  </div>
                                </div>
                              : <div className="Image">
                                    <div className="left">
                                        <div className="reviewImage first">
                                          <img src={res.portrait} alt=""/>
                                        </div>
                                        <span className="author-name">{res.authorName}</span>
                                    </div>
                                    <div className="star">
                                        {res.star ==1
                                        ? <i className="iconfont good">&#xe628;</i>
                                        : <i className="iconfont" id={res.id} onClick={this.setStar.bind(this,res.id)}>&#xe628;</i>}
                                    </div>
                                </div>
                          }
                        </div>
                        <div className="reviewContent">
                            {res.content}
                        </div>
                        <div className="reviewUtil">
                            <div className="reviewModal" 
                                onClick={this.showModal.bind(this,res.id)}
                            // onClick={this.getShowModal.bind(this,res.id,res.authorName)}
                            >
                                <i className="iconfont">&#xe654;</i>
                            </div>
                        </div>
                    </div>
                    })
                }
                
                {/* {
                    this.state.flag ?  
                    <div className="modals">
                        <ReviewModals 

                        /> 
                    </div>: null
                    
                } */}
          </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    getReviewListData:state.example.getReviewListData,
  };
}
export default connect(mapStateToProps)(ReviewPC);

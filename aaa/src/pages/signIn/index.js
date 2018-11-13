import React , {Component}from 'react';
import { connect } from "dva";
import { Spin , Button, Row, Col, Icon } from 'antd';
import "./index.less";

class SignIn extends Component {
    constructor(){
        super();
        this.state = {}
    }
    componentDidMount(){
        const {dispatch, match: { params }} = this.props;
        console.log(this.props);
        dispatch({
            type : `example/setSignIn`,
            payload : {
              campus: params.campus || 1
            }
        })
    }
    render(){
        const { getSignInData } = this.props;
        return (
            <div className="signInMain">
                { JSON.stringify(getSignInData) === "{}" && <Spin tip="Loading..." size="large"/>}
                { getSignInData && getSignInData.success === true && <div className="tipsContent"><p className="iconContent"><Icon type="check-circle" /></p><p className="tipsWz">签到成功/Sign in</p></div>}
                { getSignInData && getSignInData.success === false && <div className="tipsContent"><p className="iconContent"><Icon type="close-circle" /></p><p className="tipsWz">{getSignInData.message}</p></div>}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        getSignInData : state.example.getSignInData
    };
}
export default connect(mapStateToProps)(SignIn);

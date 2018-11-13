import React , {Component}from 'react';
import { connect } from "dva";
import pic from './img/xiaowurizhi.png';
import {  Menu, Dropdown, Icon, Button } from 'antd';
import { trans, locale } from './../../utils/i18n';
import './index.css';

class Banner extends Component {

  componentDidMount(){
        this.getCampus();
    }

    //切换校区
  handleMenuClick(val) {
    const { dispatch } = this.props;
    dispatch({
      type: `example/switchCampus`,
      payload: {
        currentCampus: val.key
      }
    }).then(() => {
       const { changeCampus } =  this.props;
       if( changeCampus ) {
         window.location.reload();
       }else {
         return false;
       }
    })
  }

  getCampus() {
    const { dispatch } = this.props;
    dispatch({
      type: `example/getCampus`,
      payload: {}
    })
  }

    checkLange = (e) => {
        let target = e.target,
            lang = target.getAttribute("data-lang");
            console.log(lang)
        e.preventDefault();
        this.props.dispatch({
          type: 'example/setLanguage',
          payload: {
            languageCode: lang
          }
        }).then(() => {
          const { isSuccess } = this.props;
          if(isSuccess){
            window.location.reload();
          }else{
            return false;
          }
        })
      }

    // handleMenuClick(e) {
    //     this.props.handleClick(e.key);
    //   }

    render () {
        const lg = locale();
        const menu = (
            <Menu onClick={this.handleMenuClick.bind(this)}>
              <Menu.Item key="1">
                <a className="school-name"><Icon type="environment" className="area-icon" theme="outlined" /> {trans('global.wenxi','文溪校区')}</a>
              </Menu.Item>
              <Menu.Item key="2">
                <a className="school-name"><Icon type="environment" className="area-icon" theme="outlined" /> {trans('global.kids','幼儿园')}</a>
              </Menu.Item>
            </Menu>
          );
        let currentCampus = this.props.currentCampus || "";
      
        return <div className="logo">
                    <img src={pic} />
                    <span>YunGu <b>WORK</b></span>
                    <a className="language_icon">
                    
                        {lg == 'en'
                            && <span data-lang="zh" onClick={this.checkLange} className="icon">中文</span>
                        }
                        {/* <span data-lang="zh" onClick={this.checkLange} className="icon">中文</span> */}
                        {lg != 'en'
                            && <span data-lang="en" onClick={this.checkLange} className="icon">English</span>
                        }
                    </a>
                   
                    <div className="changeSchool">
                        <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter">
                            <a className="ant-dropdown-link drop-content">
                            { currentCampus == 1 && <span>{trans('global.wenxi','文溪校区')}</span> }
                            { currentCampus == 2 && <span>{trans('global.kids','幼儿园')}</span> }
                            { currentCampus == "" && <span>{trans('global.switchCampus','切换园区')}</span> } <Icon type="down" />
                            </a>
                        </Dropdown>
                    </div>
                     <a className="guide_icon" href="https://home.yungu.org/index.php?app=weiba&mod=Index&act=postDetail&post_id=147">
                        <Icon type="question-circle-o" />
                    </a>
                </div>
    }
}

function mapStateToProps(state) {
    return {
        navTab : state.example.navTab,
        isSuccess: state.example.isSuccess,
        changeCampus: state.example.changeCampus,
        currentCampus: state.example.campusInfo
    };
  }
export default connect(mapStateToProps)(Banner);
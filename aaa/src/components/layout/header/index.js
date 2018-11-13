import React from "react";
import { connect } from 'dva';
import "./index.less";
import {  Menu, Dropdown, Icon, Button } from 'antd';
import { trans, locale } from '../../../utils/i18n';

class LayoutHeader extends React.Component {
  componentDidMount() {
  }
  checkLange = (e) => {
    let target = e.target,
        lang = target.getAttribute("data-lang");
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


  handleMenuClick(e) {
    this.props.handleClick(e.key);
  }

  render() {
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

    return (
      <div className="layout_header">
        <div className="logo-img"></div>
        <a className="language_icon">
          {lg == 'en'
            && <span data-lang="zh" onClick={this.checkLange} className="icon">中文</span>
          }
          {lg != 'en'
            && <span data-lang="en" onClick={this.checkLange} className="icon">English</span>
          }
        </a>
        <a className="guide_icon" href="https://home.yungu.org/index.php?app=weiba&mod=Index&act=postDetail&post_id=147">
          <Icon type="question-circle-o" className="icon"/>
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
        {/* <div><img src="./public/image/header-user.png" alt=""/></div> */}
        {/* <div><img src="../../../public/image/header-util.png" alt=""/></div> */}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    isSuccess: state.example.isSuccess
  };
}
export default connect(mapStateToProps)(LayoutHeader);

import React from "react";
import { connect } from 'dva';
import "./index.less";
import { trans } from '../../utils/i18n';
class EditCard extends React.Component {
  componentDidMount() {
  }
  render() {
    const {info} = this.props;
    const cardinfo = info || {}
    return (
      <div className="editcard" >
         <div className="content">{cardinfo.value}</div>
         <div className="image">
            {cardinfo.image && cardinfo.image.map((res,index)=>{
                return <div key={index} className="imagebox">
                          <img src={res.url} alt=""/>
                       </div>
            })}
         </div>
         {
           cardinfo.userName &&
            <div className="avatorName">
              <span
                dangerouslySetInnerHTML = {{ __html:trans('global.fromToName','来自<em>${name}</em>', {name: cardinfo.userName})}}></span>
            </div>
         }
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
    };
  }
  export default connect(mapStateToProps)(EditCard);

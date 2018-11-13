import React , {Component}from 'react';
import { connect } from "dva";
import Slider from "react-slick";
import ImageView from 'react-mobile-imgview';
import 'react-mobile-imgview/dist/react-mobile-imgview.css'
import "./index.less";
class WarmwallSlider extends Component {
  constructor(){
    super();
    this.state={
        visible: false,
        showViewer: false
    }
  }
  show(){
     this.setState({
       showViewer: true
     })
  }
  close(){
    this.setState({
      showViewer: false
    })
  }
  render() {
      const { info } = this.props;
      var imgListArr = [];
      for(var i = 0; i < info.length; i++){
          imgListArr.push(info[i].url);
      }
      let canShow = info && info.length > 0 ? 'block' : 'none';
      return (
          <div className="slider" style={{display:canShow}}>
              {
                  info &&
                      <div>
                       {info.map((item,index) => {
                           return <img src={item.url} key={index} onClick={this.show.bind(this,imgListArr,index)}/>
                       })
                       }
                       </div>
              }
              {
                this.state.showViewer && imgListArr.length > 0
                && <ImageView
                    enableRotate={true}
                    imagelist={imgListArr}
                    close={this.close.bind(this)}/>
              }
          </div>)
   }
}
function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps)(WarmwallSlider);

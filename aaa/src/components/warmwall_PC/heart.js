import React , {Component} from 'react';
import { connect } from "dva";
import { Icon } from 'antd';
import { trans } from '../../utils/i18n';
import "./index1.less";
class Heart extends Component {
  constructor(){
    super();
    this.state = {
        heartCountState: false
    }
  }
  showHeart(id){
      this.setState({
          heartCountState: true
      })
      const {dispatch} = this.props;
      dispatch({
          type: `example/getHeartCount`,
          payload: {
              id: id
          }
        })
      document.getElementById(id).className="border activite"
  }

  render() {
      const { isPraise, id, heartCount } = this.props;
      const heartCountForDay = this.state.heartCountState ? heartCount+1 : heartCount
      return (
          <div>
              {
                  isPraise
                  ? <div className="border activite">
                      <Icon type="like-o"/>{trans('warmwall.heart','暖心')}{heartCount && <span>({heartCount})</span>}
                    </div>
                  : <div className="border" id={id} onClick={this.showHeart.bind(this,id)}>
                      <Icon type="like-o" />{trans('warmwall.heart','暖心')}{heartCountForDay && <span>({heartCountForDay})</span>}
                    </div>
              }
          </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    getHeartCountData : state.example.getHeartCountData,
  };
}
export default connect(mapStateToProps)(Heart);

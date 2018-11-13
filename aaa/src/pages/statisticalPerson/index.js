import React ,{ Component }from "react";
import { connect } from 'dva';
import { Tabs, List,Avatar,Icon} from 'antd';
import { Link } from "dva/router";
import "./index.less";
import { trans } from '../../utils/i18n';
const TabPane = Tabs.TabPane;

class StatisticalPerson extends Component {
    constructor(){
        super();
        this.state = {
            loading: true
        }
    }
    componentDidMount() {
        this.getPersonSource('1')
    }
    getPersonSource(key){
        const {dispatch,match:{params}} = this.props;
        dispatch({
            type: `example/personSource`,
            payload: {
                id: params.id,
                key: key
            }
        }).then(() => {
            const { isSuccess } = this.props;
            if(isSuccess){
                this.setState({
                    loading: false
                });
            }else{
                this.setState({
                    loading: true
                })
            }
        })
    }
    callback(key){
        this.getPersonSource(key);
    }
    render() {
        const { personSourceData ,match:{params}} = this.props;
        var path = {
            pathname:'/dailylog/' + params.id,
            state:{logid:params.id}
            }
        return (
            <div className="personDetail">
                <div className="header">
                    <Link to={path} className="back">
                    <Icon type="left-circle-o" style={{fontSize:'0.45rem'}}/>
                    </Link>
                    <div className="mainTitle">{trans('warmwall.statisticalPerson','阅读人数详情')}</div>          
                </div>
                <Tabs defaultActiveaKey="1" onChange={this.callback.bind(this)}>
                    <TabPane tab={trans('warmwall.alreadyRead','已阅读')} key='1'>
                        {personSourceData && 
                         <List
                            loading={this.state.loading}
                            className="listData"
                            itemLayout="horizontal"
                            bordered={true}
                            dataSource={personSourceData}
                            renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href="javascript:void(0);" className="title_name">{item.userName}</a>}
                                />
                            </List.Item>
                            )}
                        />}
                    </TabPane>
                    <TabPane tab={trans('warmwall.willRead','未阅读')} key="2">
                        {personSourceData && 
                           <List
                            className="listData"
                            itemLayout="horizontal"
                            bordered={true}
                            dataSource={personSourceData}
                            renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href="javascript:void(0);" className="title_name">{item.userName}</a>}
                                />
                            </List.Item>
                            )}
                        />}
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

function mapStateTopProps(state) {
    return {
        personSourceData: state.example.personSourceData,
        isSuccess: state.example.isSuccess
    }
}

export default connect(mapStateTopProps)(StatisticalPerson)
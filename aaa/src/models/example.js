import {
  getDailyLogList,
  getWarmWallForweek,
  getTranslate,
  getWarmWallForday,
  getHeartCount,
  getQuestionPoolList,
  getQuestionPoolCard,
  getWarmWallEditList,
  getQuestionPoolEditList,
  getReview,
  addReview,
  getPoolCradState,
  addIssue,
  setRelease,
  getMoreForIssue,
  getMoreForLog,
  deleteContent,
  setStar,
  setSignIn,
  getTeacherList,
  selectPerson,
  postSolved,
  getSchedule,
  getScheduleList,
  personSource,
  setLanguageFun,
  getScheduleDate,
  sendChangeDate,
  switchCampus,
  getCampus,
  getLogList,
  getQuestionList,
  getReadList,
  sendWallContent,
  sendSubmitQuestion
} from "../services/example";
import {message, Modal, Button} from 'antd';
import { loginRedirect } from '../utils/request';
import { trans } from '../utils/i18n';

export default {

  namespace: 'example',

  state: {
    getDailyLogListData : [], //日志薄列表数据
    getQuestionPoolListData: [],//问题池列表数据
    navTab:"dailylog",//切换主页tab
    getWarmWallForweekData:{},//日志薄列表详情页暖心墙值周列表数据,
    isShowTranslate:false,//是否显示翻译内容
    getTranslateData:"",//日志薄列表详情页暖心墙翻译内容
    getHeartCountData:"",//日志薄列表详情页暖心墙暖心个数
    isReviewModalVisible: false,//日志薄reviewModal组件显示
    reviewModalVisibleValue: "",//日志薄reviewModal组件显示默认值
    getWarmWallFordayData: [],//日志薄列表详情页暖心墙值日列表数据
    getWarmWallEditListData: {},//日志薄暖心墙编辑页列表数据
    getQuestionPoolEditListData: {},//日志薄问题池编辑页列表数据
    getQuestionPoolCardData: {},//问题池详情页数据
    isgetPoolCradState: false,//问题池详情页改变是否成功
    sameFeelingCount:"",//问题池详情页数据同感个数
    foolowCount:"",//问题池详情页数据跟进个数
    getReviewListData: {},//评论数据,
    isgetReviewListData: false,
    isSetStar: false,
    isaddIssue: false,
    getSignInData: {},//签到数据
    submitStatus: false,
    getTeacherListData: [],//指派教师数据列表
    isSuccess: false,//是否成功标识
    getScheduleListData: [],//排班表
    getScheduleListColums: [],//值周详情
    personSourceData: [],//获取阅读人数详情,
    tipsInfo: '',//请求失败提示信息
    getSheduleDateList: {},//值班老师值班时间列表
    isForweek: false,//判断是否是值周老师
    campusInfo: {},//当前校区数据
    changeCampus: false, //切换校区是否成功,
    ifDataId : true,//切换校区之后是否有该id
    getLogData: [],//日志列表
    getQuestionData: [],//需要解决的问题列表
    getReadData : [],//阅读排行量
    sendWallData : [],//提交暖心墙的内容
    sendQuestionData : [] //提交问题池的内容
  },

  effects: {
    *getDailyLogList({ payload }, { call, put }) {  // eslint-disable-line
      const dataAll = yield call(getDailyLogList);
      if(dataAll.data.success){
        yield put({
          type: 'save' ,
          payload:{
            getDailyLogListData:dataAll.data.data
          }
        })
      !dataAll.data.ifLogin && (yield loginRedirect());
      }else{
        if(!dataAll.data){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          message.error(dataAll.data.message);
        }
      }
    },
    *getWarmWallForweek({ payload }, { call, put }) {  // eslint-disable-line
      yield put({
        type: 'save',
        payload: {
          isSuccess: false
        }
      })
      const dataAll = yield call(getWarmWallForweek,payload);
      if(dataAll.data.success){
        yield put({
          type: 'save' ,
          payload:{
            isSuccess: dataAll.data.success,
            getWarmWallForweekData:dataAll.data.data,
          }
        })
        !dataAll.data.ifLogin && (yield loginRedirect());
      }else{
        if(!dataAll.data){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          Modal.confirm({
            title: trans('editLog.warmTips','温馨提示'),
            content: dataAll.data.message,
            okText: trans('global.confirm','确认'),
            cancelText: trans('global.cancel','取消'),
            onOk() {
              window.location.href = "/";
            },
            onCancel() {
              window.location.reload();
            },
          });
          //message.error(dataAll.data.message);
        }
      }
    },
    *getTranslate({payload},{call,put}){
      yield put({
        type: 'save' ,
        payload:{
          isSuccess: false
        }
      })
      const dataAll = yield call(getTranslate,payload);
      if(dataAll.success){
        yield put({
          type: 'save' ,
          payload:{
            isSuccess: dataAll.success,
            getTranslateData:dataAll.data
          }
        })
        !dataAll.ifLogin && (yield loginRedirect());
      }else{
        if(!dataAll.data){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          message.error(dataAll.message);
        }
      }
    },
    *getWarmWallForday({payload},{call,put}){
      yield put({
        type: 'save',
        payload: {
          ifDataId: true
        }
      });
      const dataAll = yield call(getWarmWallForday,payload);
      if(dataAll.data.success){
        yield put({
          type: 'save' ,
          payload:{
            getWarmWallFordayData:dataAll.data.data,
            ifDataId: dataAll.data.ifDataId

          }
        })
        !dataAll.data.ifLogin && (yield loginRedirect());
      }else{
        if(!dataAll.data){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          message.error(dataAll.data.message);
        }
      }
    },
    *getHeartCount({payload},{call,put}){
      const dataAll = yield call(getHeartCount, payload);
      if(dataAll.data.success){
        yield put({
          type: 'save' ,
          payload:{
            getHeartCountData:dataAll.data.data
          }
        })
        !dataAll.data.ifLogin && (yield loginRedirect());
      }else{
        if(!dataAll.data){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          message.error(dataAll.data.message)
        }
      }
    },
    *getQuestionPoolList({payload},{call,put}){
      yield put({
        type: 'save',
        payload: {
          isSuccess: false
        }
      })
      const dataAll = yield call(getQuestionPoolList,payload);
      if(dataAll.data.success){
        yield put({
          type: 'save' ,
          payload:{
            isSuccess : dataAll.data.success,
            getQuestionPoolListData:dataAll.data.data
          }
        })
        !dataAll.data.ifLogin && (yield loginRedirect());
      }else{
        if(!dataAll.data){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          Modal.confirm({
            title: '温馨提示',
            content: dataAll.data.message,
            okText: '返回首页',
            cancelText: '取消',
            onOk() {
              window.location.href = "/";
            },
            onCancel() {
              window.location.reload();
            },
          });
        }
      }
    },
    *getQuestionPoolCard({payload},{call,put}){
      const dataAll = yield call(getQuestionPoolCard,payload);
      if(dataAll.data.success){
        yield put({
          type: 'save' ,
          payload:{
            getQuestionPoolCardData:dataAll.data.data,
            sameFeelingCount:dataAll.data.data.content.sameFeelingCount,
            foolowCount:dataAll.data.data.content.foolowCount
          }
        })
        !dataAll.data.ifLogin && (yield loginRedirect());
      }else{
        if(!dataAll.data){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          message.error(dataAll.data.message)
        }
      }
    },
    *getWarmWallEditList({payload},{call,put}){
      yield put({
        type: 'save',
        payload: {
          isSuccess: false,
          tipsInfo: ''
        }
      })
      const dataAll = yield call(getWarmWallEditList,payload);
      if(dataAll.data.success){
        yield put({
          type: 'save' ,
          payload:{
            isSuccess: dataAll.data.success,
            tipsInfo: '',
            getWarmWallEditListData:dataAll.data.data
          }
        })
        !dataAll.data.ifLogin && (yield loginRedirect());
      }else{
        yield put({
          type: 'save',
          payload: {
            isSuccess: dataAll.data.success,
            tipsInfo: dataAll.data.message
          }
        })
        //message.error(dataAll.data.message)
      }
    },
    *getQuestionPoolEditList({payload},{call,put}){
      yield put({
        type: 'save',
        payload: {
          isSuccess: false,
          tipsInfo: ''
        }
      })
      const dataAll = yield call(getQuestionPoolEditList,payload);
      if(dataAll.data.success){
        yield put({
          type: 'save' ,
          payload:{
            isSuccess: dataAll.data.success,
            tipsInfo: '',
            getQuestionPoolEditListData:dataAll.data.data
          }
        })
        !dataAll.data.ifLogin && (yield loginRedirect());
      }else{
        yield put({
          type: 'save',
          payload: {
            isSuccess: dataAll.data.success,
            tipsInfo: dataAll.data.message
          }
        })
        //message.error(dataAll.data.message)
      }
    },
    *getReview({payload},{call,put}){
      const dataAll = yield call(getReview,payload);
      if(dataAll.data.success){
        let payloadData = {};
        payloadData[payload.id] = dataAll.data.data;
        yield put({
          type: 'getReviewReducers',
          payload: payloadData
        })
        /*yield put({
          type: 'save',
          payload: {
            isgetReviewListData:true
          }
        })*/
        !dataAll.data.ifLogin && (yield loginRedirect());
      }else{
        if(!dataAll.data){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          message.error(dataAll.data.message)
        }

      }
    },
    *addReview({payload},{call,put}){
      yield put({
        type: 'save',
        payload: {
          isSuccess: false
        }
      })
      const dataAll = yield call(addReview,payload);
      if(dataAll.success){
        message.info(dataAll.message);
        if(payload.type == 1){
          if(payload.user == "week"){
            yield put({
              type: 'addReviewWeekReducers',
              payload: {
                isSuccess: dataAll.success
              }
            })
          }else if(payload.user == "day"){
            let userId = payload.dnId;
            yield put({
              type: 'addReviewDayReducers',
              payload: {
                isSuccess: dataAll.success,
                id: userId
              }
            })
          }

        }else if(payload.type == 2){
          yield put({
            type: 'addReviewQuestion',
            payload: {
              isSuccess: dataAll.success
            }
          })
        }

        !dataAll.ifLogin && (yield loginRedirect());
      }else{
        if(!dataAll){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          message.error(dataAll.message)
        }
      }
    },
    *getPoolCradState({payload},{call,put}){
      const dataAll = yield call(getPoolCradState,payload);
      if(dataAll.data.success){
        yield put({
          type: 'save' ,
          payload:{
            isgetPoolCradState:true
          }
        })
        !dataAll.data.ifLogin && (yield loginRedirect());
      }else{
        if(!dataAll.data){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          message.error(dataAll.data.message)
        }
      }
    },
    *addIssue({payload},{call,put}){
      yield put({
        type: 'save',
        payload: {
          submitStatus: false
        }
      })
      const dataAll = yield call(addIssue, payload);
      if(dataAll.success){
        if(payload.type==1){
          const dataAll1 = yield call(getWarmWallEditList, {dateId: payload.dateId});
          if(dataAll1.data.success){
            yield put({
              type: 'save' ,
              payload:{
                getWarmWallEditListData: dataAll1.data.data,
                submitStatus: dataAll1.data.success
              }
            })
          }else{
            message.error(dataAll1.data.message)
          }
        }else{
          const dataAll2 = yield call(getQuestionPoolEditList,{dateId: payload.dateId});
          if(dataAll2.data.success){
            yield put({
              type: 'save' ,
              payload:{
                getQuestionPoolEditListData: dataAll2.data.data,
                submitStatus: dataAll2.data.success
              }
            })
            }else{
              message.error(dataAll2.data.message)
            }
        }
        !dataAll.ifLogin && (yield loginRedirect());
      }else{
        if(!dataAll){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          message.error(dataAll.message)
        }
      }
    },
    *setRelease({payload},{call,put}){
      yield put({
        type: 'save' ,
        payload:{
          isSuccess: false
        }
      })
      const dataAll = yield call(setRelease,payload);
      if(dataAll.success){
        yield put({
          type: 'save' ,
          payload:{
            isSuccess: dataAll.success
          }
        })
        message.info(dataAll.message)
        !dataAll.ifLogin && (yield loginRedirect());
      }else{
        if(!dataAll){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          message.error(dataAll.message)
        }
      }
    },
    *getMoreForIssue({payload},{call,put}){
      const dataAll = yield call(getMoreForIssue,payload);
      if(dataAll.data.success){
        message.info(dataAll.data.message)
        const dataAll1 = yield call(getQuestionPoolEditList,payload);
        if(dataAll1.data.success){
          yield put({
            type: 'save' ,
            payload:{
              getQuestionPoolEditListData:dataAll1.data.data,
            }
          })
          !dataAll.data.ifLogin && (yield loginRedirect());
        }else{
          message.error(dataAll1.data.message)
        }
      }else{
        if(!dataAll.data){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          message.error(dataAll.data.message)
        }
      }
    },
    *getMoreForLog({payload},{call,put}){
      const dataAll = yield call(getMoreForLog,payload);
      if(dataAll.data.success){
        message.info(dataAll.data.message)
        const dataAll1 = yield call(getWarmWallEditList,payload);
          if(dataAll1.data.success){
            yield put({
              type: 'save' ,
              payload:{
                getWarmWallEditListData:dataAll1.data.data,
              }
            })
      }else{
        message.error(dataAll1.data.message)
      }
      !dataAll.data.ifLogin && (yield loginRedirect());
      }else{
        if(!dataAll.data){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          message.error(dataAll.data.message)
        }
      }
    },
    *deleteContent({payload},{call,put}){
      const dataAll = yield call(deleteContent,payload);
      if(dataAll.data.success){
        message.info(dataAll.data.message)
            if(payload.type==0){
              const dataAll1 = yield call(getWarmWallEditList);
                  if(dataAll1.data.success){
                    yield put({
                      type: 'save' ,
                      payload:{
                        getWarmWallEditListData:dataAll1.data.data,
                      }
                    })
                  }else{
                    message.error(dataAll1.data.message)
                }
            }else{
              const dataAll2 = yield call(getQuestionPoolEditList);
              if(dataAll2.data.success){
                yield put({
                  type: 'save' ,
                  payload:{
                    getQuestionPoolEditListData:dataAll2.data.data,
                  }
                })
                }else{
                  message.error(dataAll2.data.message)
                }
            }
            !dataAll.data.ifLogin && (yield loginRedirect());
      }else{
        if(!dataAll.data){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          message.error(dataAll.data.message)
        }
      }
    },
    *setStar({payload},{call,put}){
      const dataAll = yield call(setStar,payload);
      if(dataAll.data.success){
        message.info(dataAll.data.message)
        !dataAll.data.ifLogin && (yield loginRedirect());
      }else{
        if(!dataAll.data){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          message.error(dataAll.data.message)
        }
      }
    },
    *setSignIn({ payload },{ call,put}){
      const dataAll = yield call(setSignIn, payload);
      if(dataAll.data.success){
        yield put({
          type: 'save' ,
          payload:{
            getSignInData: dataAll.data
          }
        })
      !dataAll.data.ifLogin && (yield loginRedirect());
      }else{
        yield put({
          type: 'save' ,
          payload:{
            getSignInData:dataAll.data
          }
        })
      }
    },
    *getTeacherList({ payload },{ call,put}){
      const dataAll = yield call(getTeacherList,payload)
      if(dataAll.data.success){
        yield put({
          type: 'save',
          payload: {
            getTeacherListData: dataAll.data.data
          }
        })
        !dataAll.data.ifLogin && ( yield loginRedirect());
      }else{
        if(!dataAll.data){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          message.error(dataAll.data.message)
        }
      }
    },
    *selectPerson({ payload },{ call,put }){
      yield put({
        type: 'save',
        payload: {
          isSuccess: false
        }
      })
      const dataAll = yield call(selectPerson,payload);
      if(dataAll.success){
        message.info(dataAll.message);
        yield put({
          type: 'save',
          payload: {
            isSuccess: dataAll.success
          }
        })
        !dataAll.ifLogin && ( yield loginRedirect());
      }else{
        if(!dataAll){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          message.error(dataAll.message)
        }
      }
    },
    *postSolved({ payload },{ call,put }){
      yield put({
        type: 'save',
        payload: {
          isSuccess: false
        }
      })
      const dataAll = yield call(postSolved,payload);
      if(dataAll.success){
        message.info(dataAll.message);
        yield put({
          type: 'save',
          payload: {
            isSuccess: dataAll.success
          }
        })
        !dataAll.ifLogin && ( yield loginRedirect());
      }else{
        if(!dataAll){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          message.error(dataAll.message)
        }
      }
    },
    *getSchedule({ payload },{ call,put }){
      const dataAll = yield call(getSchedule,payload);
      if(dataAll.data.success){
        yield put({
          type: 'save',
          payload: {
            getScheduleListData: dataAll.data.data
          }
        })
        !dataAll.data.ifLogin && ( yield loginRedirect());
      }else{
        if(!dataAll.data){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          message.error(dataAll.data.message)
        }
      }
    },
    *getScheduleList({ payload },{ call,put }){
      yield put({
        type: 'save',
        payload: {
          isForweek: false
        }
      })
      const dataAll = yield call(getScheduleList,payload);
      if(dataAll.data.success){
        yield put({
          type: 'save',
          payload: {
            getScheduleListColums: dataAll.data.data,
            isForweek: dataAll.data.isForweek
          }
        })
        !dataAll.data.ifLogin && ( yield loginRedirect());
      }else{
        if(!dataAll.data){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          message.error(dataAll.data.message)
        }
      }
    },
    *personSource({ payload },{ call,put }){
      yield put({
        type: 'save',
        payload: {
          isSuccess: false
        }
      })
      const dataAll = yield call(personSource,payload);
      if(dataAll.data.success){
        yield put({
          type: 'save',
          payload: {
            isSuccess: dataAll.data.success,
            personSourceData: dataAll.data.data
          }
        })
        !dataAll.data.ifLogin && ( yield loginRedirect());
      }else{
        if(!dataAll){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          message.error(dataAll.data.message)
        }
      }
    },

    *setLanguage({ payload },{ call,put }){
      yield put({
        type: 'save',
        payload: {
          isSuccess: false
        }
      });
      const dataAll = yield call(setLanguageFun, payload);
      if(dataAll.success){
        message.info(dataAll.message);
        yield put({
          type: 'save',
          payload: {
            isSuccess: dataAll.success
          }
        })
        !dataAll.ifLogin && ( yield loginRedirect());
      }else{
        if(!dataAll){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          message.error(dataAll.message)
        }
      }
    },
    *getScheduleDate({ payload }, { call, put}) {
      yield put({
        type: 'save',
        payload: {
          isSuccess: false
        }
      });
      const dataAll = yield call( getScheduleDate, payload);
      if(dataAll.data.success){
        yield put({
          type: 'save',
          payload: {
            getSheduleDateList: dataAll.data.data,
            isSuccess: dataAll.data.success
          }
        });
        !dataAll.data.ifLogin && ( yield loginRedirect());
      }else{
        if(!dataAll){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          message.error(dataAll.data.message)
        }
      }
    },

    *switchCampus({ payload },{ call,put }){
      yield put({
        type: 'save',
        payload: {
          changeCampus: false
        }
      })
      const dataAll = yield call(switchCampus,payload);
      if(dataAll.data.success){
        message.info(dataAll.data.message);
        yield put({
          type: 'save',
          payload: {
            changeCampus: dataAll.data.success
          }
        })
        !dataAll.data.ifLogin && ( yield loginRedirect());
      }else{
        if(!dataAll){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          message.error(dataAll.data.message)
        }
      }
    },

    *sendChangeDate({ payload }, { call, put}) {
      yield put({
        type: 'save',
        payload: {
          isSuccess: false
        }
      });
      const dataAll = yield call( sendChangeDate, payload);
      if(dataAll.data.success){
        yield put({
          type: 'save',
          payload: {
            isSuccess: dataAll.data.success
          }
        });
        !dataAll.data.ifLogin && ( yield loginRedirect());
      }else{
        if(!dataAll){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          message.error(dataAll.data.message)
        }
      }
    },
    *getCampus({ payload },{ call,put }) {
      const dataAll = yield call(getCampus, payload);
      if(dataAll.data.success){
        yield put({
          type: 'save',
          payload: {
            campusInfo : dataAll.data.currentCampus
          }
        })
        !dataAll.data.ifLogin && ( yield loginRedirect());
      }else{
        if(!dataAll){
          message.error("网络请求失败~");
          return false;
        }else{
          message.error(dataAll.data.message)
        }
      }
    },
    *getLogList({ payload },{ call,put }) {
      const dataAll = yield call(getLogList, payload);
      console.log(dataAll,'dataAll')
      if(dataAll.data.success){
        yield put({
          type: 'save',
          payload: {
            getLogData : dataAll.data.data
          }
        })
        !dataAll.data.ifLogin && ( yield loginRedirect());
      }else{
        if(!dataAll){
          message.error("网络请求失败~");
          return false;
        }else{
          message.error(dataAll.data.message)
        }
      }
    },
    *getQuestionList({ payload },{ call,put }) {
      const dataAll = yield call(getQuestionList, payload);
      if(dataAll.data.success){
        yield put({
          type: 'save',
          payload: {
            getQuestionData : dataAll.data.data
          }
        })
        !dataAll.data.ifLogin && ( yield loginRedirect());
      }else{
        if(!dataAll){
          message.error("网络请求失败~");
          return false;
        }else{
          message.error(dataAll.data.message)
        }
      }
    },
    *getReadList({ payload },{ call,put }) {
      const dataAll = yield call(getReadList, payload);
      if(dataAll.data.success){
        yield put({
          type: 'save',
          payload: {
            getReadData : dataAll.data.data
          }
        })
        !dataAll.data.ifLogin && ( yield loginRedirect());
      }else{
        if(!dataAll){
          message.error("网络请求失败~");
          return false;
        }else{
          message.error(dataAll.data.message)
        }
      }
    },
    *sendWallContent({ payload },{ call,put }){
      yield put({
        type: 'save',
        payload: {
          isSuccess: false
        }
      })
      const dataAll = yield call(sendWallContent,payload);
      if(dataAll.success){
        message.info(dataAll.message);
        yield put({
          type: 'save',
          payload: {
            isSuccess: dataAll.success
          }
        })
        !dataAll.ifLogin && ( yield loginRedirect());
      }else{
        if(!dataAll.success){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          message.error(dataAll.message)
        }
      }
    },
    *sendSubmitQuestion({ payload },{ call,put }){
      yield put({
        type: 'save',
        payload: {
          isSuccess: false
        }
      })
      const dataAll = yield call(sendSubmitQuestion,payload);
      if(dataAll.success){
        message.info(dataAll.message);
        yield put({
          type: 'save',
          payload: {
            isSuccess: dataAll.success
          }
        })
        !dataAll.ifLogin && ( yield loginRedirect());
      }else{
        if(!dataAll.success){
          message.error(trans('global.errorContent','网络请求失败~'));
          return false;
        }else{
          message.error(dataAll.message)
        }
      }
    },
  },
  
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    addReviewWeekReducers(state, action) {
      let getWarmWallForweekData = Object.assign({}, state.getWarmWallForweekData);
      getWarmWallForweekData['WarmWallForweek']['reviewCount']++;
      return {  ...state, getWarmWallForweekData, ...action.payload };
    },
    addReviewDayReducers(state, action) {
      let getWarmWallFordayData = state.getWarmWallFordayData;
      for(var i = 0;i< getWarmWallFordayData.length;i++){
        if(getWarmWallFordayData[i]['id'] == action.payload.id){
          getWarmWallFordayData[i]['reviewCount']++;
          break;
        }
      }
      return { ...state, getWarmWallFordayData, ...action.payload};
    },
    addReviewQuestion(state,action){
      let getQuestionPoolCardData = Object.assign({},state.getQuestionPoolCardData);
      getQuestionPoolCardData["review"]["reviewCount"]++;
      return { ...state, getQuestionPoolCardData, ...action.payload };
    },
    getReviewReducers(state,action) {
      let getReviewListData = Object.assign(Object.assign({}, state.getReviewListData), action.payload);
      return {
        ...state,
        getReviewListData,
        isgetReviewListData: true
      };
    }
  }
};

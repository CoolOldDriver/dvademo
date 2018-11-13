import { get ,post} from '../utils/request';
export async function getDailyLogList() {
  return get('/api/getDailyLogList')
}
export async function getWarmWallForweek(params) {
  return get('/api/getWarmWallForweek',params)
}
export async function getTranslate(params) {
  return post('/api/translate',params)
}
export async function getWarmWallForday(params) {
  return get('/api/getWarmWallForday',params)
}
export async function getHeartCount(params) {
  return get('/api/getHeartCount',params)
}
export async function getQuestionPoolList(params) {
  return get('/api/getQuestionPoolList',params)
}
export async function getQuestionPoolCard(params) {
  return get('/api/getQuestionPoolCard',params)
}
export async function getWarmWallEditList(params) {
  return get('/api/getWarmWallEditList',params)
}
export async function getQuestionPoolEditList(params) {
  return get('/api/getQuestionPoolEditList',params)
}
export async function getReview(params) {
  return get('/api/getReview',params)
}
export async function addReview(params) {
  return post('/api/addReview',params)
}
export async function getPoolCradState(params) {
  return get('/api/getPoolCradState',params)
}
export async function addIssue(params) {
  return post('/api/addIssue',params)
}
export async function setRelease(params) {
  return post('/api/sendDaily',params)
}
export async function getMoreForIssue(params) {
  return get('/api/getMoreForIssue',params)
}
export async function getMoreForLog(params) {
  return get('/api/getMoreForLog',params)
}
export async function deleteContent(params) {
  return get('/api/deleteContent',params)
}
export async function setStar(params) {
  return get('/api/setStar', params)
}
//每日签到
export async function setSignIn(params) {
  return get('/api/sign', params)
}
//获取指派教师列表
export async function getTeacherList(params){
  return get('/api/teacherList',params)
}
//选择指派人员
export async function selectPerson(params){
  return post('/api/selectPerson',params)
}
//提交解决方案
export async function postSolved(params){
  return post('/api/postSolved' ,params)
}
//排班表
export async function getSchedule(params){
  return get('/api/getSchedule' ,params)
}
//当前值周详情列表
export async function getScheduleList(params){
  return get('/api/getScheduleList', params)
}
//获取阅读人数
export async function personSource(params){
  return get('/api/personSource', params);
}
//设置中英文翻译
export async function setLanguageFun(params){
  return post('/api/setLanguage', params);
}
//获取值班人员时间
export async function getScheduleDate(params) {
  return get('/api/getScheduleDate', params);
}
//提交换班数据
export async function sendChangeDate(params) {
  return get('/api/sendChangeDate', params);
}
//切换校区
export async function switchCampus(params){
  return get('/api/switchCampus', params);
}

//获取当前校区
export async function getCampus(params) {
  return get('/api/getCampus', params);
}

//获取日志薄列表
export async function getLogList(params) {
  return get('/api/getLogList', params);
}

//获取需要解决的问题
export async function getQuestionList(params) {
  return get('/api/getQuestionList', params);
}

//阅读排行量
export async function getReadList(params) {
  return get('/api/getReadList', params);
}

//提交暖心墙内容
export async function sendWallContent(params) {
  return post('/api/sendWallContent', params);
}

//提价问题池的内容 
export async function sendSubmitQuestion(params) {
  return post('/api/sendSubmitQuestion', params);
}
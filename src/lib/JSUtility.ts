import moment from 'moment';

const JSUtility = {
  compareWithCurrentTimeAsMinute: (unixTime: number) => {
    const getTime = moment.unix(unixTime);
    const currentTime = moment();

    const diff = moment.duration(getTime.diff(currentTime)).asMinutes();

    return Math.round(diff);
  },
  // usage: 현재시간에서 14일뒤 날짜를 unix로 계산
  convertCurrentTimeToTwoWeeksLaterInUnix: () => {
    const currentTime = new Date();
    return moment(currentTime).add(14, 'day').unix();
  },
  // usage: Expire이랑 현재시간 비교해서 유효기간 지났으면 true
  isExpiredTokenCompareWithCurrentTime: (expire: number) => {
    const expireToDate = moment.unix(expire).format('YYYY-MM-DD hhmmss');
    const currentTime = moment().format('YYYY-MM-DD hhmmss');

    return currentTime > expireToDate;
  },
};

export default JSUtility;

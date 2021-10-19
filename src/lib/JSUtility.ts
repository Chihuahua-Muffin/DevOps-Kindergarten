import moment from 'moment';

const JSUtility = {
  isDevelopment: () => process.env.NODE_ENV === 'development',
  isProduction: () => process.env.NODE_ENV === 'production',
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

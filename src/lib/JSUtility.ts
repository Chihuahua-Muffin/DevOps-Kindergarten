import moment from 'moment';

const JSUtility = {
  compareWithCurrentTimeAsMinute: (unixTime: number) => {
    const getTime = moment.unix(unixTime);
    const currentTime = moment();

    const diff = moment.duration(getTime.diff(currentTime)).asMinutes();

    return Math.round(diff);
  },
};

export default JSUtility;

// use of this function is to get all sec min hours untill thhe upfdated time
import dayjs from 'dayjs';

export const getReamingtimeUntilMsTimestamp = (timstampMs) => {
  const timestampDays = dayjs(timstampMs);
  const nowDays = dayjs();
  return {
    Days: getReamingtimeDays(nowDays, timestampDays),
    hours: getReamingtimeHours(nowDays, timestampDays),
    minutes: getReamingtimeMinute(nowDays, timestampDays),
    seconds: getReamingtimeSeconds(nowDays, timestampDays),
  };
};

function getReamingtimeMinute(nowDays, timestampDays) {
  const minutes = timestampDays.diff(nowDays, 'minutes') % 60;
  return minutes;
}
function getReamingtimeSeconds(nowDays, timestampDays) {
  const seconds = timestampDays.diff(nowDays, 'seconds') % 60;
  return seconds;
}

function getReamingtimeHours(nowDays, timestampDays) {
  const hours = timestampDays.diff(nowDays, 'hours') %24;
  return hours;
}
function getReamingtimeDays(nowDays, timestampDays) {
  const Days = timestampDays.diff(nowDays, 'Days');
  return Days;
}

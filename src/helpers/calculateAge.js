import dayjs from "dayjs";
import objectSupport from "dayjs/plugin/objectSupport";
import duration from 'dayjs/plugin/duration'

dayjs.extend(objectSupport)
dayjs.extend(duration)

const calculateAge = (year, month, day) => {
  let now = dayjs();
  let birthdate = dayjs({year, month: month - 1, day});

  if (birthdate.isAfter(now)) {
    console.error("Bingo! You will be born in the future!")
  }

  const age = {
    years: now.subtract(year, "year").year(),
    months: now.subtract(month, "month").month(),
    days: now.subtract(day, "day").date()
  }
  return dayjs.duration(age);
}

export default calculateAge;
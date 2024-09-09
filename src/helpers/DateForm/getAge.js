// import { getAgePeriods } from "../../components/Results/Results"

const currentDateMs = Date.now()

const msConversions = {
  toYear: 31557600000,
  toMonth: 2629800000,
  toDay: 86400000,
}

const currentYear = Math.floor((currentDateMs / msConversions.toYear) + 1970)
const currentMonth = Math.floor((currentDateMs - ((currentYear - 1970) * msConversions.toYear)) / msConversions.toMonth) + 1
const currentDay = Math.floor((currentDateMs - (((currentYear - 1970) * msConversions.toYear) + ((currentMonth - 1) * msConversions.toMonth))) / msConversions.toDay)

console.log(`${currentDay}/${currentMonth}/${currentYear}`)

export const calculateAge = (years, months, days) => {
  const yearsOfLife = currentYear - years
  const monthsOfLife = currentMonth - months
  const daysOfLife = currentDay - days
  return { years: yearsOfLife, months: monthsOfLife, days: daysOfLife }
}

console.log(calculateAge(2007, 1, 24).years)
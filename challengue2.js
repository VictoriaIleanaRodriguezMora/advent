// A millionaire has bought a social network and it doesn't bring good news. He has announced that each time a working day is lost due to a holiday, it will have to be compensated with two extra hours another day of the same year.

// ----- Ha anunciado quGivee cada vez que se pierda un día de trabajo por vacaciones , habrá que compensarlo con dos horas extra otro día del mismo año . -----

// Obviously the people who work in the company have not made the slightest joke and are preparing a program that tells them the number of extra hours they would do in the year if the new rule were applied.

// Since it is office work, their working hours are from Monday to Friday. So you only have to worry about the holidays that fall on those days.

// Given a year and an array with the dates of the holidays, return the number of extra hours that would be done that year:


// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.

// countHours(year, holidays) // 2 days -> 4 extra hours in the year
// Things to keep in mind:

// The year can be a leap year. Make the checks you need for it, if necessary.
// Although the holiday is December 31, the extra hours will be done the same year.
// Date.getDay() method returns the day of the week of a date. 0 is Sunday, 1 is Monday, etc.

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

function countHours(year, holidays) {
    // vars
    const arrDatesFormatted = []
    let newDays = []
    let extraHours = 0
    let daysOfHoliday = 0
    let mmddyy = []
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "Septemeber", "October", "November", "December"];
    // vars


    holidays.forEach((element) => {
        newDays = `${element}/${year}`
        // console.log(newDays);
        arrDatesFormatted.push(new Date(newDays))
    });

    arrDatesFormatted.forEach((element) => {

        let msgCount = `Is ${months[element.getMonth()]} ${element.getDate()}, ${days[element.getDay()]}. Count `

        let msgExtraHours = `${daysOfHoliday} days -> ${extraHours}extra hours in the year`

        let msgDontCount = `Is ${element.getMonth()} ${element.getDate()}, ${days[element.getDay()]}. Dont Count`

        if (element.getDay() == 0 || element.getDay() == 6) {
            console.log(msgDontCount);
        } else {
            extraHours+=2
            daysOfHoliday++
            console.log(msgCount);

        }
    })
    return extraHours

}



// countHours(year, holidays)
// countHours(2023, ['01/06', '04/01', '12/25'])













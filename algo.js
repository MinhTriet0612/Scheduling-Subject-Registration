function caculateDistanceTwoDays(day1, day2) {
    const parsedDate1 = new Date(day1);
    const parsedDate2 = new Date(day2);

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = parsedDate2 - parsedDate1;

    // Convert milliseconds to days
    const millisecondsInOneDay = 1000 * 60 * 60 * 24;
    const differenceInDays = differenceInMilliseconds / millisecondsInOneDay;

    return Math.abs(differenceInDays);
}


const day1 = new Date('2025-2-12')
const day2 = new Date('2024-8-12')

console.log(caculateDistanceTwoDays(day1, day2) /7)

let day, month, year, result, calculate, date, currentDay, currentMonth, currentYear;
day = document.getElementById("day");
month = document.getElementById("month");
year = document.getElementById("year");
result = document.getElementById("result");
calculate = document.getElementById("calculate");

const daysMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

calculate.addEventListener("click", () => {
    if (day.value && month.value && year.value && (new Date().getFullYear() >= year.value)) {
        getDate();
        const days = calculateDays(day.value, currentDay);
        const months = calculateMonths(month.value, currentMonth);
        const years = calculateYears(year.value, currentYear);
        resetInput();
        result.innerHTML = `${years} years, ${months} months and ${days} days`;
    }
})

function calculateDays(daysInput, current) {
    if (current < daysInput) {
        if (currentMonth == 2) {
            leapYear(currentYear) ? (current += 29) : (current += 28);
        } else {
            current += daysMonth[currentMonth - 1];
        }
        currentMonth--;
    }
    return (current - daysInput);
}

function calculateMonths(monthsInput, current) {
    if (current < monthsInput) {
        current += 12;
        currentYear--;
    }
    return (current - monthsInput);
}

function calculateYears(yearsInput, current) {
    return (current - yearsInput);
}

function leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function resetInput() {
    day.value = "";
    month.value = "";
    year.value = "";
}

function getDate() {
    date = new Date();
    currentDay = date.getDate();
    currentMonth = date.getMonth() + 1;
    currentYear = date.getFullYear();
}
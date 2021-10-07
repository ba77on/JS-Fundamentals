function dayOfWeek(day) {
    result = "";
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (day >= 1 && day <= 7) {
        result = days[day - 1];
        console.log(result)
    } else {
        console.log("Invalid day!")
    }

}
dayOfWeek(3)
function calculateAge() {
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);

    if (!day || !month || !year || year > new Date().getFullYear()) {
        document.getElementById("result").textContent = "Please enter a valid date of birth."
        return;
    }

    let today = new Date();
    let birthDate = new Date(year, month, day);

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    // Adjust for negative values

    if (ageDays < 0) {
        ageMonths--;
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += prevMonth.getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    // Display the result
    // document.getElementById("years").textContent = ageYears;
    // document.getElementById("months").textContent = ageMonths;
    // document.getElementById("days").textContent = ageDays;

    document.getElementById("result").innerHTML = `You are <br>
     <span style="color: purple; font-weight: bold;">${ageYears}</span> years, <br>
     <span style="color: purple; font-weight: bold;">${ageMonths}</span> months, <br> 
     <span style="color: purple; font-weight: bold;">${ageDays}</span> days old`;

}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const dailyT = document.querySelector(".dailyT")
const dayRatio = document.querySelector(".dayRatio")
const overallT = document.querySelector(".overallT")
const overallRatio = document.querySelector(".overallRatio")
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Pick Actual Day 
const date = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const actualDay = weekday[date.getDay()]
console.log(actualDay);

const fetchLifeAppDB = () => {
    fetch('api/loadtask', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      displayStats(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
fetchLifeAppDB();

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const displayStats = (data) => {
    let downCounter = 0
    let upCounter = 0
    if (actualDay === "Monday") {
        dailyT.innerHTML = data.allTaskMonday.length
        overallT.innerHTML = data.overall.length
        data.allTaskMonday.forEach(e => {
            if (e.done === 1) {
                downCounter++
            }
            let ratio = dailyT.innerHTML
            ratio = downCounter * 100 / ratio
            dayRatio.innerHTML = Math.round(ratio)
        })
        data.overall.forEach(e => {
            if (e.done === "1") {
                upCounter++
            }
            let ratioOverall = overallT.innerHTML
            ratioOverall = upCounter * 100 / ratioOverall
            overallRatio.innerHTML = Math.round(ratioOverall)
        })
        colorRatio()
    } else if (actualDay === "Thursday") {
        dailyT.innerHTML = data.allTaskThursday.length
        overallT.innerHTML = data.overall.length
        data.allTaskThursday.forEach(e => {
            if (e.done === 1) {
                downCounter++
            }
            let ratio = dailyT.innerHTML
            ratio = downCounter * 100 / ratio
            dayRatio.innerHTML = Math.round(ratio)
        })
        data.overall.forEach(e => {
            if (e.done === "1") {
                upCounter++
            }
            let ratioOverall = overallT.innerHTML
            ratioOverall = upCounter * 100 / ratioOverall
            overallRatio.innerHTML = Math.round(ratioOverall)
        })
        colorRatio()
    } else if (actualDay === "Wednesday") {
        dailyT.innerHTML = data.allTaskWednesday.length
        overallT.innerHTML = data.overall.length
        data.allTaskWednesday.forEach(e => {
            if (e.done === 1) {
                downCounter++
            }
            let ratio = dailyT.innerHTML
            ratio = downCounter * 100 / ratio
            dayRatio.innerHTML = Math.round(ratio)
        })
        data.overall.forEach(e => {
            if (e.done === "1") {
                upCounter++
            }
            let ratioOverall = overallT.innerHTML
            ratioOverall = upCounter * 100 / ratioOverall
            overallRatio.innerHTML = Math.round(ratioOverall)
        })
        colorRatio()
    } else if (actualDay === "Tuesday") {
        dailyT.innerHTML = data.allTaskTuesday.length
        overallT.innerHTML = data.overall.length
        data.allTaskTuesday.forEach(e => {
            if (e.done === 1) {
                downCounter++
            }
            let ratio = dailyT.innerHTML
            ratio = downCounter * 100 / ratio
            dayRatio.innerHTML = Math.round(ratio)
        })
        data.overall.forEach(e => {
            if (e.done === "1") {
                upCounter++
            }
            let ratioOverall = overallT.innerHTML
            ratioOverall = upCounter * 100 / ratioOverall
            overallRatio.innerHTML = Math.round(ratioOverall)
        })
        colorRatio()
    } else if (actualDay === "Friday") {
        dailyT.innerHTML = data.allTaskFriday.length
        overallT.innerHTML = data.overall.length
        data.allTaskFriday.forEach(e => {
            if (e.done === 1) {
                downCounter++
            }
            let ratio = dailyT.innerHTML
            ratio = downCounter * 100 / ratio
            dayRatio.innerHTML = Math.round(ratio)
        })
        data.overall.forEach(e => {
            if (e.done === "1") {
                upCounter++
            }
            let ratioOverall = overallT.innerHTML
            ratioOverall = upCounter * 100 / ratioOverall
            overallRatio.innerHTML = Math.round(ratioOverall)
        })
        colorRatio()
    } else if (actualDay === "Saturday") {
        dailyT.innerHTML = data.allTaskSaturday.length
        overallT.innerHTML = data.overall.length
        data.allTaskSaturday.forEach(e => {
            if (e.done === 1) {
                downCounter++
            }
            let ratio = dailyT.innerHTML
            ratio = downCounter * 100 / ratio
            dayRatio.innerHTML = Math.round(ratio)
        })
        data.overall.forEach(e => {
            if (e.done === "1") {
                upCounter++
            }
            let ratioOverall = overallT.innerHTML
            ratioOverall = upCounter * 100 / ratioOverall
            overallRatio.innerHTML = Math.round(ratioOverall)
        })
        colorRatio()
    } else if (actualDay === "Sunday") {
        dailyT.innerHTML = data.allTaskSunday.length
        overallT.innerHTML = data.overall.length
        data.allTaskSunday.forEach(e => {
            if (e.done === 1) {
                downCounter++
            }
            let ratio = dailyT.innerHTML
            ratio = downCounter * 100 / ratio
            dayRatio.innerHTML = Math.round(ratio)
        })
        data.overall.forEach(e => {
            if (e.done === "1") {
                upCounter++
            }
            let ratioOverall = overallT.innerHTML
            ratioOverall = upCounter * 100 / ratioOverall
            overallRatio.innerHTML = Math.round(ratioOverall)
        })
        colorRatio()
    }
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const colorRatio = () => {
    const checkRatio = document.querySelectorAll(".calculRatio")
    console.log(checkRatio);
    checkRatio.forEach(e => {
        console.log(e.innerHTML);
        if (e.innerHTML < "50") {
            e.parentNode.classList.add("under50")
        } else if (e.innerHTML < "70" && e.innerHTML > "50") {
            e.parentNode.classList.add("under70")

        } else {
            e.parentNode.classList.add("over70")
        }
    });
} 

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
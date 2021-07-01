const date = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const actualDay = weekday[date.getDay()]
const displayBox = document.querySelector(".displayTaskToday")
const activityName = document.querySelectorAll(".activityName")
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const displayCurrentDay = () => {
    let day = document.querySelector("#chooseDay")
    day.insertAdjacentHTML('beforeend', actualDay)
}
displayCurrentDay()
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

console.log(actualDay);
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    
    


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const displayAllDB = (data) => {
        let i = 0;
        let j = 0;
        let k = 0;
        let l = 0;
    if (actualDay === "Monday") {
        
        data.allTaskMonday.forEach(el => {
            i++;
            if(el.todo != null){
            let newTaskDB = `<section class="boxTasks" id="${i}"><p class="fontStyleTask">${el.todo}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.monday_id}"></button></section>`
            activityName[0].insertAdjacentHTML("beforeend", newTaskDB)
            const listId = document.getElementById(`${i}`)
            listId.addEventListener('click', (el) =>{
                listId.lastChild.classList.toggle('done-1');
                console.log(listId.lastChild.dataset.done);
                if(listId.lastChild.dataset.done === "0"){
                    listId.lastChild.dataset.done = "1";
                }else{
                    listId.lastChild.dataset.done = "0";
                }
                updateDone({table: "monday", condition: "monday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
            })  
            }
        });
        data.allTaskMonday.forEach(el => {
            j++;
            if(el.workout != null){
                let newTaskDB = `<section class="boxTasks" id="${j}"><p class="fontStyleTask">${el.workout}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.monday_id}"></button></section>`
                activityName[1].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${j}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "monday", condition: "monday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
        data.allTaskMonday.forEach(el => {
            k++;
            if(el.meal != null){
                let newTaskDB = `<section class="boxTasks" id="${k}"><p class="fontStyleTask">${el.meal}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.monday_id}"></button></section>`
                activityName[2].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${k}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "monday", condition: "monday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
        data.allTaskMonday.forEach(el => {
            l++;
            if(el.buy != null){
                let newTaskDB = `<section class="boxTasks" id="${l}"><p class="fontStyleTask">${el.buy}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.monday_id}"></button></section>`
                activityName[3].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${l}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "monday", condition: "monday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
        
     
    } else if (actualDay === "Tuesday") {
        data.allTaskTuesday.forEach(el => {
            i++;
            if(el.todo != null){
            let newTaskDB = `<section class="boxTasks" id="${i}"><p class="fontStyleTask">${el.todo}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.tuesday_id}"></button></section>`
            activityName[0].insertAdjacentHTML("beforeend", newTaskDB)
            const listId = document.getElementById(`${i}`)
            listId.addEventListener('click', (el) =>{
                listId.lastChild.classList.toggle('done-1');
                console.log(listId.lastChild.dataset.done);
                if(listId.lastChild.dataset.done === "0"){
                    listId.lastChild.dataset.done = "1";
                }else{
                    listId.lastChild.dataset.done = "0";
                }
                updateDone({table: "tuesday", condition: "tuesday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
            })            
            }
        });
        data.allTaskTuesday.forEach(el => {
            j++;
            if(el.workout != null){
                let newTaskDB = `<section class="boxTasks" id="${j}"><p class="fontStyleTask">${el.workout}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.tuesday_id}"></button></section>`
                activityName[1].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${j}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "tuesday", condition: "tuesday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
        data.allTaskTuesday.forEach(el => {
            k++;
            if(el.meal != null){
                let newTaskDB = `<section class="boxTasks" id="${k}"><p class="fontStyleTask">${el.meal}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.tuesday_id}"></button></section>`
                activityName[2].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${k}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "tuesday", condition: "tuesday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
        data.allTaskTuesday.forEach(el => {
            l++;
            if(el.buy != null){
                let newTaskDB = `<section class="boxTasks" id="${l}"><p class="fontStyleTask">${el.buy}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.tuesday_id}"></button></section>`
                activityName[3].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${l}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "tuesday", condition: "tuesday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
    } else if (actualDay === "Wednesday") {
        data.allTaskWednesday.forEach(el => {
            i++;
            if(el.todo != null){
            let newTaskDB = `<section class="boxTasks" id="${i}"><p class="fontStyleTask">${el.todo}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.wednesday_id}"></button></section>`
            activityName[0].insertAdjacentHTML("beforeend", newTaskDB)
            const listId = document.getElementById(`${i}`)
            listId.addEventListener('click', (el) =>{
                listId.lastChild.classList.toggle('done-1');
                console.log(listId.lastChild.dataset.done);
                if(listId.lastChild.dataset.done === "0"){
                    listId.lastChild.dataset.done = "1";
                }else{
                    listId.lastChild.dataset.done = "0";
                }
                updateDone({table: "wednesday", condition: "wednesday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
            })            
            }
        });
        data.allTaskWednesday.forEach(el => {
            j++;
            if(el.workout != null){
                let newTaskDB = `<section class="boxTasks" id="${j}"><p class="fontStyleTask">${el.workout}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.wednesday_id}"></button></section>`
                activityName[1].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${j}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "wednesday", condition: "wednesday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
        data.allTaskWednesday.forEach(el => {
            k++;
            if(el.meal != null){
                let newTaskDB = `<section class="boxTasks" id="${k}"><p class="fontStyleTask">${el.meal}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.wednesday_id}"></button></section>`
                activityName[2].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${k}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "wednesday", condition: "wednesday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
        data.allTaskWednesday.forEach(el => {
            l++;
            if(el.buy != null){
                let newTaskDB = `<section class="boxTasks" id="${l}"><p class="fontStyleTask">${el.buy}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.wednesday_id}"></button></section>`
                activityName[3].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${l}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "wednesday", condition: "wednesday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
    } else if (actualDay === "Thursday") {
        data.allTaskThursday.forEach(el => {
            i++;
            if(el.todo != null){
            let newTaskDB = `<section class="boxTasks" id="${i}"><p class="fontStyleTask">${el.todo}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.thursday_id}"></button></section>`
            activityName[0].insertAdjacentHTML("beforeend", newTaskDB)
            const listId = document.getElementById(`${i}`)
            listId.addEventListener('click', (el) =>{
                listId.lastChild.classList.toggle('done-1');
                console.log(listId.lastChild.dataset.done);
                if(listId.lastChild.dataset.done === "0"){
                    listId.lastChild.dataset.done = "1";
                }else{
                    listId.lastChild.dataset.done = "0";
                }
                updateDone({table: "thursday", condition: "thursday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
            })            
            }
        });
        data.allTaskThursday.forEach(el => {
            j++;
            if(el.workout != null){
                let newTaskDB = `<section class="boxTasks" id="${j}"><p class="fontStyleTask">${el.workout}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.thursday_id}"></button></section>`
                activityName[1].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${j}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "thursday", condition: "thursday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
        data.allTaskThursday.forEach(el => {
            k++;
            if(el.meal != null){
                let newTaskDB = `<section class="boxTasks" id="${k}"><p class="fontStyleTask">${el.meal}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.thursday_id}"></button></section>`
                activityName[2].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${k}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "thursday", condition: "thursday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
        data.allTaskThursday.forEach(el => {
            l++;
            if(el.buy != null){
                let newTaskDB = `<section class="boxTasks" id="${l}"><p class="fontStyleTask">${el.buy}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.thursday_id}"></button></section>`
                activityName[3].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${l}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "thursday", condition: "thursday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
    } else if (actualDay === "Friday") {
        data.allTaskFriday.forEach(el => {
            i++;
            if(el.todo != null){
            let newTaskDB = `<section class="boxTasks" id="${i}"><p class="fontStyleTask">${el.todo}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.thursday_id}"></button></section>`
            activityName[0].insertAdjacentHTML("beforeend", newTaskDB)
            const listId = document.getElementById(`${i}`)
            listId.addEventListener('click', (el) =>{
                listId.lastChild.classList.toggle('done-1');
                console.log(listId.lastChild.dataset.done);
                if(listId.lastChild.dataset.done === "0"){
                    listId.lastChild.dataset.done = "1";
                }else{
                    listId.lastChild.dataset.done = "0";
                }
                updateDone({table: "friday", condition: "friday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
            })            
            }
        });
        data.allTaskFriday.forEach(el => {
            j++;
            if(el.workout != null){
                let newTaskDB = `<section class="boxTasks" id="${j}"><p class="fontStyleTask">${el.workout}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.friday_id}"></button></section>`
                activityName[1].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${j}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "friday", condition: "friday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
        data.allTaskFriday.forEach(el => {
            k++;
            if(el.meal != null){
                let newTaskDB = `<section class="boxTasks" id="${k}"><p class="fontStyleTask">${el.meal}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.friday_id}"></button></section>`
                activityName[2].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${k}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "friday", condition: "friday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })                
            }
        });
        data.allTaskFriday.forEach(el => {
            l++;
            if(el.buy != null){
                let newTaskDB = `<section class="boxTasks" id="${l}"><p class="fontStyleTask">${el.buy}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.friday_id}"></button></section>`
                activityName[3].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${l}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "friday", condition: "friday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })
            }
        });
    } else if (actualDay === "Saturday") {
        data.allTaskSaturday.forEach(el => {
            i++;
            if(el.todo != null){
            let newTaskDB = `<section class="boxTasks" id="${i}"><p class="fontStyleTask">${el.todo}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.saturday_id}"></button></section>`
            activityName[0].insertAdjacentHTML("beforeend", newTaskDB)
            const listId = document.getElementById(`${i}`)
            listId.addEventListener('click', (el) =>{
                listId.lastChild.classList.toggle('done-1');
                console.log(listId.lastChild.dataset.done);
                if(listId.lastChild.dataset.done === "0"){
                    listId.lastChild.dataset.done = "1";
                }else{
                    listId.lastChild.dataset.done = "0";
                }
                updateDone({table: "saturday", condition: "saturday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
            })
            }
        });
        data.allTaskSaturday.forEach(el => {
            j++;
            if(el.workout != null){
                let newTaskDB = `<section class="boxTasks" id="${j}"><p class="fontStyleTask">${el.workout}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.saturday_id}"></button></section>`
                activityName[1].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${j}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                updateDone({table: "saturday", condition: "saturday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
            })
            }
        });
        data.allTaskSaturday.forEach(el => {
            k++;
            if(el.meal != null){
                let newTaskDB = `<section class="boxTasks" id="${k}"><p class="fontStyleTask">${el.meal}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.saturday_id}"></button></section>`
                activityName[2].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${k}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    console.log(listId.lastChild.dataset.done);
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                updateDone({table: "saturday", condition: "saturday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
            })
            }
        });
        data.allTaskSaturday.forEach(el => {
            l++;
            if(el.buy != null){
                let newTaskDB = `<section class="boxTasks" id="${l}"><p class="fontStyleTask">${el.buy}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.saturday_id}"></button></section>`
                activityName[3].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${l}`)
                listId.addEventListener('click', (el) =>{
                listId.lastChild.classList.toggle('done-1');
                console.log(listId.lastChild.dataset.done);
                if(listId.lastChild.dataset.done === "0"){
                    listId.lastChild.dataset.done = "1";
                }else{
                    listId.lastChild.dataset.done = "0";
                }
                updateDone({table: "saturday", condition: "saturday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
            })
            }
        });
    } else if (actualDay === "Sunday") {
        data.allTaskSunday.forEach(el => {
            i++;
            if(el.todo != null){
                console.log("done-" + el.done);
            let newTaskDB = `<section class="boxTasks" id="${i}"><p class="fontStyleTask">${el.todo}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.sunday_id}"></button></section>`
            activityName[0].insertAdjacentHTML("beforeend", newTaskDB)
            const listId = document.getElementById(`${i}`)
            listId.addEventListener('click', (el) =>{
                listId.lastChild.classList.toggle('done-1');
                console.log(listId.lastChild.dataset.done);
                if(listId.lastChild.dataset.done === "0"){
                    listId.lastChild.dataset.done = "1";
                }else{
                    listId.lastChild.dataset.done = "0";
                }
                updateDone({table: "sunday", condition: "sunday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
            })
            
            }
            
        });
        data.allTaskSunday.forEach(el => {
            j++;
            if(el.workout != null){
                let newTaskDB = `<section class="boxTasks" id="${j}"><p class="fontStyleTask">${el.workout}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.sunday_id}"></button></section>`
                activityName[1].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${j}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "sunday", condition: "sunday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })
                
            }
        });
        data.allTaskSunday.forEach(el => {
            k++;
            if(el.meal != null){
                let newTaskDB = `<section class="boxTasks" id="${k}"><p class="fontStyleTask">${el.meal}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.sunday_id}"></button></section>`
                activityName[2].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${k}`)
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "sunday", condition: "sunday_id",id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })
                
            }
           
        });
        data.allTaskSunday.forEach(el => {
            l++;
            if(el.buy != null){
                let newTaskDB = `<section class="boxTasks" id="${l}"><p class="fontStyleTask">${el.buy}</p><button class="uptBtn done-${el.done}" data-done="${el.done}" data-id="${el.sunday_id}"></button></section>`
                activityName[3].insertAdjacentHTML("beforeend", newTaskDB)
                const listId = document.getElementById(`${l}`)
                console.log(listId.lastChild);
                listId.addEventListener('click', (el) =>{
                    listId.lastChild.classList.toggle('done-1');
                    if(listId.lastChild.dataset.done === "0"){
                        listId.lastChild.dataset.done = "1";
                    }else{
                        listId.lastChild.dataset.done = "0";
                    }
                    updateDone({table: "sunday", condition: "sunday_id", id: listId.lastChild.dataset.id, done: listId.lastChild.dataset.done})
                })
                
            }
           
        });
    }
    let numTaskToday = document.querySelector(".numTaskToday")
            let allTasks = document.querySelectorAll(".boxTasks").length
            numTaskToday.insertAdjacentHTML('beforeend', allTasks)
            console.log(allTasks);
}

const loadtask = () => {
    fetch('api/loadtask', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      displayAllDB(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
loadtask();

const updateDone = (info) => {
    console.log(info);
    fetch('api/tasks/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// CURSOR 
const cursor = document.querySelector('#cursor');
let mouse = { x: 300, y: 300 };
let pos = { x: 0, y: 0 };
const speed = 0.1; // between 0 and 1
const updatePosition = () => {
  pos.x += (mouse.x - pos.x) * speed;
  pos.y += (mouse.y - pos.y) * speed;
  cursor.style.transform = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';
}
const updateCoordinates = e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}
window.addEventListener('mousemove', updateCoordinates);
function loop() {
  updatePosition();
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  
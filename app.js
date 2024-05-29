let addTaskBtn = document.getElementById('addTask');

let toDoContainer = document.getElementById('todo');

let count = 0
addTaskBtn.addEventListener("click",  ()=>{
    let parentCard = document.createElement('div');
    parentCard.style.backgroundColor = "lightblue";
    let card = document.createElement('div');
    // card.className = 'card';
    card.setAttribute("class", "card")
    card.setAttribute("id", `card-${++count}` )
    card.innerText = "Test Card"
    // card.contentEditable = true;
    card.setAttribute("contentEditable", "true")
    parentCard.append(card)
    

    card.addEventListener("click", (eventDetails)=>{
        //   console.log("clicked")
        // console.log(eventDetails.target)
        // console.log(card)
        //  console.log(card.innerText)
        // console.log(card.innerHTML)
        if(card.innerText == "Test Card"){
          card.innerText = ""
        }
    })

    // blur, focus
    card.addEventListener("blur", ()=>{
        if(card.innerText.trim() == ""){
             parentCard.remove()
        }
    })


    // let make a drop down 

    const dropdown = document.createElement('select');
    dropdown.innerHTML = `
    <option value="todo"> ToDo</option>
    <option value="progress">Progress</option>
    <option value="done">Done</option>
    `
    parentCard.append(dropdown)

    dropdown.addEventListener("change", (eventDetails)=>{

        // let selectedElement = eventDetails.target;
        // console.log(selectedElement.value)
        // console.log(dropdown.value)
        let selectedValue = dropdown.value;
        let columnToBeMoved = document.getElementById(selectedValue);
        columnToBeMoved.append(parentCard)

    })

    toDoContainer.append(parentCard)
})



// let str = "   he   llo   "
// str.trim() // "he   llo"

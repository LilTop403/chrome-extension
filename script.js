// function inputel() {
//     console.log("Button Clicked")
// }
//const means cannot be reassigned

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")



inputBtn.addEventListener("click",function() {
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value=""
})
function renderLeads() {
    let listItem = ""
    for (let i=0; i<myLeads.length; i++){
    // listItem += "<li><a target='_blank' href=' " +  myLeads[i] + " '>" + myLeads[i] + " " + "</li></a>"
    //TEMPLATE STRINGS
    listItem += `
        <li>
             <a target='_blank' href=' ${myLeads[i]} '>
                ${myLeads[i]}
            </a>
        </li>
    `
    //  const li =document.createElement("li")
    //  li.textContent = myLeads[i]
    //  ulEl.append(li)
    }
    ulEl.innerHTML = listItem

}
// const recipient = "james"
// const email = `Hey ${recipient} ! How is it going ? Cheers Toyo`
// console.log(email)

// const reciipient = "James"
// let sender = "Toyosi"

// const emaiil = `Hey ${reciipient}! 
// How is it going? 
// Cheers ${sender}`

// console.log(emaiil)

//localStorage.setItem("myLeads","www.facebook.com")
//console.log(localStorage.getItem("myLeads"))
// localStorage.clear()
const inputExpense = document.getElementById("expense")
const selectCategory = document.getElementById("category")
const inputAmount = document.getElementById("amount")
const btnAddExpense = document.querySelector("button")
const res = document.querySelector(".res")

let requests = []

inputExpense.addEventListener("input", () =>{
  const regexHasNumber = /\d+/g
  inputExpense.value = inputExpense.value.replace(regexHasNumber , "")

  enabled()
})

inputAmount.addEventListener("input", () =>{
  const amountClear = inputAmount.value.replace(/\D/g, "")

  const amount = Number(amountClear)
  const amountBRL = amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })

  inputAmount.value = amountBRL

  enabled()
  
})

selectCategory.addEventListener("change", () =>{
  enabled()
})

btnAddExpense.addEventListener("click" , (event) =>{
  event.preventDefault()

  res.style.display = "flex"
  res.innerHTML += `

  <div class="request-refund flex items-center">

     <div class="request-title flex items-center">
        <h4>${inputExpense.value} <small>${selectCategory.value}</small> </h4>
    </div>

     <div class="request-amount flex items-center gap-0.5">
        <p><small>R$</small>${inputAmount.value.replace("R$", "")},00</p>

        <a class="remove" href="">
          <img src="assets/x.svg" alt="">
        </a>
     </div>

  </div>

`

requests.push(inputExpense.value)

let requestsLenght = requests.length

let requestRefund = document.getElementsByClassName("request-refund")

let requestRefundOrdinal = requestRefund[requestsLenght - 1]

let requestTitle = document.getElementsByClassName("request-title")

let requestTitleOrdinal = requestTitle[requestsLenght - 1]

let imgIcon = document.createElement("img")

let removeExpense = document.getElementsByClassName("remove")

let removeOrdinal = removeExpense[requestsLenght - 1]

function removeRequest(){
  removeOrdinal.addEventListener("click", (event)=>{
    event.preventDefault()
    requestRefundOrdinal.remove()
    requests.splice(requestsLenght , 1)
  })
}

function addIcon(image){
  requestTitleOrdinal.prepend(imgIcon)
  imgIcon.src = image
  clearInputs()
}

if(selectCategory.value === "Almoço"){

  addIcon("assets/knife.svg")
  removeRequest()

}else if(selectCategory.value === "Taxi"){

  addIcon("assets/taxi.svg")
  removeRequest()

}else if(selectCategory.value === "Hotel"){

  addIcon("assets/bed.svg")
  removeRequest()

}else if(selectCategory.value === "Internet"){

  addIcon("assets/internet.svg")
  removeRequest()

}else if(selectCategory.value === "Ebook"){

   addIcon("assets/ebook.svg")
   removeRequest()

}else if(selectCategory.value === "Lanche"){

  addIcon("assets/knife.svg")
  removeRequest()

}

console.log(requests)

enabled()
})

function enabled(){
  if (inputExpense.value !== "" && inputAmount.value !== "" && inputAmount.value !== "R$ 0" && selectCategory.value !== "Select"){
    btnAddExpense.removeAttribute("disabled", true)
  }
  else {
    btnAddExpense.setAttribute("disabled", true)
  }
}

function clearInputs (){
  inputExpense.value = ""
  inputAmount.value = ""
  selectCategory.value = "Select"
}


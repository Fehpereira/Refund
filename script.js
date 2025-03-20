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
        <img id="img-icon" src="" alt="">
        <h4>${inputExpense.value} <small>${selectCategory.value}</small> </h4>
    </div>

     <div class="request-amount flex items-center gap-0.5">
        <p><small>R$</small>${inputAmount.value.replace("R$", "")},00</p>

        <a href="#">
          <img src="assets/x.svg" alt="">
        </a>
     </div>

  </div>

`

let requestRefund = document.getElementsByClassName("request-refund")


requests.push(inputExpense.value)

let imgIcon = document.getElementById("img-icon")

if(selectCategory.value === "Almoço"){
  imgIcon.src = "assets/knife.svg"
  clearInputs()
}else if(selectCategory.value === "Taxi"){
  imgIcon.src = "assets/taxi.svg"
  clearInputs()
}else if(selectCategory.value === "Hotel"){
  imgIcon.src = "assets/bed.svg"
  clearInputs()
}else if(selectCategory.value === "Internet"){
  imgIcon.src = "assets/internet.svg"
  clearInputs()
}else if(selectCategory.value === "Ebook"){
  imgIcon.src = "assets/ebook.svg"
  clearInputs()
}else if(selectCategory.value === "Lanche"){
  imgIcon.src = "assets/knife.svg"
  clearInputs()
}

enabled()
})

// Habilita o botão se todos os inputs possuirem algum valor
function enabled(){
  if (inputExpense.value !== "" && inputAmount.value !== "" && selectCategory.value !== "Select"){
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
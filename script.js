const inputExpense = document.getElementById("expense")
const selectCategory = document.getElementById("category")
const inputAmount = document.getElementById("amount")
const btnAddExpense = document.querySelector("button")
const res = document.querySelector(".res")
const requestResult = document.querySelector(".request-result")
let requests = []

inputExpense.addEventListener("input", () =>{
  const regexHasNumber = /\d+/g
  inputExpense.value = inputExpense.value.replace(regexHasNumber , "")

  enabled()
})

inputAmount.addEventListener("input", () =>{
  const amountClear = inputAmount.value.replace(/\D/g, "")

  const amount = Number(amountClear / 100)
  const amountBRL = amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
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
        <img src="assets/${selectCategory.value}.svg">
        <h4>${inputExpense.value} <small>${selectCategory.options[selectCategory.selectedIndex].text}</small> </h4>
    </div>

     <div class="request-amount flex items-center gap-0.5">
        <p><small>R$</small>${inputAmount.value.replace("R$", "")}</p>

          <img class="remove-icon" src="assets/x.svg" alt="">
     </div>

  </div>

`
requests.push(inputExpense.value)

console.log(requests)

clearInputs ()

enabled()

removeRequest()

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
  inputExpense.focus()
}

function removeRequest() {
  requestResult.addEventListener("click", (event) =>{
    if(event.target.classList.contains("remove-icon")){

      const item = event.target.closest(".request-refund")
  
      item.remove()
    }
  })
}


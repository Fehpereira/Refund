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

        <a class="remove" href="#">
          <img src="assets/x.svg" alt="">
        </a>
     </div>

  </div>

`

requests.push(inputExpense.value)

let requestsLenght = requests.length

let requestTitle = document.getElementsByClassName("request-title")

let requestTitleOrdinal = requestTitle[requestsLenght - 1]

let imgIcon = document.createElement("img")

let remove = document.getElementsByClassName("remove")

if(selectCategory.value === "Almoço"){

  requestTitleOrdinal.prepend(imgIcon)
  imgIcon.src = "assets/knife.svg"
  clearInputs()

}else if(selectCategory.value === "Taxi"){

  requestTitleOrdinal.prepend(imgIcon)
  imgIcon.src = "assets/taxi.svg"
  clearInputs()

}else if(selectCategory.value === "Hotel"){

  requestTitleOrdinal.prepend(imgIcon)
  imgIcon.src = "assets/bed.svg"
  clearInputs()

}else if(selectCategory.value === "Internet"){

  requestTitleOrdinal.prepend(imgIcon)
  imgIcon.src = "assets/internet.svg"
  clearInputs()

}else if(selectCategory.value === "Ebook"){

  requestTitleOrdinal.prepend(imgIcon)
  imgIcon.src = "assets/ebook.svg"
  clearInputs()

}else if(selectCategory.value === "Lanche"){

  requestTitleOrdinal.prepend(imgIcon)
  imgIcon.src = "assets/knife.svg"
  clearInputs()

}

enabled()
})

// Habilita o botão se todos os inputs possuirem algum valor
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


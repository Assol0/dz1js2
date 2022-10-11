let patternPhonRu = /^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}/
let patternPhonKG = /^\+996\s\d{3}\s\d{2}\s\d{2}\s\d{2}/

const phone = document.querySelector("#phone")
const button = document.querySelector("button")
const look = document.querySelector("#look")

button.addEventListener("click", function(){
    if (patternPhonRu.test(phone.value)){
      look.innerHTML =`
      <div>RU</div>`
    }else if (patternPhonKG.test(phone.value)){
        look.innerHTML = `
        <div>KG</div>`
    }
})



let data= {
    "info": "Central Bank of Myanmar",
    "description": "Official Website of Central Bank of Myanmar",
    "timestamp": "1625817600",
    "rates": {
    "MMK":"1",
    "USD": "1,646.5",
    "LKR": "8.2656",
    "NZD": "1,144.3",
    "CZK": "75.646",
    "JPY": "1,496.1",
    "VND": "7.1579",
    "PHP": "32.910",
    "KRW": "143.44",
    "HKD": "211.98",
    "BRL": "313.04",
    "RSD": "16.578",
    "MYR": "392.77",
    "CAD": "1,314.8",
    "GBP": "2,269.5",
    "SEK": "191.38",
    "NOK": "187.89",
    "ILS": "502.98",
    "DKK": "262.11",
    "AUD": "1,224.7",
    "RUB": "22.124",
    "KWD": "5,467.6",
    "INR": "22.062",
    "BND": "1,215.8",
    "EUR": "1,949.3",
    "ZAR": "115.29",
    "NPR": "13.788",
    "CHF": "1,798.9",
    "CNY": "253.90",
    "THB": "50.615",
    "PKR": "10.316",
    "KES": "15.252",
    "EGP": "104.94",
    "BDT": "19.427",
    "LAK": "17.346",
    "SAR": "438.97",
    "IDR": "11.334",
    "KHR": "40.425",
    "SGD": "1,215.8"
    }
    }






let from=document.getElementById("from")
let to=document.getElementById("to")
let input=document.getElementById("number")
let result=document.querySelector(".number")
let Rate=data.rates;
let Middle=document.getElementById("middle")
let historyList=document.getElementById("history-list")


function createcomma(x,y,z){
    let o=document.createElement("option")
    let t=document.createTextNode(y)
    o.setAttribute("value",z)
    o.appendChild(t)
   
    x.appendChild(o)
}

function ToNum(x){
     return Number(x.replace(",",""))
}

for(x in Rate){

   createcomma(from,x,ToNum(Rate[x]))
    
}
for(x in Rate){

    createcomma(to,x,ToNum(Rate[x]))
    
 }
 Middle.addEventListener("submit",function(e){
    //  set state
     e.preventDefault()
     let x=input.value;
     let y=from.value;
     let z=to.value;
     let first=x*y;
     
     let second=first/z
     

    //  process
    let fromtext= x+" "+from.options[from.selectedIndex].innerHTML;
    let totext=to.options[to.selectedIndex].innerHTML;
    let Result=second.toFixed(2)
  
    let date=new Date().toLocaleString()
    
    let arr=[date,fromtext,totext,Result]

    
     
    result.innerHTML=Result
    input.value=""
    input.focus()
    from.value="Select Country"
    to.value="1"

    createTr(arr)
    store();
 })

// 
  function createTr(x){
    
      let tr=document.createElement("tr")
      x.map(function(el){
        let td=document.createElement("td")
        let text=document.createTextNode(el)
        td.appendChild(text)
        tr.appendChild(td)
        let nn=document.getElementById("Norecord")
        if(nn){
          nn.remove()
        }

      })
      historyList.appendChild(tr)

  }
//   
  function store(){
    
    localStorage.setItem("record",historyList.innerHTML)
  }
//   
(function(){
    if(localStorage.getItem("record")){
        historyList.innerHTML=localStorage.getItem("record")
    }else{
      historyList.innerHTML=`<tr id="Norecord" ><td colspan="4" >There is no record</td></tr>`
    }
})()



function changeMode() {
  document.body.classList.toggle("night-mode");
  document.getElementById("modeIcon").classList.toggle("feather-sun");
}
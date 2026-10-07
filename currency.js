async function currency(currency1,currency2,amount){ 
 var currencykey ="b4c9165104ba4e6a17cd9445" 
 var currency_base = currency1;
 var currency_target = currency2;
 var currency_amout=amount
 var currencyurl = `https://v6.exchangerate-api.com/v6/${currencykey}/pair/${currency_base}/${currency_target}/${currency_amout}`; 
 console.log(currencyurl);
 var response = await fetch(currencyurl);
 var data = await response.json();
 console.log(data);
var currencyrow=document.createElement("div");
var currency=`<h2>currency_base: ${currency_base}</h2>
<h2>currency_target: ${currency_target}</h2>
<h2>Amount: ${currency_amout}</h2>
<h2>Result: ${data.conversion_result}</h2>`
currencyrow.innerHTML=currency;
document.getElementById("currency").appendChild(currencyrow);


}
currency("EGP","USD","53");
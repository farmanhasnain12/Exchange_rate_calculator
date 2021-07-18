const currency_Element_one=document.getElementById('currency-one');
const currency_Element_two=document.getElementById('currency-two');
const amount_Element_one=document.getElementById('amount-one');
const amount_Element_two=document.getElementById('amount-two');




const rate_Element=document.getElementById('rate');
const swap=document.getElementById('swap');



swap.addEventListener('click',swapFunction);
function swapFunction()
{
    const currency_1=currency_Element_one.value;
    const currency_2=currency_Element_two.value;

    currency_Element_two.value=currency_1;
    currency_Element_one.value=currency_2;

    calculate();
}
function calculate()
{
   const currency_one=currency_Element_one.value;
   const currency_two=currency_Element_two.value;
 


 
   fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
   .then(res=> res.json())
   .then (data => {
    
    const rate=data.rates[currency_two];
    rate_Element.innerText=`1 ${currency_one} = ${rate} ${currency_two}`;

    amount_Element_two.value=(amount_Element_one.value * rate).toFixed(2);


   });
  
}

currency_Element_one.addEventListener('change',calculate);
currency_Element_two.addEventListener('change',calculate);
amount_Element_one.addEventListener('input',calculate);
amount_Element_two.addEventListener('input',calculate);

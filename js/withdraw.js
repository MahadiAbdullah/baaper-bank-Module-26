/* 
1: add event handler with the withdraw button 
2:get the withdraw amount from the withdraw input fields
2.4 : also make sure to convert the input into anumber by using parsefloat
3: get previous withdraw total
4: calculate total withdraw amount
4-5: set total withdraw ammount 
5: get the previous balance total
6: set the new balance totol 
7: clear the input field
*/


// step 1 : 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log('tare chara ami bachbo na');
    // step 2 : 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount);
    // step 3 : 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // console.log(previousWithdrawTotal);
    // step 4 : 
    const currentWithdrowTotal = previousWithdrawTotal + newWithdrawAmount; 
    withdrawTotalElement.innerText = currentWithdrowTotal;
    // step 5 : 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step 6 : 
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    // step 7 : 
    withdrawField.value = '';
})
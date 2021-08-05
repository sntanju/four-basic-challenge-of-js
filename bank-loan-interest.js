function bankLoanInterest(loanAmount, interestRate){
    let totalAmountToPay = loanAmount + loanAmount * interestRate / 100;
    return totalAmountToPay;
}
let totalPay =  bankLoanInterest(50740, 49);
console.log('You will pay ', totalPay);
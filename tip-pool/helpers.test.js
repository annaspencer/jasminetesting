describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
    billAmtInput.value = 100;
    tipAmtInput.value = 15;
    
    });

// sumPaymentTotal
it('should sum total from allPayments in sumPaymentTotal()', function() {
    submitPaymentInfo();
    
    expect(sumPaymentTotal('tipAmt')).toEqual(15);
    
       
    });

// calculateTipPercent

it('should calculate the tip percentage in calculateTipPercent()', function() {
 expect(calculateTipPercent(billAmtInput.value,tipAmtInput.value)).toEqual(15);

})

//appendTd(tr, value)

it('should append a new td to tr', function(){
    submitPaymentInfo();
    let element = document.getElementById('payment1');
    expect(element.firstChild.innerHTML).toEqual('$100');
})
// appendDeleteBtn
it('should add a delete td to serverTbody', function(){
    
    let newTr = document.createElement('tr');
    appendDeleteBtn(newTr);
    expect(newTr.firstChild.innerHTML).toEqual('x');

})

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    })
});
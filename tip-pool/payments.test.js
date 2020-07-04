describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 15;
        submitPaymentInfo();
    })
// submitPaymentInfo
    it('should add new payment1 input values on submitPaymentInfo()', function(){
        expect(allPayments['payment1'].billAmt).toEqual('100');
    })

// createCurPayment
it('should calulate tip percentage from input values on createCurPayment()', function(){
    expect(allPayments['payment1'].tipPercent).toEqual(15);
})

// appendPaymentTable
it('should add td to payment table from  input values on appendPaymentTable()', function(){
    submitServerInfo(); 
    updateServerTable();
    submitPaymentInfo();
    let element = document.getElementById('payment1');
    expect(element.firstChild.innerHTML).toEqual('$100');
});

// appendDeleteBtn
it('should add a delete td to paymentTbody', function(){
    
    let newTr = document.createElement('tr');
    appendDeleteBtn(newTr);
    expect(newTr.firstChild.innerHTML).toEqual('x');

})

// updateSummary
it('should update td values on Summary Table in updateSummary()', function(){
    submitServerInfo(); 
    updateServerTable();
    submitPaymentInfo();
   
    expect(summaryTds[0].innerHTML).toEqual('$100');
});

afterEach(function(){
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    paymentId = 0;
    allPayments = {};
});

});

it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount : 12000,
    years : 10,
    rate : 4,
  };
  expect(calculateMonthlyPayment(values)).toEqual('121.58');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount : 12985.76,
    years : 10,
    rate : 4.95,
  };
  expect(calculateMonthlyPayment(values)).toEqual('137.35');
});


/// etc

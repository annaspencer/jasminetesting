describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  //submitServerInfo test
  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  //updateServerTable

  it('should add a new table row with table data input on updateServerTable()', function () {
    submitServerInfo(); 
    updateServerTable();
    submitPaymentInfo();
    let element = document.getElementById('server1');
    expect(element.firstChild.innerHTML).toEqual('Alice');
  });

  afterEach(function() {
    // teardown logic
    allServers = {};
    serverTbody.innerHTML = " ";
  });
});

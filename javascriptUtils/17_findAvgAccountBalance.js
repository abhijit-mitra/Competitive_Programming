var testObj={
  accounts:[{
    id:1,
    balance:3000,
    subAccounts:[{
      id:11,
      balance:5000,
      subAccounts:[]
    }]
  },{
    id:2,
    balance:3000,
    subAccounts:[{
      id:21,
      balance:5000,
      subAccounts:[{
        id:211,
        balance:7000 ,
        subAccounts:[]
      },{
        id:212,
        balance:7000,
        subAccounts:[]
      }]
    }]
  }]
}

function getAvgBalanc(accounts){
  if(!accounts.length){
    return 0
  }
  const result={
    totalBalance:0,
    totalAccounts:0
  }
  function getAvg(accounts){
    for(let i=0;i<accounts.length; i++){
      result.totalBalance+=accounts[0].balance;
      result.totalAccounts+=1;
      if(accounts[i].subAccounts.length>0){
        getAvg(accounts[i].subAccounts);
      }
    }
  }
  getAvg(accounts);
  return (result.totalBalance/result.totalAccounts).toFixed(2);
}

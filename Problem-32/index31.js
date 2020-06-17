


function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var currencyArr = [];
  var status = ['OPEN', 'CLOSED', 'INSUFFICIENT_FUNDS'];
  var totalCid = cid.map(m => m[1]).reduce((n, c) => n + c).toFixed(2)

  if (change > totalCid) {
    status = status[2]
    return {status: status, change: []}
  } else if (totalCid == change) {
    status = status[1]
    return {status: status, change: cid}
  }

  
  for (var i = cid.length - 1; i >= 0; i--) {
   
    
    switch(cid[i][0]) {

      case 'ONE HUNDRED':
        
        
        if (change >= 100) {
        let subtract = Math.floor(change / 100) * 100
         
        while(subtract > cid[i][1]) {
          subtract -= 100
        }
        cid[i][1] -= subtract
        change -= subtract
        if (subtract <= cid[i][1] && cid[i][0] == 'ONE HUNDRED') {
           currencyArr.push(['ONE HUNDRED', subtract])
        }
        }

        break;
      case 'TWENTY':
        
  
      if (change >= 20) {
        let subtract2 = Math.floor(change / 20) * 20

        while(subtract2 > cid[i][1]) {
          subtract2 -= 20
        }
        cid[i][1] -= subtract2
        change -= subtract2
        currencyArr.push(['TWENTY', subtract2])
        
      }
break;
      case 'TEN':
        
        if (change >= 10) {
        let subtract3 = Math.floor(change / 10) * 10
        while(subtract3 > cid[i][1]) {
          subtract3 -= 10
        }
        cid[i][1] -= subtract3
        change -= subtract3
        currencyArr.push(['TEN', subtract3])
        
        }
break;
      case 'FIVE':
        
        if (change >= 5) {
        let subtract4 = Math.floor(change / 5) * 5
        while(subtract4 > cid[i][1]) {
          subtract4 -= 5
        }
        cid[i][1] -= subtract4
        change -= subtract4
        
           currencyArr.push(['FIVE', subtract4])
        
        }
break;
      case 'ONE':
        
        if (change >= 1) {
        let subtract5 = Math.floor(change / 1) * 1
        while(subtract5 > cid[i][1]) {
          subtract5 -= 1
        }
        
        cid[i][1] -= subtract5
        
        change -= subtract5

           currencyArr.push(['ONE', subtract5])
            
        }
break;
      case 'QUARTER':
        
        if (change >= 0.25 && cid[i][1]) {
        let subtract6 = Math.floor(change / 0.25) * 0.25
        while(subtract6 > cid[i][1]) {
          subtract6 -= 0.25
        }
        cid[i][1] -= subtract6
        change -= subtract6
        currencyArr.push(['QUARTER', subtract6])
        
        }
break;
      case 'DIME':
        
        if (change >= 0.10 && cid[i][1]) {
         let subtract7 = Math.round(change / 0.10) * 0.10
         subtract7 = subtract7
         
        while(subtract7 > cid[i][1]) {
          
          subtract7 -= 0.10
        }
        cid[i][1] -= subtract7
        change -= subtract7
           currencyArr.push(['DIME', subtract7])
        
        }
break;
      case 'NICKEL':
        
        if (change >= 0.05 && cid[i][1]) {
        let subtract8 = Math.round(change / 0.05) * 0.05
        while(subtract8 > cid[i][1]) {
          subtract8 -= 0.05
        }
        cid[i][1] -= subtract8
        change -= subtract8
        
           currencyArr.push(['NICKEL', subtract8])
        
        }
break;
      case 'PENNY':
        
        if (change >= 0.01 && change < 0.05 && cid[i][1]) {
        let subtract9 = Math.round(change / 0.01) * 0.01
        
        while(subtract9 > cid[i][1]) {
          subtract9 -= 0.01
        }
        cid[i][1] -= subtract9
        change -= subtract9
        
        
        currencyArr.push(['PENNY', subtract9])
        
        }

        break;
    }
    
  }
  
  if (currencyArr.length == 0) return {status: status[2], change: []};
  totalCid = cid.map(m => m[1]).reduce((n, c) => n + c).toFixed(2)
  if (totalCid > change) status = status[0];
  
  var theReturnObj = {
      status : status,
      change : currencyArr
  }
  

  return theReturnObj;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

const test=async()=>{
  try{
    const res = await Promise.All([p1,p2,p3]);
  }catch(err){

  }
}

function promiseAll(promises){
  return new Promise((resolve, reject)=>{
    const result=[];
    promises.forEach(async(promise)=>{
      try{
        const res = await promise();
        result.push(res);
        if(result.length===promises.length){
          resolve(result);
        }
      }catch(err){
        reject(err);
      }
    })
  })
}

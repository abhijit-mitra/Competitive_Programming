/*Create a myLocalStorage, which should set, get and remove item from localStorage. But while setting an item we should pass a duration, if duration is complete then please remove the item from localStorage*/

var myLocalStorage={
  setItem:function(key,value,expireAfter){
    localStorage.setItem(key,value);
    setTimeout((key)=>{
        console.log('key--',key);
      localStorage.removeItem(key)
    },expireAfter, key);
  },
  getItem: localStorage.getItem,
  removeItem: localStorage.removeItem,
};

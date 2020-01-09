function incX(x,y, break_inc_x) {
  while(x<break_inc_x){
    console.log(`row_no=${y}, col_no=${x}`);
    x++
  };
  break_inc_x--;
  return [x, y, break_inc_x];
}
function incY(x,y, break_inc_y) {
  while(y<break_inc_y){
    console.log(`row_no=${y}, col_no=${x}`);
    y++
  };
  break_inc_y--;
  return [x, y, break_inc_y];
}
function decX(x,y, break_dec_x) {
  while(x>break_dec_x){
    console.log(`row_no=${y}, col_no=${x}`);
    x--
  };
  break_dec_x++;
  return [x, y, break_dec_x];
}
function decY(x,y, break_dec_y) {
  while(y>break_dec_y){
    console.log(`row_no=${y}, col_no=${x}`);
    y--;
  };
  break_dec_y++;
  return [x, y, break_dec_y];
}

function spl_print(arr){
  const row = arr.length;
  const col = arr[0].length;
  let x=0, y=0, break_inc_x = col-1, break_inc_y = row-1, break_dec_x= 0, break_dec_y = 1;
  const req_itereations = Math.ceil(Math.min(row,col)/2);
  let i=0;
  while(i<req_itereations){
      [x,y,break_inc_x] = incX(x,y,break_inc_x);
      [x,y,break_inc_y] = incY(x,y,break_inc_y);
      if(break_inc_y>(row<col?-1:0)){
        [x,y,break_dec_x] = decX(x,y,break_dec_x, break_dec_y);
      }
      if(break_inc_x>(row>col?-1:0)){
        [x,y,break_dec_y] = decY(x,y,break_dec_y, break_inc_x);
      }
      i++;
  }
  console.log(`row_no=${y}, col_no=${x}`);
}

// spl_print([[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]]);
// spl_print([[1,1,1,1,1]]);
// spl_print([[1],[1],[1],[1],[1]]);
// spl_print([[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]]);
// spl_print([[1,1],[1,1],[1,1]]);
spl_print([[1,1,1],[1,1,1]]);

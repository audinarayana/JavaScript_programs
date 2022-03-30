var array=[2,3,6,8,5,2,4,5,6,7]
array.sort(function(a,b){ return(a-b)})
  document.getElementById("aud").innerHTML="min:"+array[0]
  array.sort(function(a,b){ return(b-a)})
document.getElementById("au").innerHTML="max:"+array[0]
array.sort(function(a,b){return(a-b)})
document.getElementById("arr").innerHTML=array;
var a=array.indexOf(5);
document.getElementById("art").innerHTML=a;
var arrays=[2,3,6,8,5,2,4,5,6,7]
var a=arrays.unshift(10);
document.getElementById("nn").innerHTML=arrays;
var arrayss=[2,3,6,8,5,2,4,5,6,7]
var a=arrayss.splice(4,3,11,12,13)
document.getElementById("dd").innerHTML=arrayss;
var cu=[2,3,6,8,5,2,4,5,6,7]
var b=cuu.filter(audi);
document.getElementById("bb").innerHTML=b;
function audi(value,index,array){
  return (cu.indexOf(value)===index)
    }

var n=[2,3,6,8,5,2,4,5,6,7]
var d=n.map(audii);
document.getElementById("bb").innerHTML=d;
function audii(value,index,array){
  return value*2;
}

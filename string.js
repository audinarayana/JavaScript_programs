<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <p id="auu"></p>
  <pid="arr"></p>
  
</body>
</html>
var sample="Iam capable of learning"
var a=sample.indexOf("l")
document.getElementById("auu").innerHTML=a;
var b=sample.indexOf("capable")
document.getElementById("arr").innerHTML=b;
var sample="Iam capable of learning"
if(sample==sample.split("").reverse().join("").toString()){
document.write("it is palindrome");
}
else
  {
    document.write("not palindrome")
  }
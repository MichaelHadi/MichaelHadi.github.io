function function1(){
  var a = document.getElementById("reg1").value;
  var b = document.getElementById("reg2").value;
  var c = document.getElementById("reg3").value;
  var d = document.getElementById("reg4").value;
  var e = document.getElementById("reg5").value;
  var f = document.getElementById("reg6").value;
  if (a != "" && b != "" && c != "" && d != "" && e != "" && f != "" ){
  alert ("Submitted\n" + a + " "+ b + "\n" + c + "\n" + d + "\n" + e + "\n" + f);
  }
}
function function2(){
  var a = document.getElementById("con1").value;
  var b = document.getElementById("con2").value;
  var c = document.getElementById("con3").value;
  if (a != "" && b != "" && c != "" ){
    alert ("Thank you for your question " + a +"\n"+"Wait for our response in your email");
  }
}
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function myFunction4() {
  var dots = document.getElementById("dots4");
  var moreText = document.getElementById("more4");
  var btnText = document.getElementById("myBtn4");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

/*function offDisplay() {
    document.getElementsByClassName("op_circle1").style.display = 'none';
} */
function printName()  {
    const name = document.getElementById('input1').value;
    document.getElementById("result1").innerText = name;
}

function printName2()  {
    const name = document.getElementById('input2').value;
    document.getElementById("result2").innerText = name;
}

function printName3()  {
    const name = document.getElementById('input3').value;
    document.getElementById("result3").innerText = name;
}

function printName4()  {
    const name = document.getElementById('input4').value;
    document.getElementById("result4").innerText = name;
}

function printName5()  {
    const name = document.getElementById('input5').value;
    document.getElementById("result5").innerText = name;
}

function printName6()  {
    const name = document.getElementById('input6').value;
    document.getElementById("result6").innerText = name;
}

function printName7()  {
    const name = document.getElementById('input7').value;
    document.getElementById("result7").innerText = name;
}

function printName8()  {
    const name = document.getElementById('input8').value;
    document.getElementById("result8").innerText = name;
}



const status1 = document.getElementById("status1");
const button1 = document.getElementById("button1");

console.log(status1.innerText);
console.log(button1.offsetTop);

button1.onclick = () => {
  const current = parselnt(status1.innerText,10);
  status1.innerText = current + 10;
};

/*
function count(type)  {

  const resultElement = document.getElementById('status1');
  
  let number = resultElement.innerText;
  
  if(type== 'plus') {
    number = parseInt(number) + 10;
  }
  resultElement.innerText = number;
}

function count(type)  {
  const resultElement = document.getElementById('status2');
  
  let number = resultElement.innerText;
  
  if(type === 'plus') {
    number = parseInt(number) + 10;
  }
  resultElement.innerText = number;
}

function count(type)  {

  const resultElement = document.getElementById('status3');
  
  let number = resultElement.innerText;

  if(button3 === 'plus') {
    number = parseInt(number) + 10;
  }
  resultElement.innerText = number;
}
*/

function printName()  {
  const name = document.getElementById('name').value;
  document.getElementById("result").innerText = name;
}

var submit = document.getElementById('submitButton');
submit.onclick = showImage;

function showImage() {
  var newImage = document.getElementById('image-show').lastElementChild;
  newImage.style.visibility = "visible";

document.getElementById('image-upload').style.visibility = 'hidden';

document.getElementById('fileName').textContent = null;}     //기존 파일 이름 지우기

function loadFile(input) {
  var file = input.files[0];

  var name = document.getElementById('fileName');
  name.textContent = file.name;

  var newImage = document.createElement("img");
  newImage.setAttribute("class", 'img');

  newImage.src = URL.createObjectURL(file);
  newImage.style.width = "70%";
  newImage.style.height = "70%";
  newImage.style.visibility = "hidden";   //버튼을 누르기 전까지는 이미지 숨기기
  newImage.style.objectFit = "contain";

  var container = document.getElementById('image-show');
  container.appendChild(newImage);
};
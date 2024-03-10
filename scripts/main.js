let myImage = document.querySelector("img");


myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/first_01.jpg") {
    myImage.setAttribute("src", "images/first_02.jpg");
    
  } else {
    myImage.setAttribute("src", "images/first_01.jpg");
  }
};



let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if(!myName){
      return setUserName();
    }else{
      localStorage.setItem("name", myName);//让输入的myName 的内容保存在浏览器中

      myHeading.textContent = "欢迎您的到来，" + myName+"先生!";

    }
   
  }
/*取非运算符（逻辑非，用 ! 表示）来检测 'name' 数据是否存在，若不存在，调用 setUserName() 创建。若存在（即用户上次访问时设置过），调用 getItem() 获取保存的名字 */
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "欢迎您的到来，" + storedName+"先生!";
  }


  myButton.onclick = function () {
    setUserName();
  };
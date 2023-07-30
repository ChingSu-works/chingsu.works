const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");

  if (mySrc === "images/Duck.jpg") {
    myImage.setAttribute("src", "images/greenduck.jpeg");
  } else {
    myImage.setAttribute("src", "images/Duck.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.onclick = () => 
{
    setUserName();
}

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    }else{
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if(!localStorage.getItem("name"))
{
    setUserName();
}
else
{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = 'Mozilla is cool, $(storedName)';
}
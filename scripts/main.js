let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/0.jpg') {
        myImage.setAttribute('src', 'images/surprise.jpg'); 
    }
    else {
        myImage.setAttribute ('src','images/0.jpg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      alert('I hope you enjoy my website, ' + myName + '!');
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    alert('Welcome, ' + storedName + '. I hope you enjoy my website!');
  }
  myButton.onclick = function() {
    setUserName();
  }
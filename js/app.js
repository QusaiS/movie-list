'use strict';
var savedItems = localStorage.getItem('listArray');
var parsedObj = JSON.parse(savedItems);
if (parsedObj) {
  var list = document.getElementById('list');
  for (let i = 0; i < parsedObj.length; i++) {
    const liObj = parsedObj[i];
    var li = document.createElement('li');
    var div = document.createElement('div');
    var h2 = document.createElement('h2');
    var p = document.createElement('p');
    h2.innerText = liObj.item;
    div.appendChild(h2);
    p.innerText = liObj.release;
    div.appendChild(p);
    li.appendChild(div);
    li.classList.add('li');
    list.appendChild(li);
   
  }
}

function Form(item, image , release) {
  this.item = item;
  this.image = image;
  this.release = release;
  this.id = 0;
}
var objArr = [];
document.getElementById('formId')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    let item = event.target.item.value;
    let image = event.target.image.value;
    let release = event.target.release.value;
    let list = document.getElementById('list');
    let li = document.createElement('li');
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    h2.innerText = item;
    div.appendChild(h2);
    p.innerText = release;
    div.appendChild(p);
    li.appendChild(div);
    li.classList.add('li');
    list.appendChild(li);

    let liobj = new Form(item, image , release);
    objArr.push(liobj);
    let objArrString = JSON.stringify(objArr);
    localStorage.setItem('listArray', objArrString);

    var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  });



  var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
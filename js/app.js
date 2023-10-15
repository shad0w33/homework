// 1

const noCar = document.querySelector('ul')
const removeItemTwo = noCar.querySelectorAll('li')[2];
const removeItemsFour = noCar.querySelectorAll('li')[4];
const removedItem = noCar.removeChild(removeItemTwo)
const removedItems = noCar.removeChild(removeItemsFour)

// 2

const elementLi = document.querySelectorAll('li');
for(let li of elementLi) {
    li.classList.add('listItem')
}

const elementUl = document.querySelector('ul');
elementUl.classList.add('list')

// 3

const parent = document.querySelector('.list');
const newLiFirst = document.createElement('li');
newLiFirst.innerText = 'Bugatti';
const firstLi = document.querySelector('.listItem');
parent.insertBefore(newLiFirst, firstLi).classList.add('listItem');

// 4

const parents = document.querySelector('.list');
const newLiLast = document.createElement('li');
newLiLast.innerText = 'Ford';
parents.appendChild(newLiLast).classList.add('listItem');

// 5

const youName = document.createElement('input');
youName.type = 'text';
youName.value = '';
youName.placeholder = 'Name';
document.body.append(youName);
document.querySelector('form').appendChild(youName) 
const surName = document.createElement('input');
surName.type = 'text';
surName.value = '';
surName.placeholder = 'Surname';
document.body.append(surName);
document.querySelector('form').appendChild(surName) 
const password = document.createElement('input');
password.type = 'password';
password.value = '';
password.placeholder = 'Password';
document.body.append(password);
document.querySelector('form').appendChild(password) 
const confirmPassword = document.createElement('input');
confirmPassword.type = 'password';
confirmPassword.value = '';
confirmPassword.placeholder = 'Confirm password';
document.body.append(confirmPassword);
document.querySelector('form').appendChild(confirmPassword) 

// 6

const image = document.createElement('img');
image.src = 'https://images.pexels.com/photos/11189623/pexels-photo-11189623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
document.querySelector('p').appendChild(image) 

// 7

const myElement = document.querySelector('p');
myElement.classList.remove('red', 'italic');

// 8

const h1 = document.createElement('h1');
h1.innerText = 'this is h1 tag';
document.querySelector('#h1Wrapper').appendChild(h1);

// 9 

h1.style.color = 'blue';
h1.style.fontSize = '40px';

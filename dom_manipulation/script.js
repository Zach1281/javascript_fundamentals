let container = document.querySelector('#container');

let content = document.createElement('p');
content.textContent = "Hey I'm red!";
content.style.color = 'red';
container.appendChild(content);
content = document.createElement('h3');
content.textContent = "I'm a blue h3!";
content.style.color = 'blue';
container.appendChild(content);
content = document.createElement('div');
content.classList.add('content');
content.style.cssText = 'border: solid; border-color:black; background-color:pink;'
container.appendChild(content);
container = document.querySelector('.content');
content = document.createElement('h1');
content.textContent = "I'm in a div";
container.appendChild(content);
content = document.createElement('p');
content.textContent = "ME TOO!";
container.appendChild(content);

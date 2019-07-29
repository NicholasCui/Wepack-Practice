import './style.css';
import Icon from './icon.jpg';

function component() {
    const element = document.createElement('div');

    element.innerHTML = ['hello', 'world'].join(' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());

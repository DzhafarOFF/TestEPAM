import { toSort, toReverse } from '../helpers.js';

export default (users, createDOM) => {
    const btns = document.createDocumentFragment();

    const btnSort = document.createElement('button');
    btnSort.textContent = 'Sort';
    btnSort.id = 'btn-sort';
    
    const btnReverse = document.createElement('button');
    btnReverse.textContent = 'Reverse';
    btnReverse.id = 'btn-reverse';
    
    btnSort.onclick = () => {
        const sortedUsers = toSort(users);
        createDOM(sortedUsers);
    };

    btnReverse.onclick = () => {
        const reversedUsers = toReverse(users);
        createDOM(reversedUsers);
    };

    btns.appendChild(btnSort);
    btns.appendChild(btnReverse);
    
    return btns;
}
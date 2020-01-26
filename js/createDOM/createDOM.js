import showInfo from './showInfo.js';
import createUserDOM from './createUserDOM.js';
import createUserModalDOM from './createUserModalDOM/createUserModalDOM.js';
import clearDOM from './clearDOM.js';
import createSortButtons from './createSortButtons.js';

export const createDOM = (data) => {
    clearDOM();

    const users = data;
    const fragment = document.createDocumentFragment();

    users.forEach(user => {
        const userDiv = createUserDOM(user);
        const userModal = createUserModalDOM(user);
        userDiv.onclick = () => showInfo(userModal);
        fragment.appendChild(userDiv);
        fragment.appendChild(userModal);
    });

    const btns = createSortButtons(users, createDOM);
    fragment.appendChild(btns);

    document.getElementById('app').appendChild(fragment);
}
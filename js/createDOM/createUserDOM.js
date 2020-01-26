import { toCapitalize } from '../helpers.js';

export default (user) => {
    const userTitle = toCapitalize(`${user.name.title}. ${user.name.first} ${user.name.last}`);
    const userDiv = document.createElement('div');
    userDiv.className = 'user';

    const userImgMin = document.createElement('img');
    userImgMin.className = 'img';
    userImgMin.src = user.picture.thumbnail;

    userDiv.appendChild(userImgMin);
    userDiv.innerHTML += userTitle;
    return userDiv;
}
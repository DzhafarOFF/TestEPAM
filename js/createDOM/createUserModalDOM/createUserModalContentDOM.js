import { toCapitalize } from '../../helpers.js';
import createUserContactsDOM from './createUserContactsDOM.js';
import createUserLocationDOM from './createUserLocationDOM.js';

export default (user) => {
    const content = document.createElement('div');
    content.className = 'modal-content';
    
    const userImg = document.createElement('img');
    userImg.className = 'img';
    userImg.src = user.picture.large;
    content.appendChild(userImg);

    createUserLocationDOM(user, content);
    const userContacts = createUserContactsDOM(user);
    content.appendChild(userContacts);
    content.innerHTML += toCapitalize(`${user.name.title}. ${user.name.first} ${user.name.last}`);
    
    return content;
}

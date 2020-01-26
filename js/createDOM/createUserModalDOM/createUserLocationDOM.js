import { toCapitalize } from '../../helpers.js';

export default (user, content) => {
    const location = document.createElement('ul');
    location.className = 'list';
    location.innerHTML += 'Location:';
    for(let item in user.location) {
        location.innerHTML += `<li>${toCapitalize(item)}: ${toCapitalize(user.location[item])}</li>`;
        content.appendChild(location);
    };
}
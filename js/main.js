import getData from './getData.js';
import { createDOM } from './createDOM/createDOM.js';

window.addEventListener('load', () => {
    getData().then(usersData => { 
        createDOM(usersData);
    });
});
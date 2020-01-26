import createUserModalContentDOM from './createUserModalContentDOM.js';

export default (user) => {
    const userModal = document.createElement('div');
    userModal.className = 'modal';

    const userModalContent = createUserModalContentDOM(user);
    userModal.appendChild(userModalContent);

    return userModal;
}
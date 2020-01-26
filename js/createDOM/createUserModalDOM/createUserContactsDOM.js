export default (user) => {
    const contacts = document.createElement('ul');
    contacts.className = 'list';
    contacts.innerHTML += 'Contacts:';

    const userContactsEmail = document.createElement('li');
    userContactsEmail.innerHTML = `Email: ${user.email}`;
    contacts.appendChild(userContactsEmail);

    const userContactsPhone = document.createElement('li');
    userContactsPhone.innerHTML = `Phone: ${user.phone}`;
    contacts.appendChild(userContactsPhone);

    return contacts;
}

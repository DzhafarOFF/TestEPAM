window.addEventListener('load', () => {
    getData().then(usersData => {
        createDOM(usersData);
        const toSort = document.getElementById('btn');
        toSort.onclick = () => {
            const sortedUsers = usersData.sort((a, b) => `${a.name.first}${a.name.second}`.localeCompare(`${b.name.first}${b.name.second}`));
            createDOM(sortedUsers);
        }
    });
});

const capitalizer = (str) => {
    return String(str)
        .split(' ')
        .map((s) => s.charAt(0)
            .toUpperCase() + s.substring(1))
        .join(' ');
}

const getData = async () => {
    const url = 'https://cors-anywhere.herokuapp.com/http://api.randomuser.me/1.0/?results=10&nat=gb,us&inc=gender,name,location,email,phone,picture';
    const response = await fetch(url).then(response => response.json());
    return response.results;
}

const createUserDOM = (user) => {
    const userTitle = capitalizer(`${user.name.title}. ${user.name.first} ${user.name.last}`);
    const userDiv = document.createElement('div');
    userDiv.className = 'user';

    const userImgMin = document.createElement('img');
    userImgMin.className = 'img';
    userImgMin.src = user.picture.thumbnail;

    userDiv.appendChild(userImgMin);
    userDiv.innerHTML += userTitle;
    return userDiv;
}

const createUserLocationDom = (user, content) => {
    const location = document.createElement('ul');
    location.className = 'list';
    location.innerHTML += 'Location:';

    for(item in user.location) {
        location.innerHTML += `<li>${capitalizer(item)}: ${capitalizer(user.location[item])}</li>`;
        content.appendChild(location);
    };
}
const createUserContactsDom = (user) => {
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

const createUserModalContentDOM = (user) => {
    const content = document.createElement('div');
    content.className = 'modal-content';
    
    const userImg = document.createElement('img');
    userImg.src = user.picture.large;
    content.appendChild(userImg);

    createUserLocationDom(user, content);
    const userContacts = createUserContactsDom(user);
    content.appendChild(userContacts);
    content.innerHTML += capitalizer(`${user.name.title}. ${user.name.first} ${user.name.last}`);
    
    return content;
}

const createUserModalDOM = (user) => {
    const userModal = document.createElement('div');
    userModal.className = 'modal';

    const userModalContent = createUserModalContentDOM(user);
    userModal.appendChild(userModalContent);

    return userModal;
}

const createDOM = (data) => {
    const users = data;
    const fragment = document.createDocumentFragment();

    users.forEach(user => {
        const userDiv = createUserDOM(user);
        const userModal = createUserModalDOM(user);
        userDiv.onclick = () => showInfo(user, userModal);
        fragment.appendChild(userDiv);
        fragment.appendChild(userModal);
    });
    document.getElementById('app').innerHTML = '';
    document.getElementById('app').appendChild(fragment);
    const btn = document.createElement('button');
    btn.textContent = 'Sort';
    btn.id = 'btn';
    document.getElementById('app').appendChild(btn);
}

const showInfo = (userInfo, userDOM) => {
    console.log(userInfo);
    userDOM.style.display = 'block';

    window.onclick = function(event) {
        if (event.target == userDOM) {
          userDOM.style.display = "none";
        }
    };
}
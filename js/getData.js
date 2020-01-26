export default async () => {
    const url = 'https://cors-anywhere.herokuapp.com/http://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture';
    const response = await fetch(url).then(response => response.json());
    return response.results;
}

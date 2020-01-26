export default async () => {
<<<<<<< HEAD
    const url = 'https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture';
=======
    const url = 'http://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture';
>>>>>>> 842ab6a9401f848ac2e0717fa1baa05c49c180a2
    const response = await fetch(url).then(response => response.json());
    return response.results;
}

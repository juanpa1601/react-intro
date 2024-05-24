const fetchUsers = async () => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/users/';
        const res = await fetch(url);
        const users = await res.json();
        return users;

    } catch (err) {
        console.error(err);
    }
}

export default fetchUsers;


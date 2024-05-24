const fetchUser = async () => {
    try {
        const userId = Math.floor(Math.random() * 10) + 1;
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
        const res = await fetch(url);
        const users = await res.json();
        return users;

    } catch (err) {
        console.error(err);
    }
}

export default fetchUser;


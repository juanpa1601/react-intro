const fetchPosts = async (userId) => {
    try {
        const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
        const res = await fetch(url);
        const posts = await res.json();
        return posts;
    } catch (err) {
        console.error(err);
    }
}

export default fetchPosts;
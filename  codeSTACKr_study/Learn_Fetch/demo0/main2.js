const newPost = {
    title: "New Post Title",
    body: "Awesome post paragraph",
    userId: 1,
};

const createNewPost = (post) => {
    const options = {
        method: "POST",
        body: JSON.stringify(post),
        headers: new Headers({
            "Content-Type": "application/json",
        }),
    };

    return fetch("https://jsonplaceholder.typicode.com/posts", options)
        .then((res) => res.json())
        .then((posts) => console.log(posts))
        .catch((err) => console.log(err));
};

createNewPost(newPost);
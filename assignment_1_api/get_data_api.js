import axios from "axios"
async function getData(user_id) {
    try {
        // Get the user by user id
        const { data: userData } = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
        // Get the user's post by user id
        const { data: postData } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);

        // Promise.all([userData, postData]);
        console.log(userData);
        console.log(postData);
    } catch (error) {
        console.log(error)
    }
}

// Export the function(module) as default to be imported at another file
export default getData

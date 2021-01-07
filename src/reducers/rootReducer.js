const initState = {
    posts: [
        {id: 1, title: "repellat provident occaecati excepturi", body: "expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto"},
        {id: 2, title: "repellat provident occaecati excepturi", body: "ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto"},
        {id: 3, title: "repellat provident occaecati excepturi", body: "consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto"}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state, posts:newPosts
        }
    }
    return state;
} 



export default rootReducer;




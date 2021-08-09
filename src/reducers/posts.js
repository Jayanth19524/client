
// a reducer is a function that accepts the state and action
export default (posts=[],action) => {
    switch (action.type){
        case 'LIKE':
            console.log('like');
            return posts.map((post)=>post._id===action.payload._id?action.payload:post);
        case 'DELETE':
            return posts.filter((post)=>post._id!==action.payload);
        case 'UPDATE':
            console.log('update');
            return posts.map((post)=>post._id===action.payload._id?action.payload:post);
        case 'FETCH_ALL':
            console.log("fetch")
            return action.payload;
        case 'CREATE':
            console.log('post');
            return [...posts,action.payload];

        default :
            return posts;

    }
        
}
// import { FunctionComponent } from "react";
import { createContext, useState } from "react";
import { makeRequest } from "./makeRequest";


export interface Post {
    _id: string,
    username: string;
    rating: number;
    description: string;
}

interface PostContextValue {
    posts: Post[];
    createNewPost: (post: any) => void;
    deletePost: (_id: string) => void;
    editPost: (_id: string, rating: number, description: string) => void; 
}

interface Prop {
    children: any; 
}

export const PostContext = createContext<PostContextValue>({} as PostContextValue);

// const PostProvider: FunctionComponent = ({ children }) => {
// function PostProvider: FunctionComponent = ({children: any}) => {
function PostProvider(props: Prop) {

    const [posts, setPosts] = useState<any>([] as Post[]) 


    async function createNewPost(post: any) {

        const body = {
            post
        };

        await makeRequest('/api/post/', 'POST', body )
        // POST http://localhost:4000/api/post

    }; 

    async function editPost(_id: string, rating: number, description: string) {

        const body = {
            rating,
            description,
        };

        await makeRequest(`/api/post/${_id}`, 'PUT', body)
        // PUT http://localhost:4000/api/post/6087c0fe926a8e395a1c1412

    };

    async function deletePost(_id: string) {
        await makeRequest(`/api/post/${_id}`, 'DELETE') 
        // DELETE http://localhost:4000/api/post/6088234442b0ba5c0a1a318c 
        
        console.log('Deleted:', _id);
        
    };

    return (
        <PostContext.Provider value={{
            posts: posts,
            createNewPost: createNewPost,
            editPost: editPost,
            deletePost: deletePost,
        }}
        >
            {props.children}
        </PostContext.Provider>
    );
};
export default PostProvider;

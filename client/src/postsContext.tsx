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
    createNewPost: (rating: number, description: string) => void;
    deletePost: (_id: string) => void;
    updatePost: (_id: string, rating: number, description: string) => void; 
}

interface Props {
    children: any; 
}

export const PostContext = createContext<PostContextValue>({} as PostContextValue);

// const PostProvider: FunctionComponent = ({ children }) => {
// function PostProvider: FunctionComponent = ({children: any}) => {
function PostProvider(props: Props) {
    const [posts, setPosts] = useState<any>([] as Post[]) 
    console.log(setPosts)


    async function createNewPost(rating: number, description: string ) {

        const body = {
            rating,
            description
        };

        await makeRequest('/api/post/', 'POST', body )
        // POST http://localhost:4000/api/post

    }; 

    async function updatePost(_id: string, rating: number, description: string) {

        const body = {
            rating,
            description,
        };

        await makeRequest(`/api/post/${_id}`, 'PUT', body)
        // PUT http://localhost:4000/api/post/:id

    };

    async function deletePost(_id: string) {
        await makeRequest(`/api/post/${_id}`, 'DELETE') 
        // DELETE http://localhost:4000/api/post/:id 
        
        console.log('Deleted:', _id);
        
    };

    return (
        <PostContext.Provider value={{
            posts: posts,
            createNewPost: createNewPost,
            updatePost: updatePost,
            deletePost: deletePost,
        }}
        >
            {props.children}
        </PostContext.Provider>
    );
};
export default PostProvider;

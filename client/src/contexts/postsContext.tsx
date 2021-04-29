import { createContext, useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

export interface Post {
    _id: string,
    username: string;
    rating: number;
    comment: string;
    carouselTag: string;
}

interface PostContextValue {
    posts: Post[];
    getAllPosts: () => void;
    createNewPost: (rating: number, comment: string, carouselTag: string) => void;
    deletePost: (_id: string) => void;
    updatePost: (_id: string, rating: number, comment: string) => void;
}

interface Props {
    children: any;
};

export const PostContext = createContext<PostContextValue>({} as PostContextValue);

function PostProvider(props: Props) {
    const [posts, setPosts] = useState<any>([] as Post[]);


    useEffect(() => {
        async function getPosts() {
            const allPosts = await makeRequest('/api/post', 'GET');
            setPosts(allPosts)
        };
        getPosts();
    }, []);

    async function getAllPosts() {
        const allPosts = await makeRequest('/api/post/', 'GET');
        setPosts(allPosts);
    };

    async function createNewPost(rating: number, comment: string, carouselTag: string) {
        const body = {
            rating,
            comment,
            carouselTag
        };

        await makeRequest('/api/post/', 'POST', body)
        await getAllPosts()
    };

    async function updatePost(postId: string, rating: number, comment: string) {
        const body = {
            rating,
            comment
        };

        await makeRequest(`/api/post/${postId}`, 'PUT', body)
        await getAllPosts();
    };

    // DELETE POST
    async function deletePost(id: string) {
        await makeRequest(`/api/post/${id}`, 'DELETE');
        const notDeletedPosts = posts.filter((post: { _id: string}) => post._id !== id)

        setPosts(notDeletedPosts)
    };

    return (
        <PostContext.Provider value={{
            posts: posts,
            getAllPosts: getAllPosts,
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

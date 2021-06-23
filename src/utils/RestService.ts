import {IComment, IPhoto, IPost, IUser} from "./Rest";

const API = 'https://jsonplaceholder.typicode.com';

class RestService {

    private static _argsToString(args: object): string {
        let argsString: string = '?';
        for (const [key, value] of Object.entries(args)) {
            if (value) {
                argsString += `${key}=${value}${argsString.length > 1 ? '&' : ''}`;
            }
        }

        return argsString.length > 1 ? argsString : '';
    }

    private static _statusToText(status: number): void {

        switch (status) {
            case 200:
                console.info("Ok");
                break;
            default:
                console.error("Error")
        }
    }

    async getUserPhoto(id: number): Promise<IPhoto> {
        return fetch(`${API}/photos/${id}`)
            .then(response => response.json())
    }

    async getUserProfile(id?: number): Promise<IUser> {
        const user: IUser = await fetch(`${API}/users/${id}`).then(response => response.json());
        user.photo = await this.getUserPhoto(user.id);

        return user;
    }

    async getPost(id?: number): Promise<IPost> {
        const post: IPost = await fetch(`${API}/posts/${id}`).then(response => response.json());
        post.user = await this.getUserProfile(post.userId);

        return post;
    }

    async getPublications(limit?: number): Promise<Array<IPost>> {
        const args = {
            '_limit': limit
        };
        const argString = RestService._argsToString(args);
        const posts: Array<IPost> = await fetch(`${API}/posts${argString}`).then(response => response.json());
        return Promise.all(posts.map(async (post) => {
            post.user = await this.getUserProfile(post.userId).then(response => response);
            post.photo = await this.getUserPhoto(post.userId).then(response => response);

            return post;
        }));
    }

    async getWork(limit?: number): Promise<Array<IComment>> {
        const args = {
            '_limit': limit
        };
        const argString = RestService._argsToString(args);
        const comments: Array<IComment> = await fetch(`${API}/comments${argString}`).then(response => response.json());
        return Promise.all(comments.map(async (comment) => {
            comment.post = await this.getPost(comment.postId).then(response => response);

            return comment;
        }));
    }

    setUserProfile(id: number, data: IUser): void {
        fetch(`${API}/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => {
                return RestService._statusToText(response.status);
            })
    }
}


export default RestService;
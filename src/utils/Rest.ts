export interface IPost {
    id: number,
    userId: number
    body: string,
    title: string,
    user?: IUser,
    photo?: IPhoto
}

export interface IAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string
    }
}

export interface ICompany {
    name: string,
    catchPhrase: string,
    bs: string
}

export interface IPhoto {
    albumId: number,
    id: number,
    thumbnailUrl: string
    title: string
    url: string
}

export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string
    address: string,
    phone: string,
    website: string,
    company: ICompany,
    photo?: IPhoto
}

export interface IComment {
    id: number,
    postId: number,
    name: string,
    email: string,
    body: string,
    user?: IUser
    post?: IPost
}
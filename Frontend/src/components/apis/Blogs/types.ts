export interface blogsCardsData {
    images: Array<string>;
    author: string,
    title: string,
    content: string,
    timeAgo: string,
}

export interface BlogsDataResponse {
    blogsData: blogsCardsData[]; 
    error?: string;
}

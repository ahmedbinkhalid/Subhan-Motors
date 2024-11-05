// src/api/PostNewBlog.ts

export const postNewBlog = async (blogData: {
    title: string;
    content: string;
    images: File[];
}): Promise<Response> => {
    const formData = new FormData();
    formData.append("title", blogData.title);
    formData.append("content", blogData.content);

    // Append each image file to the FormData object
    blogData.images.forEach(image => {
        formData.append("images", image);
    });

    const response = await fetch('http://localhost:5000/api/submit', {
        method: 'POST',
        body: formData,
    });

    return response;
};

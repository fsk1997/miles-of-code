import * as prismic from "@prismicio/client";
const API_ENDPOINT = "https://astro-prismic-demo.prismic.io/api/v2";

const client = prismic.createClient(API_ENDPOINT);

export async function getAllPosts() {
    return client.getAllByType('blog_post');
}

export async function getPage(uuid: string) {
    return client.getByUID('page', uuid, { pageSize: 1, page: 1 });
}

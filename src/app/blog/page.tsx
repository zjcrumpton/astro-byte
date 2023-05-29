import { FC } from "react";
import { Route, routePaths } from "@/core";
import { request, gql } from "graphql-request";
import Link from "next/link";
import moment from "moment";
import { AiFillCalendar } from "react-icons/ai";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT ?? "";

const getPosts = async () => {
  let posts = [];
  try {
    const query = gql`
      query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `;

    const result: any = await request(graphqlAPI, query);
    posts = result.postsConnection.edges;
  } catch (e) {
    console.log(e);
  }

  return posts;
};

export interface Post {
  author: { name: string; photo: { url: string } };
  createdAt: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: { url: string };
  categories: any[];
}

const PostItem: FC<Post> = ({
  featuredImage,
  title,
  slug,
  author,
  createdAt,
  excerpt,
}) => {
  return (
    <Link href={`${routePaths[Route.BLOG]}/${slug}`}>
      <div className="flex flex-col p-2 border-2 text-black border-white cursor-pointer bg-white hover:bg-glow-blue hover:border-glow-blue">
        <img className="h-50 w-80" src={featuredImage.url} />
        <div className="flex flex-col justify-center items-center gap-4 my-5">
          <h1 className="font-bold text-xl">{title}</h1>
          <div className="flex gap-4 items-center justify-center">
            <img
              className="w-8 h-8 align-middle rounded"
              src={author.photo.url}
            />
            <h2>{author.name}</h2>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <AiFillCalendar className="w-5 h-5" />
            {moment(createdAt).format("MMM DD, YYYY")}
          </div>
          <p>{excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default async function Blog() {
  const posts = await getPosts();

  return (
    <>
      <main className="flex flex-col items-center justify-between p-24">
        <h1 className="text-6xl mb-10">Posts</h1>

        <div className="flex flex-wrap gap-10 justify-center items-center">
          {posts.map((post: any) => (
            <PostItem {...post.node} />
          ))}
        </div>
      </main>
    </>
  );
}

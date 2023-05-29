import { request, gql } from "graphql-request";
import moment from "moment";
import { Share_Tech_Mono } from "next/font/google";
import { AiFillCalendar } from "react-icons/ai";

const shareTech = Share_Tech_Mono({ subsets: ["latin"], weight: "400" });
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT ?? "";

const getPost = async (slug: string) => {
  try {
    const query = gql`
      query GetPost {
        post(where: { slug: "${slug}" }) {
          title
          id
          createdAt
          author {
            id
            name
            photo {
              url
            }
          }
          content {
            html
          }
          featuredPost
          slug
          featuredImage {
            url
          }
        }
      }
    `;

    const result: any = await request(graphqlAPI, query);
    return result.post;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export default async function PostPage({ params }: any) {
  const post = await getPost(params.slug);
  const markup = { __html: post.content.html };

  return (
    <div className="flex flex-col justify-center items-center p-10 gap-5">
      <h1 className={`${shareTech.className} text-5xl`}>{post.title}</h1>
      <div className="flex flex-col gap-2">
        <img className="max-h-80" src={post.featuredImage.url} />
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <img className="w-8 h-8 rounded" src={post.author.photo.url} />
            <h2>{post.author.name}</h2>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <AiFillCalendar className="w-5 h-5" />
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </div>
        </div>
      </div>
      <div dangerouslySetInnerHTML={markup} />
    </div>
  );
}

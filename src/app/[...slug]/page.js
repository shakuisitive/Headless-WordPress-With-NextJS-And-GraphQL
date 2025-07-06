import client from "@/client";
import { gql } from "@apollo/client";
import { cleanAndTranformBlocks } from "@/utils/cleanAndTranformBlocks";
import { BlockRenderer } from "@/components/BlockRenderer";

async function page({ params }) {
  const { slug: parts } = await params;
  let uri = "/";
  uri += parts.join("/");
  uri += "/";
  let { data } = await client.query({
    query: gql`
      query getByURL($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            blocks(postTemplate: false)
            title
          }
        }
      }
    `,
    variables: {
      uri: uri,
    },
  });

  return (
    <div>
      <BlockRenderer blocks={cleanAndTranformBlocks(data.nodeByUri.blocks)} />
    </div>
  );
  return <div>{JSON.stringify(data.nodeByUri.blocks)}</div>;
}

export async function generateStaticParams() {
  let { data } = await client.query({
    query: gql`
      query AllPagesQuery {
        pages {
          nodes {
            uri
          }
        }
      }
    `,
  });

  let result = data.pages.nodes
    .filter((page) => page.uri !== "/")
    .map((url) => ({
      slug: url.uri.split("/").filter((segment) => segment !== ""),
    }));
  return result;
}
export const dynamicParams = true;
export const revalidate = 1;
export default page;

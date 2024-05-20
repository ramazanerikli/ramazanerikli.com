
"use client";
import React from "react";
import { client } from "@/sanity/lib/client"
import {PortableText} from '@portabletext/react'
const BlockContent = require("@sanity/block-content-to-react");
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightBright } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Moment from 'react-moment';

type Props = {
  params: { post: string }
}

export async function getPost(slug: string): Promise<any> {
  return client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      tags,
      body
    }
  `,
  { slug }  
  )
} 


export default async function Post({ params }: any) {
  const slug = params.slug;

  const post = await getPost(slug)
  



  return (
    <div>
      <h1 className="text-3xl md:text-4xl">
        {post.title}
      </h1>
      <dt className="text-gray-400"><Moment format={'MMMM DD YYYY'} date={post.publishedAt} /></dt>
      <div className="blog-content mt-6">
      <BlockContent
            className=""
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            blocks={post.body}
            serializers={{
              types: {
                code: (props: any) => (
                  <div className="my-2">
    <SyntaxHighlighter
      showLineNumbers={true}
      showInlineLineNumbers={true}
      language={"js"}
      style={tomorrowNightBright}
      customStyle={{
        padding: '1em',
        marginBottom: '2em',
      }}
    >
      {props.node.code}
    </SyntaxHighlighter>
                  </div>
                ),
              },
            }}
          />
      </div>
    </div>
  )
}
import { Post } from "../types";
import { Work } from "../types";

import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";

import { sanityClient } from "../sanity";

interface Props {
  posts: [Post];
  works: [Work];
}

export default function Home({ posts, works }: Props) {
  const latestProjects = works.slice(-3);



  return (
    <div className="mx-auto">
      <Layout>
        <div>
          <h1 className="text-3xl md:text-4xl mb-6">
            <span className="mr-3" role="img" aria-label="Waving hand">
              👋🏼
            </span>
            Hey, I'm Ramazan
          </h1>
          <p>
            A web developer with 6+ years of front-end development experience
            and passionate about implementing unique designs into accessible and
            fast web experiences. Currently focused on React, TypeScript.
          </p>

          <div className="pt-12">
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-2xl font-bold">Latest Projects</h2>

              <Link
                href="/portfolio"
                className="flex flex-row gap-1 items-center hover:bg-gray-100 transition-all rounded-md px-3 py-2"
              >
                View all
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>

            <div className="featured-content mt-4 md:grid grid-cols-2 gap-4">
              {latestProjects.map((work) => (
                <Link
                  key={work._id}
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ProjectCard work={work} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `
  *[_type == "work"] {
    _id,
    title,
    description,
    color,
    tags,
    link
  }`;

  const works = await sanityClient.fetch(query);

  return {
    props: {
      works,
    },
  };
};

import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import { sanityClient } from "../sanity";

import Link from "next/link";

import { Work } from "../types";


interface Props {
  works: [Work];
}

export default function Portfolio({ works }: Props) {
  return (
    <Layout>
      <div className="w-full">
        <h1 className="text-3xl md:text-4xl mb-6">Portfolio</h1>
        <div className="pt-4">
          <div className="flex gap-6 flex-col">
            {works.map((work) => (
              <Link
                href={work.link}
                key={work._id}
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

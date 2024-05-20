import { client } from "@/sanity/lib/client"
import imageUrlBuilder from '@sanity/image-url'
import Link from "next/link"
import PostCard from "./components/post-card"

const builder = imageUrlBuilder(client)

function urlFor(source: string) {
  return builder.image(source)
}

async function getPosts() {
  const query = `
    *[_type == "post"] | order(publishedAt desc) [0..1] {
      title,
      slug,
      publishedAt,
      excerpt,
      tags,
      body
    }
  `;
  const data = await client.fetch(query);
  return data;
}

async function getProjects() {
  const query = `
    *[_type == "project"] {
      name,
      date,
      description,
      "image": image.asset->url,
      link
    }
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const posts = await getPosts();
  const projects = await getProjects();
  return (
    <div className="w-full">

<div className="mt-[6vh] sm:mt-xl">

          <p className="inter-light hero-base-text">
            I build web applications that your users love. <br></br>
            On time and on budget.
          </p>
          </div>
          <div className="flex flex-col lg:flex-row w-full mb-[6vh] pt-6 lg:pt-12">
            <div className="lg:w-1/6">
              <div className="h-full flex items-center justify-start">
                <Link
                  href="/contact"
                 className="
                 inter-medium hover:-translate-y-2 transition-all duration-500 
                 text-center transition-all duration-500  
                 text-white shadow-2xl shadow-blue-300 bg-blue-700 hover:bg-blue-800 
                 focus:ring-4 focus:ring-blue-300 rounded-lg text-md px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="lg:w-5/6">
              <div className="flex flex-col items-start gap-1 md:flex-row md:gap-16">
                <div className="flex flex-row-reverse items-baseline md:flex-col">
                  <dt className="inter-medium">6 years</dt>
                  <dd className="w-32 text-sm text-text-2 md:w-auto">
                    Experience
                  </dd>
                </div>
                <div className="flex flex-row-reverse items-baseline md:flex-col">
                  <dt className="inter-medium">React & Node.js</dt>
                  <dd className="w-32 text-sm text-text-2 md:w-auto">
                    Core Tech Stack
                  </dd>
                </div>
                <div className="flex flex-row-reverse items-baseline md:flex-col">
                  <dt className="inter-medium">Turkey</dt>
                  <dd className="w-32 text-sm text-text-2 md:w-auto">
                    Location
                  </dd>
                </div>
                <div className="flex flex-row-reverse items-baseline md:flex-col">
                  <dt className="inter-medium">English & Turkish</dt>
                  <dd className="w-32 text-sm text-text-2 md:w-auto">
                    Languages
                  </dd>
                </div>
              </div>
            </div>
          </div>


          <div className="pt-12">
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-2xl">Recent Projects</h2>

              <Link
                href="/projects"
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
              {projects.map((project: any, index: number) => (
                <Link
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
    <div
      className={`featured-project lg:mb-0 mb-2 border border-gray-100 text-gray-700 hover:text-black rounded-md px-3 py-3 bg-white hover:-translate-y-2 transition-all duration-500 cursor-pointer transition-all`}
    >
      <div className="flex flex-col gap-1 items-start">
      <img src={urlFor(project.image).url()} />  
        <div className="flex items-center gap-2">
        <h3 className="inter-bold">{project.name}</h3>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 12 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"
          ></path>
        </svg>
        </div>
      </div>
      <p>{project.description}</p>
    </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-12">
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-2xl">Recent Posts</h2>

              <Link
                href="/blog"
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
            {posts.map((post: any, index: number) => (
            <PostCard post={post} key={index} />
          ))}
            </div>
          </div>
    </div>
  );
}

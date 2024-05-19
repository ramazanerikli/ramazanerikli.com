import { client } from "@/sanity/lib/client"
import imageUrlBuilder from '@sanity/image-url'
import Link from "next/link"

const builder = imageUrlBuilder(client)

function urlFor(source: string) {
  return builder.image(source)
}

async function getPosts() {
  const query = `
    *[_type == "post"] {
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
                 inter-medium text-center transition-all duration-500  text-white shadow-2xl shadow-blue-300 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-md px-5 py-2.5 mr-2 mb-2 focus:outline-none"
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
        <h3>{project.name}</h3>
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
              <h2 className="text-2xl">
                Services
              </h2>
            </div>
            <div className="mt-12 grid w-full gap-12 sm:mt-6 md:grid-cols-2 md:gap-16">
              <div className="flex items-start gap-8">
                <div>
                  <svg
                    width={66}
                    height={66}
                    viewBox="0 0 66 66"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="5.5"
                      width={65}
                      height={55}
                      rx="15.5"
                      stroke="#787878"
                    />
                    <path
                      fill="#787878"
                      d="M18.2045 38.0909C17.9242 38.0909 17.6837 37.9905 17.483 37.7898C17.2822 37.589 17.1818 37.3485 17.1818 37.0682C17.1818 36.7879 17.2822 36.5473 17.483 36.3466C17.6837 36.1458 17.9242 36.0455 18.2045 36.0455C18.4848 36.0455 18.7254 36.1458 18.9261 36.3466C19.1269 36.5473 19.2273 36.7879 19.2273 37.0682C19.2273 37.2538 19.1799 37.4242 19.0852 37.5795C18.9943 37.7348 18.8712 37.8598 18.7159 37.9545C18.5644 38.0455 18.3939 38.0909 18.2045 38.0909ZM24.2017 38.2045C23.6487 38.2045 23.1468 38.1004 22.696 37.892C22.2453 37.6799 21.8873 37.375 21.6222 36.9773C21.357 36.5758 21.2244 36.0909 21.2244 35.5227C21.2244 35.0227 21.3229 34.6174 21.5199 34.3068C21.7169 33.9924 21.9801 33.7462 22.3097 33.5682C22.6392 33.3902 23.0028 33.2576 23.4006 33.1705C23.8021 33.0795 24.2055 33.0076 24.6108 32.9545C25.1411 32.8864 25.571 32.8352 25.9006 32.8011C26.2339 32.7633 26.4763 32.7008 26.6278 32.6136C26.7831 32.5265 26.8608 32.375 26.8608 32.1591V32.1136C26.8608 31.553 26.7074 31.1174 26.4006 30.8068C26.0975 30.4962 25.6373 30.3409 25.0199 30.3409C24.3797 30.3409 23.8778 30.4811 23.5142 30.7614C23.1506 31.0417 22.8949 31.3409 22.7472 31.6591L21.4744 31.2045C21.7017 30.6742 22.0047 30.2614 22.3835 29.9659C22.7661 29.6667 23.1828 29.4583 23.6335 29.3409C24.0881 29.2197 24.535 29.1591 24.9744 29.1591C25.2547 29.1591 25.5767 29.1932 25.9403 29.2614C26.3078 29.3258 26.6619 29.4602 27.0028 29.6648C27.3475 29.8693 27.6335 30.178 27.8608 30.5909C28.0881 31.0038 28.2017 31.5568 28.2017 32.25V38H26.8608V36.8182H26.7926C26.7017 37.0076 26.5502 37.2102 26.3381 37.4261C26.1259 37.642 25.8438 37.8258 25.4915 37.9773C25.1392 38.1288 24.7093 38.2045 24.2017 38.2045ZM24.4062 37C24.9366 37 25.3835 36.8958 25.7472 36.6875C26.1146 36.4792 26.3911 36.2102 26.5767 35.8807C26.7661 35.5511 26.8608 35.2045 26.8608 34.8409V33.6136C26.804 33.6818 26.679 33.7443 26.4858 33.8011C26.2964 33.8542 26.0767 33.9015 25.8267 33.9432C25.5805 33.9811 25.34 34.0152 25.1051 34.0455C24.8741 34.072 24.6866 34.0947 24.5426 34.1136C24.1941 34.1591 23.8684 34.233 23.5653 34.3352C23.2661 34.4337 23.0237 34.5833 22.8381 34.7841C22.6563 34.9811 22.5653 35.25 22.5653 35.5909C22.5653 36.0568 22.7377 36.4091 23.0824 36.6477C23.4309 36.8826 23.8722 37 24.4062 37ZM30.6491 41.2727V29.2727H31.9446V30.6591H32.1037C32.2022 30.5076 32.3385 30.3144 32.5128 30.0795C32.6908 29.8409 32.9446 29.6288 33.2741 29.4432C33.6075 29.2538 34.0582 29.1591 34.6264 29.1591C35.3613 29.1591 36.009 29.3428 36.5696 29.7102C37.1302 30.0777 37.5677 30.5985 37.8821 31.2727C38.1965 31.947 38.3537 32.7424 38.3537 33.6591C38.3537 34.5833 38.1965 35.3845 37.8821 36.0625C37.5677 36.7367 37.1321 37.2595 36.5753 37.6307C36.0185 37.9981 35.3764 38.1818 34.6491 38.1818C34.0885 38.1818 33.6397 38.089 33.3026 37.9034C32.9654 37.714 32.706 37.5 32.5241 37.2614C32.3423 37.0189 32.2022 36.8182 32.1037 36.6591H31.9901V41.2727H30.6491ZM31.9673 33.6364C31.9673 34.2955 32.0639 34.8769 32.2571 35.3807C32.4503 35.8807 32.7325 36.2727 33.1037 36.5568C33.4749 36.8371 33.9295 36.9773 34.4673 36.9773C35.0279 36.9773 35.4957 36.8295 35.8707 36.5341C36.2495 36.2348 36.5336 35.8333 36.723 35.3295C36.9162 34.822 37.0128 34.2576 37.0128 33.6364C37.0128 33.0227 36.9181 32.4697 36.7287 31.9773C36.5431 31.4811 36.2609 31.089 35.8821 30.8011C35.5071 30.5095 35.0355 30.3636 34.4673 30.3636C33.9219 30.3636 33.4635 30.5019 33.0923 30.7784C32.7211 31.0511 32.4408 31.4337 32.2514 31.9261C32.062 32.4148 31.9673 32.9848 31.9673 33.6364ZM40.3991 41.2727V29.2727H41.6946V30.6591H41.8537C41.9522 30.5076 42.0885 30.3144 42.2628 30.0795C42.4408 29.8409 42.6946 29.6288 43.0241 29.4432C43.3575 29.2538 43.8082 29.1591 44.3764 29.1591C45.1113 29.1591 45.759 29.3428 46.3196 29.7102C46.8802 30.0777 47.3177 30.5985 47.6321 31.2727C47.9465 31.947 48.1037 32.7424 48.1037 33.6591C48.1037 34.5833 47.9465 35.3845 47.6321 36.0625C47.3177 36.7367 46.8821 37.2595 46.3253 37.6307C45.7685 37.9981 45.1264 38.1818 44.3991 38.1818C43.8385 38.1818 43.3897 38.089 43.0526 37.9034C42.7154 37.714 42.456 37.5 42.2741 37.2614C42.0923 37.0189 41.9522 36.8182 41.8537 36.6591H41.7401V41.2727H40.3991ZM41.7173 33.6364C41.7173 34.2955 41.8139 34.8769 42.0071 35.3807C42.2003 35.8807 42.4825 36.2727 42.8537 36.5568C43.2249 36.8371 43.6795 36.9773 44.2173 36.9773C44.7779 36.9773 45.2457 36.8295 45.6207 36.5341C45.9995 36.2348 46.2836 35.8333 46.473 35.3295C46.6662 34.822 46.7628 34.2576 46.7628 33.6364C46.7628 33.0227 46.6681 32.4697 46.4787 31.9773C46.2931 31.4811 46.0109 31.089 45.6321 30.8011C45.2571 30.5095 44.7855 30.3636 44.2173 30.3636C43.6719 30.3636 43.2135 30.5019 42.8423 30.7784C42.4711 31.0511 42.1908 31.4337 42.0014 31.9261C41.812 32.4148 41.7173 32.9848 41.7173 33.6364Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="sm:text-xl font-medium">
                    Web Apps &amp; SaaS
                  </h3>
                  <p className="mt-1 text-text-2">
                    Fast, scalable &amp; secure web applications with clean
                    architecture.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-8">
                <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={66}
                  height={66}
                  viewBox="0 0 66 66"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    y="7.5"
                    width={65}
                    height={51}
                    rx="3.5"
                    stroke="#787878"
                  />
                  <rect
                    x={8}
                    y={27}
                    width={20}
                    height={18}
                    rx={2}
                    stroke="#787878"
                    strokeWidth="1.5"
                  />
                  <line
                    x1={36}
                    y1="28.25"
                    x2={58}
                    y2="28.25"
                    stroke="#787878"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="4.37114e-08"
                    y1="19.5"
                    x2={66}
                    y2="19.5"
                    stroke="#787878"
                  />
                  <line
                    x1={36}
                    y1="33.25"
                    x2={55}
                    y2="33.25"
                    stroke="#787878"
                    strokeWidth="1.5"
                  />
                  <line
                    x1={36}
                    y1="38.25"
                    x2={47}
                    y2="38.25"
                    stroke="#787878"
                    strokeWidth="1.5"
                  />
                  <line
                    x1={36}
                    y1="43.25"
                    x2={55}
                    y2="43.25"
                    stroke="#787878"
                    strokeWidth="1.5"
                  />
                  <circle cx="5.5" cy="13.5" r="1.5" fill="#787878" />
                  <circle cx="11.5" cy="13.5" r="1.5" fill="#787878" />
                  <circle cx="17.5" cy="13.5" r="1.5" fill="#787878" />
                </svg>
                </div>

                <div>
                  <h3 className="sm:text-xl font-medium">
                    Website Development
                  </h3>
                  <p className="mt-1 text-text-2">
                    Impressively fast websites with great SEO that highlight your content.
                  </p>
                </div>
              </div>
            </div>
          </div>



      <div className="hidden">
        <h1>Projects</h1>
          {projects.map((project: any, index: number) => (
            <div key={index}>
              {project.name}
                <img src={urlFor(project.image).url()} />  
            </div>
          ))}
      </div>
    </div>
  );
}

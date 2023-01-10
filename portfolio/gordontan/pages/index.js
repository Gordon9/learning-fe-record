import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import profilePic from "../public/images/self.JPG";

export default function Home() {
  return (
    <>
      <Head>
        <title>GORDONTAN</title>
        <meta name="description" content="GORDONTAN" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white items-center">
            <h1 className="font-burtons text-xl">gordontan</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => console.log("BsFillMoonStarsFill clicked")}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li className="px-4">
                <Image
                  className="cursor-pointer rounded-full"
                  src={profilePic}
                  alt="self"
                  width={34}
                  height={34}
                  onClick={() => console.log("Image clicked")}
                />
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </>
  );
}

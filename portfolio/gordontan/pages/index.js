import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import profilePic from "../public/images/self.JPG";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>GORDONTAN</title>
        <meta name="description" content="GORDONTAN" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 min-h-screen">
        <section>
          <nav className="py-10 mb-12 flex justify-between dark:text-white items-center">
            <h1 className="font-burtons text-xl">gordontan</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li className="pl-8">
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
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Gordon伤心欲绝给诺兰寄刀片
              <br />
              Gordon不悔爱root顺手飞刀诺兰
              <br />
              Gordon凝望Netflix
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              sometime less is more
            </p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy;gordontan 2023</p>
      </footer>
    </div>
  );
}

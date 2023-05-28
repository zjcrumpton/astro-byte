import { Share_Tech_Mono } from "next/font/google";
import { HiCode } from "react-icons/hi";
import { GiGreekTemple } from "react-icons/gi";

const shareTech = Share_Tech_Mono({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-between p-24">
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1
              className={`${shareTech.className} font-semibold text-6xl md:text-8xl lg:text-9xl text-glow-blue`}
            >
              Astronomical
            </h1>
            <h1
              className={`${shareTech.className} font-semibold text-6xl md:text-8xl lg:text-9xl`}
            >
              Information
            </h1>
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <HiCode className="text-gray-400" />
          <h2 className="text-lg md:text-xl lg:text-2xl text-gray-400">
            Coding & Philosophy
          </h2>
          <GiGreekTemple className="text-gray-400" />
        </div>

        <p className="my-5 text-center">
          Welcome to AstroByte - my software portfolio and digital journal. Here
          you'll find a rich collection of coding projects, exploratory
          articles, and insightful tutorials that reflect my journey through the
          ever-evolving world of software development. Alongside tech, I'll be
          delving into philosophical concepts, esoterica, psychology and
          fitness.
        </p>
      </main>
    </>
  );
}

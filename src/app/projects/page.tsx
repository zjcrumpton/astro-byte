import Link from "next/link";
import { FC } from "react";
import tokenBoardPng from "../../../public/tokenBoard.png";
import vinofyPng from "../../../public/vinofy.png";
import strikingWizardPng from "../../../public/strikingWizard.png";

interface ProjectProps {
  imgSrc: string;
  name: string;
  to: string;
}

const Project: FC<ProjectProps> = ({ imgSrc, name, to }) => {
  return (
    <Link href={to}>
      <div className="flex flex-col items-center hover:text-glow-blue">
        <img className="w-72 h-56" src={imgSrc} />
        <h2 className="text-3xl">{name}</h2>
      </div>
    </Link>
  );
};

const projects: ProjectProps[] = [
  {
    name: "Vinofy",
    imgSrc: vinofyPng.src,
    to: "https://vinofyapp.com/",
  },
  {
    name: "Striking Wizard",
    imgSrc: strikingWizardPng.src,
    to: "https://strikingwizard.com/",
  },
  {
    name: "Token Board",
    imgSrc: tokenBoardPng.src,
    to: "https://www.thetokenboard.com/",
  },
];

export default function Projects() {
  return (
    <>
      <main className="flex flex-col items-center justify-center p-24">
        <h1 className="text-6xl mb-10">Projects</h1>
        <div className="flex flex-wrap gap-10 justify-center items-center">
          {projects.map((project) => (
            <Project key={project.name} {...project} />
          ))}
        </div>
      </main>
    </>
  );
}

import { Section } from "../components/Section";
import GithubIcon from "../components/images/github.png";
import LinkedinIcon from "../components/images/linkedin.png";
import ProfilePicture from "../components/images/IMG_9089.jpg";
import { Polaroid } from "../components/Polaroid";
import { textContent } from "~/data";

export function HeroSection() {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row lg:items-center gap-20 lg:gap-6 w-full max-w-[1800px] px-6 lg:px-20 lg:mt-0">
        {/* Left wrapper */}
        <div className="min-h-screen flex flex-col justify-center max-w-120 lg:max-w-270 lg:w-1/2 h-full gap-2 lg:gap-4 px-2 lg:px-0">
          <div className="flex justify-start lg:justify-center">
            <h1 className="relative z-1 barlow text-4xl md:text-6xl lg:text-8xl text-mauve-800">
              {textContent.name}
            </h1>
          </div>
          <div className="flex flex-col items-start justify-center gap-2">
            <p className="text-lg lg:text-3xl text-mist-700">
              Hi! Welcome to my portfolio, I'm a{" "}
              <b className="text-fuchsia-500">fullstack software engineer</b>{" "}
              based in Stockholm.
            </p>
          </div>
          <div className="flex gap-8 w-full items-center mt-4">
            <a
              href="mailto:sofiaq1@gmail.com"
              className="bg-green-200 py-3 px-4 drop-shadow-md"
            >
              Contact me
            </a>
            <div className="size-10 rounded-full">
              <a href="https://github.com/1Tolv2" target="_blank">
                <img src={GithubIcon} alt="GitHub" />
              </a>
            </div>
            <div className="size-10 rounded-full">
              <a
                href="https://www.linkedin.com/in/sofia-johnsson-s-856308188/"
                target="_blank"
              >
                <img src={LinkedinIcon} alt="Linkedin" />
              </a>
            </div>
          </div>
        </div>
        {/* Right wrapper */}
        <div className="hidden lg:flex w-1/2 justify-center items-center">
          <Polaroid src={ProfilePicture} tapeStyle="top" />
        </div>
      </div>
    </Section>
  );
}

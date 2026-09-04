import { Section } from "../components/Section";
import GithubIcon from "../components/images/github.png";
import LinkedinIcon from "../components/images/linkedin.png";
import ProfilePicture from "../components/images/IMG_9089.jpg";
import { Polaroid } from "../components/Polaroid";
import { textContent } from "~/data";

export function HeroSection() {
  return (
    <Section>
      <div className="flex flex-row items-center gap-6 w-full max-w-[1800px] px-20">
        <div className="flex flex-col w-1/2 h-full gap-4">
          <div>
            <div className="flex justify-center">
              <h1 className="relative z-1 limelight-regular text-8xl text-mauve-800">
                {textContent.name}
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-2 px-10">
            <p className="text-3xl text-mist-700">
              Hi! Welcome to my portfolio, I'm a{" "}
              <b className="text-cyan-500">fullstack software engineer</b> based
              in Stockholm.
            </p>
          </div>
        </div>
        <div className="flex w-1/2 justify-center items-center">
          <Polaroid src={ProfilePicture} tapeStyle="top">
            <div className="flex gap-8 w-full justify-center items-center">
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
          </Polaroid>
        </div>
      </div>
    </Section>
  );
}

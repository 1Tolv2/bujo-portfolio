import { AboutSection } from "./AboutSection";
import { HeroSection } from "./HeroSection";
import { ProjectSection } from "./ProjectSection";
import { Text } from "../components/basics";

const headerOptions = ["about", "projects"];

const HeaderButton = ({ text, index }: { text: string; index: number }) => {
  return (
    <div className="pt-4">
      <a href={`#${text}`}>
        <div className="flex flex-row items-center lg:gap-2">
          {index !== 0 && (
            <div className="size-2 rounded-full bg-cyan-500 mx-4 lg:mx-10 mt-1" />
          )}
          <p className="text-2xl font-bold">{text}</p>
        </div>
      </a>
    </div>
  );
};

export function HomePage() {
  return (
    <body className="lg:w-full flex justify-between bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-[white] lg:mt-0 mt-6">
      <main className="relative w-full min-h-screen">
        <div className="fixed bg-white md:bg-transparent top-0 left-0 flex flex-row w-screen justify-center px-10 pb-4 z-10">
          {headerOptions.map((option, index) => (
            <HeaderButton
              key={`header-${option}`}
              text={option}
              index={index}
            />
          ))}
        </div>
        <HeroSection />
        <div id="about" className="mb-24" />
        <AboutSection />
        <div id="projects" className="pt-15" />
        <ProjectSection />
        <footer className="w-full flex-col flex items-center p-4">
          <Text textColor="mist-300" textSize="md">
            Designed in Figma and built with React and Tailwind CSS and deployed
            through vercel.
          </Text>
          <Text textColor="mist-300 underline" textSize="md">
            <a
              href="https://www.flaticon.com/free-icons/github"
              title="github icons"
            >
              Github & LinkedIn icons created by Muhamad Ulum - Flaticon
            </a>
          </Text>
        </footer>
      </main>
    </body>
  );
}

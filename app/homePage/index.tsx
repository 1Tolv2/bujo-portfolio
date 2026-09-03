import { AboutSection } from "./AboutSection";
import { HeroSection } from "./HeroSection";
import { ProjectSection } from "./ProjectSection";

const headerOptions = ["about", "projects", "contact"];

const HeaderButton = ({ text, index }: { text: string; index: number }) => {
  return (
    <div className="pt-4">
      <div className="flex flex-row items-center gap-2">
        {index !== 0 && (
          <div className="size-2 rounded-full bg-cyan-500 mx-10 mt-1" />
        )}
        <p className="text-2xl font-bold">{text}</p>
      </div>
    </div>
  );
};

export function HomePage() {
  return (
    <body className="md:w-full flex justify-between bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-[white] md:mt-0 mt-6">
      <main className="relative w-full min-h-screen">
        <div className="fixed top-0 left-0 flex flex-row px-10 z-10">
          {headerOptions.map((option, index) => (
            <HeaderButton
              key={`header-${option}`}
              text={option}
              index={index}
            />
          ))}
        </div>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </main>
    </body>
  );
}

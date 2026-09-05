import TrackPicture from "../components/images/track.jpg";
import ClimbPicture from "../components/images/climb.jpg";
import { Polaroid } from "../components/Polaroid";
import { SectionHeader } from "../components/SectionHeader";
import { textContent } from "../data";

const content = textContent.aboutSection;

export function AboutSection() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-5 mb-50">
      <div className="flex flex-col lg:flex-row items-center gap-6 w-full max-w-[1800px] px-6 lg:px-20">
        {/* pics */}
        <div className="hidden relative w-full lg:w-1/2 lg:flex justify-center items-center">
          <div className="relative w-fit z-1 rotate-5 hover:translate-x-45 transition-all duration-400">
            <Polaroid src={ClimbPicture} />
          </div>
          <div className="absolute top-5 left-0 w-fit -rotate-2">
            <Polaroid
              src={TrackPicture}
              mode="landscape"
              tapeStyle="diagonal"
            />
          </div>
        </div>
        {/* content */}
        <div className="relative w-full lg:w-1/2">
          {/* title */}
          <SectionHeader number="01">{content.aboutTitle}</SectionHeader>
          {/* body */}
          <div className="flex flex-col gap-4 text-xl lg:mt-4">
            {content.aboutText.map((paragraph) => (
              <p>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

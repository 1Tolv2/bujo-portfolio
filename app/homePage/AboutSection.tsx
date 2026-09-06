import TrackPicture from "../components/images/track.jpg";
import ClimbPicture from "../components/images/climb.jpg";
import ProfilePicture from "../components/images/IMG_9089.jpg";
import { Polaroid } from "../components/Polaroid";
import { SectionHeader } from "../components/SectionHeader";
import { textContent } from "../data";
import { Text } from "../components/basics";

const content = textContent.aboutSection;

export function AboutSection() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-5 lg:mb-50">
      <div className="flex flex-col lg:flex-row items-center gap-6 w-full max-w-[1800px] px-6 sm:px-20">
        {/* pics */}
        <div className="hidden relative w-full lg:min-w-xl lg:w-1/2 xl:flex justify-center items-center">
          <div className="relative w-fit z-1 rotate-5 hover:translate-x-65 transition-all duration-400">
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
        <div className="relative flex flex-col gap-8 w-full xl:w-1/2">
          {/* title */}
          <SectionHeader number="01">{content.aboutTitle}</SectionHeader>
          {/* body */}
          <div className="xl:hidden relative w-full xl:w-1/2 flex justify-center lg:justify-end items-center px-10">
            <div className="relative w-fit z-1 sm:rotate-5">
              <div className="lg:hidden">
                <Polaroid src={ProfilePicture} tapeStyle="top" />
              </div>
              <div className="hidden lg:flex">
                <Polaroid src={ClimbPicture} />
              </div>
            </div>
            <div className="hidden sm:flex absolute top-10 left-0 w-fit -rotate-2">
              <Polaroid
                src={TrackPicture}
                mode="landscape"
                tapeStyle="diagonal"
              />
            </div>
          </div>

          {/* body text */}
          <div className="flex flex-col gap-4 lg:mt-4">
            {content.aboutText.map((paragraph, index) => (
              <Text key={"paragraph-" + index}>{paragraph}</Text>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

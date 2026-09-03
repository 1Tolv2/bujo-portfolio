import TrackPicture from "../components/images/track.jpg";
import ClimbPicture from "../components/images/climb.jpg";
import { Polaroid } from "../components/Polaroid";
import { SectionHeader } from "../components/SectionHeader";

export function AboutSection() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-5 mb-50">
      <div className="flex flex-row items-center gap-6 w-full max-w-[1800px] px-20">
        <div className="relative w-1/2 flex justify-center items-center">
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
        <div className="relative w-1/2">
          <SectionHeader number="01">about me</SectionHeader>
          <div className="flex flex-col gap-4 text-xl">
            <p className="mt-6">
              I'm a user experience obsessed full stack engineer, with a lot of
              love for writing clean dry-code. I thrive when I get to take on
              the full scope of a feature and follow projects from discovery and
              design to implementation.
            </p>
            <p>
              At the moment I work as a Fullstack Software Engineer at Klarna
              where my focus is tokenized payments team, dealing both with the
              complex challenges of the purchase flow and the post purchase user
              experience. In my team my main responsibility is our user facing
              screens which include maintenance and keeping up with company wide
              initiatives. My backend work includes leading cross-team projects
              to enhance our feature.
            </p>
            <p>
              In my free time I enjoy going on adventures with my motorcycles,
              whether it's track day or taking the nearest gravel roads to no
              where and camping out for the night. When it's raining I do prefer
              to go to my local climbing gym chilling at home and paint while
              watching a good based-on-a-true-story-movie.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

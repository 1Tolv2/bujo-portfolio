import { SectionHeader } from "~/components/SectionHeader";
import DirectionIcon from "../components/images/directions.svg";
import GhostIcon from "../components/images/ghost-svgrepo-com.svg";
import { projectData, textContent } from "../data";

const content = textContent.projectSection;

export function ProjectSection() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-5 mb-50">
      <div className="flex flex-col gap-10 w-full max-w-[1800px] px-20">
        <SectionHeader number="02" color="bg-yellow-200">
          {content.projectTitle}
        </SectionHeader>
        {/* Project card box */}
        <div className="flex flex-wrap  gap-10">
          {projectData.data.map((item) => (
            <div className="relative flex flex-col justify-between items-center max-w-100 border-2 border-mauve-800 p-5 pt-8 gap-6 grow">
              <div
                className={`absolute -top-5 w-fit h-fit px-8 py-1 bg-mauve-900`}
              >
                <p className="text-xl text-white">{item.title}</p>
              </div>
              <div className="w-full text-lg">
                <p>{item.body}</p>
              </div>

              <div className="flex flex-row justify-between w-full gap-4">
                {/* Tags box */}
                <div className="flex flex-row flex-wrap w-full h-fit gap-2">
                  {item.tags.map((tag) => (
                    <div
                      className={`px-2 rounded-sm ${item.color || "bg-amber-200"}`}
                    >
                      <p>{tag}</p>
                    </div>
                  ))}
                </div>
                {/* <div className="flex w-fit bg-mist-200 p-1">
                  <img src={item.icon} className="w-20 h-fit" />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

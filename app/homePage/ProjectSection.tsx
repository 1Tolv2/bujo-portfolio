import { SectionHeader } from "~/components/SectionHeader";
import { projectData, textContent } from "../data";
import { Text } from "../components/basics";

const content = textContent.projectSection;

export function ProjectSection() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-5 mb-50">
      <div className="flex flex-col gap-10 w-full max-w-[1800px] px-6 sm:px-20">
        <SectionHeader number="02" color="bg-yellow-200">
          {content.projectTitle}
        </SectionHeader>
        {/* Project card box */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-10">
          {projectData.data.map((item) => (
            <div className="relative flex flex-col justify-between items-center max-w-100 border-2 border-mauve-800 p-5 pt-8 gap-6 grow">
              <div
                className={`absolute -top-5 w-fit h-fit px-8 py-2 bg-mauve-900`}
              >
                {/* <p className="text-xl text-white">{item.title}</p> */}
                <Text textColor="white">{item.title}</Text>
              </div>
              <div className="w-full">
                <Text>{item.body}</Text>
              </div>

              <div className="flex flex-row justify-between w-full gap-4">
                {/* Tags box */}
                <div className="flex flex-row flex-wrap w-full h-fit gap-2">
                  {item.tags.map((tag) => (
                    <div
                      className={`px-2 pb-0.5 rounded-sm ${item.color || "bg-amber-200"}`}
                    >
                      <Text>{tag}</Text>
                    </div>
                  ))}
                </div>
                <a href={item.link} target="_blank">
                  <img src={item.icon} className="w-10 h-fit" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

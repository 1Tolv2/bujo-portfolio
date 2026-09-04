import { SectionHeader } from "~/components/SectionHeader";
import DirectionIcon from "../components/images/directions.svg";
import GhostIcon from "../components/images/ghost-svgrepo-com.svg";

const projectList = [
  {
    color: "bg-blue-200",
    title: "MC-Parking PWA",
    body: "A progressive web app, PWA, that helps motorcyclists find parking in Stockholm City. Written in TypeScript with Next.js utilising Googles Maps JavaScript API and Stockholms Stads LvWS 4 API as well as their Parking API.",
    icon: GhostIcon,
    tags: ["TypeScript", "Next.js", "PWA"],
  },
  {
    color: "bg-mist-200",
    title: "Photography Portfolio",
    body: "A progressive web app, PWA, that helps motorcyclists find parking in Stockholm City. Written in TypeScript with Next.js utilising Googles Maps JavaScript API and Stockholms Stads LvWS 4 API as well as their Parking API.",
    icon: GhostIcon,
    tags: ["JavaScript", "Next.js", "PWA", "Tailwind"],
  },
  {
    color: "bg-purple-200",
    title: "Server Chat Web App",
    body: "A PERN-stack web application with channels and servers, running sockets for updating of the chat feeds. The application can be run using docker compose or locally. Contains unit tests and github workflow.",
    icon: GhostIcon,
    tags: ["React", "Express.js", "PostgreSQL"],
  },
  {
    color: "bg-orange-200",
    title: "Vehicle Maintenance App",
    body: "A React Native + Expo application for registering maintenance on you car och motorcycle. The backend is an Express REST API with a MongoDB database",
    icon: DirectionIcon,
    tags: ["React Native"],
  },
];

export function ProjectSection() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-5 mb-50">
      <div className="flex flex-col gap-10 w-full max-w-[1800px] px-20">
        <SectionHeader number="02" color="bg-yellow-200">
          projects
        </SectionHeader>
        {/* Project card box */}
        <div className="flex flex-wrap  gap-10">
          {projectList.map((item) => (
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

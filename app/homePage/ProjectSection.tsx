import { SectionHeader } from "~/components/SectionHeader";
import DirectionIcon from "../components/images/directions.svg";
import GhostIcon from "../components/images/ghost-svgrepo-com.svg";

const projectList = [
  {
    color: "bg-blue-200",
    title: "MC-Parking PWA",
    body: "A progressive web app, PWA, that helps motorcyclists find parking in Stockholm City. Written in TypeScript with Next.js utilising Googles Maps JavaScript API and Stockholms Stads LvWS 4 API as well as their Parking API.",
    icon: GhostIcon,
  },
  {
    color: "bg-mist-200",
    title: "Photography Portfolio",
    body: "A progressive web app, PWA, that helps motorcyclists find parking in Stockholm City. Written in TypeScript with Next.js utilising Googles Maps JavaScript API and Stockholms Stads LvWS 4 API as well as their Parking API.",
    icon: GhostIcon,
  },
  {
    color: "bg-purple-200",
    title: "Server Chat Web App",
    body: "A PERN-stack web application with channels and servers, running sockets for updating of the chat feeds. The application can be run using docker compose or locally. Contains unit tests and github workflow.",
    icon: GhostIcon,
  },
  {
    color: "bg-orange-200",
    title: "Vehicle Maintenance App",
    body: "A React Native + Expo application for registering maintenance on you car och motorcycle. The backend is an Express REST API with a MongoDB database",
    icon: DirectionIcon,
  },
];

export function ProjectSection() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-5 mb-50">
      <div className="flex flex-col gap-10 w-full max-w-[1800px] px-20">
        <SectionHeader number="02" color="bg-yellow-200">
          projects
        </SectionHeader>
        <div className="flex gap-10">
          {projectList.map((item) => (
            <div className="relative flex flex-col items-center w-100 h-50 border-2 border-mauve-800 p-5 pt-8">
              <div
                className={`absolute -top-5 w-fit h-fit px-8 py-1 ${item.color || "bg-amber-200"}`}
              >
                <p className="text-xl">{item.title}</p>
              </div>
              <div className="w-full text-lg">
                <p>{item.body}</p>
                <div className="absolute -bottom-8 -right-6 h-[160px] w-full max-w-[200px] opacity-100 bg-mist-500">
                  <img src={item.icon} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

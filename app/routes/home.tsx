import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { HomePage } from "../homePage/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sofia Johnsson Portfolio" },
    { name: "description", content: "Welcome to my portfolio!" },
  ];
}

export default function Home() {
  return <HomePage />;
}

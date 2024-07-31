import { ETechnologies } from "./profileData";

export interface IEducationAndExperienceItem {
  category: "experience" | "education";
  title: string;
  position: string;
  entity: string;
  stack: ETechnologies[];
  startDate: Date;
  endDate?: Date;
  description: string[];
}

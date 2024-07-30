export interface IEducationAndExperienceItem {
  category: "experience" | "education";
  title: string;
  position: string;
  entity: string;
  stack: string[];
  startDate: Date;
  endDate?: Date;
  description: string[];
}

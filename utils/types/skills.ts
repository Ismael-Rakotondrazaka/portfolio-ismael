export interface TechSkill {
  type: "icon" | "image";
  iconName?: string;
  imageSrc?: string;
  title: string;
  color?: string;
  bgColor?: string;
  mastered?: boolean;
}

export interface SoftSkill {
  title: string;
  description: string;
}

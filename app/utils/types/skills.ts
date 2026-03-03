export interface SoftSkill {
  description: string;
  title: string;
}

export interface TechSkill {
  bgColor?: string;
  color?: string;
  iconName?: string;
  imageSrc?: string;
  mastered?: boolean;
  title: string;
  type: 'icon' | 'image';
}

export interface Project {
  name: string;
  description?: string | null;
  imgSrc: string;
  imgAlt: string;
  technos?: string[];
  source?: string | null;
  demo?: string | null;
}

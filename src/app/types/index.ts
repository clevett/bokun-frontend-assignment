export type Experience = {
  description: string;
  id: string;
  imageUrl: string;
  rating: number;
  title: string;
};

export type Experiences = Omit<Experience, "description">[];

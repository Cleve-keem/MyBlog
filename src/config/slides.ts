type Slide = {
  image: string;
  title: string;
  subtitle?: string;
  cta?: string;
};

export const slides: Slide[] = [
  {
    image: "https://picsum.photos/1200/600?random=1",
    title: "Welcome to Our Blog",
    subtitle: "Latest articles, tutorials and news — curated for you.",
    cta: "Read Latest",
  },
  {
    image: "https://picsum.photos/1200/600?random=2",
    title: "Design & UX",
    subtitle: "Inspiration and best practices for beautiful interfaces.",
    cta: "Explore Design",
  },
  {
    image: "https://picsum.photos/1200/600?random=3",
    title: "Development Tips",
    subtitle: "Practical guides and performance tricks for devs.",
    cta: "Learn More",
  },
  {
    image: "https://picsum.photos/1200/600?random=4",
    title: "Case Studies",
    subtitle: "Real projects, outcomes and lessons learned.",
    cta: "See Cases",
  },
];

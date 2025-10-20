import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <div className="mt-0 mb-6">
      <div className="container w-full px-6 mx-auto max-w-[576px] section-xlg:min-w-[1248px] md:min-w-[992px] border border-blue-500">
        <Hero />
        <p>All My Posts</p>
      </div>
    </div>
  );
}

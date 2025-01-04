import { projectData } from "../data";

interface ProjectProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}

export default function Project({ sectionRef }: ProjectProps) {
  return (
    <section
      className="flex min-h-screen p-20 flex-col font-higilight bg-bluegray gap-9 snap-start"
      ref={sectionRef}
    >
      <h1 className="section-title">MY PROJECT</h1>
      <div className="flex flex-wrap gap-8">
        {projectData.map((item) => (
          <article className="inline-flex flex-col w-1/4 bg-white p-4 rounded-lg gap-6 relative max-w-90">
            <img src={item.logo} className="w-14" alt={item.title} />
            <h2 className="text-3xl tracking-wide">{item.title}</h2>
            <div className="inline-flex gap-1">
              {item.tags.map((tag) => {
                return (
                  <p className="bg-gray text-xs py-1 px-3 rounded-2xl">{tag}</p>
                );
              })}
            </div>
            <div>
              {item.tools.map((tool) => {
                return (
                  <img
                    src={tool.src}
                    className="float-left mr-2 h-6"
                    alt={tool.alt}
                  />
                );
              })}
            </div>
            <p className="absolute right-5 top-5 py-2 px-3 bg-bluegray text-xs border border-gray">
              {item.type}
            </p>
            <button className="absolute right-5 bottom-5 bg-[url('src/assets/image/ic_more_black.svg')] w-8 h-8 bg-cover cursor-pointer" />
          </article>
        ))}
      </div>
    </section>
  );
}

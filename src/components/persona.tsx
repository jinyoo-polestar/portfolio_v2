import { personaData } from "../data";

export default function Persona() {
  return (
    <aside className="section-layout flex-col justify-start gap-16 snap-start border-gray200 border-b">
      <h2 className="section-title font-higilight">
        저는 일할 때 이런 모습이예요
      </h2>
      <div className="flex flex-wrap w-full">
        {personaData.map((persona) => (
          <article className="inline-flex group relative flex-col p-5 justify-between gap-4 items-start w-1/3 border-t border-gray cursor-default hover:border-black hover:bg-blue200 sm:w-1/2 md:w-1/3">
            <h3 className="text-2xl font-bold break-keep text-gray200 w-3/5 sm:w-full md:w-3/5 group-hover:text-black group-hover:font-higilight">
              {persona.title}
            </h3>
            <img
              src={persona.img}
              alt=""
              className="w-20  group-hover:hidden"
            />
            <p className="font-sans leading-relaxed text-m break-keep w-10/12 hidden group-hover:block">
              {persona.desc}
            </p>
          </article>
        ))}
      </div>
    </aside>
  );
}

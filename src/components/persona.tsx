import { personaData } from "../data";

export default function Persona() {
  return (
    <aside className="section-layout snap-start flex-col justify-start gap-16 border-b border-gray200">
      <h2 className="section-title font-higilight">
        저는 일할 때 이런 모습이예요
      </h2>
      <div className="flex w-full flex-wrap">
        {personaData.map((persona, _key) => (
          <article className="group relative inline-flex w-1/3 cursor-default flex-col items-start justify-between gap-4 border-t border-gray p-5 hover:border-black hover:bg-blue200 sm:w-1/2 md:w-1/3">
            <h3 className="w-3/5 break-keep text-2xl font-bold text-gray200 group-hover:font-higilight group-hover:text-black sm:w-full md:w-3/5">
              {persona.title}
            </h3>
            <img src={persona.img} alt="" className="w-20 group-hover:hidden" />
            <p className="text-m hidden w-10/12 break-keep font-sans leading-relaxed group-hover:block">
              {persona.desc}
            </p>
          </article>
        ))}
      </div>
    </aside>
  );
}

import { personaData } from "../data";

export default function Persona() {
  return (
    <aside className="flex relative flex-col h-fit justify-start font-higilight p-20 gap-16">
      <h2 className="section-title">저는 일할 때 이런 모습이예요</h2>
      <div className="flex overflow-x-hidden gap-8 w-full">
        {personaData.map((persona) => (
          <article
            className="inline-flex flex-col p-6 justify-start rounded-lg gap-4 items-start min-w-[300px]"
            style={{ backgroundColor: `${persona.bgColor}` }}
          >
            <img src={persona.img} alt="" className="h-14" />
            <h3
              className="text-2xl font-bold break-keep"
              style={{
                color: persona.textColor ? `${persona.textColor}` : "#000",
              }}
            >
              {persona.title}
            </h3>
            <p className="font-sans text-m whitespace-break-spaces">
              {persona.desc}
            </p>
          </article>
        ))}
      </div>
    </aside>
  );
}

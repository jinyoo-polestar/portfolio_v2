import nameLogo from "../assets/image/logo_name_white.svg";

interface HomeProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}

export default function Intro({ sectionRef }: HomeProps) {
  return (
    <div
      className="section-layout relative flex-col items-center justify-center gap-10 overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute top-[90%] -z-0 aspect-square w-[500%] animate-wave rounded-[38%] bg-wavebg"></div>
      <img src={nameLogo} className="z-10" />
      <h2 className="z-10 break-keep text-center font-higilight text-4xl font-bold leading-[4rem] text-blue200 sm:text-3xl md:text-4xl">
        <b>웹사이트의 퀄리티를 최상으로 끌어올리는</b>
        <br />
        퍼블리셔 신진유입니다
      </h2>
    </div>
  );
}

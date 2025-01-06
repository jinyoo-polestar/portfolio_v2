import nameLogo from "../assets/image/logo_name_white.svg";

interface HomeProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}

export default function Intro({ sectionRef }: HomeProps) {
  return (
    <div
      className="section-layout relative flex-col justify-center items-center gap-10 overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute w-[500%] aspect-square top-[90%] rounded-[38%] animate-wave bg-wavebg -z-0"></div>
      <img src={nameLogo} className="z-10" />
      <h2 className="font-bold font-higilight text-4xl z-10 leading-[4rem] text-center text-blue200 break-keep sm:text-3xl md:text-4xl">
        <b>웹사이트의 퀄리티를 최상으로 끌어올리는</b>
        <br />
        퍼블리셔 신진유입니다
      </h2>
    </div>
  );
}

import nameLogo from "../assets/image/logo_name.svg";

interface refProps {
  homeRef: React.ForwardedRef<HTMLDivElement>;
  aboutRef: React.ForwardedRef<HTMLDivElement>;
  workRef: React.ForwardedRef<HTMLDivElement>;
  projectRef: React.ForwardedRef<HTMLDivElement>;
  contactRef: React.ForwardedRef<HTMLDivElement>;
}

export default function Header({
  homeRef,
  aboutRef,
  workRef,
  projectRef,
  contactRef,
}: refProps) {
  const onMenuClick = (sectionRef: React.ForwardedRef<HTMLDivElement>) => {
    if (
      sectionRef &&
      typeof sectionRef === "object" &&
      "current" in sectionRef &&
      sectionRef.current
    ) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else return;
  };

  return (
    <nav className="fixed w-full h-20 backdrop-blur-2xl z-20 flex py-2 px-1/10 items-center justify-between border-gray border-b sm:h-16">
      <img src={nameLogo} className="h-3/5" alt="로고" />
      <div className="inline-flex items-center gap-10">
        <ul className="flex gap-10 cursor-pointer text-gray200 sm:hidden md:flex">
          <li onClick={() => onMenuClick(homeRef)}>HOME</li>
          <li onClick={() => onMenuClick(aboutRef)}>ABOUT</li>
          <li onClick={() => onMenuClick(workRef)}>WORK</li>
          <li onClick={() => onMenuClick(projectRef)}>PROJECT</li>
        </ul>
        <button
          className="bg-black py-2 px-3 text-white rounded-md text-sm font-bold hover:-translate-y-1"
          onClick={() => onMenuClick(contactRef)}
        >
          지금 바로 연락하기 📲
        </button>
      </div>
    </nav>
  );
}

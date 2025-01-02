import graphLogo from "../assets/image/ic_graph.svg";
import emailIcon from "../assets/image/ic_mail_black.svg";
import phoneIcon from "../assets/image/ic_phone_black.svg";

export default function Footer() {
  return (
    <section className="flex relative flex-col h-screen items-center justify-center font-higilight">
      <div className="flex items-center justify-center">
        <div className="text-5xl leading-snug text-right mr-12">
          <p className=" text-blue font-semibold ">디자인과 기술을 이어</p>
          <p className=" text-blue font-semibold">웹사이트의 완성도를 높이는</p>
          <p className=" text-black font-regular">퍼블리셔 신진유</p>
        </div>
        <img src={graphLogo} alt="" />
      </div>
      <p className="text-xl mt-6 font-regular">
        세심한 퍼블리싱 작업을 통해 웹 페이지의 품질을 한층 끌어올리고,
        사용자에게 긍정적인 경험을 제공하겠습니다
      </p>
      <address className="absolute bottom-32 flex gap-10 justify-center">
        <span className="inline-flex items-center gap-2">
          <img src={emailIcon} className="w-8" alt="이메일" />
          sju9808@naver.com
        </span>
        <span className="inline-flex items-center gap-2">
          <img src={phoneIcon} className="w-8" alt="전화번호" />
          010-4654-1870
        </span>
      </address>
    </section>
  );
}

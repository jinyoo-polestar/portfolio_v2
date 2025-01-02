import nameLogo from "../assets/image/logo_name.svg";
import frameIcon from "../assets/image/ic_frame.svg";
import dogIcon from "../assets/image/ic_dog.svg";
import cartIcon from "../assets/image/ic_cart.svg";
import documentIcon from "../assets/image/ic_document.svg";
import companyIcon from "../assets/image/ic_company.svg";
import htmlLogo from "../assets/image/logo_html.svg";
import cssLogo from "../assets/image/logo_css.svg";
import notionLogo from "../assets/image/logo_notion.svg";
import tailwindLogo from "../assets/image/ic_tailwind.svg";
import jsLogo from "../assets/image/logo_javascript.svg";
import nextjsLogo from "../assets/image/ic_nextjs.svg";
import muiLogo from "../assets/image/ic_mui.png";
import figmaLogo from "../assets/image/logo_figma.svg";
import jiraLogo from "../assets/image/logo_jira.svg";
import photoshopLogo from "../assets/image/logo_photoshop.svg";
import reactLogo from "../assets/image/logo_react.svg";
import scssLogo from "../assets/image/logo_scss.svg";
import slackLogo from "../assets/image/logo_scss.svg";

const workData = [
  {
    name: "아들러 (개발팀 FE/PM/기획)",
    details: [
      "반응형 웹 작업 및 FE 기능 개발",
      "프로젝트 일정 관리 및 팀 커뮤니케이션",
      "요구사항 정의 ~ 와이어프레임 설계 (서비스 기획)",
    ],
    img: frameIcon,
  },
  {
    name: "두루두루 (마케팅/디자인/기획/CS)",
    details: [
      "카페24, 스마트스토어, 아마존 등 플랫폼 운영",
      "SNS 컨텐츠 기획/제작 및 SNS 운영",
      "고객 문의 응대 및 서비스 개선",
    ],
    img: dogIcon,
  },
  {
    name: "상세페이지 외주 작업",
    details: [
      "두루두루 젤리챱 상세페이지 제작",
      "비티나인 장어진액 상세페이지 제작",
      "컴피오 검진복 상세페이지 제작",
    ],
    img: cartIcon,
  },
  {
    name: "대외활동",
    details: [
      "카페24, 스마트스토어, 아마존 등 플랫폼 운영",
      "SNS 컨텐츠 기획/제작 및 SNS 운영",
      "고객 문의 응대 및 서비스 개선",
    ],
    img: documentIcon,
  },
  {
    name: "그 외 경험해 본 다양한 직무들 ",
    details: [
      "카이스트 총동문회 데이터 라벨링 / 메일 템플릿 제작",
      "모스크바 한국어학당 보조교사",
      "블라디보스톡 한인회 간사",
      "패밀리레스토랑 주방장",
    ],
    img: companyIcon,
  },
];

export default function About() {
  return (
    <section className="flex relative flex-row h-screen justify-start font-higilight">
      <aside className="flex flex-col justify-center items-center bg-bluegray w-1/4 rounded-r-3xl gap-3 h-full sticky top-0">
        <img src={nameLogo} className="w-1/2" alt="" />
        <h2 className="text-3xl text-blue font-bold">퍼블리셔 신진유</h2>
        <p>간단히 저를 소개합니다</p>
      </aside>
      <article className="flex flex-col w-4/5 h-screen overflow-y-auto snap-mandatory snap-y">
        <article className="flex flex-col gap-10 p-10 min-h-screen snap-start justify-center">
          <h3 className="section-title">경력사항</h3>
          <div className="flex-wrap flex gap-8">
            {workData.map((work) => (
              <article className="career-card">
                <img src={work.img} alt={work.name} />
                <div>
                  <h4 className="text-xl font-bold mb-2">{work.name}</h4>
                  <ul>
                    {work.details.map((item) => (
                      <li>- {item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </article>
        <article className="flex flex-col p-10 min-h-screen w-8/12 justify-evenly snap-start">
          <div>
            <h3 className="section-title">사용 가능한 기술&툴</h3>
            <div className="flex gap-2 mb-10">
              <img src={htmlLogo} alt="html" className="h-10" />
              <img src={cssLogo} alt="css" className="h-10" />
              <img src={reactLogo} alt="react" className="h-10" />
              <img src={nextjsLogo} alt="nextjs" className="h-10" />
              <img src={jsLogo} alt="javascript" className="h-10" />
              <img src={tailwindLogo} alt="tailwind" className="h-10" />
              <img src={scssLogo} alt="scss" className="h-10" />
              <img src={photoshopLogo} alt="photoshop" className="h-10" />
              <img src={muiLogo} alt="mui" className="h-10" />
              <img src={figmaLogo} alt="figma" className="h-10" />
              <img src={notionLogo} alt="notion" className="h-10" />
              <img src={jiraLogo} alt="jira" className="h-10" />
              <img src={slackLogo} alt="slack" className="h-10" />
            </div>
          </div>
          <div>
            <h3 className="section-title">학력사항</h3>
            <div className="flex mb-10 font-sans text-lg w-9/12">
              <div className="w-3/5 ">
                <p className="flex justify-between">
                  2019.09~<span> RUDN 관광학과 휴학</span>
                </p>
                <p className="flex justify-between">
                  2014.03~2017.02 <span>일산고등학교 조리과 졸업</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="section-title">나를 나타내는 키워드</h3>
            <div className="flex mb-10  flex-wrap gap-2 w-9/12 font-sans text-gray200">
              <p className="text-l border border-black px-4 py-2 rounded-3xl">
                🔎 디테일한 부분들을 잘 챙기는 <b>꼼꼼함</b>
              </p>
              <p className="text-l border border-black px-4 py-2 rounded-3xl">
                🌟 <b>목표</b>가 세워지면 어떻게든 <b>무조건 해냄</b>
              </p>
              <p className="text-l border border-black px-4 py-2 rounded-3xl">
                🔥 <strong>열</strong>정 <strong>빼</strong>면{" "}
                <strong>시</strong>체
              </p>
              <p className="text-l border border-black px-4 py-2 rounded-3xl">
                🫱🏻 <b>빠른 적응력</b>과 부드러운 <b>커뮤니케이션</b> 능력
              </p>
            </div>
          </div>
        </article>
      </article>
    </section>
  );
}

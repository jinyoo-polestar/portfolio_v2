import { workData } from "../data";

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
import slackLogo from "../assets/image/logo_slack.svg";
import codeLogo from "../assets/image/ic_3d_code.png";

interface AboutProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}

export default function About({ sectionRef }: AboutProps) {
  return (
    <section
      className="relative flex min-h-screen border-b border-gray pb-20"
      ref={sectionRef}
    >
      <article className="flex flex-col">
        <div className="flex h-screen w-full items-center border border-gray sm:h-fit sm:flex-col md:h-screen md:flex-row">
          <div className="flex h-full items-center justify-center bg-blue200 sm:h-1/2 sm:w-full md:h-full md:w-5/12">
            <img src={codeLogo} className="w-2/3" />
          </div>
          <div className="w-3/5 break-keep p-20 text-lg leading-relaxed sm:mt-10 sm:w-4/5 sm:p-0 md:w-3/5 md:p-20">
            안녕하세요!
            <br />
            <b>디테일과 완성도를 중시</b>하며, 사용자 경험(UX)과 최적화를 통해
            웹사이트의 가치를 극대화하는 퍼블리셔 신진유입니다. 퍼블리싱을 통해{" "}
            <b>
              디자인을 정확하게 구현하고, 사용자와의 원활한 소통을 돕는 웹
              환경을 만드는 것을 좋아합니다.
            </b>{" "}
            최신 웹 트렌드와 기술을 적극적으로 살펴보고 이를 프로젝트에 반영하여
            트렌디하고 기능적인 결과물을 만드려고 노력합니다.
          </div>
        </div>
        <article className="flex flex-row flex-wrap justify-center gap-4 px-1/10 py-20">
          <div className="flex flex-col rounded-xl border border-gray p-8">
            <h3 className="section-subtitle mb-6 font-higilight">경력사항</h3>
            <div className="flex flex-wrap gap-2">
              {workData.map((work, _key) => (
                <article className="career-card">
                  <img src={work.img} alt={work.name} className="w-16" />
                  <div>
                    <h4 className="mb-2 text-xl font-bold">{work.name}</h4>
                    <ul>
                      {work.details.map((item) => (
                        <li>- {item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="about-card rounded-xl border border-gray">
            <h3 className="section-subtitle font-higilight">
              사용 가능한 기술&툴
            </h3>
            <div className="flex w-full flex-wrap gap-4">
              <img src={htmlLogo} alt="html" className="h-9" />
              <img src={cssLogo} alt="css" className="h-9" />
              <img src={reactLogo} alt="react" className="h-9" />
              <img src={nextjsLogo} alt="nextjs" className="h-9" />
              <img src={jsLogo} alt="javascript" className="h-9" />
              <img src={tailwindLogo} alt="tailwind" className="h-9" />
              <img src={scssLogo} alt="scss" className="h-9" />
              <img src={photoshopLogo} alt="photoshop" className="h-9" />
              <img src={muiLogo} alt="mui" className="h-9" />
              <img src={figmaLogo} alt="figma" className="h-9" />
              <img src={notionLogo} alt="notion" className="h-9" />
              <img src={jiraLogo} alt="jira" className="h-9" />
              <img src={slackLogo} alt="slack" className="h-9" />
            </div>
          </div>
          <div className="about-card rounded-xl border border-gray">
            <h3 className="section-subtitle font-higilight">인적사항</h3>
            <div className="flex flex-col gap-4">
              <p>이름 : 신진유</p>
              <p>생년월일 : 1998.08.08 (만26세)</p>
              <p>휴대폰번호 : 010-4654-1870</p>
              <p>이메일 : sju9808@naver.com</p>
            </div>
          </div>
          <div className="about-card rounded-xl border border-gray">
            <h3 className="section-subtitle font-higilight">학력사항</h3>
            <div className="w-5/6">
              <p className="flex justify-between">
                2019.09~<span> RUDN 관광학과 휴학</span>
              </p>
              <p className="flex justify-between">
                2014.03~2017.02 <span>일산고등학교 조리과 졸업</span>
              </p>
            </div>
          </div>
        </article>
      </article>
    </section>
  );
}

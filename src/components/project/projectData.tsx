import adlerLogo from "../../assets/image/ic_adler.svg";
import matzipdlerLogo from "../../assets/image/ic_matzipdler.svg";
import htmlLogo from "../../assets/image/logo_html.svg";
import cssLogo from "../../assets/image/logo_css.svg";
import jsLogo from "../../assets/image/logo_javascript.svg";
import jiraLogo from "../../assets/image/logo_jira.svg";
import figmaLogo from "../../assets/image/logo_figma.svg";
import jqueryLogo from "../../assets/image/logo_jquery.svg";
import photoshopLogo from "../../assets/image/logo_photoshop.svg";
import reactLogo from "../../assets/image/logo_react.svg";
import scssLogo from "../../assets/image/logo_scss.svg";
import portfolioIcon from "../../assets/image/ic_portfolio.svg";
import netflixIcon from "../../assets/image/ic_netflix.svg";
import detailpageIcon from "../../assets/image/ic_detailpage.svg";
import nextjsLogo from "../../assets/image/ic_nextjs.svg";
import muiLogo from "../../assets/image/ic_mui.png";
import tailwindLogo from "../../assets/image/ic_tailwind.svg";

export const projectData = [
  {
    title: "ADLER",
    logo: adlerLogo,
    tags: ["프론트엔드 개발", "퍼블리싱", "기획"],
    tools: [
      { src: htmlLogo, alt: "html" },
      { src: cssLogo, alt: "css" },
      { src: jsLogo, alt: "javascript" },
      { src: reactLogo, alt: "react" },
      { src: nextjsLogo, alt: "nextjs" },
      { src: muiLogo, alt: "mui" },
      { src: jiraLogo, alt: "jira" },
      { src: figmaLogo, alt: "figma" },
    ],
    type: "팀 프로젝트",
  },
  {
    title: "맛집들러",
    logo: matzipdlerLogo,
    tags: ["프론트엔드 개발", "퍼블리싱", "기획", "디자인"],
    tools: [
      { src: htmlLogo, alt: "html" },
      { src: cssLogo, alt: "css" },
      { src: jsLogo, alt: "javascript" },
      { src: reactLogo, alt: "react" },
      { src: muiLogo, alt: "mui" },
      { src: figmaLogo, alt: "figma" },
    ],
    type: "팀 프로젝트",
  },
  {
    title: "포트폴리오 v1",
    logo: portfolioIcon,
    tags: ["퍼블리싱", "기획", "디자인"],
    tools: [
      { src: htmlLogo, alt: "html" },
      { src: cssLogo, alt: "css" },
      { src: jsLogo, alt: "javascript" },
      { src: jqueryLogo, alt: "jquery" },
      { src: scssLogo, alt: "scss" },
      { src: figmaLogo, alt: "figma" },
    ],
    type: "개인 프로젝트",
  },
  {
    title: "포트폴리오 v2",
    logo: portfolioIcon,
    tags: ["퍼블리싱", "기획", "디자인"],
    tools: [
      { src: htmlLogo, alt: "html" },
      { src: cssLogo, alt: "css" },
      { src: jsLogo, alt: "javascript" },
      { src: reactLogo, alt: "jquery" },
      { src: tailwindLogo, alt: "tailwind" },
    ],
    type: "개인 프로젝트",
  },
  {
    title: "넷플릭스 클론 코딩",
    logo: netflixIcon,
    tags: ["퍼블리싱"],
    tools: [
      { src: htmlLogo, alt: "html" },
      { src: cssLogo, alt: "css" },
      { src: jsLogo, alt: "javascript" },
    ],
    type: "개인 프로젝트",
  },
  {
    title: "상세페이지",
    logo: detailpageIcon,
    tags: ["기획", "디자인"],
    tools: [
      { src: figmaLogo, alt: "figma" },
      { src: photoshopLogo, alt: "photoshop" },
    ],
    type: "개인 프로젝트",
  },
];

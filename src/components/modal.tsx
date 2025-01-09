import { useState } from "react";

import adlerLogo from "../assets/image/ic_adler.svg";
import netflixLogo from "../assets/image/ic_netflix.svg";
import matzipdlerLogo from "../assets/image/ic_matzipdler.svg";
import portfolioLogo from "../assets/image/ic_portfolio.svg";
import detailpageLogo from "../assets/image/ic_detailpage.svg";

import noteIcon from "../assets/image/ic_note.svg";
import toolIcon from "../assets/image/ic_tool_02.svg";
import calendarIcon from "../assets/image/ic_calendar.svg";
import folderIcon from "../assets/image/ic_folder.svg";

import testImage1 from "../assets/image/img_adler_sample_01.png";
import testImage3 from "../assets/image/img_adler_sample_03.png";
import testImage4 from "../assets/image/img_adler_sample_04.png";
import netflixPCImage from "../assets/image/img_netflix_full.png";
import netflixMobileImage from "../assets/image/img_netflix_full_m.png";
import portfolioPCImage from "../assets/image/img_portfolio_full.png";
import portfolioMobileImage from "../assets/image/img_portfolio_full_m.png";
import matzipdlerImage1 from "../assets/image/img_matzipdler_01.png";
import matzipdlerImage2 from "../assets/image/img_matzipdler_02.png";
import matzipdlerImage3 from "../assets/image/img_matzipdler_03.png";
import comfioDetailImage from "../assets/image/img_comfio_detail.png";
import bt9DetailImage from "../assets/image/img_bt9_detail.png";
import duruduruDetailImage from "../assets/image/img_duruduru_detail.png";

export default function Modal({
  setOpenModal,
  modalContent,
}: {
  setOpenModal: any;
  modalContent: number;
}) {
  const [selectedDetailPage, setSelectedDetailPage] = useState(0);
  const onCloseModal = () => {
    setOpenModal(false);
  };

  const onClickDetailBtn = (type: number) => {
    setSelectedDetailPage(type);
  };

  const getDetailPageImage = () => {
    switch (selectedDetailPage) {
      case 0:
        return comfioDetailImage;

      case 1:
        return bt9DetailImage;

      case 2:
        return duruduruDetailImage;

      default:
        return comfioDetailImage;
    }
  };

  return (
    <div
      className="absolute left-0 top-0 w-screen h-screen flex justify-center items-center bg-blackTransparent sm:h-full md:h-screen"
      onClick={onCloseModal}
    >
      <div className="text-white font-black text-2xl absolute top-16 right-20 cursor-pointer p-4">
        ╳
      </div>
      {/* ADLER */}
      {modalContent === 0 && (
        <div
          className="w-3/5 h-5/6 relative bg-white overflow-y-auto overflow-x-hidden sm:w-5/6 md:w-3/5"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <article className="flex flex-col">
              <div
                className="w-full h-52"
                style={{
                  backgroundImage:
                    "url(https://img.freepik.com/free-photo/pink-yellow-plain_53876-96060.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
              <img
                src={adlerLogo}
                className="w-28 relative left-16 bottom-16 sm:left-4 md:left-16"
              />
              <h4 className="relative left-16 bottom-16 mt-4 text-2xl font-bold sm:left-6 md:left-16">
                아들러
              </h4>
            </article>
            <div className="px-16 pb-16 sm:px-6 sm:pb-6 md:px-16">
              <article className="flex flex-col border-b py-8 border-gray ">
                <h5 className="font-black text-xl mb-2">요약</h5>
                <div className="flex flex-col gap-1">
                  <p className="flex items-center gap-1">
                    <img src={folderIcon} className="h-7 w-auto" />
                    종류 : 회사 프로젝트
                  </p>
                  <p className="flex items-center gap-1">
                    <img src={noteIcon} className="h-7 w-auto" />
                    작업내용 : 서비스 기획, FE 개발, 퍼블리싱 (기여도 100%)
                  </p>
                  <p className="flex items-center gap-1">
                    <img src={toolIcon} className="h-7 w-auto" />
                    스킬 : React, Next.js, MUI, HTML, CSS, Javscript, Figma,
                    Jira
                  </p>
                </div>
              </article>
              <article className="flex flex-col border-b py-8 border-gray">
                <h5 className="font-black text-xl mb-4">프로젝트 소개</h5>
                <p className="leading-relaxed w-4/5 text-gray200 sm:w-full md:w-4/5">
                  아들러는 사용자가 손쉽게 3D 가상공간을 만들고 공유할 수 있는
                  SNS 플랫폼입니다. 클릭 몇 번으로 자신만의 3D 공간을 생성하고
                  친구를 초대할 수 있습니다. 이 프로젝트에서 서비스 기획,
                  프론트엔드 개발, 그리고 퍼블리싱을 담당했습니다.
                </p>
              </article>
              <article className="flex flex-col border-b py-8 border-gray">
                <h5 className="font-black text-xl mb-4">주요 업무</h5>
                <ul className="leading-relaxed list-disc list-inside">
                  <li>정식 런칭을 위해 기존 모든 페이지에 대한 반응형 작업</li>
                  <li>
                    MUI 라이브러리 활용해 UI 요소 컴포넌트화하여 퍼블리싱 작업
                    체계화 및 시간 단축
                  </li>
                  <li>
                    모바일, 태블릿, 데스크탑 세 가지 디바이스에 맞춰 최적화된
                    반응형 디자인 적용
                  </li>
                  <li>
                    새롭게 추가되는 기능과 페이지 제작 (탐색/아바타 설정/알림
                    설정 등)
                  </li>
                  <li>
                    백엔드 및 3D, 기획, 디자인 부서와 협업해 시각적 요소
                    완성도를 높여 사용자 경험 개선
                  </li>
                  <li>
                    회원가입 완료, 팔로우/댓글 알림, 비밀번호 재설정 등의 안내
                    메일 템플릿 퍼블리싱
                  </li>
                </ul>
              </article>
              <article className="flex flex-col border-b py-8 border-gray">
                <h5 className="font-black text-xl mb-4">진행과정</h5>
                <ol className="list-decimal list-inside">
                  <li className="font-semibold text-lg mb-1">
                    UI 설계 및 퍼블리싱
                  </li>
                  <ul className="list-bar list-inside mb-4 pl-4">
                    <li>
                      Figma로 제공된 디자인 시안을 바탕으로 UI 라이브러리 MUI
                      커스텀을 이용해 공통 UI 구축
                    </li>
                    <li>
                      반응형 웹 디자인을 구현해 모바일, 태블릿, 데스크탑에서
                      일관된 사용자 경험을 제공
                    </li>
                  </ul>
                  <li className="font-semibold text-lg mb-1">
                    프론트엔드 개발
                  </li>
                  <ul className="list-bar list-inside mb-4 pl-4">
                    <li>새롭게 추가된 페이지의 기능 및 UI/UX 개발</li>
                    <li>
                      Three.js 팀과 협업하여 아바타 커스터마이징 페이지 제작,
                      사용자 인터랙션 기능 구현
                    </li>
                    <li>
                      React와 상태 관리 라이브러리를 활용해 효율적인 컴포넌트
                      구조 설계
                    </li>
                  </ul>
                  <li className="font-semibold text-lg mb-1">
                    이메일 템플릿 퍼블리싱
                  </li>
                  <ul className="list-bar list-inside mb-4 pl-4">
                    <li>
                      HTML, CSS를 활용해 이메일 클라이언트(Naver, Gmail 등)
                      호환성을 고려한 템플릿 제작
                    </li>
                    <li>
                      모바일 친화적인 반응형 템플릿을 설계해 다양한 디바이스에서
                      일관적인 경험 제공
                    </li>
                  </ul>
                  <li className="font-semibold text-lg mb-1">서비스 기획</li>
                  <ul className="list-bar list-inside mb-4 pl-4">
                    <li>와이어프레임 제작 및 기능별 우선순위 설정</li>
                    <li>
                      서비스 방향성을 명확히 하기 위한 기획안 작성 및 UX Writing
                      작성
                    </li>
                    <li>
                      서비스 이용약관, 개인정보처리방침 등 정책 문서를 제작하고
                      법률 검토를 진행
                    </li>
                    <li>
                      기획, 디자인, 개발 팀 간 원활한 커뮤니케이션을 주도하여
                      일정 관리 및 이슈 해결
                    </li>
                  </ul>
                </ol>
              </article>
              <article className="flex flex-col border-b py-8 border-gray">
                <h5 className="font-black text-xl mb-4">결과물</h5>
                <div className="grid grid-cols-3 grid-rows-2 gap-4">
                  <div className="rounded-md col-span-2 row-span-2 overflow-hidden border border-gray">
                    <img
                      src={testImage1}
                      className="w-full h-full object-fill scale-105"
                    />
                  </div>
                  <div className="rounded-md grid-cols-1 overflow-hidden border border-gray">
                    <img
                      src={testImage3}
                      className="w-full h-full object-fill scale-105"
                    />
                  </div>
                  <div className="rounded-md grid-cols-1 overflow-hidden border border-gray">
                    <img
                      src={testImage4}
                      className="w-full h-full object-fill scale-105"
                    />
                  </div>
                </div>
              </article>
              <article className="flex flex-col py-8">
                <h5 className="font-black text-xl mb-4">프로젝트 결과</h5>
                <ul className="list-disc list-inside">
                  <li className="leading-relaxed">
                    목표한 기간 내에 서비스를 성공적으로 런칭하며, 프로젝트의
                    주요 목표를 달성했습니다.
                  </li>
                  <li className="leading-relaxed">
                    프로젝트를 통해 기획부터 개발, 퍼블리싱까지 전 과정을
                    주도적으로 진행하며, 팀 간 협업과 효율적인 커뮤니케이션의
                    중요성을 깊게 깨달았습니다.
                  </li>
                  <li className="leading-relaxed">
                    UI 라이브러리인 MUI를 활용해 일관된 디자인 시스템을
                    구축하고, 개발 생산성을 향상시켰습니다.
                  </li>
                  <li className="leading-relaxed">
                    다양한 기기에서 일관된 사용자 경험을 제공하기 위해 반응형
                    디자인을 적용하여 최적의 사용성을 구현했습니다.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      )}
      {/* NETFLIX */}
      {modalContent === 1 && (
        <div
          className="w-3/5 h-5/6 relative bg-white overflow-y-auto overflow-x-hidden sm:w-5/6 md:w-3/5"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <article className="flex flex-col">
              <div className="w-full h-52 bg-gray200" />
              <img
                src={netflixLogo}
                className="w-28 relative left-16 bottom-16 sm:left-4 md:left-16 sm:bottom-16"
              />
              <h4 className="relative left-16 bottom-16 mt-4 text-2xl font-bold sm:left-6 md:left-16">
                넷플릭스 랜딩페이지 클론코딩
              </h4>
            </article>
            <div className="px-16 pb-16 sm:px-6 sm:pb-6 md:px-16">
              <article className="flex flex-col border-b py-8 border-gray ">
                <h5 className="font-black text-xl mb-2">요약</h5>
                <div className="flex flex-col gap-1 sm:text-sm md:text-base">
                  <p className="flex items-center gap-1">
                    <img src={folderIcon} className="h-7 w-auto" />
                    종류 : 개인 프로젝트
                  </p>
                  <p className="flex items-center gap-1">
                    <img src={noteIcon} className="h-7 w-auto" />
                    작업내용 : 퍼블리싱 (기여도 100%)
                  </p>
                  <p className="flex items-center gap-1">
                    <img src={calendarIcon} className="h-7 w-auto" />
                    작업기간 : 3일
                  </p>
                  <p className="flex items-center gap-1">
                    <img src={toolIcon} className="h-7 w-auto" />
                    스킬 : HTML, CSS, Javscript
                  </p>
                </div>
              </article>
              <article className="flex flex-col border-b py-8 border-gray">
                <h5 className="font-black text-xl mb-4">프로젝트 소개</h5>
                <p className="leading-relaxed w-4/5 text-gray200 sm:w-full md:w-4/5">
                  해당 프로젝트는 실력 향상과 개선점 파악을 목표로 소규모
                  프로젝트로 진행했습니다. 프레임워크나 외부 라이브러리는 전혀
                  사용하지 않고, HTML, CSS, Javascript만으로 전체적인 구조와
                  인터렉션을 구현했으며, 넷플릭스의 디자인과 기능 요소를 충분히
                  재현하고자 노력했습니다. 다양한 디바이스에서도 일관된 사용자
                  경험을 위해 반응형 디자인을 적용했습니다.
                </p>
              </article>
              <article className="flex flex-col border-b py-8 border-gray">
                <h5 className="font-black text-xl mb-4">주요 업무</h5>
                <ul className="leading-relaxed list-disc list-inside">
                  <li>랜딩페이지 퍼블리싱 작업 및 인터렉션 구현</li>
                  <li>모바일, 태블릿, 데스크탑에 대한 반응형 작업</li>
                  <li>웹 접근성과 SEO를 고려한 HTML 구조 설계</li>
                </ul>
              </article>
              <article className="flex flex-col border-b py-8 border-gray">
                <h5 className="font-black text-xl mb-4">진행과정</h5>
                <ol className="list-decimal list-inside">
                  <li className="font-semibold text-lg mb-1">퍼블리싱</li>
                  <ul className="list-bar list-inside mb-4 pl-4">
                    <li>
                      BEM 방식을 사용해 클래스 명명 규칙 일관되게 유지 및 컨벤션
                      도입
                    </li>
                    <li>랜딩 페이지의 구조 설계 및 HTML/CSS 퍼블리싱</li>
                    <li>
                      다양한 디바이스(모바일, 태블릿, 데스크톱)에 대한 반응형
                      디자인 적용
                    </li>
                    <li>
                      반응형 웹 디자인을 구현해 모바일, 태블릿, 데스크탑에서
                      일관된 사용자 경험을 제공
                    </li>
                    <li>웹 접근성을 고려한 시맨틱 태그 및 alt 속성 등 사용</li>
                    <li>
                      크로스 브라우징 테스트를 통해 주요 브라우저(Chrome,
                      Firefox, Safari)에서의 호환성 검증
                    </li>
                  </ul>
                </ol>
              </article>
              <article className="flex flex-col border-b py-8 border-gray">
                <h5 className="font-black text-xl mb-4">결과물</h5>
                <a
                  href="https://github.com/jinyoo-polestar/portfolio-netflix"
                  target="_blank"
                  className="px-2 py-2 rounded-md font-medium border border-gray text-gray200 mr-3"
                >
                  코드 확인하기
                </a>
                <a
                  href="https://netfl-clone-project.netlify.app/"
                  target="_blank"
                  className="px-2 py-2 rounded-md font-medium border border-gray text-gray200"
                >
                  사이트 보러가기
                </a>
                <div className="flex rounded-md items-start gap-4">
                  <img
                    src={netflixPCImage}
                    className="w-3/5 object-contain rounded-sm"
                  />
                  <img
                    src={netflixMobileImage}
                    className="w-1/5 object-contain rounded-sm"
                  />
                </div>
              </article>
              <article className="flex flex-col py-8">
                <h5 className="font-black text-xl mb-4">프로젝트 결과</h5>
                <ul className="list-disc list-inside">
                  <li className="leading-relaxed">
                    BEM 방식을 적용하여 클래스 명명 규칙을 일관되게 유지했으며,
                    이를 통해 코드의 가독성을 높이고 클래스명만으로 요소의
                    위치와 역할을 명확히 파악할 수 있었습니다.
                  </li>
                  <li className="leading-relaxed">
                    UI 라이브러리 없이 순수 JavaScript만으로 인터랙션을
                    구현하며, 인터랙션 개발에 대한 이해도를 향상시켰습니다.
                  </li>
                  <li className="leading-relaxed">
                    프로젝트 컨벤션을 도입해 코드의 가독성과 유지보수 효율성을
                    크게 개선할 수 있었습니다.
                  </li>
                  <li className="leading-relaxed">
                    협업 과정에서 유용한 방법론과 도구들을 학습하기 시작했으며,
                    이를 실제 업무에 적용할 준비를 갖추게 되었습니다.
                  </li>
                  <li className="leading-relaxed">
                    사용자 경험(UX)과 웹 접근성을 고려하며 작업하는 습관을
                    형성했으며, 이를 기반으로 더 나은 품질의 결과물을 제작할 수
                    있었습니다.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      )}
      {/* 포트폴리오 */}
      {modalContent === 2 && (
        <div
          className="w-3/5 h-5/6 relative bg-white overflow-y-auto overflow-x-hidden sm:w-5/6 md:w-3/5"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <article className="flex flex-col">
              <div className="w-full h-52 bg-[#fec89a]" />
              <img
                src={portfolioLogo}
                className="w-28 relative left-16 bottom-16 sm:left-4 md:left-16 sm:bottom-16"
              />
              <h4 className="relative left-16 bottom-16 mt-4 text-2xl font-bold sm:left-6 md:left-16">
                포트폴리오 웹사이트 제작
              </h4>
            </article>
            <div className="px-16 pb-16 sm:px-6 sm:pb-6 md:px-16">
              <article className="flex flex-col border-b py-8 border-gray ">
                <h5 className="font-black text-xl mb-2">요약</h5>
                <div className="flex flex-col gap-1 sm:text-sm md:text-base">
                  <p className="flex items-center gap-1">
                    <img src={folderIcon} className="h-7 w-auto" />
                    종류 : 개인 프로젝트
                  </p>
                  <p className="flex items-center gap-1">
                    <img src={noteIcon} className="h-7 w-auto" />
                    작업내용 : 기획, 디자인, 퍼블리싱 (기여도 100%)
                  </p>
                  <p className="flex items-center gap-1">
                    <img src={calendarIcon} className="h-7 w-auto" />
                    작업기간 : 10일 (퍼블리싱 3일)
                  </p>
                  <p className="flex items-center gap-1">
                    <img src={toolIcon} className="h-7 w-auto" />
                    스킬 : HTML, CSS, Javscript, jQuery, SCSS, Figma
                  </p>
                </div>
              </article>
              <article className="flex flex-col border-b py-8 border-gray">
                <h5 className="font-black text-xl mb-4">프로젝트 소개</h5>
                <p className="leading-relaxed w-4/5 text-gray200 sm:w-full md:w-4/5">
                  이 포트폴리오는 저의 역량과 다양한 스킬을 활용해보기 위해
                  제작한 프로젝트입니다. 기획부터 디자인, 퍼블리싱까지 전 과정을
                  직접 진행했으며, 퍼블리싱에서 자주 사용되는 jQuery, SCSS,
                  GSAP와 같은 라이브러리를 활용하여 완성도를 높였습니다.
                </p>
              </article>
              <article className="flex flex-col border-b py-8 border-gray">
                <h5 className="font-black text-xl mb-4">주요 업무</h5>
                <ul className="leading-relaxed list-disc list-inside">
                  <li>피그마를 이용한 기획 및 디자인</li>
                  <li>퍼블리싱 작업 및 인터렉션 구현</li>
                  <li>모바일, 태블릿, 데스크탑에 대한 반응형 작업</li>
                  <li>웹 접근성과 SEO를 고려한 HTML 구조 설계</li>
                </ul>
              </article>
              <article className="flex flex-col border-b py-8 border-gray">
                <h5 className="font-black text-xl mb-4">진행과정</h5>
                <ol className="list-decimal list-inside">
                  <li className="font-semibold text-lg mb-1">기획</li>
                  <ul className="list-bar list-inside mb-4 pl-4">
                    <li>웹사이트에 들어갈 콘텐츠를 기획하고 주요 내용 확정</li>
                    <li>와이어프레임 및 기본 레이아웃 설계</li>
                  </ul>
                  <li className="font-semibold text-lg mb-1">퍼블리싱</li>
                  <ul className="list-bar list-inside mb-4 pl-4">
                    <li>
                      BEM 방식을 사용해 클래스 명명 규칙 일관되게 유지 및 컨벤션
                      도입
                    </li>
                    <li>랜딩 페이지의 구조 설계 및 HTML/CSS 퍼블리싱</li>
                    <li>
                      다양한 디바이스(모바일, 태블릿, 데스크톱)에 대한 반응형
                      디자인 적용
                    </li>
                    <li>
                      반응형 웹 디자인을 구현해 모바일, 태블릿, 데스크탑에서
                      일관된 사용자 경험을 제공
                    </li>
                    <li>웹 접근성을 고려한 시맨틱 태그 및 alt 속성 등 사용</li>
                    <li>
                      크로스 브라우징 테스트를 통해 주요 브라우저(Chrome,
                      Firefox, Safari)에서의 호환성 검증
                    </li>
                  </ul>
                </ol>
              </article>
              <article className="flex flex-col border-b py-8 border-gray">
                <h5 className="font-black text-xl mb-4">결과물</h5>
                <div className="mb-4">
                  <a
                    href="https://github.com/jinyoo-polestar/portfolio"
                    target="_blank"
                    className="px-2 py-2 rounded-md font-medium border border-gray text-gray200 mr-3"
                  >
                    코드 확인하기
                  </a>
                  <a
                    href="https://jinyoo-portfolio.netlify.app/"
                    target="_blank"
                    className="px-2 py-2 rounded-md font-medium border border-gray text-gray200"
                  >
                    사이트 보러가기
                  </a>
                </div>
                <div className="flex rounded-md items-start gap-4">
                  <img
                    src={portfolioPCImage}
                    className="w-3/5 object-contain rounded-sm border border-gray"
                  />
                  <img
                    src={portfolioMobileImage}
                    className="w-1/5 object-contain rounded-sm border border-gray"
                  />
                </div>
              </article>
              <article className="flex flex-col py-8">
                <h5 className="font-black text-xl mb-4">프로젝트 결과</h5>
                <ul className="list-disc list-inside">
                  <li className="leading-relaxed">
                    BEM 방식을 적용하여 클래스 명명 규칙을 일관되게 유지했습니다
                  </li>
                  <li>
                    프로젝트의 파일 구조와 명명 규칙에 대한 컨벤션을 업데이트한
                    후 적용하여 코드의 가독성과 유지보수성을 향상시켰습니다
                  </li>
                  <li className="leading-relaxed">
                    Jquery와 GSAP을 이용해 인터렉션을 구현했습니다.
                  </li>
                  <li className="leading-relaxed">
                    프로젝트 컨벤션을 도입해 코드의 가독성과 유지보수 효율성을
                    크게 개선할 수 있었습니다.
                  </li>
                  <li className="leading-relaxed">
                    반응형 디자인을 구현하기 위해 레이아웃을 % 단위로 설정,
                    다양한 화면 크기에서도 레이아웃이 깔끔하게 유지될 수 있도록
                    했습니다.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      )}

      {modalContent === 3 && (
        <div
          className="w-3/5 h-5/6 relative bg-white overflow-y-auto overflow-x-hidden sm:w-5/6 md:w-3/5"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <article className="flex flex-col">
              <div className="w-full h-52 bg-[#fec89a]" />
              <img
                src={matzipdlerLogo}
                className="w-28 relative left-16 bottom-16 sm:left-4 md:left-16 sm:bottom-16"
              />
              <h4 className="relative left-16 bottom-16 mt-4 text-2xl font-bold sm:left-6 md:left-16">
                맛집들러
              </h4>
            </article>
            <div className="px-16 pb-16 sm:px-6 sm:pb-6 md:px-16">
              <article className="flex flex-col border-b py-8 border-gray ">
                <h5 className="font-black text-xl mb-2">요약</h5>
                <div className="flex flex-col gap-1 sm:text-sm md:text-base">
                  <p className="flex items-center gap-1">
                    <img src={folderIcon} className="h-7 w-auto" />
                    종류 : 팀 프로젝트
                  </p>
                  <p className="flex items-center gap-1">
                    <img src={noteIcon} className="h-7 w-auto" />
                    작업내용 : 기획, 디자인, 퍼블리싱 (기여도 100%)
                  </p>
                  <p className="flex items-center gap-1">
                    <img src={calendarIcon} className="h-7 w-auto" />
                    작업기간 : 7일 (퍼블리싱 2일)
                  </p>
                  <p className="flex items-center gap-1">
                    <img src={toolIcon} className="h-7 w-auto" />
                    스킬 : HTML, CSS, Javscript, React, MUI
                  </p>
                </div>
              </article>
              <article className="flex flex-col border-b py-8 border-gray">
                <h5 className="font-black text-xl mb-4">프로젝트 소개</h5>
                <p className="leading-relaxed w-4/5 text-gray200 sm:w-full md:w-4/5">
                  점심시간마다 뭐 먹을지 고민을 하는 회사 팀원들을 위해, 개발팀
                  동료와 함께 회사 근처 맛집 추천 사이트를 토이 프로젝트로
                  제작했습니다. 기획, 디자인, 퍼블리싱, 데이터 수집을 맡아
                  진행했습니다.
                </p>
              </article>
              <article className="flex flex-col border-b py-8 border-gray">
                <h5 className="font-black text-xl mb-4">주요 업무</h5>
                <ul className="leading-relaxed list-disc list-inside">
                  <li>서비스 기획 및 데이터 수집</li>
                  <li>퍼블리싱 작업 및 인터렉션 구현</li>
                  <li>
                    서비스 기능(랜덤으로 음식점 추천/새로운 음식점 추가 기능 등)
                    구현
                  </li>
                  <li>모바일, 태블릿, 데스크탑에 대한 반응형 작업</li>
                </ul>
              </article>
              <article className="flex flex-col border-b py-8 border-gray">
                <h5 className="font-black text-xl mb-4">진행과정</h5>
                <ol className="list-decimal list-inside">
                  <li className="font-semibold text-lg mb-1">기획 & 디자인</li>
                  <ul className="list-bar list-inside mb-4 pl-4">
                    <li>웹사이트에 들어갈 콘텐츠를 기획하고 주요 내용 확정</li>
                    <li>기본 레이아웃 설계 및 디자인 작업</li>
                  </ul>
                  <li className="font-semibold text-lg mb-1">퍼블리싱</li>
                  <ul className="list-bar list-inside mb-4 pl-4">
                    <li>HTML/CSS 퍼블리싱</li>
                    <li>
                      다양한 디바이스(모바일, 태블릿, 데스크톱)에 대한 반응형
                      디자인 적용
                    </li>
                    <li>
                      반응형 웹 디자인을 구현해 모바일, 태블릿, 데스크탑에서
                      일관된 사용자 경험을 제공
                    </li>
                    <li>웹 접근성을 고려한 시맨틱 태그 및 alt 속성 등 사용</li>
                    <li>
                      크로스 브라우징 테스트를 통해 주요 브라우저(Chrome,
                      Firefox, Safari)에서의 호환성 검증
                    </li>
                  </ul>
                </ol>
              </article>
              <article className="flex flex-col border-b py-8 border-gray">
                <h5 className="font-black text-xl mb-4">결과물</h5>
                <div className="grid grid-cols-3 grid-rows-2 gap-4">
                  <div className="rounded-md col-span-2 row-span-2 overflow-hidden border border-gray">
                    <img
                      src={matzipdlerImage1}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-md grid-cols-1 overflow-hidden border border-gray">
                    <img
                      src={matzipdlerImage2}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-md grid-cols-1 overflow-hidden border border-gray">
                    <img
                      src={matzipdlerImage3}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </article>
              <article className="flex flex-col py-8">
                <h5 className="font-black text-xl mb-4">프로젝트 결과</h5>
                <ul className="list-disc list-inside">
                  <li className="leading-relaxed">
                    사내 프로젝트를 성공적으로 개발하여 팀원들의 점심시간 고민을
                    줄였으며, 업무 효율성을 높이는 데 기여했습니다.
                  </li>
                  <li>
                    개선을 위한 피드백을 모은 후, 업데이트를 진행하였으며,
                    사용자 경험(UX)을 지속적으로 개선하기 위한 계획을
                    수립했습니다.
                  </li>
                  <li className="leading-relaxed">
                    다양한 화면 크기에서도 레이아웃이 깔끔하게 유지될 수 있도록
                    반응형 디자인을 적용했습니다.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      )}
      {modalContent === 4 && (
        <div
          className="w-3/5 h-5/6 relative bg-white overflow-y-auto overflow-x-hidden sm:w-5/6 md:w-3/5"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <article className="flex flex-col">
              <div className="w-full h-52 bg-[#A5E1A6]" />
              <img
                src={detailpageLogo}
                className="w-28 relative left-16 bottom-16 sm:left-4 md:left-16 sm:bottom-16"
              />
              <h4 className="relative left-16 bottom-16 mt-4 text-2xl font-bold sm:left-6 md:left-16">
                상세페이지
              </h4>
            </article>
            <div className="px-16 pb-16 sm:px-6 sm:pb-6 md:px-16">
              <article className="flex flex-col border-b py-8 border-gray ">
                <h5 className="font-black text-xl mb-2">요약</h5>
                <div className="flex flex-col gap-1 sm:text-sm md:text-base">
                  <p className="flex items-center gap-1">
                    <img src={folderIcon} className="h-7 w-auto" />
                    종류 : 개인 프로젝트
                  </p>
                  <p className="flex items-center gap-1">
                    <img src={noteIcon} className="h-7 w-auto" />
                    작업내용 : 기획, 디자인 (기여도 100%)
                  </p>
                  <p className="flex items-center gap-1">
                    <img src={calendarIcon} className="h-7 w-auto" />
                    작업기간 : 2-3주
                  </p>
                  <p className="flex items-center gap-1">
                    <img src={toolIcon} className="h-7 w-auto" />
                    스킬 : Photoshop, Figma
                  </p>
                </div>
              </article>
              <article className="flex flex-col border-b py-8 border-gray">
                <h5 className="font-black text-xl mb-4">프로젝트 소개</h5>
                <p className="leading-relaxed w-4/5 text-gray200 sm:w-full md:w-4/5">
                  상세페이지 기획부터 디자인과 제작까지 프로젝트의 모든 과정을
                  직접 주도하며, 사용자 경험을 극대화하고 브랜드 가치를
                  효과적으로 전달했습니다.
                </p>
              </article>
              <article className="flex flex-col border-b py-8 border-gray">
                <h5 className="font-black text-xl mb-4">주요 업무</h5>
                <ul className="leading-relaxed list-disc list-inside">
                  <li>경쟁사 분석을 통한 차별화된 기획안 도출</li>
                  <li>스토리텔링 기반의 콘텐츠 및 레이아웃 설계</li>
                  <li>디자인 컨셉 수립 및 시안 제작</li>
                  <li>클라이언트 피드백 반영 및 최종 디자인 완성</li>
                </ul>
              </article>
              <article className="flex flex-col border-b py-8 border-gray">
                <h5 className="font-black text-xl mb-4">진행과정</h5>
                <ol className="list-decimal list-inside">
                  <li className="font-semibold text-lg mb-1">기획 & 디자인</li>
                  <ul className="list-bar list-inside mb-4 pl-4">
                    <li>
                      클라이언트 요구사항 분석 및 상세페이지 기획 방향 설정
                    </li>
                    <li>경쟁사 및 시장 동향 분석을 통한 차별화 전략 도출</li>
                    <li>사용자 타겟 및 주요 구매 포인트 파악</li>
                    <li>스토리텔링 기반의 레이아웃 및 콘텐츠 흐름 기획</li>
                    <li>와이어프레임 제작</li>
                    <li>디자인 시안 제작 및 클라이언트 피드백 반영</li>
                  </ul>
                </ol>
              </article>
              <article className="flex flex-col border-b py-8 border-gray">
                <h5 className="font-black text-xl mb-4">결과물</h5>
                <div className="">
                  <div className="flex gap-2 mb-4">
                    <button
                      className="py-2 px-3 border border-gray rounded-lg text-sm hover:bg-blue200"
                      onClick={() => onClickDetailBtn(0)}
                    >
                      👕 컴피오 검진복
                    </button>
                    <button
                      className="py-2 px-3 border border-gray rounded-lg text-sm hover:bg-blue200"
                      onClick={() => onClickDetailBtn(1)}
                    >
                      🫖 비티나인 장어진액
                    </button>
                    <button
                      className="py-2 px-3 border border-gray rounded-lg text-sm hover:bg-blue200"
                      onClick={() => onClickDetailBtn(2)}
                    >
                      🧴 두루두루 젤리챱
                    </button>
                  </div>
                  <div className="rounded-md col-span-2 row-span-2 overflow-hidden border border-gray">
                    <img
                      src={getDetailPageImage()}
                      className="w-full h-full object-cover"
                      alt="상세페이지 이미지"
                    />
                  </div>
                </div>
              </article>
              <article className="flex flex-col py-8">
                <h5 className="font-black text-xl mb-4">프로젝트 결과</h5>
                <ul className="list-disc list-inside">
                  <li className="leading-relaxed">
                    고객과의 미팅을 통해 목표와 요구사항 분석한 후, 원하는
                    방향성에 맞게 기획 및 제작
                  </li>
                  <li>결제 전환율 2~4배 증가, 조회 및 유입수 3배 증가 </li>
                  <li>상세페이지 SEO 최적화 (키워드 최상단 노출)</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

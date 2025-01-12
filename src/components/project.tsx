import { useState } from "react";

import Modal from "./modal";

import adlerLogo from "../assets/image/ic_adler.svg";
import matzipdlerLogo from "../assets/image/ic_matzipdler.svg";
import portfolioLogo from "../assets/image/ic_portfolio.svg";
import netflixLogo from "../assets/image/ic_netflix.svg";
import detailpageLogo from "../assets/image/ic_detailpage.svg";
import shinhanLogo from "../assets/image/ic_shinhan.svg";

interface ProjectProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}

const projects = [
  {
    id: 0,
    title: "Adler",
    description:
      "3D SNS 서비스 '아들러'의 프론트엔드 개발과 퍼블리싱을 담당했어요",
    logo: adlerLogo,
    bgColor: "#FFE8F1",
    publishingPercentage: "100%",
  },
  {
    id: 1,
    title: "Netflix",
    description:
      "넷플릭스 랜딩 페이지를 클론 코딩하며, 반응형 디자인과 UI 구현을 중심으로 진행한 프로젝트입니다",
    logo: netflixLogo,
    bgColor: "#000",
    publishingPercentage: "100%",
  },
  {
    id: 2,
    title: "포트폴리오 v1",
    description:
      "SCSS와 jQuery를 활용해 개인 프로젝트를 진행하며 UI와 스타일 모듈화를 구현했어요",
    logo: portfolioLogo,
    bgColor: "#FFE8D7",
    publishingPercentage: "100%",
  },
  {
    id: 3,
    title: "맛집들러",
    description:
      "사내 프로젝트로 회사 근처 점심 맛집 추천 서비스 '맛집들러'의 퍼블리싱을 맡았어요",
    logo: matzipdlerLogo,
    bgColor: "#FFDDAD",
    publishingPercentage: "100%",
  },
  {
    id: 4,
    title: "상세페이지",
    description:
      "효과적인 컨텐츠 전달을 위한 상세페이지 기획과 디자인 작업을 진행했어요",
    logo: detailpageLogo,
    bgColor: "#D3EDBF",
    publishingPercentage: "100%",
  },
  {
    id: 5,
    title: "신한금융그룹",
    description:
      "React와 Tailwind를 사용해 신한금융그룹 웹사이트를 클론코딩 하고 있어요",
    logo: shinhanLogo,
    bgColor: "#DFE8FF",
    publishingPercentage: "작업중",
    disabled: true,
  },
];

export default function Project({ sectionRef }: ProjectProps) {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(0);

  const handleOpenModalContent = (id: number) => {
    setModalContent(id);
    setOpenModal(true);
  };

  return (
    <section className="section-layout flex-col bg-bluegray" ref={sectionRef}>
      <h1 className="section-title mb-4">MY PROJECT</h1>
      <div className="flex flex-wrap gap-x-10 gap-y-4">
        {projects.map((project) => (
          <article
            key={project.id}
            className={`relative inline-flex h-80 w-3/12 flex-col rounded-lg bg-white ${
              project.disabled ? "cursor-not-allowed" : "cursor-pointer"
            } sm:w-full md:w-3/12`}
            onClick={() =>
              !project.disabled && handleOpenModalContent(project.id)
            }
          >
            <div
              className={`relative flex h-2/3 items-center justify-center rounded-t-md p-6`}
              style={{ backgroundColor: project.bgColor }}
            >
              <img src={project.logo} />
              <span className="absolute bottom-2 right-2 rounded-2xl border border-gray bg-white px-3 py-1 text-xs">
                {project.disabled
                  ? "🛠️ 작업중이예요"
                  : `👩🏻‍💻 퍼블리싱 기여도 ${project.publishingPercentage}`}
              </span>
            </div>
            <div className="p-6 pb-4">
              <h2 className="mb-3 text-2xl font-medium tracking-wide">
                {project.title}
              </h2>
              <p className="font-regular break-keep text-sm text-gray200">
                {project.description}
              </p>
              <button className="mt-4 h-6 w-6 bg-[url('src/assets/image/ic_more_black.svg')] bg-cover" />
            </div>
          </article>
        ))}
      </div>
      {openModal && (
        <Modal setOpenModal={setOpenModal} modalContent={modalContent} />
      )}
    </section>
  );
}

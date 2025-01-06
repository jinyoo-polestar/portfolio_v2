import adlerLogo from "../assets/image/ic_adler.svg";
import matzipdlerLogo from "../assets/image/ic_matzipdler.svg";
import portfolioLogo from "../assets/image/ic_portfolio.svg";
import netflixLogo from "../assets/image/ic_netflix.svg";
import detailpageLogo from "../assets/image/ic_detailpage.svg";
import shinhanLogo from "../assets/image/ic_shinhan.svg";

interface ProjectProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}

export default function Project({ sectionRef }: ProjectProps) {
  return (
    <section className="section-layout flex-col bg-bluegray" ref={sectionRef}>
      <h1 className="section-title mb-4">MY PROJECT</h1>
      <div className="flex flex-wrap gap-x-10 gap-y-4">
        <article className="inline-flex flex-col w-3/12 bg-white rounded-lg relative h-80 cursor-pointer xl:w-3/12 lg:w-3/12 md:w-5/12 sm:w-full">
          <div className="p-6 flex relative items-center justify-center rounded-t-md h-2/3 bg-[#FFE8F1]">
            <img src={adlerLogo} className="" />
            <span className="absolute right-2 bottom-2 py-1 px-3 text-xs rounded-2xl bg-white">
              👩🏻‍💻 퍼블리싱 기여도 100%
            </span>
          </div>
          <div className="p-6 pb-4">
            <h2 className="font-medium text-2xl tracking-wide mb-3">Adler</h2>
            <p className="text-gray200 font-regular text-sm break-keep">
              3D SNS 서비스 "아들러"의 프론트엔드 개발과 퍼블리싱을 담당했어요
            </p>
            <button className="bg-[url('src/assets/image/ic_more_black.svg')] w-6 h-6 bg-cover mt-4" />
          </div>
        </article>
        <article className="inline-flex flex-col w-3/12 bg-white rounded-lg relative h-80 cursor-pointer xl:w-3/12 lg:w-3/12 md:w-5/12 sm:w-full">
          <div className="p-6 flex relative items-center justify-center rounded-t-md h-2/3 bg-[#000]">
            <img src={netflixLogo} className="" />
            <span className="absolute right-2 bottom-2 py-1 px-3 text-xs rounded-2xl bg-white">
              👩🏻‍💻 퍼블리싱 기여도 100%
            </span>
          </div>
          <div className="p-6 pb-4">
            <h2 className="font-medium text-2xl tracking-wide mb-3">Netflix</h2>
            <p className="text-gray200 font-regular text-sm break-keep">
              넷플릭스 랜딩 페이지를 클론 코딩하며, 반응형 디자인과 UI 구현을
              중심으로 진행한 프로젝트입니다
            </p>
            <button className="bg-[url('src/assets/image/ic_more_black.svg')] w-6 h-6 bg-cover mt-4" />
          </div>
        </article>
        <article className="inline-flex flex-col w-3/12 bg-white rounded-lg relative h-80 cursor-pointer xl:w-3/12 lg:w-3/12 md:w-5/12 sm:w-full">
          <div className="p-6 flex relative items-center justify-center rounded-t-md h-2/3 bg-[#FFE8D7]">
            <img src={portfolioLogo} className="" />
            <span className="absolute right-2 bottom-2 py-1 px-3 text-xs rounded-2xl bg-white">
              👩🏻‍💻 퍼블리싱 기여도 100%
            </span>
          </div>
          <div className="p-6 pb-4">
            <h2 className="font-medium text-2xl tracking-wide mb-3">
              포트폴리오 v1
            </h2>
            <p className="text-gray200 font-regular text-sm break-keep">
              SCSS와 jQuery를 활용해 개인 프로젝트를 진행하며 UI와 스타일
              모듈화를 구현했어요
            </p>
            <button className="bg-[url('src/assets/image/ic_more_black.svg')] w-6 h-6 bg-cover mt-4" />
          </div>
        </article>
        <article className="inline-flex flex-col w-3/12 bg-white rounded-lg relative h-80 cursor-pointer xl:w-3/12 lg:w-3/12 md:w-5/12 sm:w-full">
          <div className="p-6 flex relative items-center justify-center rounded-t-md h-2/3 bg-[#FFDDAD]">
            <img src={matzipdlerLogo} className="" />
            <span className="absolute right-2 bottom-2 py-1 px-3 text-xs rounded-2xl bg-white">
              👩🏻‍💻 퍼블리싱 기여도 100%
            </span>
          </div>
          <div className="p-6 pb-4">
            <h2 className="font-medium text-2xl tracking-wide mb-3">
              맛집들러
            </h2>
            <p className="text-gray200 font-regular text-sm break-keep">
              사내 프로젝트로 회사 근처 점심 맛집 추천 서비스 "맛집들러"의
              퍼블리싱을 맡았어요
            </p>
            <button className="bg-[url('src/assets/image/ic_more_black.svg')] w-6 h-6 bg-cover mt-4" />
          </div>
        </article>
        <article className="inline-flex flex-col w-3/12 bg-white rounded-lg relative h-80 cursor-pointer xl:w-3/12 lg:w-3/12 md:w-5/12 sm:w-full">
          <div className="p-6 flex relative items-center justify-center rounded-t-md h-2/3 bg-[#D3EDBF]">
            <img src={detailpageLogo} className="" />
            <span className="absolute right-2 bottom-2 py-1 px-3 text-xs rounded-2xl bg-white">
              🎨 디자인 기여도 100%
            </span>
          </div>
          <div className="p-6 pb-4">
            <h2 className="font-medium text-2xl tracking-wide mb-3">
              상세페이지
            </h2>
            <p className="text-gray200 font-regular text-sm break-keep">
              효과적인 컨텐츠 전달을 위한 상세페이지 기획과 디자인 작업을
              진행했어요
            </p>
            <button className="bg-[url('src/assets/image/ic_more_black.svg')] w-6 h-6 bg-cover mt-4" />
          </div>
        </article>
        <article className="inline-flex flex-col w-3/12 bg-white rounded-lg relative h-80 cursor-not-allowed xl:w-3/12 lg:w-3/12 md:w-5/12 sm:w-full">
          <div className="p-6 flex relative items-center justify-center rounded-t-md h-2/3 bg-[#DFE8FF]">
            <img src={shinhanLogo} className="" />
          </div>
          <div className="p-6 pb-4">
            <h2 className="font-medium text-2xl tracking-wide mb-3">
              신한금융그룹
            </h2>
            <p className="text-gray200 font-regular text-sm break-keep">
              React와 Tailwind를 사용해 신한금융그룹 웹사이트를 클론코딩 하고
              있어요
            </p>
            <button className="bg-[url('src/assets/image/ic_more_black.svg')] w-6 h-6 bg-cover mt-4" />
          </div>
          <div className="absolute w-full h-full rounded-lg bg-blackTransparent text-white flex justify-center items-center font-bold text-lg">
            작업중이예요 🛠️
          </div>
        </article>
      </div>
    </section>
  );
}

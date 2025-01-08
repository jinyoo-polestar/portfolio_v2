import adlerSampleImg1 from "../assets/image/img_adler_sample_01.png";
import adlerSampleImg2 from "../assets/image/img_adler_sample_02.png";
import adlerSampleImg3 from "../assets/image/img_adler_sample_03.png";
import adlerSampleImg5 from "../assets/image/img_adler_sample_05.png";
import adlerSampleImg6 from "../assets/image/img_adler_sample_06.png";

interface WorkProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}

export default function Work({ sectionRef }: WorkProps) {
  return (
    <section
      className="section-layout flex-col border border-y border-gray"
      ref={sectionRef}
    >
      <h2 className="section-title mb-4">WORK</h2>
      <p className="font-sans">
        3D SNS 서비스를 만든 아들러에서 이런 업무들을 진행했어요
      </p>
      <div className="flex flex-col gap-20 mt-10 w-9/10 sm:w-full md:w-9/10">
        <article className="flex gap-10 items-center w-full justify-between sm:flex-col md:flex-row">
          <div className="w-1/2 rounded-xl overflow-x-hidden border border-gray sm:w-full md:w-1/2">
            <img src={adlerSampleImg1} alt="" className="w-full object-cover" />
          </div>
          <div className="w-3/5 sm:w-full md-3/5">
            <h3 className="font-semibold text-2xl mb-4 font-higilight">
              4가지 디바이스에 맞춘
              <br /> <b className="text-blue">최적화된 반응형 디자인</b>
            </h3>
            <p className="w-11/12 font-sans break-keep sm:w-full md:w-11/12">
              서비스 정식 런칭을 위해 <b>모든 페이지에 대한 반응형 작업</b>을
              진행했습니다.
              <br />
              Mobile / Tablet / Laptop / PC 네 가지 디바이스를 기준으로
              작업했으며,
              <br />
              기기별 화면 크기와 사용자 경험을 최적화해 다양한 환경에서도 일관된
              서비스 품질을 제공할 수 있도록 했습니다.
            </p>
          </div>
        </article>
        <article className="flex gap-10 items-center flex-row-reverse justify-between sm:flex-col md:flex-row-reverse">
          <div className="w-1/2 rounded-xl overflow-x-hidden border border-gray sm:w-full md:w-1/2">
            <img src={adlerSampleImg3} alt="" className="w-full object-cover" />
          </div>
          <div className="w-3/5 sm:w-full md-3/5">
            <h3 className="font-semibold text-2xl mb-4 font-higilight">
              새로운 <b className="text-blue">기능 및 페이지 개발</b>
            </h3>
            <p className="w-11/12 font-sans break-keep sm:w-full md:w-11/12">
              새롭게 추가되는 기능과 페이지를 제작했습니다. 탐색, 아바타 설정,
              알림 설정 페이지 및 팔로우/팔로잉 기능 등을 개발하여 사용자 경험을
              강화했습니다. 각 기능의 요구사항을 분석하고, 직관적인 UI와 원활한
              상호작용을 구현하여 서비스의 편의성을 높였습니다
            </p>
          </div>
        </article>
        <article className="flex gap-10 items-center w-full justify-between sm:flex-col md:flex-row">
          <div className="w-1/2 rounded-xl overflow-x-hidden border border-gray sm:w-full md:w-1/2">
            <img src={adlerSampleImg5} alt="" className="w-full object-cover" />
          </div>
          <div className="w-3/5 sm:w-full md-3/5">
            <h3 className="font-semibold text-2xl mb-4 font-higilight">
              안내 <b className="text-blue">메일 템플릿 퍼블리싱</b>
            </h3>
            <p className="w-11/12 font-sans break-keep sm:w-full md:w-11/12">
              마케팅팀, 백엔드팀과 협업하여 요구사항을 분석하고, 회원가입 완료,
              팔로우/댓글 알림, 비밀번호 재설정 등 다양한 안내 메일 템플릿을
              퍼블리싱했습니다. 각 템플릿은 사용자에게 명확하고 직관적인 정보를
              제공할 수 있도록 디자인되었으며, 다양한 이메일 클라이언트에서도
              호환성과 최적화가 이루어졌습니다.
            </p>
          </div>
        </article>
        <article className="flex gap-10 items-center flex-row-reverse justify-between sm:flex-col md:flex-row-reverse">
          <div className="w-1/2 rounded-xl overflow-x-hidden border border-gray sm:w-full md:w-1/2">
            <img src={adlerSampleImg2} alt="" className="w-full object-cover" />
          </div>
          <div className="w-3/5 sm:w-full md-3/5">
            <h3 className="font-semibold text-2xl mb-4 font-higilight">
              <b className="text-blue">개발팀 프로젝트 일정 관리 </b>및 <br />
              <b className="text-blue">타 팀과의 커뮤니케이션</b>
            </h3>
            <p className="w-11/12 font-sans break-keep sm:w-full md:w-11/12">
              PM으로서 개발팀 프로젝트 일정을 관리했습니다. 버전별 목표와 일정에
              맞춰 진행 상황을 점검하고 프로젝트가 원활하게 진행되도록 했습니다.
              팀원들과의 원활한 커뮤니케이션을 통해 일정 지연 없이 목표를 달성할
              수 있도록 조율했습니다. 타 팀과 긴밀히 협업하여 부서 간 일정을
              조율하고, 프로젝트 진행에 필요한 사항들을 신속하게 공유하여 원활한
              진행을 지원했습니다.
            </p>
          </div>
        </article>
        <article className="flex gap-10 items-center w-full justify-between sm:flex-col md:flex-row">
          <div className="w-1/2 rounded-xl overflow-x-hidden border border-gray sm:w-full md:w-1/2">
            <img src={adlerSampleImg6} alt="" className="w-full object-cover" />
          </div>
          <div className="w-3/5 sm:w-full md-3/5">
            <h3 className="font-black text-2xl mb-4 font-higilight text-blue ">
              서비스 기획 참여
            </h3>
            <p className="w-11/12 font-sans break-keep">
              서비스 기획 단계에서 요구사항 분석 및 기능 정의에 참여했습니다.
              와이어프레임 설계와 UX 라이팅을 통해 직관적인 UI/UX를 구현하고,
              사용자 경험을 최적화할 수 있도록 기여했습니다. 또한, 기능 정의와
              설계도를 작성하여 프로젝트 전반의 흐름을 명확히 하고, 개발팀 내부
              인원들이 문제없이 진행할 수 있도록 상세한 문서화와 커뮤니케이션을
              통해 원활한 협업을 이끌어냈습니다.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

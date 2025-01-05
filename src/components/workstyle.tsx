import deviceIcon from "../assets/image/ic_device.png";
import pencilIcon from "../assets/image/ic_pencil.png";
import chatIcon from "../assets/image/ic_chat.png";
import documentIcon from "../assets/image/ic_document2.png";
import wheelIcon from "../assets/image/ic_wheel.png";

export default function Workstyle() {
  return (
    <section className="section-layout bg-gradient-to-b from-[rgba(255,255,255,0.8)] from-20% via-[rgba(143,178,232,0.5)] from-56% to-[rgba(139,198,236,0.4)] flex-col items-center relative justify-center">
      <h2 className="section-title mb-24 font-higilight">
        퍼블리셔로서 저는 이런 모습이예요
      </h2>
      <div className="font-sans relative flex flex-row flex-wrap gap-10 items-center xl:w-2/3 lg:w-2/3 md:w-full sm:w-full">
        <article className="flex bg-white rounded-lg p-6 gap-10 items-center w-full xl:flex-row lg:flex-row md:flex-col sm:flex-col">
          <div className="bg-bluegray inline-flex items-center justify-center aspect-video rounded-lg w-8/12 xl:w-8/12 lg:w-8/12 md:w-full sm:w-full ">
            <img src={deviceIcon} className="h-1/2" />
          </div>
          <div className="w-full">
            <h3 className="mb-4 font-bold text-xl">웹 접근성을 고려한 개발</h3>
            <p className="text-gray200 break-keep">
              모든 사용자가 제약 없이 웹에 접근할 수 있도록 세심한 디테일을 신경
              씁니다.{" "}
              <b>시맨틱 태그, alt 속성, meta 태그, 반응형 디자인 등을 활용</b>
              하여 웹 페이지의 구조와 내용을 명확하게 전달하며, SEO 최적화에도
              신경을 기울입니다.
            </p>
          </div>
        </article>
        <article className="flex bg-white rounded-lg p-6 gap-10 items-center w-full xl:flex-row lg:flex-row md:flex-col sm:flex-col">
          <div className="bg-bluegray inline-flex items-center justify-center aspect-video rounded-lg w-8/12 xl:w-8/12 lg:w-8/12 md:w-full sm:w-full ">
            <img src={pencilIcon} className="h-1/2" />
          </div>
          <div className="w-7/12 sm:w-full">
            <h3 className="mb-3 font-bold text-xl">
              디자인을 100% 구현하는 꼼꼼함
            </h3>
            <p className="text-gray200 break-keep">
              <b>
                디자인을 정확히 구현하는 데 중점을 두고, 디테일 하나하나를
                꼼꼼히 확인
              </b>
              합니다. 디자이너의 의도에 맞춰 사용자 경험을 고려하며, 각 요소가
              화면에 완벽하게 표현될 수 있도록 세심하게 신경 씁니다.
            </p>
          </div>
        </article>
        <article className="flex bg-white rounded-lg p-6 gap-10 items-center w-full xl:flex-row lg:flex-row md:flex-col sm:flex-col">
          <div className="bg-bluegray inline-flex items-center justify-center aspect-video rounded-lg w-8/12 xl:w-8/12 lg:w-8/12 md:w-full sm:w-full ">
            <img src={chatIcon} className="h-1/2" />
          </div>
          <div className="w-7/12 sm:w-full">
            <h3 className="mb-3 font-bold text-xl">
              협업을 통한 더 나은 결과물 창출
            </h3>
            <p className="text-gray200 break-keep">
              <b>퍼블리셔로서 협업을 통해 더 나은 결과물을 창출</b>하는 데
              중점을 둡니다. 개발자, 디자이너, 기획자와의 원활한 소통을 바탕으로
              프로젝트 목표를 효과적으로 달성하고, 결과물의 퀄리티를 한층
              높입니다.
            </p>
          </div>
        </article>
        <article className="flex bg-white rounded-lg p-6 gap-10 items-center w-full xl:flex-row lg:flex-row md:flex-col sm:flex-col">
          <div className="bg-bluegray inline-flex items-center justify-center aspect-video rounded-lg w-8/12 xl:w-8/12 lg:w-8/12 md:w-full sm:w-full ">
            <img src={wheelIcon} className="h-1/2" />
          </div>
          <div className="w-7/12 sm:w-full">
            <h3 className="mb-3 font-bold text-xl">
              최신 기술/툴 학습을 통한 지속적인 성장
            </h3>
            <p className="text-gray200 break-keep">
              <b>
                최신 기술과 툴을 적극적으로 학습하고, 이를 실무에 적용하여
                사용자 중심의 웹을 제작
              </b>
              하는 데 열정을 가지고 있습니다. 변화와 도전을 두려워하지 않으며,
              끊임없이 성장하고 발전하는 퍼블리셔입니다.
            </p>
          </div>
        </article>
        <article className="flex bg-white rounded-lg p-6 gap-10 items-center w-full xl:flex-row lg:flex-row md:flex-col sm:flex-col">
          <div className="bg-bluegray inline-flex items-center justify-center aspect-video rounded-lg w-8/12 xl:w-8/12 lg:w-8/12 md:w-full sm:w-full ">
            <img src={documentIcon} className="h-1/2" />
          </div>
          <div className="w-7/12 sm:w-full">
            <h3 className="mb-3 font-bold text-xl">
              코드 가독성에 대한 철저한 고민
            </h3>
            <p className="text-gray200 break-keep">
              기능 구현을 넘어서,{" "}
              <b>코드의 가독성, 효율성, 유지보수성을 고려하여 작성합</b>니다.
              유지보수가 용이하고, 팀원들이 이해하기 쉬운 가독성 높은 코드를
              작성하는 데 항상 주의를 기울이며, 이를 통해 더 나은 협업 환경을
              만들어갑니다.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

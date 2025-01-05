import codeblockIcon from "../assets/image/ic_codeblock.svg";
import pencilIcon from "../assets/image/ic_pencil.svg";
import chatIcon from "../assets/image/ic_chat.svg";
import toolIcon from "../assets/image/ic_tool.svg";
import codeIcon from "../assets/image/ic_code.svg";
import bookIcon from "../assets/gif/gif_book.gif";
import handshakeIcon from "../assets/gif/gif_handshake.gif";
import developmentIcon from "../assets/gif/gif_development.gif";
import glassIcon from "../assets/gif/gif_glass.gif";
import responsiveIcon from "../assets/gif/gif_responsive.gif";

export default function Workstyle() {
  return (
    <>
      <section className="section-layout bg-white flex-col relative x-screen h-screen justify-center">
        <h2 className="section-title mb-24 mt-10">
          퍼블리셔로서 저는 이런 모습이예요
        </h2>
        <div
          className="font-sans relative flex flex-col h-2/5 overflow-y-scroll snap-mandatory snap-y hide-scrollbar w-4/5"
          style={{ msOverflowStyle: "none" }}
        >
          <article className="flex justify-between items-center h-full snap-start flex-shrink-0">
            <div className="flex flex-col gap-3">
              <p className="text-2xl font-extrabold font-higilight text-blue">
                01
              </p>
              <h3 className="font-extrabold text-3xl">
                웹 접근성을 고려한 개발
              </h3>
              <p className="text-lg break-keep text-gray200 w-3/5">
                시맨틱 태그, SEO 최적화, 반응형 디자인 적용 등을 통해 웹
                접근성을 높입니다.
              </p>
            </div>
            <img src={responsiveIcon} className="h-48" />
          </article>
          <article className="flex justify-between items-center h-full snap-start flex-shrink-0">
            <div className="flex flex-col gap-3">
              <p className="text-2xl font-extrabold font-higilight text-blue">
                02
              </p>
              <h3 className="font-extrabold text-3xl">
                디자인을 100% 구현하는 꼼꼼함
              </h3>
              <p className="text-lg break-keep text-gray200 w-3/5">
                모든 디테일까지 신경 쓰며, 디자이너의 의도를 100% 구현하기 위해
                노력합니다. 꼼꼼함이 저의 강점입니다.
              </p>
            </div>
            <img src={glassIcon} className="h-48" />
          </article>
          <article className="flex justify-between items-center h-full snap-start flex-shrink-0">
            <div className="flex flex-col gap-3">
              <p className="text-2xl font-extrabold font-higilight text-blue">
                03
              </p>
              <h3 className="font-extrabold text-3xl">
                협업을 통한 더 나은 결과물 창출
              </h3>
              <p className="text-lg break-keep text-gray200 w-3/5">
                팀원들과의 활발한 소통을 통해 웹사이트의 품질과 사용자 경험을
                높입니다
              </p>
            </div>
            <img src={handshakeIcon} className="h-48" />
          </article>
          <article className="flex justify-between items-center h-full snap-start flex-shrink-0">
            <div className="flex flex-col gap-3">
              <p className="text-2xl font-extrabold font-higilight text-blue">
                04
              </p>
              <h3 className="font-extrabold text-3xl">
                최신 기술을 통한 지속적인 성장
              </h3>
              <p className="text-lg break-keep text-gray200 w-3/5">
                적극적으로 최신 기술과 툴을 학습하고, 이를 적용하여 사용자
                중심의 웹을 제작합니다
              </p>
            </div>
            <img src={bookIcon} className="h-48" />
          </article>
          <article className="flex justify-between items-center h-full snap-start flex-shrink-0">
            <div className="flex flex-col gap-3">
              <p className="text-2xl font-extrabold font-higilight text-blue">
                05
              </p>
              <h3 className="font-extrabold text-3xl">
                코드 가독성에 대한 철저한 고민
              </h3>
              <p className="text-lg break-keep text-gray200 w-3/5">
                단순히 기능 구현에 그치지 않고, 코드의 가독성, 효율성,
                유지보수성까지 고려하여 작성합니다.
              </p>
            </div>
            <img src={developmentIcon} className="h-48" />
          </article>
        </div>
      </section>
      <section className="section-layout bg-blue flex-col items-center relative x-screen justify-center ">
        {/* <h2 className="section-title !text-white mb-24">
          퍼블리셔로서 저는 이런 모습이예요
        </h2> */}
        <div
          className="font-sans relative flex flex-row w-full overflow-x-scroll snap-mandatory snap-x hide-scrollbar "
          style={{ msOverflowStyle: "none" }}
        >
          <article className="flex justify-between text-white items-center w-full snap-start flex-shrink-0">
            <div className="w-2/5">
              <p className="text-2xl font-extrabold font-higilight text-blue">
                04
              </p>
              <p className="text-2xl break-keep">
                모든 사용자가 접근 가능한 웹을 만들기 위해{" "}
                <b>시맨틱한 코드와 웹 접근성 원칙을 실천</b>해요.
              </p>
            </div>
            <img src={codeblockIcon} className="h-48" />
          </article>
          <article className="flex justify-between text-white items-center w-full snap-start flex-shrink-0 p-6">
            <div className="">
              <p className="text-2xl font-extrabold font-higilight text-blue">
                04
              </p>
              <p className="text-2xl break-keep">
                모든 사용자가 접근 가능한 웹을 만들기 위해 완벽한 작업을 위해{" "}
                <b>작은 디테일까지 확인</b>하며,{" "}
                <b>디자이너의 의도를 100% 구현</b>하려 노력합니다.
                <br />
                <br />
                디자인의 완성도를 높이는 꼼꼼함이 저의 강점입니다.
              </p>
            </div>
            <img src={pencilIcon} className="h-48" />
          </article>
          <article className="flex justify-between text-white items-center w-full snap-start flex-shrink-0 p-6">
            <div className="">
              <p className="text-2xl font-extrabold font-higilight text-blue">
                04
              </p>
              <p className="text-2xl break-keep leading-normal ">
                팀원들과의{" "}
                <b>
                  소통과 협업을 통해 더 나은 결과를 만들어내는 과정을 즐깁니다.
                </b>{" "}
                <br />
                <br />
                서로 다른 재능이 모여 하나의 큰 그림을 완성하는 순간을
                사랑합니다.
              </p>
            </div>
            <img src={chatIcon} className="h-48" />
          </article>
          <article className="flex justify-between text-white items-center w-full snap-start flex-shrink-0 p-6">
            <div className="">
              <p className="text-2xl font-extrabold font-higilight text-blue">
                04
              </p>
              <p className="text-2xl break-keep">
                <b>최신 기술과 툴을 적극적으로 학습하고 적용</b>해요. 사용자
                중심의 웹을 제작하는데 열정을 가진 퍼블리셔입니다. <br />
                <br />
                성장과 변화를 두려워하지 않아요!
              </p>
            </div>
            <img src={toolIcon} className="h-48" />
          </article>
          <article className="flex justify-between text-white items-center w-full snap-start flex-shrink-0 p-6">
            <div className="">
              <p className="text-2xl font-extrabold font-higilight text-blue">
                04
              </p>
              <p className="text-2xl break-keep">
                단순히 기능을 구현하는 데 그치지 않고,{" "}
                <b>코드의 가독성, 효율성, 유지보수성까지 고려하며 작성</b>
                합니다. <br />
                <br />
                <b>유지보수가 용이하고, 가독성이 높은 코드를 작성</b>하기 위해
                항상 노력합니다.
              </p>
            </div>
            <img src={codeIcon} className="h-48" />
          </article>
        </div>
      </section>
    </>
  );
}

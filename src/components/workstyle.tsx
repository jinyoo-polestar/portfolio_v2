import codeblockIcon from "../assets/image/ic_codeblock.svg";
import pencilIcon from "../assets/image/ic_pencil.svg";
import chatIcon from "../assets/image/ic_chat.svg";
import toolIcon from "../assets/image/ic_tool.svg";
import codeIcon from "../assets/image/ic_code.svg";
import number1Icon from "../assets/image/ic_number_01.svg";
import number2Icon from "../assets/image/ic_number_02.svg";
import number3Icon from "../assets/image/ic_number_03.svg";
import number4Icon from "../assets/image/ic_number_04.svg";
import number5Icon from "../assets/image/ic_number_05.svg";

export default function Workstyle() {
  return (
    <section className="section-layout bg-blue flex-col items-center relative x-screen justify-center ">
      <h2 className="section-title !text-white mb-24">
        퍼블리셔로서 저는 이런 모습이예요
      </h2>
      <div
        className="font-sans relative flex flex-row w-full overflow-x-scroll snap-mandatory snap-x hide-scrollbar "
        style={{ msOverflowStyle: "none" }}
      >
        <article className="flex justify-between text-white items-center w-full snap-start flex-shrink-0 p-6">
          <div className="w-2/5">
            <img src={number1Icon} className="w-10 mb-5" />
            <p className="text-2xl break-keep">
              모든 사용자가 접근 가능한 웹을 만들기 위해{" "}
              <b>시맨틱한 코드와 웹 접근성 원칙을 실천</b>해요.
            </p>
          </div>
          <img src={codeblockIcon} className="h-48" />
        </article>
        <article className="flex justify-between text-white items-center w-full snap-start flex-shrink-0 p-6">
          <div className="">
            <img src={number2Icon} className="w-10 mb-5" />
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
            <img src={number3Icon} className="w-10 mb-5" />
            <p className="text-2xl break-keep leading-normal ">
              팀원들과의{" "}
              <b>
                소통과 협업을 통해 더 나은 결과를 만들어내는 과정을 즐깁니다.
              </b>{" "}
              <br />
              <br />
              서로 다른 재능이 모여 하나의 큰 그림을 완성하는 순간을 사랑합니다.
            </p>
          </div>
          <img src={chatIcon} className="h-48" />
        </article>
        <article className="flex justify-between text-white items-center w-full snap-start flex-shrink-0 p-6">
          <div className="">
            <img src={number4Icon} className="w-10 mb-5" />
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
            <img src={number5Icon} className="w-10 mb-5" />
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
  );
}

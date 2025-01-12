interface ContactProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}

export default function Contact({ sectionRef }: ContactProps) {
  return (
    <section
      className="section-layout relative flex-row flex-wrap items-center justify-start gap-1/10"
      ref={sectionRef}
    >
      <div className="flex flex-col gap-4">
        <i className="text-7xl">👀</i>
        <p className="break-keep text-4xl font-extralight leading-snug sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl">
          혹시..
          <br />
          <b className="font-semibold">저에 대해 더 알고싶지 않으신가요?</b>
        </p>
        <p className="font-regular text-md break-keep text-gray200">
          전문성을 가진 퍼블리셔로서, 그리고 든든한 동료로서 멋진 프로젝트를
          함께 해내고 싶습니다.
          <br /> 가벼운 커피챗도 좋고, 면접을 통해 만나뵙는 것도 환영합니다.
          <br />
          <b>24시 언제든 편하게 연락주세요!</b>
        </p>
      </div>
      <div className="flex flex-col">
        <address>
          <p className="mb-6 cursor-default rounded-lg px-6 py-3 shadow-gray hover:shadow-primary">
            <i className="mr-4">📞</i>
            010-4654-1870
          </p>
          <a href="mailto:sju9808@naver.com">
            <p className="mb-6 rounded-lg py-3 pl-6 pr-10 shadow-gray hover:shadow-primary">
              <i className="mr-4">💌</i>sju9808@naver.com
            </p>
          </a>
        </address>
        <a href="https://open.kakao.com/o/s4CSp08g" target="_blank">
          <p className="mb-6 rounded-lg px-6 py-3 shadow-gray hover:shadow-primary">
            <i className="mr-4">💬</i>
            카카오톡 오픈채팅방
          </p>
        </a>
      </div>
    </section>
  );
}

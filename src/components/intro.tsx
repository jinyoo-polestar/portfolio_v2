export default function Intro() {
  return (
    <>
      <div className="section-layout justify-start items-center bg-bluegray gap-[10%]">
        <div>
          <p className="text-8xl mb-8">🤔</p>
          <h2 className="text-2xl">
            혹시..
            <br />
            이런 퍼블리셔 찾고 계시지 않나요?
          </h2>
        </div>
        <div className="flex flex-col gap-4 font-sans text-blue font-bold text-xl">
          <p className="px-6 py-2 border border-blue rounded-3xl bg-white">
            👩🏻‍💻 웹접근성, 웹표준, 반응형 등 알짝딱깔센으로 잘 신경쓰면 좋겠어요
          </p>
          <p className="px-6 py-2 border border-blue rounded-3xl bg-white">
            🔎 꼼꼼하게 디테일한 부분까지 놓치지 않았으면 좋겠어요
          </p>
          <p className="px-6 py-2 border border-blue rounded-3xl bg-white">
            🫱🏻 동료들과 커뮤니케이션이 잘 되고 회사에 잘 스며들었으면 좋겠어요
          </p>
          <p className="px-6 py-2 border border-blue rounded-3xl bg-white">
            🔥 넘쳐나는 열정으로 어떤 일이든 적극적으로 임하면 좋겠어요
          </p>
          <p className="px-6 py-2 border border-blue rounded-3xl bg-white">
            ☄️ 새로운 기술, 툴을 빠르게 습득하고 적용하면 좋겠어요
          </p>
        </div>
      </div>
      <div>
        {/* <img src="" />
        <h2>저는 이 다섯 가지를 모두 갖춘 퍼블리셔 신진유 입니다</h2> */}
      </div>
    </>
  );
}

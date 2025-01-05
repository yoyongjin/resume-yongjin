import A4Template from "@/components/templates/A4Template";

export default function Home() {
  console.log("asdf");

  return (
    <div className="flex flex-col gap-20 p-[20px]">
      <A4Template>
        <div>
          <h1 className="text-black">JS/TS 기반 프론트엔드 개발자 김용진</h1>
        </div>
      </A4Template>
      <A4Template>
        <div>
          <h1 className="text-black">asdf</h1>
        </div>
      </A4Template>
      <A4Template>
        <div>
          <h1 className="text-black">asdf</h1>
        </div>
      </A4Template>
    </div>
  );
}

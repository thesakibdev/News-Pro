
import Flex from "@/components/Flex";

export default function HomeTop() {
  return (
    <div>
      <Flex className="justify-between">
        <div className="w-[570px] h-[460px] bg-gray-500">content</div>
        <div className="w-[570px] h-[460px]">
          <Flex className="justify-between">
            <div className="w-[270px] h-[215px] bg-gray-500">technology</div>
            <div className="w-[270px] h-[215px] bg-gray-500">Travel</div>
          </Flex>
          <div className="w-full bg-gray-500 mt-[30px] h-[215px]">
            Life Style
          </div>
        </div>
      </Flex>
    </div>
  );
}

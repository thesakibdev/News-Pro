// css component
import Flex from "@/components/Flex";

export default function Heading() {
  return (
    <Flex className="mt-14 justify-between items-center">
      <div>
        <h3 className="text-2xl font-semibold text-brandOne">Today Top News</h3>
      </div>
      <hr className="border-none h-[1px] bg-[#CFD4E4] w-[80%] mr-0" />
    </Flex>
  );
}

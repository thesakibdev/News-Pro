// css component 
import Flex from "../Flex"
import Heading from "../Heading"

export default function TopNews() {
  return (
    <main>
        <Heading/>
        <div className="mt-10">
            <Flex>
                <div className="w-[270px] h-[215px] mr-[30px] bg-gray-500"></div>
                <div className="w-[270px] h-[215px] mr-[30px] bg-gray-500"></div>
                <div className="w-[270px] h-[215px] mr-[30px] bg-gray-500"></div>
                <div className="w-[270px] h-[215px] bg-gray-500"></div>
            </Flex>
        </div>
    </main>
  )
}

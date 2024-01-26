import { AspectRatio } from '../ui/aspect-ratio'

const WrapFrame = ({ children }) => {
  return (
    <div className="flex w-full justify-center">
      <div className="w-full rounded-2xl border-x-8 border-b-[20px] border-t-[32px] border-gray-800 lg:w-1/2">
        <AspectRatio ratio={9 / 16}>{children}</AspectRatio>
      </div>
    </div>
  )
}

export default WrapFrame

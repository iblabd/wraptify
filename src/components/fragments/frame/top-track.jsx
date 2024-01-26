import { AspectRatio } from '../../ui/aspect-ratio'
import WrapFrame from '../../ui/wrap-frame'
import Image from 'next/image'

const TopTrackFrame = ({ tracks }) => {
  return (
    <WrapFrame>
      <div
        id="top-track-frame"
        className="h-full w-full bg-[#F674C2] object-cover px-6 py-14"
      >
        <div className="text-xl font-bold">My Top Songs</div>
        <div className="mt-6 flex flex-col items-center justify-center space-y-2">
          {tracks.map(({ name, artists, album }, index) => (
            <div
              className="flex w-full items-center justify-center space-x-2"
              key={index}
            >
              <div className="flex size-5 items-center justify-center">
                <span className="text-xl font-extrabold">{index + 1}</span>
              </div>
              <div className="flex aspect-square size-14 items-center">
                <AspectRatio ratio={1 / 1}>
                  <Image
                    src={album.images[0].url}
                    width={256}
                    height={256}
                    className="object-cover"
                    unoptimized
                  />
                </AspectRatio>
              </div>
              <div className="flex h-full w-full flex-col justify-center">
                <span className="text-xs font-bold">{name}</span>
                <span className="text-[0.625rem] opacity-90">
                  {artists.map((artist) => artist.name).join(', ')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WrapFrame>
  )
}

export default TopTrackFrame

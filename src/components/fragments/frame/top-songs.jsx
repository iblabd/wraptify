import { AspectRatio } from '@/components/ui/aspect-ratio'
import Spinner from '@/components/ui/spinner'
import SpotifyLogo from '@/components/ui/spotify-logo'
import WrapFrame from '@/components/ui/wrap-frame'
import Image from 'next/image'

const TopSongsFrame = ({ songs, bgColor, textColor }) => {
  return (
    <WrapFrame>
      <div
        id="top_songs"
        className="h-full w-full"
        style={{ backgroundColor: `${bgColor}`, color: `${textColor}` }}
      >
        {songs ? (
          <>
            <div className="px-6 py-14">
              <div className={`text-xl font-bold`}>My Top Songs</div>
              <div className="mt-6 flex flex-col items-center justify-center space-y-2">
                {songs &&
                  songs.map(({ name, artists, album }, index) => (
                    <div
                      className={`flex w-full items-center justify-center space-x-2`}
                      key={index}
                    >
                      <div className="flex aspect-square size-4 items-center justify-center">
                        <span className="text-xl font-extrabold">
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex aspect-square size-14 items-center">
                        <AspectRatio ratio={1 / 1}>
                          <Image
                            alt={name + ' by ' + artists[0].name}
                            src={album.images[0].url}
                            width={256}
                            height={256}
                            className="h-full w-full object-cover"
                            unoptimized
                          />
                        </AspectRatio>
                      </div>
                      <div className="flex h-full w-full flex-col justify-center">
                        <span className="line-clamp-1 text-xs/[1.125rem] font-bold">
                          {name}
                        </span>
                        <span className="line-clamp-1 text-[0.625rem]/[0.875rem] opacity-90">
                          {artists[0].name}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <SpotifyLogo
                width="76px"
                height="22px"
                fill={textColor}
              />
              <div
                className="text-sm font-semibold"
                style={{ color: textColor }}
              >
                s.id/wraptify
              </div>
            </div>
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Spinner className="size-8" />
          </div>
        )}
      </div>
    </WrapFrame>
  )
}

export default TopSongsFrame

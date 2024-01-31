import { Header } from '@/components/fragments/header'
import Link from 'next/link'

export default async function Generate() {
  return (
    <>
      <Header title="Privacy Policy" />
      <div className="mt-0 lg:mt-8">
        <ul className="flex list-disc flex-col space-y-4">
          <li>
            Wraptify is a free app that uses Spotify's Web API. If you use this
            app, you agree to use your Spotify username and data about your
            favorite artists and songs.
          </li>
          <li>
            Your information is not saved or shared with others by Wraptify. It
            is only used to show your wrapped Spotify.
          </li>
          <li>
            If you want to stop Wraptify from accessing your information, go to
            your{' '}
            <Link
              href="https://www.spotify.com/account/apps/"
              passHref
              className="text-blue-500 underline hover:text-blue-700"
              target="blank"
            >
              apps page
            </Link>{' '}
            and click "REMOVE ACCESS." You can find more details on how to do
            that in this{' '}
            <Link
              href="https://support.spotify.com/us/article/spotify-on-other-apps/"
              passHref
              className="text-blue-500 underline hover:text-blue-700"
              target="blank"
            >
              guide
            </Link>
            .
          </li>
        </ul>
      </div>
    </>
  )
}

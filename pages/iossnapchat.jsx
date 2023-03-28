import React from 'react'
import PostLayout from 'components/PostLayout'
import { iosSnapchatData as pageData } from 'utils/data'
import Breadcrumb from 'components/Breadcrumbs'
import Image from 'next/image'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import Link from 'next/link'

export default function SnapChat() {
  return (
    <>
      <div className="py-4">
        <Breadcrumb
          crumbs={[
            { name: 'Home', href: '/' },
            { name: pageData?.title, href: '/' },
          ]}
          dateUpdated={pageData?.dateUpdated}
        />
        <div className="grid  gap-4 py-4">
          <div className=" space-y-4">
            <div className="p-4 border border-black dark:border-white">
              <Image
                src={pageData.imageUrl}
                alt={pageData.title}
                sizes="100vw"
              />
            </div>
            <div className="p-4 border border-black dark:border-white space-y-2">
              <p>
                Snapchat is one of the most popular social media platforms,
                allowing users to share photos and videos with their friends and
                followers. While Snapchat is available for both iOS and Android
                devices, some users have expressed frustration with the
                differences between the two versions. Specifically, some
                features that are available on iOS are not available on Android.
                However, two modified versions of Snapchat are now available for
                Android users that include some of these missing features.
              </p>

              <p>
                Additionally, one of the modified versions of Snapchat also
                allows users to use Boomerang in streaks. Boomerang is a feature
                that allows users to create short videos that play forwards and
                backwards on a loop. This feature is not available on the
                official Snapchat app for Android, but it is included in this
                modified version. This can add a unique touch to streaks and
                make them stand out from others.
              </p>
              <p>
                While these modified versions of Snapchat can be appealing to
                some Android users, it is important to note that there are some
                risks associated with using third-party apps. These apps are not
                official and have not been approved by Snapchat. As a result,
                there is a risk that the app could be infected with malware or
                other malicious software. Additionally, Snapchat has strict
                policies regarding the use of third-party apps, and users who
                use these modified versions could be banned from the platform.
              </p>
            </div>

            <div className="my-6 p-4 border border-black dark:border-white space-y-4">
              <div>
                <div className="bg-neutral-100 dark:bg-neutral-900 p-6">
                  <h2 className="text-3xl font-bold">Watch Video</h2>
                  <p>
                    Hey Whats going on everybody, its Dhiman back with most
                    requested video on our channel {pageData.title}
                  </p>
                </div>
              </div>

              <LiteYouTubeEmbed id={pageData.videoId} title={pageData.title} />
            </div>

            <div className="p-4 border border-black">
              <div className="bg-neutral-100 dark:bg-neutral-900 p-6">
                <h2 className="text-3xl font-bold">Latest Version</h2>
              </div>
              <ul className="flex justify-between flex-col text-xl items-center p-4 space-y-4">
                {pageData.dataLinks.map((value, index) => (
                  <li key={index} className="w-full flex items-center gap-4">
                    <div className="w-2 h-2 bg-black"></div>
                    <Link href={value.link} target="_blank" className="w-full">
                      <div className="p-4 bg-neutral-100 hover:bg-black dark:hover:bg-neutral-600 hover:text-white w-full text-sm md:text-xl transition-color duration-500">
                        {value.title}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 border border-black dark:border-white space-y-2">
              <h2 className="text-3xl font-bold">Conclusion</h2>
              <p>
                In conclusion, these modified versions of Snapchat include some
                features that are missing from the official Android app,
                including the ability to use iOS fonts or iOS emojis, share
                streaks like an iPhone, and share posts, videos, and streaks in
                high quality. One of the modified versions also includes the
                ability to use Boomerang in streaks. However, users should
                proceed with caution when using third-party apps and be aware of
                the potential risks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

import React from 'react'
// import PostLayout from 'components/PostLayout'
import { iosMessengerData as pageData } from 'utils/data'
import Breadcrumb from 'components/Breadcrumbs'
import Image from 'next/image'
import Link from 'next/link'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'

export default function Messenger() {
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
                Facebook Messenger is a popular messaging app used by millions
                of people around the world. While the app is available for both
                iOS and Android devices, some users have expressed frustration
                with the differences between the two versions. Specifically,
                some features that are available on iOS are not available on
                Android. However, two modified versions of Facebook Messenger
                are now available for Android users that include some of these
                missing features.
              </p>

              <p>
                The first modified version of Facebook Messenger includes iOS
                fonts. These fonts are not available on the official Facebook
                Messenger app for Android, so this feature can make the app feel
                more like the iOS version. Users can customize their messages
                with the same fonts that they would use on an iPhone. This can
                add a unique touch to their messages and make them stand out
                from others.
              </p>
              <p>
                The second modified version of Facebook Messenger includes iOS
                emojis. These emojis are not available on the official Facebook
                Messenger app for Android, so this feature can also make the app
                feel more like the iOS version. Users can customize their
                messages with the same emojis that they would use on an iPhone.
                This can add a unique touch to their messages and make them
                stand out from others.
              </p>
              <p>
                Additionally, both modified versions of Facebook Messenger have
                the ability to send messages in high quality. While Facebook
                Messenger compresses images and videos to save space and reduce
                loading times, this can result in a loss of quality. However,
                these modified versions ensure that messages are sent in high
                quality. This can be particularly important for users who want
                to share high-quality photos and videos with their friends.
              </p>
              <p>
                One of the modified versions of Facebook Messenger also includes
                the ability to use message reactions like an iPhone. On the iOS
                version of Facebook Messenger, users can easily react to
                messages by selecting one of several emojis. This feature is not
                available on the official Facebook Messenger app for Android,
                but it is included in this modified version. This can make it
                easier for Android users to react to messages in the same way
                that they would on an iPhone.
              </p>
              <p>
                Finally, both modified versions of Facebook Messenger have the
                ability to use the same Messenger interface as the iOS version.
                This means that users can access all of the features of Facebook
                Messenger in the same way that they would on an iPhone. This can
                make it easier for Android users to navigate the app and find
                the features they need.
              </p>
              <p>
                While these modified versions of Facebook Messenger can be
                appealing to some Android users, it is important to note that
                there are some risks associated with using third-party apps.
                These apps are not official and have not been approved by
                Facebook. As a result, there is a risk that the app could be
                infected with malware or other malicious software. Additionally,
                Facebook has strict policies regarding the use of third-party
                apps, and users who use these modified versions could be banned
                from the platform.
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
                In conclusion, these modified versions of Facebook Messenger
                include some features that are missing from the official Android
                app, including the ability to use iOS fonts or iOS emojis, send
                messages in high quality, use message reactions like an iPhone,
                and access the same Messenger interface as the iOS version.
                However, users should proceed with caution when using
                third-party apps and be aware of the potential risks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

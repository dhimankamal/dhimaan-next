import React from 'react'
import { iosWhatsappData as pageData } from 'utils/data'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Image from 'next/image'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import { useRouter } from 'next/router'
import Breadcrumb from 'components/Breadcrumbs'

export default function Whatsapp() {
  const router = useRouter()
  const canonicalUrl = router.pathname
  return (
    <>
      <NextSeo
        title={pageData.title + '- dhimaan'}
        titleTemplate={pageData.title}
        defaultTitle={pageData.title}
        imageUrl={pageData.imageUrl.src}
        description={`Hey Whats going on everybody, its Dhiman back with most requested
      video on our channel ${pageData.title}`}
        canonical={'https://www.dhimaan.in' + canonicalUrl}
        openGraph={{
          url: 'https://www.dhimaan.in/',
          title: pageData.title,
          description: `Hey Whats going on everybody, its Dhiman back with most requested
      video on our channel ${pageData.title}`,
          images: [
            {
              url: 'https://dhimaan-next.vercel.app' + pageData.imageUrl.src,
              width: 1920,
              height: 1080,
              alt: pageData.title,
            },
          ],
        }}
      />
      <div className="py-4">
        <Breadcrumb
          crumbs={[
            { name: 'Home', href: '/' },
            { name: pageData?.title, href: '/' },
          ]}
          dateUpdated={pageData?.dateUpdated}
        />
        <div className="grid grid-cols-3 gap-4 py-4">
          <div className="col-span-2 space-y-4">
            <div className="p-4 border border-black dark:border-white">
              <Image
                src={pageData.imageUrl}
                alt={pageData.title}
                sizes="100vw"
              />
            </div>
            <div className="p-4 border border-black dark:border-white space-y-2">
              <p>
                As one of the most popular messaging apps in the world, WhatsApp
                is used by millions of people every day to stay in touch with
                friends, family, and colleagues. While the app is available on
                both iOS and Android devices, the user experience can differ
                between the two operating systems. In this blog, we will explore
                how to bring the iOS look and feel to WhatsApp on Android using
                FM WhatsApp, a modified version of the app.
              </p>
              <h2 className="text-2xl font-bold">What is FM WhatsApp?</h2>
              <p>
                FM WhatsApp is a modified version of the official WhatsApp app
                that includes additional features not found in the original
                version. These features include the ability to apply custom
                themes, hide online status, and send larger files. It is
                important to note that FM WhatsApp is not an official app and is
                not available on the Google Play Store. Users must download it
                from third-party sources and should exercise caution when doing
                so.
              </p>
              <h2 className="text-2xl font-bold">
                How to download and install iOS WhatsApp
              </h2>
              <p>
                Before downloading this WhatsApp, users should ensure they have
                enabled the option to install apps from unknown sources on their
                Android device. To do this, go to Settings - Security - Unknown
                Sources and enable the option.
              </p>
              <p>
                Next, download the FM/MB WhatsApp APK file from link below. Once
                the download is complete, tap on the file to begin the
                installation process. Follow the prompts to complete the
                installation.
              </p>
              <p>
                <span className="font-semibold">NOTE:</span> Users should note
                that FM WhatsApp is not affiliated with WhatsApp Inc. and may
                not be as secure as the official version of the app. It is
                important to use caution when installing and using the app.
              </p>
              <h2 className="text-2xl font-bold">
                How to apply iOS Theme to it?
              </h2>
              <p>
                Once FM/MB WhatsApp is installed on your Android device, you can
                apply the iOS theme to give your WhatsApp a new look and feel.
                Follow the steps below to apply the iOS theme using FM WhatsApp:
              </p>
              <ul>
                <li>
                  <span className="font-semibold">Step 1:</span> Open FM/MB
                  WhatsApp and go to the three-dot menu in the top right corner
                  of the screen.
                </li>
                <li>
                  <span className="font-semibold">Step 2:</span> Select MB
                  Preferences - MBThemes - Load Theme.
                </li>
                <li>
                  <span className="font-semibold">Step 3:</span> Browse the iOS
                  Theme xml in downloads.
                </li>
                <li>
                  <span className="font-semibold">Step 4:</span> Tap on the
                  Apply button to install the theme.
                </li>
                <li>
                  <span className="font-semibold">Step 5:</span> Once the theme
                  is installed, you will be prompted to restart WhatsApp. Tap on
                  the Restart button to do so.
                </li>
                <li>
                  <span className="font-semibold">Step 6:</span> Once WhatsApp
                  restarts, the iOS theme will be applied and you will see the
                  new look and feel of WhatsApp.
                </li>
              </ul>
              <h2 className="text-2xl font-bold">
                Other features of FM WhatsApp
              </h2>
              <p>
                In addition to applying custom themes, This WhatsApp includes
                other features not found in the official version of the app.
                These features include:
              </p>
              <p>
                Anti-Delete Messages: This feature prevents users from deleting
                messages they have sent, ensuring you always have a record of
                your conversations.
              </p>
              <p>
                Increased file sharing: With FM WhatsApp, users can send larger
                files, such as videos and images, than they can with the
                official version of the app.
              </p>
              <p>
                Hiding online status: This feature allows users to appear
                offline even when they are online, giving them more privacy and
                control over their online presence.
              </p>
              <p>
                Customization options: In addition to custom themes, FM WhatsApp
                includes a range of customization options, such as the ability
                to change the font and color scheme.
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
                While WhatsApp is available on both iOS and Android devices, the
                user experience can differ between the two operating systems.
                Using FM WhatsApp, users can apply custom themes and access
                additional features not found in the official version of the
                app, such as increased file sharing and anti-delete messages.
                However, users should exercise caution when downloading and
                using FM WhatsApp, as it is not an official app and may not be
                as secure as the original version of WhatsApp.
              </p>
            </div>
          </div>
          <div className="border border-black"></div>
        </div>
      </div>
    </>
  )
}

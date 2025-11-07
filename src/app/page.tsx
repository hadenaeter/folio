"use client";

import BackgroundVideo from "next-video/background-video";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";
import showcaseVideoLandscape from "../../videos/showcase-video-landscape.mp4";
import showcaseVideoPortrait from "../../videos/showcase-video-portrait.mp4";

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <main className="px-4 md:px-8 lg:px-16 z-10">
      <section id="landing">
        <div className="flex flex-col items-center gap-3 mb-5 md:my-7 text-center">
          <p className="text-6xl">Greetings and Welcome</p>
          <p className="text-2xl">I'm Haidar, a software engineer.</p>
        </div>

        <AspectRatio
          ratio={isMobile ? 9 / 16 : 16 / 9}
          id="landing-video"
          className="rounded-2xl md:rounded-lg overflow-hidden mx-auto border"
        >
          {/* <BackgroundVideo
          src={isMobile ? showcaseVideoPortrait : showcaseVideoLandscape}
          disableTracking
          disableCookies
        /> */}
          <BackgroundVideo
            src={
              isMobile ? "/showcase-portrait.mp4" : "/showcase-landscape.mp4"
            }
          />
        </AspectRatio>
      </section>
    </main>
  );
}

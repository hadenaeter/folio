"use client";

import BackgroundVideo from "next-video/background-video";
import { useIsMobile } from "@/hooks/use-mobile";
import showcaseVideoLandscape from "../../videos/showcase-video-landscape.mp4";
import showcaseVideoPortrait from "../../videos/showcase-video-portrait.mp4";

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <main className="px-4 md:px-8 lg:px-16 z-10">
      <div className="flex items-center justify-center rounded-2xl md:rounded-sm overflow-hidden md:max-h-[calc(100vh-104px)] mx-auto lg:aspect-16/9">
        <BackgroundVideo
          src={isMobile ? showcaseVideoPortrait : showcaseVideoLandscape}
          disableTracking
          disableCookies
        />
      </div>
    </main>
  );
}

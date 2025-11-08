"use client";

import { ExternalLink, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BackgroundVideo from "next-video/background-video";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { useIsMobile } from "@/hooks/use-mobile";
import showcaseVideoLandscape from "../../videos/showcase-video-landscape.mp4";
import showcaseVideoPortrait from "../../videos/showcase-video-portrait.mp4";

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <main className="px-4 md:px-16 pb-4 md:pb-16 z-10 lg:max-w-6xl mx-auto">
      <section id="landing">
        <Image
          id="banner-emblem"
          src="/polar-emblem.png"
          width={192}
          height={108}
          alt=""
          className="mx-auto mt-2 mb-2"
        />
        <div
          id="landing-intro"
          className="flex flex-col items-center gap-3 mb-5 md:mb-12 text-center"
        >
          <p className="text-6xl">Greetings & Welcome</p>
          <p className="text-2xl">I'm Haidar, a software engineer.</p>
        </div>
        <div
          id="landing-video"
          className="rounded-2xl md:rounded-lg overflow-hidden mx-auto border mb-12"
        >
          <AspectRatio ratio={isMobile ? 9 / 16 : 16 / 9}>
            {process.env.NODE_ENV === "production" ? (
              <BackgroundVideo
                src={isMobile ? showcaseVideoPortrait : showcaseVideoLandscape}
                disableTracking
                disableCookies
              />
            ) : (
              <video
                src={
                  isMobile
                    ? "/showcase-portrait.mp4"
                    : "/showcase-landscape.mp4"
                }
                autoPlay
                muted
                loop
                playsInline
              />
            )}
          </AspectRatio>
        </div>
      </section>

      <section id="profile" className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-4 md:flex-1">
          <div>
            <Card id="profile-experience">
              <CardHeader>
                <CardTitle>Education & Experience</CardTitle>
                <CardDescription>
                  My learning and professional experience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-2">
                  <strong>Education</strong>
                </p>
                <ProfileExperience
                  education={education}
                  professionalExperience={professionalExperience}
                />
              </CardContent>
              <CardFooter>
                <CardAction className="ml-auto">
                  <Button variant="link" className="cursor-pointer" asChild>
                    <Link href="#">
                      Click here to learn more
                      <LinkIcon />
                    </Link>
                  </Button>
                </CardAction>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card id="profile-research">
              <CardHeader>
                <CardTitle>Research</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="cursor-pointer"
                    asChild
                  >
                    <Link href="/">
                      <ExternalLink className="size-5" />
                    </Link>
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card id="profile-lab">
              <CardHeader>
                <CardTitle>Lab</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="cursor-pointer"
                    asChild
                  >
                    <Link href="/">
                      <ExternalLink className="size-5" />
                    </Link>
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-1">
          <div>
            <Card id="profile-projects">
              <CardHeader>
                <CardTitle>Projects</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="cursor-pointer"
                    asChild
                  >
                    <Link href="/">
                      <ExternalLink className="size-5" />
                    </Link>
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card id="profile-articles">
              <CardHeader>
                <CardTitle>Articles</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="cursor-pointer"
                    asChild
                  >
                    <Link href="/">
                      <ExternalLink className="size-5" />
                    </Link>
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card id="profile-about">
              <CardHeader>
                <CardTitle>About me</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="cursor-pointer"
                    asChild
                  >
                    <Link href="/">
                      <ExternalLink className="size-5" />
                    </Link>
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}

type Education = {
  schoolName: string;
  location: string;
  degree: string;
  gradYear: number;
  description: string;
  schoolLogo: string;
};

type ProfessionalExperience = {
  employer: string;
  location: string;
  startYear: number;
  endYear?: number;
  description: string;
  employerLogo: string;
};

const education: Education[] = [
  {
    schoolName: "University of New South Wales (UNSW)",
    location: "Canberra, Australia",
    degree: "Master of Cybersecurity",
    gradYear: 2027,
    description: "In-progress",
    schoolLogo: "unsw-logo-current.png",
  },
  {
    schoolName: "La Trobe University",
    location: "Melbourne, Australia",
    degree: "Bachelor of Cybersecurity",
    gradYear: 2025,
    description: "GPA 3.7",
    schoolLogo: "ltu-logo-current.png",
  },
  {
    schoolName: "Melbourne High School",
    location: "Melbourne, Australia",
    degree: "VCE",
    gradYear: 2020,
    description: "",
    schoolLogo: "mhs-logo-current.png",
  },
];

const professionalExperience: ProfessionalExperience[] = [
  {
    employer: "string",
    location: "string",
    startYear: 2022,
    endYear: 2025,
    description: "string",
    employerLogo: "string",
  },
];

function ProfileExperience({
  education,
  professionalExperience,
}: {
  education: Education[];
  professionalExperience: ProfessionalExperience[];
}) {
  return (
    <ItemGroup className="gap-4">
      {education.map((learning) => (
        <Item key={learning.degree} variant="outline">
          <ItemContent>
            <ItemTitle className="w-full">
              {learning.degree}{" "}
              <span className="ml-auto">{learning.gradYear}</span>
            </ItemTitle>
            <ItemDescription>{learning.schoolName}</ItemDescription>
            <ItemDescription>{learning.description}</ItemDescription>
          </ItemContent>
          <ItemMedia variant="image">
            <Image
              src={`/${learning.schoolLogo}`}
              alt={learning.schoolName}
              width={72}
              height={72}
            />
          </ItemMedia>
        </Item>
      ))}
    </ItemGroup>
  );
}

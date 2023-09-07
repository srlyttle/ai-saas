"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    name: "Joel Smith",
    avatar: "J",
    title: "Software Engineer",
    company: "Daceet",
    description: "This is the best application I've ever used!",
  },
  {
    name: "Antonio Jones",
    avatar: "A",
    title: "Designer",
    company: "Pincte Recruit Co",
    description: "I use this daily for analysing candidate data",
  },
  {
    name: "Mark Macer",
    avatar: "M",
    title: "CEO",
    description:
      "This app has changed my life, cannot imagine working without it!",
    company: "Eat street",
  },
  {
    name: "Mary Jones",
    avatar: "M",
    title: "CFO",
    description:
      "The best in class, definitely worth the premium subscription!",
    company: "Blanck",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            {/* <CardHeader>

              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader> */}
            <section>
              <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <figure className="max-w-screen-md mx-auto">
                  <svg
                    className="h-12 mx-auto mb-3 text-zinc-400 dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <p className="text-2xl font-medium text-zinc-400 dark:text-white">
                      {item.description}
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <Image
                      width={10}
                      height={10}
                      className="w-6 h-6 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                      alt="profile picture"
                    />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div className="pr-3 font-medium text-zinc-400 dark:text-white">
                        {item.name}
                      </div>
                      <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                        {`${item.title} @ ${item.company}`}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </Card>
        ))}
      </div>
    </div>
  );
};

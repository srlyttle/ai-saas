"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Albertein : your new AI assistant</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-4">
          <TypewriterComponent
            options={{
              strings: [
                "Unlocking Business Potential with AI",
                "Embrace artificial intelligence to automate tasks, make smarter decisions, and enhance customer experiences",
                "Data-Powered Insights for Success",
                "Leverage AI to extract valuable insights from data, enabling data-driven strategies and growth.",
                "Personalization at Scale",
                "Use AI to tailor products, services, and marketing to individual customer preferences, fostering loyalty and engagement.",
                "Efficiency and Innovation",
                "Harness the power of AI to streamline operations, reduce costs, and drive innovation in your business.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Load you data, let Albertein show you its magic!
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  );
};

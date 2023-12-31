// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// export default function LandingPage() {
//   return (
//     <div className="flex flex-col">
//       <h1> unprotected page</h1>
//       <Link href={"/sign-in"}>
//         <Button>SignIn</Button>
//       </Link>

//       <Link href={"/sign-up"}>
//         <Button>Register</Button>
//       </Link>
//     </div>
//   );
// }
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";

const LandingPage = () => {
  return (
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
};

export default LandingPage;

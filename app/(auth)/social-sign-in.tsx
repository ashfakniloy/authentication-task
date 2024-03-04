import Link from "next/link";
import { Github, Google, Okta, Slack } from "@/components/icons";

const socialLinks = [
  {
    name: "Github",
    link: "https://github.com",
    icon: <Github />,
  },
  {
    name: "Google",
    link: "https://google.com",
    icon: <Google />,
  },
  {
    name: "Slack",
    link: "https://slack.com",
    icon: <Slack />,
  },
  {
    name: "Okta",
    link: "https://okta.com",
    icon: <Okta />,
  },
];

export default function SocialSignIn() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <hr className="w-full" />
        <p className="mx-3">or</p>
        <hr className="w-full" />
      </div>

      <div className="mt-5 flex flex-col items-center">
        <p className="text-sm font-medium text-custom-gray2">Sign in with</p>
        <div className="mt-4 flex justify-center gap-4">
          {socialLinks.map((socialLinks) => (
            <Link
              key={socialLinks.name}
              href={socialLinks.link}
              target="_blank"
              title={socialLinks.name}
              className="size-10 rounded-md flex justify-center items-center border border-custom-gray3 hover:bg-custom-gray3 transition-colors duration-200"
            >
              {socialLinks.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

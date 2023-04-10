import Link from "next/link";
import { SVGProps, useState } from "react";
import ThemedModal from "../themed/themedModal";
import Login from "../auth/login";
import NavBarV2 from "./navBarV2";
import { BsDiscord } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";

const meta = {
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/tsi_org",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "Discord",
      href: "https://discord.gg/6ZBQMshJ",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <BsDiscord {...props} />
      ),
    },
  ],
};

export type SocialMeta = (typeof meta.social)[number];

interface BasePageV2Props {
  children: React.ReactNode;
}

const BasePageV2 = (props: BasePageV2Props) => {
  const { children } = props;

  const [openOnboarding, setOpenOnboarding] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
      <div className="bg-white">
        <NavBarV2
          setOpenLogin={setOpenLogin}
          setOpenOnboarding={setOpenOnboarding}
          socials={meta.social}
        />

        <main>{children}</main>
        <footer className="bg-gray-50" aria-labelledby="footer-heading">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
            <div className="pt-8 md:flex md:items-center md:justify-between">
              <div className="flex space-x-6 md:order-2">
                {meta.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <div className="mt-8 text-xs sm:text-base text-gray-400 md:order-1 md:mt-0 flex flex-row gap-4">
                <span className="hidden sm:inline"></span>
                <span className="inline sm:hidden"></span>
                <Link href={"/privacy"} className="hover:text-black">
                  Privacy Policy
                </Link>
                <Link href={"/terms"} className="hover:text-black">
                  Terms of Use
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <ThemedModal open={openOnboarding} setOpen={setOpenOnboarding}>
        <Login formState="signup" />
      </ThemedModal>
      <ThemedModal open={openLogin} setOpen={setOpenLogin}>
        <Login formState="login" />
      </ThemedModal>
    </>
  );
};

export default BasePageV2;

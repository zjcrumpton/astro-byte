import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons";
import { FaGithub, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

interface ContactItemProps {
  Icon: IconType;
  to: string;
}

const ContactItem: FC<ContactItemProps> = ({ Icon, to }) => {
  return (
    <Link href={to} className="flex gap-2 justify-center items-center my-10">
      <Icon className="hover:text-glow-blue" size={50} />
    </Link>
  );
};

export default function Contact() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col justify-center items-center">
            <h1>For business inquiries:</h1>
            <a href="mailto:zac@astrobyte.com">
              <h2 className="text-glow-blue">zac@astrobyte.dev</h2>
            </a>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1>Social Media:</h1>

            <div className="flex justify-center items-center gap-10">
              <ContactItem to="https://github.com/zjcrumpton" Icon={FaGithub} />
              <ContactItem
                to="https://www.tiktok.com/@astrobytedev"
                Icon={FaTiktok}
              />
              <ContactItem
                to="https://twitter.com/AstroByteDev"
                Icon={FaTwitter}
              />
              <ContactItem
                to="https://www.youtube.com/@AstroByteDev"
                Icon={FaYoutube}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

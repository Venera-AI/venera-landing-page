import home from "@/content/home.json";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IconType } from "react-icons";

type Social = "facebook" | "instagram";

type IconConfig = {
  Icon: IconType;
  size: number;
  className: string;
};

const iconsConfig: Record<Social, IconConfig> = {
  facebook: {
    Icon: FaFacebookF,
    size: 24,
    className: "-ml-1 stroke-white fill-white",
  },
  instagram: {
    Icon: FaInstagram,
    size: 26,
    className: "stroke-white",
  },
};

export default function FooterSection() {
  const { footer } = home;
  const contact = footer.contact;

  return (
    <footer className="[background:linear-gradient(135deg,#9ec5f7,#2d44ad)]">
      <div className="text-white flex flex-col sm:flex-row justify-between gap-10 sm:gap-0 lg:max-w-4xl max-w-2xl m-auto py-16 px-8">
        {/* Contact */}
        <section className="mt-4 font-medium">
          <h2 className="text-4xl font-light">{footer.ourContactLabel}</h2>
          <p className="mt-6">{contact.address}</p>

          <p className="mt-6">
            {footer.callLabel}:{" "}
            <a href={`tel:${contact.phone}`} className="underline">
              {contact.phone}
            </a>
          </p>
          <p>
            {footer.emailLabel}:{" "}
            <a href={`mailto:${contact.email}`} className="underline">
              {contact.email}
            </a>
          </p>
        </section>

        <div className="flex flex-col justify-between sm:gap-0 gap-10">
          {/* Business */}
          <section>
            <h2 className="text-[22px]">{footer.businessHoursLabel}</h2>

            <div className="flex flex-col gap-4">
              {footer.businessHours.map((hour) => (
                <p key={hour.day} className="text-[12px]">
                  {hour.day}
                  <br />
                  {hour.time}
                </p>
              ))}
            </div>
          </section>

          {/* Socials */}
          <section className="mt-26">
            <h2 className="text-[22px]">{footer.followLabel}</h2>
            <div className="flex gap-1 mt-2">
              {contact.socials.map((social) => {
                const { Icon, size, className } =
                  iconsConfig[social.type as Social];
                return (
                  <a
                    key={social.type}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={size} className={className} />
                  </a>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IconType } from "react-icons";
import { useMessages, useTranslations } from "next-intl";

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
  const t = useTranslations("homePage.footer");
  const footerMessages = useMessages().homePage.footer;
  const businessHoursKeys = Object.keys(
    footerMessages.businessHours,
  ) as readonly (keyof typeof footerMessages.businessHours)[];
  const socialKeys = Object.keys(
    footerMessages.contact.socials,
  ) as readonly (keyof typeof footerMessages.contact.socials)[];

  return (
    <footer className="[background:linear-gradient(135deg,#9ec5f7,#2d44ad)]">
      <div className="text-white flex flex-col sm:flex-row justify-between gap-10 sm:gap-0 lg:max-w-4xl max-w-2xl m-auto py-16 px-8">
        {/* Contact */}
        <section className="font-medium">
          <h2 className="text-4xl font-light">{t("ourContactLabel")}</h2>
          <p className="mt-6">{t("contact.address")}</p>

          <p className="mt-6">
            {t("callLabel")}:{" "}
            <a href={`tel:${t("contact.phone")}`} className="underline">
              {t("contact.phone")}
            </a>
          </p>
          <p>
            {t("emailLabel")}:{" "}
            <a href={`mailto:${t("contact.email")}`} className="underline">
              {t("contact.email")}
            </a>
          </p>
        </section>

        <div className="flex flex-col justify-between sm:gap-0 gap-10">
          {/* Business */}
          <section>
            <h2 className="text-[22px]">{t("businessHoursLabel")}</h2>

            <div className="flex flex-col gap-4">
              {businessHoursKeys.map((businessHoursKey) => (
                <p key={businessHoursKey} className="text-[12px]">
                  {t(`businessHours.${businessHoursKey}.day`)}
                  <br />
                  {t(`businessHours.${businessHoursKey}.time`)}
                </p>
              ))}
            </div>
          </section>

          {/* Socials */}
          <section className="mt-26">
            <h2 className="text-[22px]">{t("followLabel")}</h2>
            <div className="flex gap-1 mt-2">
              {socialKeys.map((socialKey) => {
                const socialType = t(`contact.socials.${socialKey}.type`);
                const socialLink = t(`contact.socials.${socialKey}.link`);
                const { Icon, size, className } =
                  iconsConfig[socialType as Social];
                return (
                  <a
                    key={socialType}
                    href={socialLink}
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

import home from "@/content/home.json";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function FooterSection() {
  const { contact, footer } = home;
  return (
    <footer className="[background:linear-gradient(135deg,#9ec5f7,#2d44ad)]">
      <div className="text-white flex flex-col sm:flex-row justify-between gap-10 sm:gap-0 min-h-[400px] lg:max-w-4xl max-w-2xl m-auto py-16 px-8">
        {/* Contact */}
        <section className="mt-4 font-medium">
          <h2 className="text-4xl">{footer.our_contact_label}</h2>
          <p className="mt-6">{contact.address}</p>

          <p className="mt-6">
            {footer.call_label}:{" "}
            <a href={`tel:${contact.phone}`} className="underline">
              {contact.phone}
            </a>
          </p>
          <p>
            {footer.email_label}:{" "}
            <a href={`mailto:${contact.email}`} className="underline">
              {contact.email}
            </a>
          </p>
        </section>

        <section className="flex flex-col justify-between sm:gap-0 gap-10">
          {/* Business */}
          <div>
            <h2 className="text-[22px]">{footer.business_hours_label}</h2>
            <p className="text-[12px]">
              {footer.monday_saturday}
              <br />
              {footer["8am_8pm"]}
            </p>

            <p className="mt-4 text-[12px]">
              {footer.sundays}
              <br />
              {footer["12noon_8pm"]}
            </p>
          </div>

          {/* Socials */}
          <div>
            <h2 className="text-[22px]">{footer.follow_label}</h2>
            <div className="flex gap-1 mt-2">
              <a href="">
                <FaFacebookF
                  size={24}
                  className="-ml-1 stroke-white fill-white"
                />
              </a>
              <a href="">
                <FaInstagram size={26} className=" stroke-white" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

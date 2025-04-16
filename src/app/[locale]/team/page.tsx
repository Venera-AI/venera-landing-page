import { Locale } from "@/i18n/routing";
import { getMetadata } from "@/utils/getMetadata";
import { withLocale } from "@/with-locale";
import { Metadata } from "next";
import { useMessages } from "next-intl";
import Image from "next/image";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const metadata = getMetadata(locale);
  return metadata;
}

export default withLocale(function Team() {
  const messages = useMessages();

  // Data to render a grid of team members with empty cells in between
  const membersData = Object.values(messages.teamPage.members);
  const memberGridData = Array(membersData.length * 2 - 1)
    .fill(null)
    .map((_, index) => (index % 2 === 0 ? membersData[index / 2] : null));

  return (
    <main className="py-10 min-h-lvh bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <h1 className="text-center text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          {messages.teamPage.headline}
        </h1>
        <ul className="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-9 gap-x-0">
          {memberGridData.map((member, index) =>
            member === null ? (
              <div key={index} className="hidden lg:block"></div>
            ) : (
              <li key={index} className="flex flex-col items-center">
                <div className="w-28 h-28 relative bg-[#C8DBF3] rounded-lg overflow-hidden">
                  <Image
                    className="object-cover"
                    fill
                    src={member.image}
                    alt={`Photo of ${member.name}`}
                  />
                </div>
                <span className="mt-6 lg:mt-4 text-lg font-semibold leading-tight text-black">
                  {member.name}
                </span>
                <span className="mt-1 text-base leading-tight text-gray-600">
                  {member.position}
                </span>
              </li>
            ),
          )}
        </ul>
      </div>
    </main>
  );
});

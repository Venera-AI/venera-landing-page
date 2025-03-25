import { privacy } from "@/content/home.json";

export default function PrivacySection() {
  return (
    <section className="py-16 px-8 md:p-16 bg-white">
      <div className="flex items-center justify-center">
        <img
          src="./images/privacy.PNG"
          alt="Privacy Illustration"
          className="w-1/10 mb-6"
        />
      </div>
      <h2 className="font-medium text-4xl text-center">{privacy.headline}</h2>
      <div className="mt-8 mx-auto max-w-3xl p-8 rounded-lg shadow-lg">
        <p className="mt-4 text-center text-2xl leading-relaxed">
          {privacy.body}
        </p>
      </div>
      <div className="mt-6 flex justify-center">
        <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full text-lg">
          Read More
        </button>
      </div>
    </section>
  );
}

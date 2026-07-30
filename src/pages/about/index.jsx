import SectionTitle from "../../components/common/SectionTitle";

import aboutImage from "../../assets/images/about/about.jpg";

function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-amber-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle
            subtitle="About Us"
            title="Authentic Vietnamese Cuisine"
            description="We bring traditional Vietnamese flavours together with fresh ingredients and a warm dining experience."
          />
        </div>
      </section>

      {/* Story */}
      <section className="py-12 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:items-center">
          <img
            src={aboutImage}
            alt="About our restaurant"
            className="w-full rounded-xl object-cover"
          />

          <div>
            <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">
              Our Story
            </h2>

            <p className="mb-4 leading-8 text-gray-600">
              Founded with a passion for Vietnamese cuisine, our restaurant aims
              to share authentic flavours and memorable meals with everyone.
            </p>

            <p className="leading-8 text-gray-600">
              From traditional recipes to fresh ingredients, every dish is
              prepared with care and dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle subtitle="Our Values" title="What We Believe In" />

          <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-6 text-center shadow sm:p-8">
              <h3 className="mb-3 text-xl font-semibold">Fresh Ingredients</h3>

              <p className="text-gray-600">
                Quality ingredients create great dishes.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 text-center shadow sm:p-8">
              <h3 className="mb-3 text-xl font-semibold">Authentic Recipes</h3>

              <p className="text-gray-600">
                Traditional flavours from Vietnam.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 text-center shadow sm:p-8 sm:col-span-2 lg:col-span-1">
              <h3 className="mb-3 text-xl font-semibold">Warm Service</h3>

              <p className="text-gray-600">Making every guest feel welcome.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

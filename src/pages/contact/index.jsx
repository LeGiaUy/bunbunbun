import SectionTitle from "../../components/common/SectionTitle";
import Button from "../../components/common/Button";

function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-amber-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            subtitle="Contact"
            title="Get In Touch With Us"
            description="Have a question or want to make a reservation? We'd love to hear from you."
          />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          {/* Information */}
          <div>
            <h2 className="mb-6 text-3xl font-bold">Contact Information</h2>

            <div className="space-y-6 text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-900">Address</h3>
                <p>
                  134B Kingsland Road,
                  <br />
                  London, E2 8DY
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p>020 7729 6494</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Opening Hours</h3>
                <p>
                  Monday - Thursday:
                  <br />
                  12pm - 3.30pm & 5.30pm - 10.30pm
                </p>

                <p>
                  Friday - Sunday:
                  <br />
                  12pm - 11pm
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p>hello@bunbunbun.co</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6 rounded-xl bg-white p-8 shadow">
            <div>
              <label className="mb-2 block font-medium">Name</label>

              <input
                type="text"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-amber-600"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Email</label>

              <input
                type="email"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-amber-600"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Message</label>

              <textarea
                rows="5"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-amber-600"
                placeholder="Your message"
              />
            </div>

            <Button>Send Message</Button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;

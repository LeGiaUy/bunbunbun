import SectionTitle from "../../components/common/SectionTitle";
import LocationCard from "./LocationCard.jsx";

function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-amber-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle
            subtitle="Contact"
            title="Get In Touch With Us"
            description="Have a question or want to make a reservation? We'd love to hear from you."
          />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:gap-8 sm:px-6 lg:grid-cols-2">
          <LocationCard
            name="Hoxton"
            address={
              <>
                134B Kingsland Road,
                <br />
                London, E2 8DY
              </>
            }
            phone="020 7729 6494"
            phoneTel="+442077296494"
            hours={
              <>
                Monday-Thursday:
                <br />
                12pm-3.30pm & 5.30pm-10.30pm
                <br />
                <br />
                Friday:
                <br />
                12pm-3.30pm & 5.30pm-11pm
                <br />
                <br />
                Saturday-Sunday:
                <br />
                12pm-11pm
              </>
            }
            mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.0345860166826!2d-0.07947158711267921!3d51.53092547170113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cbc06fd9281%3A0xafcfabc28c5fe836!2s134B%20Kingsland%20Rd%2C%20London%20E2%208DY%2C%20V%C6%B0%C6%A1ng%20Qu%E1%BB%91c%20Anh!5e0!3m2!1svi!2s!4v1785391928759!5m2!1svi!2s"
          />

          <LocationCard
            name="Dalston"
            address={
              <>
                511 Kingsland Road,
                <br />
                London, E8 4AR
              </>
            }
            phone="020 3726 5587"
            phoneTel="+442037265587"
            hours={
              <>
                Monday-Thursday:
                <br />
                12pm-3.30pm & 5.30pm-10.30pm
                <br />
                <br />
                Friday:
                <br />
                12pm-3.30pm & 5.30pm-11pm
                <br />
                <br />
                Saturday-Sunday:
                <br />
                12pm-11pm
              </>
            }
            mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.254737664044!2d-0.07867338711203056!3d51.54522777170442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c921f5ecdc3%3A0xff817d80201166da!2zNTExIEtpbmdzbGFuZCBSZCwgTG9uZG9uIEU4IDRBUiwgVsawxqFuZyBRdeG7kWMgQW5o!5e0!3m2!1svi!2s!4v1785392100362!5m2!1svi!2s"
          />
        </div>
      </section>
    </>
  );
}

export default Contact;

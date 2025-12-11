/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

export const metadata = {
  title: "1 Day Private Great Ocean Road Tour",
  description:
    "A premium 1-day private Great Ocean Road tour — tailored, comfortable and unforgettable.",
};

export default function Oceanhero() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 -mt-15">
      <section className="relative w-full h-[500px] bg-black">
        <Image
          src="https://images.unsplash.com/photo-1761775607993-cda287a4e1e5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Great Ocean Road coastline"
          fill
          className="object-cover object-center"
          priority
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/30 to-black/40" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-5xl px-6 text-center">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              1 Day Private Great Ocean Road Tour
            </h1>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto">
              Experience the iconic coastal drive in a single, perfectly planned
              day — private vehicle, expert driver-guide, flexible stops and
              premium comfort. Ideal for couples, families or small groups who
              want the highlights without the rush.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/book/1-day-great-ocean-road"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#D4915E] text-white font-semibold shadow-lg hover:brightness-95"
              >
                Book Now
              </a>

              <a
                href="#itinerary"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-gray-900 font-medium shadow-sm hover:bg-gray-100"
              >
                View Itinerary
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <article className="prose lg:prose-lg col-span-2">
            <h2 className="mt-0">Overview</h2>

            <p>
              Our 1 Day Private Great Ocean Road Tour packs the coastline’s most
              famous sights into a relaxed, luxury-driven itinerary. From
              dramatic sea cliffs and limestone stacks to lush rainforest and
              coastal lookouts, you’ll travel in a premium, air-conditioned
              vehicle with an experienced local driver-guide who tailors the day
              to your interests. Photography stops, short walks and quality
              dining options are woven into the route to give you a complete
              experience in a single day.
            </p>

            <h3 id="itinerary">Itinerary (sample)</h3>

            <p>
              The day typically begins with a hotel pickup in Melbourne around
              7:00–8:00 AM (flexible on request). We head south-west along
              scenic highways, making our first stops at morning lookouts before
              arriving at Torquay for a short coffee break. From there we drive
              the coastal sections with stops at Bells Beach (famous for
              surfing), iconic viewpoints along the Great Ocean Road, and the
              charming village of Lorne for a relaxed lunch.
            </p>

            <p>
              The highlight of the day is the Twelve Apostles precinct — the
              best time for photos is often mid to late afternoon when the light
              softens and the limestone stacks appear at their most dramatic.
              Depending on timing and weather, we also visit Loch Ard Gorge and
              other nearby formations. The return trip avoids heavy-traffic
              bottlenecks where possible and you’ll be dropped back in Melbourne
              in the evening.
            </p>

            <h3>What's Included</h3>
            <ul>
              <li>Private vehicle and professional driver-guide</li>
              <li>Hotel pickup and drop-off (Melbourne CBD)</li>
              <li>All park entry fees where applicable</li>
              <li>Complimentary bottled water and light snacks</li>
              <li>Flexible itinerary tailored to group needs</li>
            </ul>

            <h3>Premium Add-ons</h3>
            <p>
              Upgrade to gourmet picnic lunch, private photoshoot at key
              lookouts, helicopter scenic flight (subject to availability) or a
              later return time to catch sunset photos. We can also arrange
              wheelchair-accessible vehicles if required — please advise at
              booking.
            </p>

            <h3>Why choose this private option?</h3>
            <p>
              Unlike coach tours with fixed timetables and large groups, a
              private tour gives you control — linger at a lookout, change lunch
              plans, or avoid a walk if mobility is an issue. The vehicle is
              comfortable and roomy, with plenty of luggage space for day bags.
            </p>

            <h3>Full Description — What to expect (detailed)</h3>

            <p>
              Your driver-guide is a local expert who starts the day by matching
              the route to conditions (weather, tides, and crowds) and your
              preferences. After an efficient pickup process, you’ll settle into
              the vehicle for the scenic drive. The morning passages often offer
              softer light—excellent for coastal photography—while mornings are
              typically less crowded at main lookouts.
            </p>

            <p>
              At lunchtime, there are curated dining options ranging from
              waterfront cafes to elevated local eateries. We carefully select
              stops that offer both a sense of place and quality food — if you
              prefer to bring your own picnic, we’ll suggest sheltered picnic
              spots near the coastline.
            </p>

            <p>
              The highlight—Twelve Apostles—provides dramatic viewpoints from
              multiple platforms. Your guide will pick the best vantage points
              for photos, and if time allows, walk you down the boardwalks to
              get a closer perspective. Loch Ard Gorge is included for its rich
              natural history and evocative shoreline. Along the way, you’ll
              pass through quaint towns where you can browse local galleries and
              stores if you wish.
            </p>

            <h3>Practical Info</h3>
            <p>
              Wear comfortable shoes for short walks, bring a windproof layer
              (coastal weather can be changeable), sunscreen and a hat. Pickup
              times and exact itinerary can be customised — please provide
              dietary requirements or mobility notes when you book.
            </p>

            <h3>Cancellation &amp; Booking Policy</h3>
            <p>
              Standard terms apply: free changes up to 48 hours before
              departure; full refund in the event of severe weather
              cancellations (or the option to reschedule). Private bookings
              require a deposit at time of reservation — contact us for group
              rates and corporate bookings.
            </p>

            <h3>Customer Testimonials</h3>
            <blockquote>
              "An absolutely seamless day — our guide tailored stops and even
              found secret lookouts away from the crowds. The driver was
              professional and the lunch recommendation was perfect." — A. K.
            </blockquote>

            <div>
              <h3>About the Region</h3>
              <p>
                The Great Ocean Road is one of the world’s most celebrated
                coastal drives. Built by returned soldiers and dedicated as a
                war memorial, the route hugs dramatic cliffs, winds through
                eucalyptus forest and crosses dramatic headlands. Its geology is
                a lesson in time — towering limestone formations have been
                shaped by wind and wave over millions of years. The climate is
                coastal temperate; seasons are distinct and each brings a
                slightly different light and wildlife viewing opportunities.
              </p>

              <p>
                Wildlife sightings are common — keep an eye out for seabirds,
                echidnas and, in certain seasons, whales migrating offshore. Our
                guides have local knowledge of the best vantage points to
                increase your chances of seeing native animals while keeping
                disturbance to a minimum.
              </p>

              <p>
                This private day tour is designed to balance iconic highlights
                with slow moments — the sort of day that lets you breathe,
                photograph and connect with the landscape rather than just tick
                boxes. We aim for small-group warmth and a premium travel
                comfort that leaves you with memorable photos and relaxed travel
                time.
              </p>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href="/book/1-day-great-ocean-road"
                className="inline-block px-6 py-3 rounded-md bg-[#D4915E] text-white font-semibold shadow"
              >
                Reserve Your Private Tour
              </a>

              <a
                href="/contact"
                className="inline-block px-6 py-3 rounded-md border border-gray-200 bg-white text-gray-900 font-medium"
              >
                Ask a Question
              </a>
            </div>
          </article>

          <aside className="col-span-1 sticky top-24 self-start">
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h4 className="text-lg font-semibold">Quick Facts</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <strong>Duration:</strong> 12–14 hours (approx.)
                </li>
                <li>
                  <strong>Pickup:</strong> Melbourne CBD
                </li>
                <li>
                  <strong>Group size:</strong> Private (2–6 recommended)
                </li>
                <li>
                  <strong>Comfort:</strong> Premium vehicle, A/C
                </li>
                <li>
                  <strong>Difficulty:</strong> Easy — short walks only
                </li>
              </ul>

              <div className="mt-6">
                <a
                  href="/book/1-day-great-ocean-road"
                  className="w-full block text-center px-4 py-3 rounded-md bg-[#D4915E] text-white font-semibold"
                >
                  Book This Tour
                </a>
              </div>

              <div className="mt-4 text-xs text-gray-500">
                Need a tailored itinerary or private vehicle for a larger group?
                Contact our team to arrange bespoke options.
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-white p-4 shadow">
              <h5 className="font-medium">Other Premium Tours</h5>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href="/tours/2-day-great-ocean-road"
                    className="hover:underline"
                  >
                    2 Day Great Ocean Road
                  </a>
                </li>
                <li>
                  <a
                    href="/tours/yarra-valley-winery"
                    className="hover:underline"
                  >
                    Yarra Valley Private Winery Tour
                  </a>
                </li>
                <li>
                  <a
                    href="/tours/melbourne-private"
                    className="hover:underline"
                  >
                    Private Melbourne Highlights
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-12">
          <h3 className="mb-4">Photo Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "https://images.unsplash.com/photo-1599827167493-e0946beaaa14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1699228258719-199cb0c2cdea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1761775607993-cda287a4e1e5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1603120255508-598db35897b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ].map((img, index) => (
              <div
                key={index}
                className="relative h-40 rounded-lg overflow-hidden bg-gray-100"
              >
                <Image src={img} alt={img} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-2xl shadow">
          <h3>Frequently Asked Questions</h3>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-medium">
                Can we change the pickup location?
              </h4>
              <p className="text-sm text-gray-600">
                Yes — we can pick up from many suburbs for an additional fee.
              </p>
            </div>

            <div>
              <h4 className="font-medium">Is lunch included?</h4>
              <p className="text-sm text-gray-600">
                Lunch is not included by default but can be added as a premium
                option.
              </p>
            </div>

            <div>
              <h4 className="font-medium">Is this suitable for children?</h4>
              <p className="text-sm text-gray-600">
                Yes — families love this tour. Booster seats available on
                request.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

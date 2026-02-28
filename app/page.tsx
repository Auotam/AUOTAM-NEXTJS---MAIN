import Container from "../components/ui/Container"
import Section from "../components/ui/Section"

export default function Home() {
  return (
    <main className="bg-[#fff1f2] min-h-screen">
      <Section>
        <Container>
          <div className="max-w-3xl pt-28 pb-24">

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight text-black mb-8">
              Systems That Make
              <br />
              Growth Predictable.
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl leading-relaxed">
              We design operational systems, intelligent automation,
              and digital infrastructure that eliminate chaos and
              make growth scalable.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://calendly.com/auotam/meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#b91c1c] text-white rounded-full text-sm font-medium hover:bg-[#991b1b] transition"
              >
                Book a Systems Discovery Call
              </a>

              <a
                href="#what-we-build"
                className="px-6 py-3 bg-white border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition"
              >
                Explore Systems
              </a>
            </div>

          </div>
        </Container>
      </Section>
    </main>
  )
}

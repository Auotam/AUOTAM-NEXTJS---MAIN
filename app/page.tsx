import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="pt-28 pb-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.02]">
              Systems That Make
              <br />
              Growth Predictable.
            </h1>

            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-[var(--muted)] max-w-2xl">
              We design operational systems, intelligent automation, and digital
              infrastructure that eliminate chaos and make growth scalable.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://calendly.com/auotam/meeting"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">Book a Systems Discovery Call</Button>
              </a>

              <a href="/what-we-build">
                <Button variant="secondary">Explore Systems</Button>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

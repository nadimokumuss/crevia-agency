import Container from "@/components/ui/Container";

export default function WorksHero() {
  return (
    <section className="flex min-h-[40vh] items-center bg-gradient-to-br from-koyu-yesil via-orman-yesili/30 to-koyu-yesil">
      <Container className="py-28 text-center">
        <p className="mb-5 font-syne text-sm font-semibold uppercase tracking-widest text-hardal-sarisi">
          Business Tools
        </p>
        <h1 className="mb-5 font-clash text-4xl font-bold text-white md:text-6xl">
          Crevia <span className="text-hardal-sarisi">Works</span>
        </h1>
        <p className="mx-auto max-w-2xl font-syne text-lg leading-relaxed text-nane-yesili/80 md:text-xl">
          Satış ekipleri ve reklam operasyonları için geliştirdiğimiz pratik iş araçları.
        </p>
      </Container>
    </section>
  );
}

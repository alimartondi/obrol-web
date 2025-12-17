export default function Hero() {
  return (
    <section className="pt-40 pb-16">
      <div className="container-wrapper grid md:grid-cols-2 items-center gap-16">
        <div className="space-y-4">
          <span className="ml-1">Why Obrol</span>
          <h2 className="-ml-0.5 secondary-title">
            Built for Indonesia, Built for Scale
          </h2>
          <p>
            Indonesia speaks across hundreds of accents, environments, and
            frontline realities. Obrol is designed to understand this
            complexity. It captures the conversations happening in stores,
            branches, markets, and communities and turns them into clear,
            reliable understanding that organisations can use every day.
          </p>
        </div>
        <div>
          <div className="aspect-16/11 rounded-lg bg-accent"></div>
        </div>
      </div>
    </section>
  );
}

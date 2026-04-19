

const Hero = ({ name, tagline, phone }: any) => {
  return (
    <section style={{ padding: "40px", textAlign: "center" }}>
      <h1>{name}</h1>
      <p>{tagline}</p>

      <a href={`https://wa.me/${phone}`}>
        Book on WhatsApp
      </a>
    </section>
  );
};

export default Hero;



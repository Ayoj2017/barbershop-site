const Contact = ({ phone }: any) => {
  return (
    <section style={{ padding: "40px" }}>
      <h2>Contact Us</h2>

      <p>Phone: {phone}</p>

      <a href={`https://wa.me/${phone}`}>
        Chat on WhatsApp
      </a>
    </section>
  );
};

export default Contact;
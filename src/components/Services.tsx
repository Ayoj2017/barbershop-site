const Services = () => {
  const services = [
    { name: "Haircut", price: "₦3000" },
    { name: "Beard Trim", price: "₦1500" },
    { name: "Home Service", price: "₦5000" },
  ];

  return (
    <section style={{ padding: "40px" }}>
      <h2>Our Services</h2>

      {services.map((service, index) => (
        <div key={index}>
          <p>
            {service.name} - {service.price}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Services;
import "../App.css" // Optional: Create a separate CSS file for styles


const TrustedSection = () => {
  const brands = [
    { src: "src/Photos/burger-king-limetray.png", alt: "Burger King" },
    { src: "src/Photos/biryani-blues-limetray.png", alt: "Sarpinos" },
    { src: "src/Photos/bikanervalalogoweb.png", alt: "Bikanervala" },
    { src: "src/Photos/limetray-client-sagarratna.png", alt: "Sagar Ratna" },
    { src: "src/Photos/rollsmanialogo.png", alt: "Rolls Mania" },
    { src: "src/Photos/russos-logo.png", alt: "Russos" },
    { src: "src/Photos/MOD-LIMETRAY.png", alt: "MOD" },
    { src: "src/Photos/dana-choga-limetray.png", alt: "Dana Choga" },
  ];

  return (
      <div className="trusted-section">

          <h2>Trusted By 200+ Restaurants</h2>
          <div className="brands-container">
            {brands.map((brand, index) => (
                <img
                    key={index}
                    src={brand.src}
                    alt={brand.alt}
                    className="brand-logo"
                />
            ))}
          </div>
          </div>

);
};

export default TrustedSection;

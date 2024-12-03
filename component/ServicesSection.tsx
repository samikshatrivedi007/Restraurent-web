import React from "react";
import "./ServicesSection.css";

// Define a type for service cards
interface Service {
    id: number;
    title: string;
    description: string;
    imgSrc: string;
    altText: string;
}

const ServicesSection: React.FC = () => {
    // Array of services with their data
    const services: Service[] = [
        {
            id: 1,
            title: "Online Food Ordering System →",
            description: "Your restaurant’s own online ordering website & app",
            imgSrc: "src/Photos/online-1.png", // Replace with your actual image URL
            altText: "Online Food Ordering System",
        },
        {
            id: 2,
            title: "Restaurant POS System →",
            description:
                "Cloud-based POS solution with integrated online & third-party orders",
            imgSrc: "src/Photos/POS-2.png", // Replace with your actual image URL
            altText: "Restaurant POS System",
        },
        {
            id: 3,
            title: "CRM Solution →",
            description:
                "Automate marketing campaigns with a fully-integrated CRM system",
            imgSrc: "src/Photos/CRM-1.png", // Replace with your actual image URL
            altText: "CRM Solution",
        },
    ];

    return (
        <div className="services-container">
            <h1>End-to-end marketing & technology solutions for restaurants</h1>
            <div className="services">
                {services.map((service) => (
                    <div key={service.id} className="service-card">
                        <img src={service.imgSrc} alt={service.altText} />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <button className="learn-more">LEARN MORE</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;

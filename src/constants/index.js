import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

const words = [
    { text: "Captured." }, 
    { text: "Filmed." }, 
    { text: "Redefined." },
    { text: "Enhanced." }
]

const contactInfo = [
    {
        icon: IconMail,
        label: "Mail",
        value: "info@reminisceuk.com",
        href: "mailto:info@reminisceuk.com",
    },
    {
        icon: IconPhone,
        label: "Phone",
        value: "+44 (0) 7424 066926",
        href: "tel:+447424066296",
    },
    {
        icon: IconMapPin,
        label: "Location",
        value: "London, UK",
        href: "https://maps.google.com/?q=London-UK"
    }
]

const imageCarousel = [
    {
        src: "/photos/chandelier.webp"
    },
]

const reviews = [
    {
        name: "Hamza",
        quote: "Just wanted to say a massive thank you to all the camera team... you made everything easy for us and I can tell the photos will be amazing",
        image: "/photos/chandelier.webp"
    },
    {
        name: "Aneesa",
        quote: "Thank you for being there on our special days. We appreciate your hard work and can't wait to see all the shots and videos.",
        image: "/photos/wall-art.webp"
    },
    {
        name: "Albi",
        quote: "We genuinely feel so blessed to have had you guys as part of our wedding.",
        image: "/photos/couple-back.webp"
    },
    {
        name: "Abie & Mustakim",
        quote: "You all did an amazing job and myself and Abie are very happy with how today went.",
        image: "/photos/chairs.jpg"
    }
]

export { 
    words,
    contactInfo,
    imageCarousel,
    reviews,
};
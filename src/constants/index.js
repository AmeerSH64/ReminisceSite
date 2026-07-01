import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

const words = [
    { text: "Captured." }, 
    { text: "Filmed." }, 
    { text: "Redefined." },
    { text: "Enhanced" }
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
        value: "Milton Keynes, UK",
        href: "https://maps.google.com/?q=Milton-Keynes-UK"
    }
]

const imageCarousel = [
    {
        src: "/photos/chandelier.png"
    },
]

const reviews = [
    {
        name: "Tifa Lockheart",
        quote: "Beautifully photographed."
    },
    {
        name: "Cloud Strife",
        quote: "Very organised and professional."
    },
    {
        name: "Barret Wallace",
        quote: "Captured our wedding perfectly."
    },
    {
        name: "Aerith Gainsborough",
        quote: "They have an eye for the best shots."
    }
]

export { 
    words,
    contactInfo,
    imageCarousel,
    reviews,
};
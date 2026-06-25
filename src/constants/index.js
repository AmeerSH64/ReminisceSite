import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

const teamMembers = [
    { 
        name: "Aneeq Hussain", 
        role: "Founder & CEO", 
        image: "/team/Aneeq-profile.PNG"
    }
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

export { 
    teamMembers,
    contactInfo,
};
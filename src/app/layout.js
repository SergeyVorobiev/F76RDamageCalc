import "./globals.css";
import Head from "next/head";


export const metadata = {
    title: "Fallout 76 Damage Calculator",
    description: "Fallout 76 Damage Calculator Season 20. Find the perfect build by comparing weapons, mods, perk cards and consumables. Calculate damage against creatures and discover optimal settings for your play style.",
    robots: "all",
    verification: {
        google: 'BC7TELuwJl0WL_S9Ltf-xbELV3n0rLY0rxw2J4yh-Pw',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}

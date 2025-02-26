import "./globals.css";


export const metadata = {
    title: "Fallout 76 Damage Calculator",
    description: "See the Fallout 76 technical details of perk cards, consumables, races, creatures, weapons, mods. Calculate damage and compare weapon's efficiency.",
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

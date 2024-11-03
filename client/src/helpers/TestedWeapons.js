import cal50 from '../resources/forReadme/Tests/50Cal/u54Test.webp';


const u54 = "Patch 1.7.14.15 - Update 54 Milepost Zero - September 3, 2024";

function getView(image, imageAlt, version) {
    return (
        <>
            <p>
                {version}
            </p>
            <p>
                <a href="https://github.com/SergeyVorobiev/F76RDamageCalc">See</a>
            </p>
            <p>
                <img src={image} style={{width: "100%"}} alt={imageAlt} />
            </p>
        </>
    );
}

export const testedWeapons = {
    "0003a0d4": getView(cal50, "50Cal", u54),
}

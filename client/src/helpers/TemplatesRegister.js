import pistol10mm from '../resources/weaponTemplates/10mmPistol.json';
import mg50Cal from '../resources/weaponTemplates/50CalMG.json';
import gatlingPlasma from '../resources/weaponTemplates/GatlingPlasma.json';
import plasmaCaster from '../resources/weaponTemplates/PlasmaCaster.json';
import hollyFire from '../resources/weaponTemplates/HollyFire.json';
import gatlingGun from '../resources/weaponTemplates/GatlingGun.json';
import uGatlingLaser from '../resources/weaponTemplates/UGatlingLaser.json';
import mg42 from '../resources/weaponTemplates/MG42.json';
import gaussMinigun from '../resources/weaponTemplates/GaussMinigun.json';
import miniGun from '../resources/weaponTemplates/MiniGun.json';
import gaussShotgun from '../resources/weaponTemplates/GaussShotgun.json';


export default function getTemplates() {
    return [pistol10mm[0], mg50Cal[0], gatlingPlasma[0], plasmaCaster[0], hollyFire[0], gatlingGun[0], uGatlingLaser[0],
        mg42[0], gaussMinigun[0], miniGun[0], gaussShotgun[0]];
}
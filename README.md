# F76DCNextJS
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://docs.npmjs.com/about-npm)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Ant](https://img.shields.io/badge/Ant%20Design-1890FF?style=for-the-badge&logo=antdesign&logoColor=white)](https://ant.design/)
[![Chartjs](https://img.shields.io/badge/Chart%20js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)
[![Fallout](https://img.shields.io/badge/Fallout76-2a475e?logo=steam&logoColor=fff&style=for-the-badge)](https://store.steampowered.com/app/1151340/Fallout_76)


### Next.js Web Damage Calculator For Fallout76 

## Table of Contents
1. [Build](#build-variants)
2. [Limitations](#limitations)
3. [Capabilities](#capabilities)
4. [Tests](#tests)
   1. [.50Cal Machine Gun](#50-Cal-Machine-Gun)

## Build variants

1. Go to running instance: [GitHub host](https://sergeyvorobiev.github.io/F76RDamageCalc/).

2. Installation steps:
   1. Install [Node.js](https://nodejs.org/en/download). 
   2. Download this project as an archive and unpack it or via git. 
   3. Open cmd under the project root folder and type:
       ```console
       npm install
       ``` 
   4. To run local web instance, type:
       ```console
       npm run dev
       ``` 
   5. Go to [localhost](http://localhost:3000) in your browser.

![View](src/resources/forReadme/main.webp)

## Limitations
See [Spreadsheet calculator](https://github.com/SergeyVorobiev/F76Damage) for details about calculation methods and formulas.

Raw data can be found [data sheet](https://docs.google.com/spreadsheets/d/1ww8BxPfFMoS6idciAYDvekcAP9siSKzTDqFFtZ6Gs88/edit?usp=sharing) / [json files](https://github.com/SergeyVorobiev/F76Damage/tree/main/Resources/Extracted/misc/curvetables/json/weapons).

Current version has some limitations in using legendary effects like "Furious / Power Attack" (not tested), Basher, weapon accuracy is not calculated automatically.

Not fully tested effects:

1. Bash. (+Basher perk is not presented).
2. Power Attack.
3. Recharging is adjusted manually.
4. Time damage (Is presented with stack support (up to 10 for each type of damage)).
5. Additional time damage effects for crit.

## Capabilities

#### 1. Comprehensive information about consumables and perk cards with details about effects and conditions:
![ConsData](src/resources/forReadme/consumablesPerkCardData.webp)
#### 2. Creature curves, keywords, body data:
![Creature](src/resources/forReadme/creatureData.webp)
#### 3. Races:
![Creature](src/resources/forReadme/raceData.webp)
#### 4. Manual weapon settings:
![WeaponSettings](src/resources/forReadme/manualWSettings.webp)
#### 5. Cards:
![Cards](src/resources/forReadme/cardSettings.webp)
#### 6. DPS comparator:
![DPS](src/resources/forReadme/dpsComparator.webp)
#### 7. Manual mod settings:
![Mods](src/resources/forReadme/manualModSettings.webp)
#### 8. Consumables selection:
![Cons](src/resources/forReadme/itemSettings.webp)
#### 9. Automatic best modifications calculation:
![ModCalc](src/resources/forReadme/automaticModSettings.webp)
#### 10. Automatic best weapon calculation:
![ModCalc](src/resources/forReadme/bestWeaponCalculator.webp)
#### 11. Snapshots:
![ModCalc](src/resources/forReadme/snapshots.webp)

## Tests

1. Displayed values are rounded, so you will get +-1 difference.
2. Crit damage is reduced by a boss' reduction even if you see displayed value without any reduction. (<U52, currently not tested).
3. Sneak and TOFT can work together, it can happen if an enemy hits you occasionally or loses you after successful attack (In fact all possible effects can be applied at the same time in one shot).

![Total](src/resources/forReadme/total.webp)

### 50 Cal. Machine Gun

U-54 (sneak / crit + boost cards + legendary + mods + serums):
![View](src/resources/forReadme/docs/50Cal/u54Test.webp)








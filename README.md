# F76DamageReact
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://docs.npmjs.com/about-npm)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Ant](https://img.shields.io/badge/Ant%20Design-1890FF?style=for-the-badge&logo=antdesign&logoColor=white)](https://ant.design/)
[![Chartjs](https://img.shields.io/badge/Chart%20js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)
[![Fallout](https://img.shields.io/badge/Fallout76-2a475e?logo=steam&logoColor=fff&style=for-the-badge)](https://store.steampowered.com/app/1151340/Fallout_76)


### React Web Damage calculator for Fallout76 

## Table of Contents
1. [Build](#build-variants)
2. [Limitations](#limitations)
3. [Tests](#tests)
   1. [.50Cal Machine Gun](#50-Cal-Machine-Gun)

## Build variants

1. Go to running instance: [GitHub host](https://sergeyvorobiev.github.io/F76RDamageCalc/).

2. Docker:

    Download repo and go to the [client](client) folder. Open CMD under the folder, be sure docker engine running, and type:
    ```console
    docker compose up
    ```
   Then go to localhost:3000 in your browser.
3. Install node js, open CMD under the [client](client) folder and type:
   ```console
    npm install
    ``` 
   And then:
   ```console
    npm start
    ``` 
   Then go to localhost:3000 in your browser. 

## Limitations
See [Spreadsheet calculator](https://github.com/SergeyVorobiev/F76Damage) for details about calculation methods and formulas.

Raw data can be found [data sheet](https://docs.google.com/spreadsheets/d/1ww8BxPfFMoS6idciAYDvekcAP9siSKzTDqFFtZ6Gs88/edit?usp=sharing) / [json files](https://github.com/SergeyVorobiev/F76Damage/tree/main/Resources/Extracted/misc/curvetables/json/weapons).

Current version has no limitations except a couple of legendary effects like "Furious" (not tested).

Not fully tested effects:

1. Bash. (+Basher perk is not presented).
2. Power Attack.
3. Recharging is adjusted manually.
4. Time damage (Is presented with stack support (up to 10 for each type of damage)).
5. Additional time damage effects for crit.
6. Follow Through (Is it just sneak base damage boost or total boost of all active sneak effects?).

![View](client/src/resources/forReadme/main.webp)


## Tests

1. Displayed values are rounded, so you will get +-1 difference.
2. Crit damage is reduced by a boss' reduction even if you see displayed value without any reduction. (<U52, currently not tested).
3. Sneak and TOFT can work together, it can happen if an enemy hits you occasionally or loses you after (In fact all possible effects can be applied at the same time in one shot).

![Total](client/src/resources/forReadme/total.webp)

### 50 Cal. Machine Gun

U-54 (sneak / crit + boost cards + legendary + mods + serums):
![View](client/src/resources/forReadme/Tests/50Cal/u54Test.webp)








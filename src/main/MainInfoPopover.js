import Popover from 'react-bootstrap/Popover';

export const mainInfoPopover = (
    <Popover className="popover-adjustable">
        <Popover.Header as="h3">
            <strong>Note</strong>
        </Popover.Header>
        <Popover.Body className="popover-body3">
            <p className="m-1"><b>All data</b> presented in this calculator is parsed directly from .esm files. Be sure that the version of game you are playing corresponds to the version of data presented in this calculator that can be seen via '?' button for every particular data section.</p>
            <p className="m-1"><b>Aiming, Standing still, Night, VATS, Non-VATS</b> is considered to be enabled by default when a user applies legendary and perks which depend on these states.</p>
            <p className="m-1"><strong>CRIT</strong> calculates critical damage, <strong>☠️ Fr:</strong> means crit frequency (1 / 2 - every second shot is crit).</p>
            <p className="m-1"><strong>SNEAK</strong> calculates sneak damage (100% hits are sneak).</p>
            <p className="m-1"><strong>HEAD</strong> calculates head shot damage, <strong>🤕 Fr</strong> means head shot frequency (80% - 4 of 5 shots are head shots, kill time for each time can be slightly different due to randomness).</p>
            <p className="m-1"><strong>DPS</strong> (damage per second) includes reload time, charge time, attack delay. If you have only 1 slot in a magazine, 1 shot per second, 10 damage per shot and 1 second to reload, then dps = 5 provided that resistances of creature = 0.
            Charts show <b>DPS</b> provided that <b>Sneak</b> triggers every hit and <b>Crit</b> / <b>HeadShot</b> trigger
            as specified, accuracy and chance counting for every damage separately. For some effects like <i>First Blood</i> enemy health matters in calculating resulting DPS.</p>
            <p className="m-1"><strong>Creatures.</strong> Real NPC's can have equipment or perks which can affect resistance / damage which are not presented in the calculator.</p>
            <p className="m-1"><strong>This calculator</strong> does not represent your real game experience, it has some limitations and it calculates creature's life time
                provided that a creature is standing still under the fire until death. </p>
            <p className="m-1">However when all else being equal you can rely on this numbers to compare efficiency
                of weapons with a pretty good accuracy. Go to GitHub page via burger menu for details.</p>
            <p className="m-1"><b>Usage.</b> At the beginning, go to '<b>Weapons</b>' tab, unfold a weapon's section you like, tap - '<b>Calculate</b>' - '<b>Start</b>' - '<b>Apply</b>', enjoy.</p>
            <p className="m-1"><b>To choose</b> creature and its level, tap on <b className="creature-label-text">Creature</b> label and <b className="creature-label-text">Level</b> in the <b>Creature Details View</b>. </p>
        </Popover.Body>
    </Popover>
);

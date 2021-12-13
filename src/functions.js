//takes attack stat of the attacker and the defense stat of the defender
function calculateDamage(attack, defense){
    const baseAttack = 10;
    const baseDef = 5;
    const attackModifier = .13;
    const defenseModifier = .13;

    var damage = baseAttack + (attack * attackModifier); 
    damage = Math.round(getRandomVal(damage - 5, damage + 5));
    //console.log("raw damage: " + damage);
    damage -= Math.round(baseDef + (defense * defenseModifier));
    //console.log("damage after def: " + damage)
    return damage > 0 ? damage : 1;
}

function heal(maxHealth){
    return Math.round(getRandomVal((maxHealth * .5), (maxHealth * .75)));
}

function getRandomVal(min, max){
    //console.log("min: " + min + "  max: " + max);
    return Math.random() * (max - min) + min;
}

export{
    calculateDamage, heal, getRandomVal
}
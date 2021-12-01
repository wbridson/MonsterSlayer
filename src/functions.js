//takes attack stat of the attacker and the defense stat of the defender
function calculateDamage(attack, defense){
    const baseAttack = 10;
    const baseDef = 5;
    const attackModifier = .13;
    const defenseModifier = .13;

    var damage = baseAttack + (attack * attackModifier); 
    damage = Math.round(getRandomVal(damage - 5, damage + 5) - baseDef + (defense * defenseModifier));
    return damage > 0 ? damage : 1;
}

function getRandomVal(min, max){
    return Math.random() * (max - min) + min;
}

export{
    calculateDamage,
}
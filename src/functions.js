//takes attack stat of the attacker and the defense stat of the defender
function calculateDamage(attack, defense, special) {
  const baseDamage = 10;
  const baseDef = 5;
  const damageModifier = .4;
  const specialDamageModifier = .55;
  const defenseModifier = 0.34;
console.log("attack: " + attack)
  if (special) {
    var damage = baseDamage + attack * specialDamageModifier;
  } else {
    damage = baseDamage + attack * damageModifier;
  }
    damage = Math.round(getRandomVal(damage - 5, damage + 5));
    console.log("rawDamage: " + damage);
    damage -= Math.round(getRandomVal((baseDef + defense * defenseModifier)-2, (baseDef + defense * defenseModifier)+2));
    console.log("damage: " + damage);

  return damage > 0 ? damage : 1;
}

function heal(maxHealth) {
  return Math.round(getRandomVal(maxHealth * 0.5, maxHealth * 0.75));
}

function getRandomVal(min, max) {
  //console.log("min: " + min + "  max: " + max);
  return Math.random() * (max - min) + min;
}

export { calculateDamage, heal, getRandomVal };

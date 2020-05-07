function Fighter(obj) {
    const name = obj.name;
    const damage = obj.damage;
    let hp = obj.hp;
    const strength = obj.strength;
    const agility = obj.agility;
    let win = 0;
    let loss = 0;
    const maxHP = obj.hp;

    this.getName = function() {
        return name;
    }

    this.getDamage = function() {
        return damage;
    }

    this.getStrength = function() {
        return strength;
    }

    this.getAgility = function() {
        return agility;
    }

    this.getHealth = function() {
        return hp;
    }

    this.attack = function(defender) {
        let maxProb = 100;
        let probAttack = maxProb - defender.getAgility() - defender.getStrength();
        if (probAttack > Math.random() * maxProb) {
            defender.dealDamage(this.getDamage());
            console.log(`${this.getName()} make ${this.getDamage()} damage to ${defender.getName()}`);
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }

    this.logCombatHistory = function() {
        return `Name: ${name}, Wins: ${win}, Losses: ${loss}`;
    }

    this.heal = function(points) {
        if (hp + points > maxHP) {
            hp = maxHP;
        } else {
            hp += points;
        }
    }

    this.dealDamage = function(points) {
        if (hp - points > 0) {
            hp -= points;
        } else {
            hp = 0;
        }
    }

    this.addWin = function() {
        win++;
    }

    this.addLoss = function() {
        loss++;
    }
}

function battle(fighter, defender) {
    let t = false;
    let reverse;
    while (fighter.getHealth() > 0 && defender.getHealth() > 0) {
        t = true;
        fighter.attack(defender);
        reverse = fighter;
        fighter = defender;
        defender = reverse;
    }
    if (t) {
        reverse = fighter;
        fighter = defender;
        defender = reverse;
        fighter.addWin();
        defender.addLoss();
        console.log(`${fighter.getName()} has won!`);
    } else {
        console.log(`${fighter.getName()} or ${defender.getName()} is dead and can't fight`);
    }
}
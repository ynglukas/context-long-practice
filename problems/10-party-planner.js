class PartyPlanner {
	constructor() {
		this.guestList = [];
	}

	addToGuestList(name) {
		this.guestList.push(name);
	}

	throwParty() {
		if (this.guestList.length === 0) {
			return`Gotta add people to the guest list`
		}else if(this.guestList.length === 1) {
			return `Welcome to the party ${this.guestList[0]}`;
		}else {
			const lastGuest = this.guestList.pop();
			const guestNames = this.guestList.join(', ')
			this.guestList.push(lastGuest);
			return `Welcome to the party ${guestNames} and ${lastGuest}`
		}
	}
}

const party = new PartyPlanner();

console.log(party.throwParty()); // prints "Gotta add people to the guest list"

party.addToGuestList("James");
console.log(party.throwParty()); // prints "Welcome to the party James"

party.addToGuestList("Alvin");
console.log(party.throwParty()); // prints "Welcome to the party James and Alvin"

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}

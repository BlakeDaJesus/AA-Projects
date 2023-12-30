class PartyPlanner {
    constructor() {
        this.guestList = [];
    };

    addToGuestList = (name) => this.guestList.push(name);

    throwParty = () => this.guestList.length < 1 ? 'Gotta add people to the guest list' : `Welcome to the party ${this.guestList.join(' and ')}`;
};

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}


class Hashmap {
	load_factor;
	capacity;
	storage;

	constructor() {
		this.load_factor = '';
		this.capacity = 16;
		this.storage = [];
	}
	hash(key) {
		let hashCode = 0;

		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = primeNumber * hashCode + key.charCodeAt(i);
		}

		return hashCode % this.capacity;
	}

	set(key, value) {
		let index = this.hash(key);
		if (this.storage[index] === undefined) {
			this.storage[index] = [[key, value]]
		} else {
			let inserted = false;
			for (let i = 0; i < this.storage[index].length; i++) {
				if (this.storage[index][i][0] === key) {
					this.storage[index][i][1] = value;
					inserted = true;
				}
			}
			if (inserted === false) {
				this.storage[index].push([key, value]);
			}
		}
	}

	get(key) {
		let index = this.hash(key);
		if (this.storage[index] === undefined || this.storage[index].length === 0) {
			return null;
		}
		for (let i = 0; i < this.storage[index].length; i++) {
			if (this.storage[index][i][0] === key) {
				return this.storage[index][i][1];
			}
		}
	}

	has(key) {
		let index = this.hash(key);
		if (this.storage[index] === undefined) {
			return false;
		}

		for (let i = 0; i < this.storage[index].length; i++) {
			if (this.storage[index][i][0] === key) {
				return true;
			}
		}
		return false;
	}

	remove(key) {
		let index = this.hash(key);
		if (this.storage[index] === undefined) {
			return false;
		}

		for (let i = 0; i < this.storage[index].length; i++) {
			if (this.storage[index][i][0] === key) {
				this.storage[index].splice(i, 1);
				return true;
			}
		}
		return false;
	}

	length() {
		let count = 0;
		for (let i = 0; i < this.storage.length; i++) {
			if (this.storage[i] !== undefined) {
				count++;
			}
		}
		return count;
	}

	clear() {
		for (let i = 0; i < this.storage.length; i++) {
			if (this.storage[i] !== undefined) {
				this.storage[i] = undefined;
			}
		}
	}

	keys() {
		let keys_array = [];
		for (let i = 0; i < this.storage.length; i++) {
			if (this.storage[i] !== undefined) {
				for (let j = 0; j < this.storage[i].length; j++) {
					keys_array.push(this.storage[i][j][0]);
				}
			}
		}
		return keys_array;
	}

	values() {
		let val_array = [];
		for (let i = 0; i < this.storage.length; i++) {
			if (this.storage[i] !== undefined) {
				for (let j = 0; j < this.storage[i].length; j++) {
					val_array.push(this.storage[i][j][1]);
				}
			}
		}
		return val_array;
	}

	entries() {
		let val_array = [];
		for (let i = 0; i < this.storage.length; i++) {
			if (this.storage[i] !== undefined) {
				for (let j = 0; j < this.storage[i].length; j++) {
					val_array.push(this.storage[i][j]);
				}
			}
		}
		return val_array;
	}

}

export { Hashmap };

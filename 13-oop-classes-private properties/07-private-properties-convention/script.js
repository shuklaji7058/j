class Wallet {
  constructor() {
    this._balance = 0;
    this._transaction = [];
  }

  deposit(amount) {
    this._processDeposit(amount);
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log("Not enough funds");
      return;
    }

    this.processWithdraw(amount);
    this._balance -= amount;
  }

  _processDeposit(amount) {
    console.log(`Depositing ${amount}`);

    this._transaction.push({
      type: "deposit",
      amount,
    });
  }

  _processWithdraw(amount) {
    console.log(`Withdrawing ${amount}`);

    this._transaction.push({
      type: "withdraw",
      amount,
    });
  }

  get balance() {
    return this._balance;
  }

  get transactions() {
    return this._transactions;
  }
}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(50);
console.log(wallet.balance);
console.log(wallet.transactions);

import Product from "../framework/Product";

class IDCard extends Product {
  owner: string;
  constructor(owner: string) {
    super();
    console.log(owner + "のカードを作ります。");
    this.owner = owner;
  }
  public use(): void {
    console.log(this.owner + "のカードを使います。");
  }
  public getOwner(): string {
    return this.owner;
  }
}

export default IDCard;

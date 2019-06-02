import Factory from "../framework/Factory";
import IDCard from "../idcard/IDCard";

class IDCardFactory extends Factory {
  owners: string[] = [];

  createProduct(owner: string) {
    return new IDCard(owner);
  }
  registerProduct(idcard: IDCard) {
    this.owners.push(idcard.getOwner());
  }
  getOwners() {
    return this.owners;
  }
}

export default IDCardFactory;

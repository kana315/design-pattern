import Product from "./Product";

abstract class Factory {
  public create(owner: string) {
    const p = this.createProduct(owner);
    this.registerProduct(p);
    return p;
  }
  protected abstract createProduct(owner: string);
  protected abstract registerProduct(product: Product);
}

export default Factory;

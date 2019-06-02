class Singleton {
  private static singleton: Singleton = new Singleton();
  private constructor() {
    console.log("インスタンスを生成しました。");
  }
  public static getInstance(): Singleton {
    return this.singleton;
  }
}

export default Singleton;

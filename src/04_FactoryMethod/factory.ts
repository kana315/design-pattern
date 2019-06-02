import IDCardFactory from "./idcard/IDCardFactory";

function main(): void {
  const factory = new IDCardFactory();
  const card1 = factory.create("はな");
  const card2 = factory.create("ひとみ");
  const card3 = factory.create("えりか");
  card1.use();
  card2.use();
  card3.use();
}

main();

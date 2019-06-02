import Singleton from "./Singleton";

function main() {
  console.log("Start.");
  const obj1 = Singleton.getInstance();
  const obj2 = Singleton.getInstance();
  if (obj1 == obj2) {
    console.log("obj1とobj2は同じインスタンスです。");
  } else {
    console.log("obj1とobj2は同じインスタンスではありません。");
  }
  console.log("End.");
}

main();

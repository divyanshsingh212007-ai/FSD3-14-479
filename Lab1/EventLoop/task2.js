import fs from "fs/promises";

const writedata = async () => {
  try {
    console.log("about to write...");
    await fs.writeFile("stud.txt", "Name: Raman Singh");
    console.log("file weitten");
  } catch (error) {
    console.log(error);
  }
};
const f1 = () => {
  console.log("f1");
};

const f2 = () => {
  console.log("f2");
};

const main = () => {
  console.log("main");
  setTimeout(f1, 0);
  //setInterval(f2,1000); // It means it will call after interval.To close it press control c.
  setImmediate(f2);
  writedata();
  console.log("end");
};
main();
console.log("testing of main");

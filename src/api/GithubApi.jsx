import data from "../utils/data.json";

export const getMemberInfo = async () =>
  Promise.all(
    data.map(async (name) => {
      const memData = await fetch(`https://api.github.com/users/BhaveshSSingh`);
      const memJson = memData.json();
      // console.log(memJson);
      // console.log(name);
    })
  );

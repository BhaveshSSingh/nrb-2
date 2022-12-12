import data from "../utils/data.json";

export const getMemberInfo = async () =>
  Promise.all(
    data.map(async (userName) => {
      return (await fetch(`https://api.github.com/users/BhaveshSSingh`)).json();
    })
  );

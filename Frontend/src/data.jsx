const stockPriceGenerator = (name, days) => {
  let price = [];
  for (let i = 0; i < days; i++) {
    let OneDay = Math.floor(Math.random() * 901) + 10;
    price.push(OneDay);
  }
  return price;
};

const socialMediaCountGenerator = (name, socialType) => {
  let socialCount = [];
  for (let i = 0; i < 10; i++) {
    let count = Math.floor(Math.random() * 30 + socialType);
    socialCount.push(count);
  }
  return socialCount;
};

const recommendationAlgorithm = (prices, socialCount) => {
  let reco = "";
  let l = prices.length;
  let count = 0;
  for (let j = 0; j < l; j++) {
    count += prices[j];
  }
  let average = count / l;

  if (socialCount > 3 && average > prices[0]) {
    return (reco = "20% sell, 20% hold, 60% buy");
  }

  if (socialCount > 3 && average <= prices[0]) {
    return (reco = "10% buy, 20% hold, 70% sell");
  }

  if (
    socialCount > 0 &&
    socialCount <= 3 &&
    Math.floor(average) === Math.floor(prices[0])
  ) {
    return (reco = "60 %hold, 20% sell, 20% buy");
  } else {
    return (reco = "50% buy 40% hold 10% sell");
  }
};

const generateId = () => {
  let id = Math.floor(Math.random() * 1000000000);
  return id;
};

const createData = number => {
  let data = [];
  let days = 10;
  for (let i = 0; i < number; i++) {
    let socialType = Math.floor(Math.random() * 10);
    let stock = {};
    let name = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let a = 0; a < 5; a++) {
      name += characters.charAt(Math.floor(Math.random() * 6));
    }
    stock = { ...stock, name: name };
    let prices = stockPriceGenerator(name, days);
    stock["prices"] = prices;
    let Count = socialMediaCountGenerator(name, socialType);
    stock["socialCount"] = Count;
    let Recommendation = recommendationAlgorithm(prices, Count);
    stock = { ...stock, reco: Recommendation };
    let id = generateId();
    stock = { ...stock, _id: id };
    data.push(stock);
  }
  return data;
};

const DATA = createData(10);

export default DATA;

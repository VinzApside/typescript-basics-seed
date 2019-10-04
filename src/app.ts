type Pizza = { name: string; toppings: number };

const pizza: Pizza = { name: "Pizza za", toppings: 4 };

const serialized = JSON.stringify(pizza);

function getNameFromJSON(obj: string) {
  return (<Pizza>JSON.parse(obj)).name;
}

function getNameFromJSONBetterWay(obj: string) {
  return (JSON.parse(obj) as Pizza).name;
}
getNameFromJSON(serialized);
getNameFromJSONBetterWay(serialized);

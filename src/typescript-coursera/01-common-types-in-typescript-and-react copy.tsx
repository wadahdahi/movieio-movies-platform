const anExampleVariable: string = "Hello, Coursera!";
console.log(anExampleVariable);

type PersonPros = {
  name: string;
  myAge: number;
  isStudent: boolean;
  isMale?: boolean;
};

type PersonState = {
  ageInFiveYears: number;
  hasGraduated: boolean;
  hobbies: string[];
  favoriteColors: Array<string>;
  address: {
    street: string;
    city: string;
    country: string;
    postalCode?: string;
    state?: string;
    dayOfBirth?: Date;
  };
};

type AnimalsListType = {
  animals: string[];
  animalType: "dog" | "cat" | "bird" | "fish" | "reptile";
};

type SomeObjExamples = {
  obj: object;
  boj2: {};
  item: {
    id: string;
    name: string;
  };
  items: {
    id: string;
    name: string;
  }[];
};

type Item = {
  id: string;
  name: string;
};

type Items = {
  item: Item;
  items: Item[];
};

type customItemHash = {
  [key: string]: Item;
};
type customItemHash2 = {
  [key: number]: string;
};

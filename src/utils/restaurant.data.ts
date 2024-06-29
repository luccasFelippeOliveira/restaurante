export type TMenuItem = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

export type TMenuCategory = {
  id: number;
  name: string;
  image: string;
  menu: TMenuItem[];
};

const menu: TMenuCategory[] = [
  {
    id: 1,
    name: "Lanches",
    image: "images/cheeseburger.jpeg",
    menu: [
      {
        id: 1,
        name: "Hamburger",
        image: "images/hamburger.jpeg",
        description: "Delicioso hambúrguer com pão, carne, alface e tomate",
        price: 10,
      },
      {
        id: 2,
        name: "Cheeseburger",
        image: "images/cheeseburger.jpeg",
        description:
          "Saboroso cheeseburger com pão, carne, queijo, alface e tomate",
        price: 12,
      },
      {
        id: 3,
        name: "Sanduíche de Frango",
        image: "images/chicken-sandwitch.jpeg",
        description:
          "Sanduíche de frango com pão, frango grelhado, alface e maionese",
        price: 9,
      },
      {
        id: 4,
        name: "Hambúrguer Vegetariano",
        image: "images/vegan-burger.jpeg",
        description:
          "Hambúrguer vegetariano com pão, hambúrguer de legumes, alface e tomate",
        price: 8,
      },
      {
        id: 5,
        name: "Sanduíche de Peixe",
        image: "images/fish-burger.jpeg",
        description:
          "Sanduíche de peixe com pão, filé de peixe empanado, alface e molho tártaro",
        price: 11,
      },
    ],
  },
  {
    id: 2,
    name: "Pratos de entrada",
    image: "images/ceaser-salad.jpeg",
    menu: [
      {
        id: 6,
        name: "Salada Caesar",
        image: "images/ceaser-salad.jpeg",
        description:
          "Salada Caesar clássica com alface, croutons, queijo parmesão e molho Caesar",
        price: 8,
      },
      {
        id: 7,
        name: "Bruschetta",
        image: "images/bruschetta.jpeg",
        description:
          "Bruschetta italiana tradicional com pão, tomate, manjericão e azeite de oliva",
        price: 7,
      },
      {
        id: 8,
        name: "Pão de Alho",
        image: "images/garlic-bread.jpeg",
        description: "Pão de alho com pão, alho, manteiga e ervas",
        price: 6,
      },
      {
        id: 9,
        name: "Palitos de Mozzarella",
        image: "images/cheese-stick.jpeg",
        description: "Palitos de mozzarella empanados e fritos",
        price: 9,
      },
      {
        id: 10,
        name: "Asinhas de Frango",
        image: "images/chicken-wings.jpeg",
        description: "Asinhas de frango picantes e crocantes",
        price: 10,
      },
    ],
  },
  {
    id: 3,
    name: "Pratos de refeição",
    image: "images/salmon-rice.jpeg",
    menu: [
      {
        id: 11,
        name: "Bife com Purê de Batatas",
        image: "images/potato-steak.jpeg",
        description: "Bife suculento com purê de batatas",
        price: 20,
      },
      {
        id: 12,
        name: "Salmão Grelhado com Arroz",
        image: "images/salmon-rice.jpeg",
        description: "Salmão grelhado com arroz e legumes",
        price: 18,
      },
      {
        id: 13,
        name: "Pasta Carbonara",
        image: "images/carbonara.jpeg",
        description:
          "Pasta carbonara clássica com bacon, ovos, queijo parmesão e pimenta preta",
        price: 15,
      },
      {
        id: 14,
        name: "Frango à Parmegiana",
        image: "images/chicken-parmesan.jpeg",
        description:
          "Frango à parmegiana com frango empanado, molho de tomate e queijo derretido",
        price: 16,
      },
      {
        id: 15,
        name: "Legumes Salteados",
        image: "images/saute-veggies.jpeg",
        description:
          "Legumes salteados com brócolis, cenoura, pimentão e molho de soja",
        price: 14,
      },
    ],
  },
  {
    id: 4,
    name: "Sobremesas",
    image: "images/chocolate-cake.jpeg",
    menu: [
      {
        id: 16,
        name: "Bolo de Chocolate",
        image: "images/chocolate-cake.jpeg",
        description: "Bolo de chocolate com cobertura de chocolate",
        price: 6,
      },
      {
        id: 17,
        name: "Torta de Maçã",
        image: "images/apple-pie.jpeg",
        description: "Torta de maçã com massa crocante e recheio de maçã",
        price: 5,
      },
      {
        id: 18,
        name: "Sundae de Sorvete",
        image: "images/sundae.jpeg",
        description:
          "Sundae de sorvete com calda de chocolate, chantilly e cereja",
        price: 7,
      },
      {
        id: 19,
        name: "Cheesecake",
        image: "images/cheesecake.jpeg",
        description:
          "Cheesecake cremoso com base de biscoito e cobertura de frutas vermelhas",
        price: 8,
      },
      {
        id: 20,
        name: "Salada de Frutas",
        image: "images/fruit-salad.jpeg",
        description:
          "Salada de frutas frescas com morango, kiwi, melancia e uva",
        price: 4,
      },
    ],
  },
  {
    id: 5,
    name: "Bebidas",
    image: "images/orange-juice.jpeg",
    menu: [
      {
        id: 21,
        name: "Coca-Cola",
        image: "images/coke.jpeg",
        description: "Coca-Cola refrescante",
        price: 3,
      },
      {
        id: 22,
        name: "Suco de Laranja",
        image: "images/orange-juice.jpeg",
        description: "Suco de laranja fresco",
        price: 4,
      },
      {
        id: 23,
        name: "Chá Gelado",
        image: "images/ice-tea.jpeg",
        description: "Chá gelado com limão e gelo",
        price: 3,
      },
      {
        id: 24,
        name: "Café",
        image: "images/coffee.jpeg",
        description: "Café quente e aromático",
        price: 2,
      },
      {
        id: 25,
        name: "Milkshake",
        image: "images/milkshake.jpeg",
        description: "Milkshake cremoso de baunilha",
        price: 5,
      },
    ],
  },
];

const getCategories = (): Pick<TMenuCategory, "name" | "image" | "id">[] => {
  return menu.map(({ name, image, id }) => ({ name, image, id }));
};

const getCategoryById = (id: number) => {
  const category = menu.find((item) => item.id === id);
  if (category === undefined) {
    throw new Error(`Category ${id} not found`);
  }
  return category;
};

const getMenuFromCategory = (categoryId: number) => {
  const categoryMenu = menu.find((item) => item.id === categoryId);
  if (categoryMenu === undefined) {
    throw new Error(`Category ${categoryId} not found`);
  }
  return categoryMenu;
};

const getDishById = (dishId: number) => {
  for (const category of menu) {
    for (const menuItem of category.menu) {
      if (menuItem.id === dishId) {
        return menuItem;
      }
    }
  }
  throw new Error(`Dish ${dishId} not found`);
};

const getDishOfDay = () => {
  const appetizers = getMenuFromCategory(2);
  const mainCourses = getMenuFromCategory(3);
  const desserts = getMenuFromCategory(4);

  const getRandomItem = (menu: TMenuItem[]) => {
    const randomIndex = Math.floor(Math.random() * menu.length);
    return menu[randomIndex];
  };

  const dishOfDay = [
    getRandomItem(appetizers.menu),
    getRandomItem(mainCourses.menu),
    getRandomItem(desserts.menu),
  ];

  return dishOfDay;
};

const menuDishes = menu
  .map((category) => category.menu.map((m) => m.name))
  .flat();

export {
  getCategories,
  getCategoryById,
  getMenuFromCategory,
  getDishById,
  getDishOfDay,
};

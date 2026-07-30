import bunCha from "../assets/images/menu/bun-cha.jpg";
import salad from "../assets/images/menu/salad.jpg";
import springRoll from "../assets/images/menu/spring-roll.jpg";
import banhMi from "../assets/images/menu/banh-mi.jpg";

const menu = [
  {
    id: 1,
    category: "main",
    image: bunCha,
    name: "Bún Chả",
    description:
      "Grilled pork served with rice noodles, fresh herbs and dipping sauce.",
    price: 14.99,
  },
  {
    id: 2,
    category: "salad",
    image: salad,
    name: "Fresh Garden Salad",
    description:
      "A refreshing mix of lettuce, tomatoes, cucumber and house dressing.",
    price: 11.99,
  },
  {
    id: 3,
    category: "appetizer",
    image: springRoll,
    name: "Fresh Spring Rolls",
    description: "Rice paper rolls filled with shrimp, herbs and vermicelli.",
    price: 8.99,
  },
  {
    id: 4,
    category: "main",
    image: banhMi,
    name: "Bánh Mì",
    description:
      "Vietnamese baguette with grilled pork and pickled vegetables.",
    price: 10.99,
  },
];

export default menu;

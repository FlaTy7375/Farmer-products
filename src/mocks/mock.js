import product1 from "/src/assets/product1.svg";
import product2 from "/src/assets/product2.svg";
import product3 from "/src/assets/product3.svg";
import product4 from "/src/assets/product4.svg";

export const cardList = [
  {
    id: 0,
    img: product1,
    mark: "Фермерские продукты",
    title: "Еда намного вкуснее",
  },
  {
    id: 1,
    img: product2,
    mark: "Фермерские продукты",
    title: "Натуральные продукты",
  },
  {
    id: 2,
    img: product3,
    mark: "Магазинные продукты",
    title: "Просроченные продукты",
  },
  {
    id: 3,
    img: product4,
    mark: "Магазинные продукты",
    title: "Некачественное мясо",
  },
];

export const textWrap = [
  {
    parentName: "farmer-card",
    name: "farmer-product",
    text: "Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники",
  },
  {
    parentName: "farmer-card",
    name: "farmer-product",
    text: "Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.",
  },
  {
    parentName: "shop-card",
    name: "shop-product",
    text: "Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара",
  },
  {
    parentName: "shop-card",
    name: "shop-product",
    text: "Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов",
  },
];

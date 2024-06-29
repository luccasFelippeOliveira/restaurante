
import React from "react";
import {
  IonList,
} from "@ionic/react";
import { TMenuCategory, getMenuFromCategory } from "../utils/restaurant.data";
import DishListItem from "./Dish";

type TDishListProps = {
  category: TMenuCategory;
}
const DishList: React.FC<TDishListProps> = ({category}) => {
  return (
    <IonList>
      {category.menu.map((dish) => (
        <DishListItem key={dish.id} dish={dish} />
      ))}
    </IonList>
  );
};

export default DishList;
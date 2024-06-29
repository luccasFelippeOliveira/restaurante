import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonList,
  IonPage,
} from "@ionic/react";
import { getCategories } from "../utils/restaurant.data";
import DishCategory from "./DishCategory";

const CategoryList: React.FC = () => {
  const categories = getCategories();
  return (
    <IonList>
      {categories.map((category) => (
        <DishCategory
          key={category.name}
          category={category}
          categoryUrl={`/category/${category.id}`}
        />
      ))}
      <DishCategory
        category={{
          name: "Prato do Dia",
          image: "images/lunch_combo.jpg",
        }}
        categoryUrl="/dish/prato-do-dia"
      />
    </IonList>
  );
};

export default CategoryList;

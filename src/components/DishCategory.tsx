import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import type { TMenuCategory } from "../utils/restaurant.data";

type TDishCategoryProps = {
  categoryUrl: string;
  category: Pick<TMenuCategory, "name" | "image">;
};

const DishCategory: React.FC<TDishCategoryProps> = (props) => {
  return (
    <IonCard routerDirection="forward" routerLink={props.categoryUrl}>
      <img
        style={{
          maxHeight: "200px",
          minWidth: "100%",
          objectFit: "cover",
        }}
        src={props.category.image}
        alt={props.category.name}
      />
      <IonCardHeader>
        <IonCardTitle> {props.category.name} </IonCardTitle>
      </IonCardHeader>
    </IonCard>
  );
};

export default DishCategory;

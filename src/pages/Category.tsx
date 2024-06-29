import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { getCategoryById } from "../utils/restaurant.data";
import CategoryList from "../components/CategoryList";
import DishList from "../components/DishList";
import { RouteComponentProps } from "react-router";

interface CategoryProps extends RouteComponentProps<{
  id: string;
}> {}

const Category: React.FC<CategoryProps> = ({match}) => {
  const category = getCategoryById(Number(match.params.id));
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>{category.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <DishList category={category} />
      </IonContent>
    </IonPage>
  );
};

export default Category;

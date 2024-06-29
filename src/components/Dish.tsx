
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonAvatar, IonNote, IonLabel } from "@ionic/react";
import type { TMenuCategory, TMenuItem } from "../utils/restaurant.data";

type TDish = {
  dish: TMenuItem;
}

const DishListItem: React.FC<TDish> = (props) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
  return (
    <IonItem routerLink={`/dish/${props.dish.id}`} routerDirection="forward">
      <IonAvatar slot="start">
        <img src={props.dish.image} alt={ props.dish.name } />
      </IonAvatar>
      <IonLabel>
        { props.dish.name }
      </IonLabel>
      <IonNote slot="end">
        { 
          formatPrice(props.dish.price)
        }
      </IonNote>
    </IonItem>
  )
}

export default DishListItem; 
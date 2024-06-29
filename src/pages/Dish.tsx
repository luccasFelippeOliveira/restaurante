import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import { getDishById } from '../utils/restaurant.data';

interface DishProps extends RouteComponentProps<{
  id: string;
}> {}

const Dish: React.FC<DishProps> = ({match}) => {
  // Fetch dish information based on dishId
  console.log('match', match.params.id);
  const dish = getDishById(Number(match.params.id));

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{ dish.name }</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <img src={ dish.image } alt={ dish.name } />
          </IonRow>
          <IonRow>
            <h1>{ dish.name }</h1>
          </IonRow>
          <IonRow>
            <p>{ dish.description }</p>
          </IonRow>
          <IonRow>
            <IonCol size='4' offset='10'>
              <p>{ dish.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dish;
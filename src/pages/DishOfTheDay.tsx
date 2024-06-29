import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { TMenuItem, getDishOfDay } from "../utils/restaurant.data";

const DishInformation: React.FC<{ dish: TMenuItem }> = ({ dish }) => {
  return (
    <>
      <IonRow>
        <img src={dish.image} alt={dish.name} />
      </IonRow>
      <IonRow>
        <h1>{dish.name}</h1>
      </IonRow>
      <IonRow>
        <p>{dish.description}</p>
      </IonRow>
      <IonRow>
        <IonCol size="4" offset="10">
          <p>
            {dish.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </IonCol>
      </IonRow>
    </>
  );
};

const DishOfDay: React.FC = () => {
  const dishOfDay = getDishOfDay();
  const dishOfDayTotal = dishOfDay.reduce((acc, dish) => acc + dish.price, 0);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Prato do dia</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {dishOfDay.map((dish) => (
          <DishInformation key={dish.id} dish={dish} />
        ))}
        <IonGrid>
          <IonRow class="ion-justify-content-end">
            <IonCol size="4">
              <p
                style={{
                  fontSize: "1em",
                  fontWeight: "bold",
                  textAlign: "end",
                }}
              >
                Sub Total:
              </p>
            </IonCol>
            <IonCol size="3">
              <p
                style={{
                  textAlign: "end",
                  fontSize: "1em",
                }}
              >
                {dishOfDayTotal.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </IonCol>
          </IonRow>
          <IonRow class="ion-justify-content-end">
            <IonCol size="4">
              <p
                style={{
                  fontSize: "1em",
                  fontWeight: "bold",
                  textAlign: "end",
                }}
              >
                Desconto:
              </p>
            </IonCol>
            <IonCol size="3">
              <p
                style={{
                  textAlign: "end",
                  fontSize: "1em",
                }}
              >
                10%
              </p>
            </IonCol>
          </IonRow>
          <IonRow class="ion-justify-content-end">
            <IonCol size="4">
              <p
                style={{
                  fontSize: "1em",
                  fontWeight: "bold",
                  textAlign: "end",
                }}
              >
                Total:
              </p>
            </IonCol>
            <IonCol size="3">
              <p
                style={{
                  textAlign: "end",
                  fontSize: "1em",
                }}
              >
                {(dishOfDayTotal * 0.9).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default DishOfDay;

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import CategoryList from '../components/CategoryList';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>🍲 Restaurante Sopinha</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <CategoryList />
      </IonContent>
    </IonPage>
  );
};

export default Home;

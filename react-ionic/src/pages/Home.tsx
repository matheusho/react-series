import React, { useState } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonCardContent,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonIcon,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/react';

const Home = ({ history }: any) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Modal</IonTitle>
            <IonButtons slot="start">
              <IonButton icon-only onClick={() => setShowModal(false)}>
                <IonIcon name="close" />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>Some content to display in the modal.</IonContent>
      </IonModal>

      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Welcome to Ionic</IonCardSubtitle>
            <IonCardTitle>Running on React</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>This is some card content.</IonCardContent>
          <IonList lines="none">
            <IonItem button onClick={() => history.push('/about')}>
              <IonLabel>
                <h3>Read more</h3>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonCard>
        <IonButton onClick={() => setShowModal(true)}>Show modal</IonButton>
      </IonContent>
    </>
  );
};

export default Home;

import React from "react";
import {
  IonContent,
  IonBackButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton
} from '@ionic/react';

const About = (props: any) => {
  const {
    match,
    history: { goBack }
  } = props;

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton goBack={goBack} defaultHref="/" />
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        A new React Ionic integration. This is beta but is awesome!
        <IonButton onClick={goBack}>Back</IonButton>
      </IonContent>
    </>
  );
};
export default About;

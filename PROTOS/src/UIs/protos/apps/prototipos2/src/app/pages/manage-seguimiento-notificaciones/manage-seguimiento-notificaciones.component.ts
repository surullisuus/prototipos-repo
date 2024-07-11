import { Component } from '@angular/core';

enum normalNotificationState {
  PENDING_TO_NOTIFY = 'Pendiente por notificar',
  PENDING_TO_ATTACH_PERSONAL_NOTIFICATION = 'Pendiente por adjuntar notificación personal/aviso',
  NOTICE_CERTIFICATE = 'Constancia personal/aviso',
  NOTIFIED = 'Notificado',
}

enum electronicNotificationState {
  PENDING_TO_ATTACH_EMAIL_NOTIFICATION = 'Pendiente por adjuntar notificación por correo electrónico',
  EMAIL_CERTIFICATE = 'Constancia correo electrónico',
  NOTIFIED = 'Notificado',
}

interface notificationFollow {
  id: number;
  group: string;
  process: string;
  solicitudeNumber: string;
  exitDocument: string;
  state: normalNotificationState | electronicNotificationState;
  notificationType: string;
  fechaRecibido: Date;
  tipoParte: string;
  para: string; // que persona o que razon social va a notificar
  constancia?: string;
  electronicNotification: boolean;
}

@Component({
  selector: 'app-manage-seguimiento-notificaciones',
  templateUrl: './manage-seguimiento-notificaciones.component.html',
  styleUrl: './manage-seguimiento-notificaciones.component.css',
})
export class ManageSeguimientoNotificacionesComponent {
  currentState?: string;
  currentGroup?: string;
  currentProcess?: string;
  currentNumber?: string;

  notifications: notificationFollow[] = [
    {
      id: 1,
      group: 'Grupo A',
      process: 'Proceso 1',
      solicitudeNumber: '123456',
      exitDocument: 'Documento 1',
      state: normalNotificationState.PENDING_TO_NOTIFY,
      notificationType: 'Tipo A',
      fechaRecibido: new Date('2023-01-01'),
      tipoParte: 'Parte A',
      para: 'Persona A',
      electronicNotification: false,
    },
    {
      id: 2,
      group: 'Grupo B',
      process: 'Proceso 2',
      solicitudeNumber: '789012',
      exitDocument: 'Documento 2',
      state: normalNotificationState.PENDING_TO_ATTACH_PERSONAL_NOTIFICATION,
      notificationType: 'Tipo B',
      fechaRecibido: new Date('2023-02-01'),
      tipoParte: 'Parte B',
      para: 'Persona B',
      electronicNotification: false,
    },
    {
      id: 4,
      group: 'Grupo D',
      process: 'Proceso 4',
      solicitudeNumber: '901234',
      exitDocument: 'Documento 4',
      state: normalNotificationState.NOTICE_CERTIFICATE,
      notificationType: 'Tipo D',
      fechaRecibido: new Date('2023-04-01'),
      tipoParte: 'Parte D',
      para: 'Persona D',
      constancia: 'Constancia D',
      electronicNotification: false,
    },
    {
      id: 5,
      group: 'Grupo E',
      process: 'Proceso 5',
      solicitudeNumber: '567890',
      exitDocument: 'Documento 5',
      state: normalNotificationState.NOTIFIED,
      notificationType: 'Tipo E',
      fechaRecibido: new Date('2023-05-01'),
      tipoParte: 'Parte E',
      para: 'Persona E',
      electronicNotification: false,
    },
    {
      id: 6,
      group: 'Grupo F',
      process: 'Proceso 6',
      solicitudeNumber: '234567',
      exitDocument: 'Documento 6',
      state: electronicNotificationState.PENDING_TO_ATTACH_EMAIL_NOTIFICATION,
      notificationType: 'Tipo F',
      fechaRecibido: new Date('2023-06-01'),
      tipoParte: 'Parte F',
      para: 'Persona F',
      electronicNotification: true,
    },
    {
      id: 7,
      group: 'Grupo G',
      process: 'Proceso 7',
      solicitudeNumber: '890123',
      exitDocument: 'Documento 7',
      state: electronicNotificationState.EMAIL_CERTIFICATE,
      notificationType: 'Tipo G',
      fechaRecibido: new Date('2023-07-01'),
      tipoParte: 'Parte G',
      para: 'Persona G',
      constancia: 'Constancia G',
      electronicNotification: true,
    },
    {
      id: 8,
      group: 'Grupo H',
      process: 'Proceso 8',
      solicitudeNumber: '456789',
      exitDocument: 'Documento 8',
      state: electronicNotificationState.NOTIFIED,
      notificationType: 'Tipo H',
      fechaRecibido: new Date('2023-08-01'),
      tipoParte: 'Parte H',
      para: 'Persona H',
      electronicNotification: true,
    },
  ];

  getGroupList() {
    return [
      {
        id: 1,
        text: 'Grupo 1',
      },
      {
        id: 2,
        text: 'Grupo 2',
      },
      {
        id: 3,
        text: 'Grupo 3',
      },
      {
        id: 4,
        text: 'Grupo 4',
      },
    ];
  }

  getProccesList() {
    return [
      {
        id: 1,
        text: 'Proceso 1',
      },
      {
        id: 2,
        text: 'Proceso 2',
      },
      {
        id: 3,
        text: 'Proceso 3',
      },
      {
        id: 4,
        text: 'Proceso 4',
      },
    ];
  }

  getStateList() {
    return [
      {
        id: 1,
        text: 'Pendiente por notificar',
      },
      {
        id: 2,
        text: 'Pendiente por adjuntar notificación personal',
      },
      {
        id: 3,
        text: 'Pendiente por adjuntar notificación por aviso',
      },
      {
        id: 4,
        text: 'Pendiente por adjuntar notificación por correo electrónico',
      },
      {
        id: 5,
        text: 'Constancia personal',
      },
      {
        id: 6,
        text: 'Constancia por aviso',
      },
      {
        id: 7,
        text: 'Constancia correo electrónico',
      },
      {
        id: 8,
        text: 'Notificado',
      },
    ];
  }

  getStates() {
    return [
      String(normalNotificationState.PENDING_TO_NOTIFY),
      String(normalNotificationState.PENDING_TO_ATTACH_PERSONAL_NOTIFICATION),
      String(normalNotificationState.NOTICE_CERTIFICATE),
      String(normalNotificationState.NOTIFIED),
      String(electronicNotificationState.PENDING_TO_ATTACH_EMAIL_NOTIFICATION),
      String(electronicNotificationState.EMAIL_CERTIFICATE),
      String(electronicNotificationState.NOTIFIED),
    ];
  }

  verifyNotificationStateWith(
    posibleStates: string[],
    notificationState: string
  ) {
    return posibleStates.includes(notificationState);
  }

  setCurrentState(value: string) {
    this.currentState = value;
  }

  setCurrentGroup(value: string) {
    this.currentGroup = value;
  }

  setCurrentProcess(value: string) {
    this.currentProcess = value;
  }

  setCurrentNumber(event: any) {
    this.currentNumber = event.target.value;
  }
}

/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICodeableConcept,
  IContactPoint,
  IDeviceDeviceName,
  IDeviceProperty,
  IDeviceSpecialization,
  IDeviceUdiCarrier,
  IDeviceVersion,
  IDomainResource,
  IElement,
  IFHIRDeviceStatus,
  IIdentifier,
  IPrimitiveDateTime,
  IPrimitiveString,
  IPrimitiveUri,
  IReference,
} from "../internal";

export interface IDevice extends IDomainResource {
  identifier?: Array<IIdentifier>;

  definition?: IReference;

  udiCarrier?: Array<IDeviceUdiCarrier>;

  status?: IFHIRDeviceStatus;
  _status?: IElement;

  statusReason?: Array<ICodeableConcept>;

  distinctIdentifier?: IPrimitiveString;
  _distinctIdentifier?: IElement;

  manufacturer?: IPrimitiveString;
  _manufacturer?: IElement;

  manufactureDate?: IPrimitiveDateTime;
  _manufactureDate?: IElement;

  expirationDate?: IPrimitiveDateTime;
  _expirationDate?: IElement;

  lotNumber?: IPrimitiveString;
  _lotNumber?: IElement;

  serialNumber?: IPrimitiveString;
  _serialNumber?: IElement;

  deviceName?: Array<IDeviceDeviceName>;

  modelNumber?: IPrimitiveString;
  _modelNumber?: IElement;

  partNumber?: IPrimitiveString;
  _partNumber?: IElement;

  type?: ICodeableConcept;

  specialization?: Array<IDeviceSpecialization>;

  version?: Array<IDeviceVersion>;

  property?: Array<IDeviceProperty>;

  patient?: IReference;

  owner?: IReference;

  contact?: Array<IContactPoint>;

  location?: IReference;

  url?: IPrimitiveUri;
  _url?: IElement;

  note?: Array<IAnnotation>;

  safety?: Array<ICodeableConcept>;

  parent?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

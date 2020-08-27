/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICodeableConcept,
  IContactPoint,
  IDeviceDefinitionCapability,
  IDeviceDefinitionDeviceName,
  IDeviceDefinitionMaterial,
  IDeviceDefinitionProperty,
  IDeviceDefinitionSpecialization,
  IDeviceDefinitionUdiDeviceIdentifier,
  IDomainResource,
  IElement,
  IIdentifier,
  IPrimitiveString,
  IPrimitiveUri,
  IProdCharacteristic,
  IProductShelfLife,
  IQuantity,
  IReference,
} from "../internal";

export interface IDeviceDefinition extends IDomainResource {
  identifier?: Array<IIdentifier>;

  udiDeviceIdentifier?: Array<IDeviceDefinitionUdiDeviceIdentifier>;

  manufacturerString?: IPrimitiveString;
  _manufacturerString?: IElement;
  
  manufacturerReference?: IReference;

  deviceName?: Array<IDeviceDefinitionDeviceName>;

  modelNumber?: IPrimitiveString;
  _modelNumber?: IElement;

  type?: ICodeableConcept;

  specialization?: Array<IDeviceDefinitionSpecialization>;

  version?: Array<IPrimitiveString>;
  _version?: Array<IElement | null>;

  safety?: Array<ICodeableConcept>;

  shelfLifeStorage?: Array<IProductShelfLife>;

  physicalCharacteristics?: IProdCharacteristic;

  languageCode?: Array<ICodeableConcept>;

  capability?: Array<IDeviceDefinitionCapability>;

  property?: Array<IDeviceDefinitionProperty>;

  owner?: IReference;

  contact?: Array<IContactPoint>;

  url?: IPrimitiveUri;
  _url?: IElement;

  onlineInformation?: IPrimitiveUri;
  _onlineInformation?: IElement;

  note?: Array<IAnnotation>;

  quantity?: IQuantity;

  parentDevice?: IReference;

  material?: Array<IDeviceDefinitionMaterial>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

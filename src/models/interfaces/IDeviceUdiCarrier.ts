/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveBase64Binary,
  IPrimitiveString,
  IPrimitiveUri,
  IUDIEntryType,
} from "../internal";

export interface IDeviceUdiCarrier extends IBackboneElement {
  deviceIdentifier?: IPrimitiveString;
  _deviceIdentifier?: IElement;

  issuer?: IPrimitiveUri;
  _issuer?: IElement;

  jurisdiction?: IPrimitiveUri;
  _jurisdiction?: IElement;

  carrierAIDC?: IPrimitiveBase64Binary;
  _carrierAIDC?: IElement;

  carrierHRF?: IPrimitiveString;
  _carrierHRF?: IElement;

  entryType?: IUDIEntryType;
  _entryType?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

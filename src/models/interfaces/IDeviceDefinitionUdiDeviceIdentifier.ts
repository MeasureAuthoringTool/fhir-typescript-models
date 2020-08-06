/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveString,
  IPrimitiveUri,
} from "../internal";

export interface IDeviceDefinitionUdiDeviceIdentifier extends IBackboneElement {
  deviceIdentifier?: IPrimitiveString;
  _deviceIdentifier?: IElement;

  issuer?: IPrimitiveUri;
  _issuer?: IElement;

  jurisdiction?: IPrimitiveUri;
  _jurisdiction?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

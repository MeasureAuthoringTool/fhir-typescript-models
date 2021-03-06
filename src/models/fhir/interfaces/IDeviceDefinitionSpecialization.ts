/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveString,
} from "../internal";

export interface IDeviceDefinitionSpecialization extends IBackboneElement {
  systemType?: IPrimitiveString;
  _systemType?: IElement;

  version?: IPrimitiveString;
  _version?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

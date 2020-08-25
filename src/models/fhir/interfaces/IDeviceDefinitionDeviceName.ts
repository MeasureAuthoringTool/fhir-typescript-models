/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IDeviceNameType,
  IElement,
  IPrimitiveString,
} from "../internal";

export interface IDeviceDefinitionDeviceName extends IBackboneElement {
  name?: IPrimitiveString;
  _name?: IElement;

  type?: IDeviceNameType;
  _type?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

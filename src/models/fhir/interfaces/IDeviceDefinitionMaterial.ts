/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveBoolean,
} from "../internal";

export interface IDeviceDefinitionMaterial extends IBackboneElement {
  substance?: ICodeableConcept;

  alternate?: IPrimitiveBoolean;
  _alternate?: IElement;

  allergenicIndicator?: IPrimitiveBoolean;
  _allergenicIndicator?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

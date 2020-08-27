/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IContractTermAssetContext extends IBackboneElement {
  reference?: IReference;

  code?: Array<ICodeableConcept>;

  text?: IPrimitiveString;
  _text?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IElement,
  IIdentifierUse,
  IPeriod,
  IPrimitiveString,
  IPrimitiveUri,
  IReference,
} from "../internal";

export interface IIdentifier extends IElement {
  use?: IIdentifierUse;
  _use?: IElement;

  type?: ICodeableConcept;

  system?: IPrimitiveUri;
  _system?: IElement;

  value?: IPrimitiveString;
  _value?: IElement;

  period?: IPeriod;

  assigner?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

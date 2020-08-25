/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IPrimitiveDateTime,
  IReference,
} from "../internal";

export interface IMedicinalProductSpecialDesignation extends IBackboneElement {
  identifier?: Array<IIdentifier>;

  type?: ICodeableConcept;

  intendedUse?: ICodeableConcept;

  indicationCodeableConcept?: ICodeableConcept;
  
  indicationReference?: IReference;

  status?: ICodeableConcept;

  date?: IPrimitiveDateTime;
  _date?: IElement;

  species?: ICodeableConcept;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

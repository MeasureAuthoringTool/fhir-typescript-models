/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IPrimitiveDateTime,
  IReference,
} from "../internal";

export interface IMedicinalProductManufacturingBusinessOperation extends IBackboneElement {
  operationType?: ICodeableConcept;

  authorisationReferenceNumber?: IIdentifier;

  effectiveDate?: IPrimitiveDateTime;
  _effectiveDate?: IElement;

  confidentialityIndicator?: ICodeableConcept;

  manufacturer?: Array<IReference>;

  regulator?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

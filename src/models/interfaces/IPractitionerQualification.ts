/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IIdentifier,
  IPeriod,
  IReference,
} from "../internal";

export interface IPractitionerQualification extends IBackboneElement {
  identifier?: Array<IIdentifier>;

  code?: ICodeableConcept;

  period?: IPeriod;

  issuer?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

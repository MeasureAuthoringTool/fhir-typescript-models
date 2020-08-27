/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IIdentifier,
  IReference,
} from "../internal";

export interface ISubstanceReferenceInformationGeneElement extends IBackboneElement {
  type?: ICodeableConcept;

  element?: IIdentifier;

  source?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

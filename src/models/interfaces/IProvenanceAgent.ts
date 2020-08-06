/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IReference,
} from "../internal";

export interface IProvenanceAgent extends IBackboneElement {
  type?: ICodeableConcept;

  role?: Array<ICodeableConcept>;

  who?: IReference;

  onBehalfOf?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

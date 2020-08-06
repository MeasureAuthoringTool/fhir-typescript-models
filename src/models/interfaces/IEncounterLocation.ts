/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IEncounterLocationStatus,
  IPeriod,
  IReference,
} from "../internal";

export interface IEncounterLocation extends IBackboneElement {
  location?: IReference;

  status?: IEncounterLocationStatus;
  _status?: IElement;

  physicalType?: ICodeableConcept;

  period?: IPeriod;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

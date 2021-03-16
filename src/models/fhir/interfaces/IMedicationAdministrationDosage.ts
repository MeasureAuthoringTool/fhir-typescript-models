/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveString,
  IRatio,
  ISimpleQuantity,
} from "../internal";

export interface IMedicationAdministrationDosage extends IBackboneElement {
  text?: IPrimitiveString;
  _text?: IElement;

  site?: ICodeableConcept;

  route?: ICodeableConcept;

  method?: ICodeableConcept;

  dose?: ISimpleQuantity;

  rateRatio?: IRatio;
  
  rateQuantity?: ISimpleQuantity;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

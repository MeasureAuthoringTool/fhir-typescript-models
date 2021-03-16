/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveString,
  ISimpleQuantity,
} from "../internal";

export interface IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics extends IBackboneElement {
  characteristicCodeableConcept?: ICodeableConcept;
  
  characteristicQuantity?: ISimpleQuantity;

  value?: Array<IPrimitiveString>;
  _value?: Array<IElement | null>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

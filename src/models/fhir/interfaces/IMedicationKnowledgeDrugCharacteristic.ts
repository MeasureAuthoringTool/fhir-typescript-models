/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveBase64Binary,
  IPrimitiveString,
  ISimpleQuantity,
} from "../internal";

export interface IMedicationKnowledgeDrugCharacteristic extends IBackboneElement {
  type?: ICodeableConcept;

  valueCodeableConcept?: ICodeableConcept;
  
  valueString?: IPrimitiveString;
  _valueString?: IElement;
  
  valueQuantity?: ISimpleQuantity;
  
  valueBase64Binary?: IPrimitiveBase64Binary;
  _valueBase64Binary?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IDosageDoseAndRate,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveInteger,
  IPrimitiveString,
  IRatio,
  ISimpleQuantity,
  ITiming,
} from "../internal";

export interface IDosage extends IBackboneElement {
  sequence?: IPrimitiveInteger;
  _sequence?: IElement;

  text?: IPrimitiveString;
  _text?: IElement;

  additionalInstruction?: Array<ICodeableConcept>;

  patientInstruction?: IPrimitiveString;
  _patientInstruction?: IElement;

  timing?: ITiming;

  asNeededBoolean?: IPrimitiveBoolean;
  _asNeededBoolean?: IElement;
  
  asNeededCodeableConcept?: ICodeableConcept;

  site?: ICodeableConcept;

  route?: ICodeableConcept;

  method?: ICodeableConcept;

  doseAndRate?: Array<IDosageDoseAndRate>;

  maxDosePerPeriod?: IRatio;

  maxDosePerAdministration?: ISimpleQuantity;

  maxDosePerLifetime?: ISimpleQuantity;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveString,
  ISubstanceAmount,
  ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation,
  ISubstancePolymerRepeatRepeatUnitStructuralRepresentation,
} from "../internal";

export interface ISubstancePolymerRepeatRepeatUnit extends IBackboneElement {
  orientationOfPolymerisation?: ICodeableConcept;

  repeatUnit?: IPrimitiveString;
  _repeatUnit?: IElement;

  amount?: ISubstanceAmount;

  degreeOfPolymerisation?: Array<ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation>;

  structuralRepresentation?: Array<ISubstancePolymerRepeatRepeatUnitStructuralRepresentation>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDataRequirementCodeFilter,
  IDataRequirementDateFilter,
  IDataRequirementSort,
  IElement,
  IFHIRAllTypes,
  IPrimitiveCanonical,
  IPrimitivePositiveInt,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IDataRequirement extends IElement {
  type?: IFHIRAllTypes;
  _type?: IElement;

  profile?: Array<IPrimitiveCanonical>;
  _profile?: Array<IElement | null>;

  subjectCodeableConcept?: ICodeableConcept;
  
  subjectReference?: IReference;

  mustSupport?: Array<IPrimitiveString>;
  _mustSupport?: Array<IElement | null>;

  codeFilter?: Array<IDataRequirementCodeFilter>;

  dateFilter?: Array<IDataRequirementDateFilter>;

  limit?: IPrimitivePositiveInt;
  _limit?: IElement;

  sort?: Array<IDataRequirementSort>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

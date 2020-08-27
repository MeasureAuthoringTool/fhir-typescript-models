/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IPrimitiveString,
  ISpecimenDefinitionTypeTested,
} from "../internal";

export interface ISpecimenDefinition extends IDomainResource {
  identifier?: IIdentifier;

  typeCollected?: ICodeableConcept;

  patientPreparation?: Array<ICodeableConcept>;

  timeAspect?: IPrimitiveString;
  _timeAspect?: IElement;

  collection?: Array<ICodeableConcept>;

  typeTested?: Array<ISpecimenDefinitionTypeTested>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

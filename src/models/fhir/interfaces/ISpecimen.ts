/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IPrimitiveDateTime,
  IReference,
  ISpecimenCollection,
  ISpecimenContainer,
  ISpecimenProcessing,
  ISpecimenStatus,
} from "../internal";

export interface ISpecimen extends IDomainResource {
  identifier?: Array<IIdentifier>;

  accessionIdentifier?: IIdentifier;

  status?: ISpecimenStatus;
  _status?: IElement;

  type?: ICodeableConcept;

  subject?: IReference;

  receivedTime?: IPrimitiveDateTime;
  _receivedTime?: IElement;

  parent?: Array<IReference>;

  request?: Array<IReference>;

  collection?: ISpecimenCollection;

  processing?: Array<ISpecimenProcessing>;

  container?: Array<ISpecimenContainer>;

  condition?: Array<ICodeableConcept>;

  note?: Array<IAnnotation>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

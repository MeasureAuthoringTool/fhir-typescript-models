/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICodeableConcept,
  IDataRequirement,
  IDomainResource,
  IElement,
  IGuidanceResponseStatus,
  IIdentifier,
  IPrimitiveCanonical,
  IPrimitiveDateTime,
  IPrimitiveUri,
  IReference,
} from "../internal";

export interface IGuidanceResponse extends IDomainResource {
  requestIdentifier?: IIdentifier;

  identifier?: Array<IIdentifier>;

  moduleUri?: IPrimitiveUri;
  _moduleUri?: IElement;
  
  moduleCanonical?: IPrimitiveCanonical;
  _moduleCanonical?: IElement;
  
  moduleCodeableConcept?: ICodeableConcept;

  status?: IGuidanceResponseStatus;
  _status?: IElement;

  subject?: IReference;

  encounter?: IReference;

  occurrenceDateTime?: IPrimitiveDateTime;
  _occurrenceDateTime?: IElement;

  performer?: IReference;

  reasonCode?: Array<ICodeableConcept>;

  reasonReference?: Array<IReference>;

  note?: Array<IAnnotation>;

  evaluationMessage?: Array<IReference>;

  outputParameters?: IReference;

  result?: IReference;

  dataRequirement?: Array<IDataRequirement>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

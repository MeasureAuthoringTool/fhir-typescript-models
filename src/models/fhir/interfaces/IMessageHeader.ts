/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  ICoding,
  IDomainResource,
  IElement,
  IMessageHeaderDestination,
  IMessageHeaderResponse,
  IMessageHeaderSource,
  IPrimitiveCanonical,
  IPrimitiveUri,
  IReference,
} from "../internal";

export interface IMessageHeader extends IDomainResource {
  eventCoding?: ICoding;
  
  eventUri?: IPrimitiveUri;
  _eventUri?: IElement;

  destination?: Array<IMessageHeaderDestination>;

  sender?: IReference;

  enterer?: IReference;

  author?: IReference;

  source?: IMessageHeaderSource;

  responsible?: IReference;

  reason?: ICodeableConcept;

  response?: IMessageHeaderResponse;

  focus?: Array<IReference>;

  definition?: IPrimitiveCanonical;
  _definition?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

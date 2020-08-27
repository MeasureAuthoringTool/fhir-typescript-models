/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IPeriod,
  IPrimitiveDateTime,
  IPrimitiveInstant,
  IPrimitiveUri,
  IProvenanceAgent,
  IProvenanceEntity,
  IReference,
  ISignature,
} from "../internal";

export interface IProvenance extends IDomainResource {
  target?: Array<IReference>;

  occurredPeriod?: IPeriod;
  
  occurredDateTime?: IPrimitiveDateTime;
  _occurredDateTime?: IElement;

  recorded?: IPrimitiveInstant;
  _recorded?: IElement;

  policy?: Array<IPrimitiveUri>;
  _policy?: Array<IElement | null>;

  location?: IReference;

  reason?: Array<ICodeableConcept>;

  activity?: ICodeableConcept;

  agent?: Array<IProvenanceAgent>;

  entity?: Array<IProvenanceEntity>;

  signature?: Array<ISignature>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

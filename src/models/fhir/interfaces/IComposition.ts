/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  ICompositionAttester,
  ICompositionEvent,
  ICompositionRelatesTo,
  ICompositionSection,
  ICompositionStatus,
  IDocumentConfidentiality,
  IDomainResource,
  IElement,
  IIdentifier,
  IPrimitiveDateTime,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IComposition extends IDomainResource {
  identifier?: IIdentifier;

  status?: ICompositionStatus;
  _status?: IElement;

  type?: ICodeableConcept;

  category?: Array<ICodeableConcept>;

  subject?: IReference;

  encounter?: IReference;

  date?: IPrimitiveDateTime;
  _date?: IElement;

  author?: Array<IReference>;

  title?: IPrimitiveString;
  _title?: IElement;

  confidentiality?: IDocumentConfidentiality;
  _confidentiality?: IElement;

  attester?: Array<ICompositionAttester>;

  custodian?: IReference;

  relatesTo?: Array<ICompositionRelatesTo>;

  event?: Array<ICompositionEvent>;

  section?: Array<ICompositionSection>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

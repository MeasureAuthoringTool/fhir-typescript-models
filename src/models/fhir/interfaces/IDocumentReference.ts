/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDocumentReferenceContent,
  IDocumentReferenceContext,
  IDocumentReferenceRelatesTo,
  IDocumentReferenceStatus,
  IDomainResource,
  IElement,
  IIdentifier,
  IPrimitiveInstant,
  IPrimitiveString,
  IReference,
  IReferredDocumentStatus,
} from "../internal";

export interface IDocumentReference extends IDomainResource {
  masterIdentifier?: IIdentifier;

  identifier?: Array<IIdentifier>;

  status?: IDocumentReferenceStatus;
  _status?: IElement;

  docStatus?: IReferredDocumentStatus;
  _docStatus?: IElement;

  type?: ICodeableConcept;

  category?: Array<ICodeableConcept>;

  subject?: IReference;

  date?: IPrimitiveInstant;
  _date?: IElement;

  author?: Array<IReference>;

  authenticator?: IReference;

  custodian?: IReference;

  relatesTo?: Array<IDocumentReferenceRelatesTo>;

  description?: IPrimitiveString;
  _description?: IElement;

  securityLabel?: Array<ICodeableConcept>;

  content?: Array<IDocumentReferenceContent>;

  context?: IDocumentReferenceContext;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

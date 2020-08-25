/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDocumentManifestRelated,
  IDocumentReferenceStatus,
  IDomainResource,
  IElement,
  IIdentifier,
  IPrimitiveDateTime,
  IPrimitiveString,
  IPrimitiveUri,
  IReference,
} from "../internal";

export interface IDocumentManifest extends IDomainResource {
  masterIdentifier?: IIdentifier;

  identifier?: Array<IIdentifier>;

  status?: IDocumentReferenceStatus;
  _status?: IElement;

  type?: ICodeableConcept;

  subject?: IReference;

  created?: IPrimitiveDateTime;
  _created?: IElement;

  author?: Array<IReference>;

  recipient?: Array<IReference>;

  source?: IPrimitiveUri;
  _source?: IElement;

  description?: IPrimitiveString;
  _description?: IElement;

  content?: Array<IReference>;

  related?: Array<IDocumentManifestRelated>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

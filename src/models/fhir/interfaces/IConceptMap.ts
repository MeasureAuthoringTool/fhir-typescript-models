/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IConceptMapGroup,
  IContactDetail,
  IDomainResource,
  IElement,
  IIdentifier,
  IPrimitiveBoolean,
  IPrimitiveCanonical,
  IPrimitiveDateTime,
  IPrimitiveMarkdown,
  IPrimitiveString,
  IPrimitiveUri,
  IPublicationStatus,
  IUsageContext,
} from "../internal";

export interface IConceptMap extends IDomainResource {
  url?: IPrimitiveUri;
  _url?: IElement;

  identifier?: IIdentifier;

  version?: IPrimitiveString;
  _version?: IElement;

  name?: IPrimitiveString;
  _name?: IElement;

  title?: IPrimitiveString;
  _title?: IElement;

  status?: IPublicationStatus;
  _status?: IElement;

  experimental?: IPrimitiveBoolean;
  _experimental?: IElement;

  date?: IPrimitiveDateTime;
  _date?: IElement;

  publisher?: IPrimitiveString;
  _publisher?: IElement;

  contact?: Array<IContactDetail>;

  description?: IPrimitiveMarkdown;
  _description?: IElement;

  useContext?: Array<IUsageContext>;

  jurisdiction?: Array<ICodeableConcept>;

  purpose?: IPrimitiveMarkdown;
  _purpose?: IElement;

  copyright?: IPrimitiveMarkdown;
  _copyright?: IElement;

  sourceUri?: IPrimitiveUri;
  _sourceUri?: IElement;
  
  sourceCanonical?: IPrimitiveCanonical;
  _sourceCanonical?: IElement;

  targetUri?: IPrimitiveUri;
  _targetUri?: IElement;
  
  targetCanonical?: IPrimitiveCanonical;
  _targetCanonical?: IElement;

  group?: Array<IConceptMapGroup>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

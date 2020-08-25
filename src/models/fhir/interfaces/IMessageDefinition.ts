/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IDomainResource,
  IElement,
  IIdentifier,
  IMessageDefinitionAllowedResponse,
  IMessageDefinitionFocus,
  IMessageheaderResponseRequest,
  IMessageSignificanceCategory,
  IPrimitiveBoolean,
  IPrimitiveCanonical,
  IPrimitiveDateTime,
  IPrimitiveMarkdown,
  IPrimitiveString,
  IPrimitiveUri,
  IPublicationStatus,
  IUsageContext,
} from "../internal";

export interface IMessageDefinition extends IDomainResource {
  url?: IPrimitiveUri;
  _url?: IElement;

  identifier?: Array<IIdentifier>;

  version?: IPrimitiveString;
  _version?: IElement;

  name?: IPrimitiveString;
  _name?: IElement;

  title?: IPrimitiveString;
  _title?: IElement;

  replaces?: Array<IPrimitiveCanonical>;
  _replaces?: Array<IElement | null>;

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

  base?: IPrimitiveCanonical;
  _base?: IElement;

  parent?: Array<IPrimitiveCanonical>;
  _parent?: Array<IElement | null>;

  eventCoding?: ICoding;
  
  eventUri?: IPrimitiveUri;
  _eventUri?: IElement;

  category?: IMessageSignificanceCategory;
  _category?: IElement;

  focus?: Array<IMessageDefinitionFocus>;

  responseRequired?: IMessageheaderResponseRequest;
  _responseRequired?: IElement;

  allowedResponse?: Array<IMessageDefinitionAllowedResponse>;

  graph?: Array<IPrimitiveCanonical>;
  _graph?: Array<IElement | null>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

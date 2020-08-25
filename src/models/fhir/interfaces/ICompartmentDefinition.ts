/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICompartmentDefinitionResource,
  ICompartmentType,
  IContactDetail,
  IDomainResource,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveDateTime,
  IPrimitiveMarkdown,
  IPrimitiveString,
  IPrimitiveUri,
  IPublicationStatus,
  IUsageContext,
} from "../internal";

export interface ICompartmentDefinition extends IDomainResource {
  url?: IPrimitiveUri;
  _url?: IElement;

  version?: IPrimitiveString;
  _version?: IElement;

  name?: IPrimitiveString;
  _name?: IElement;

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

  purpose?: IPrimitiveMarkdown;
  _purpose?: IElement;

  code?: ICompartmentType;
  _code?: IElement;

  search?: IPrimitiveBoolean;
  _search?: IElement;

  resource?: Array<ICompartmentDefinitionResource>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

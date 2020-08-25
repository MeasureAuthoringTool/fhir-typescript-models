/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IContactDetail,
  IDomainResource,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveCanonical,
  IPrimitiveCode,
  IPrimitiveDateTime,
  IPrimitiveMarkdown,
  IPrimitiveString,
  IPrimitiveUri,
  IPublicationStatus,
  IResourceType,
  ISearchComparator,
  ISearchModifierCode,
  ISearchParameterComponent,
  ISearchParamType,
  IUsageContext,
  IXPathUsageType,
} from "../internal";

export interface ISearchParameter extends IDomainResource {
  url?: IPrimitiveUri;
  _url?: IElement;

  version?: IPrimitiveString;
  _version?: IElement;

  name?: IPrimitiveString;
  _name?: IElement;

  derivedFrom?: IPrimitiveCanonical;
  _derivedFrom?: IElement;

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

  code?: IPrimitiveCode;
  _code?: IElement;

  base?: Array<IResourceType>;
  _base?: Array<IElement | null>;

  type?: ISearchParamType;
  _type?: IElement;

  expression?: IPrimitiveString;
  _expression?: IElement;

  xpath?: IPrimitiveString;
  _xpath?: IElement;

  xpathUsage?: IXPathUsageType;
  _xpathUsage?: IElement;

  target?: Array<IResourceType>;
  _target?: Array<IElement | null>;

  multipleOr?: IPrimitiveBoolean;
  _multipleOr?: IElement;

  multipleAnd?: IPrimitiveBoolean;
  _multipleAnd?: IElement;

  comparator?: Array<ISearchComparator>;
  _comparator?: Array<IElement | null>;

  modifier?: Array<ISearchModifierCode>;
  _modifier?: Array<IElement | null>;

  chain?: Array<IPrimitiveString>;
  _chain?: Array<IElement | null>;

  component?: Array<ISearchParameterComponent>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

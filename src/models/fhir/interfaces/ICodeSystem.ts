/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  ICodeSystemConcept,
  ICodeSystemContentMode,
  ICodeSystemFilter,
  ICodeSystemHierarchyMeaning,
  ICodeSystemProperty,
  IContactDetail,
  IDomainResource,
  IElement,
  IIdentifier,
  IPrimitiveBoolean,
  IPrimitiveCanonical,
  IPrimitiveDateTime,
  IPrimitiveMarkdown,
  IPrimitiveString,
  IPrimitiveUnsignedInt,
  IPrimitiveUri,
  IPublicationStatus,
  IUsageContext,
} from "../internal";

export interface ICodeSystem extends IDomainResource {
  url?: IPrimitiveUri;
  _url?: IElement;

  identifier?: Array<IIdentifier>;

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

  caseSensitive?: IPrimitiveBoolean;
  _caseSensitive?: IElement;

  valueSet?: IPrimitiveCanonical;
  _valueSet?: IElement;

  hierarchyMeaning?: ICodeSystemHierarchyMeaning;
  _hierarchyMeaning?: IElement;

  compositional?: IPrimitiveBoolean;
  _compositional?: IElement;

  versionNeeded?: IPrimitiveBoolean;
  _versionNeeded?: IElement;

  content?: ICodeSystemContentMode;
  _content?: IElement;

  supplements?: IPrimitiveCanonical;
  _supplements?: IElement;

  count?: IPrimitiveUnsignedInt;
  _count?: IElement;

  filter?: Array<ICodeSystemFilter>;

  property?: Array<ICodeSystemProperty>;

  concept?: Array<ICodeSystemConcept>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

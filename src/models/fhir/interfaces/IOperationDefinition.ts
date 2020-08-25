/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IContactDetail,
  IDomainResource,
  IElement,
  IOperationDefinitionOverload,
  IOperationDefinitionParameter,
  IOperationKind,
  IPrimitiveBoolean,
  IPrimitiveCanonical,
  IPrimitiveCode,
  IPrimitiveDateTime,
  IPrimitiveMarkdown,
  IPrimitiveString,
  IPrimitiveUri,
  IPublicationStatus,
  IResourceType,
  IUsageContext,
} from "../internal";

export interface IOperationDefinition extends IDomainResource {
  url?: IPrimitiveUri;
  _url?: IElement;

  version?: IPrimitiveString;
  _version?: IElement;

  name?: IPrimitiveString;
  _name?: IElement;

  title?: IPrimitiveString;
  _title?: IElement;

  status?: IPublicationStatus;
  _status?: IElement;

  kind?: IOperationKind;
  _kind?: IElement;

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

  affectsState?: IPrimitiveBoolean;
  _affectsState?: IElement;

  code?: IPrimitiveCode;
  _code?: IElement;

  comment?: IPrimitiveMarkdown;
  _comment?: IElement;

  base?: IPrimitiveCanonical;
  _base?: IElement;

  resource?: Array<IResourceType>;
  _resource?: Array<IElement | null>;

  system?: IPrimitiveBoolean;
  _system?: IElement;

  type?: IPrimitiveBoolean;
  _type?: IElement;

  instance?: IPrimitiveBoolean;
  _instance?: IElement;

  inputProfile?: IPrimitiveCanonical;
  _inputProfile?: IElement;

  outputProfile?: IPrimitiveCanonical;
  _outputProfile?: IElement;

  parameter?: Array<IOperationDefinitionParameter>;

  overload?: Array<IOperationDefinitionOverload>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

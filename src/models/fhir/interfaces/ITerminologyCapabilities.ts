/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICapabilityStatementKind,
  ICodeableConcept,
  ICodeSearchSupport,
  IContactDetail,
  IDomainResource,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveDateTime,
  IPrimitiveMarkdown,
  IPrimitiveString,
  IPrimitiveUri,
  IPublicationStatus,
  ITerminologyCapabilitiesClosure,
  ITerminologyCapabilitiesCodeSystem,
  ITerminologyCapabilitiesExpansion,
  ITerminologyCapabilitiesImplementation,
  ITerminologyCapabilitiesSoftware,
  ITerminologyCapabilitiesTranslation,
  ITerminologyCapabilitiesValidateCode,
  IUsageContext,
} from "../internal";

export interface ITerminologyCapabilities extends IDomainResource {
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

  kind?: ICapabilityStatementKind;
  _kind?: IElement;

  software?: ITerminologyCapabilitiesSoftware;

  implementation?: ITerminologyCapabilitiesImplementation;

  lockedDate?: IPrimitiveBoolean;
  _lockedDate?: IElement;

  codeSystem?: Array<ITerminologyCapabilitiesCodeSystem>;

  expansion?: ITerminologyCapabilitiesExpansion;

  codeSearch?: ICodeSearchSupport;
  _codeSearch?: IElement;

  validateCode?: ITerminologyCapabilitiesValidateCode;

  translation?: ITerminologyCapabilitiesTranslation;

  closure?: ITerminologyCapabilitiesClosure;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

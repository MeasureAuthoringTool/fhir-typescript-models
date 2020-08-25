/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICapabilityStatementDocument,
  ICapabilityStatementImplementation,
  ICapabilityStatementKind,
  ICapabilityStatementMessaging,
  ICapabilityStatementRest,
  ICapabilityStatementSoftware,
  ICodeableConcept,
  IContactDetail,
  IDomainResource,
  IElement,
  IFHIRVersion,
  IMimeType,
  IPrimitiveBoolean,
  IPrimitiveCanonical,
  IPrimitiveDateTime,
  IPrimitiveMarkdown,
  IPrimitiveString,
  IPrimitiveUri,
  IPublicationStatus,
  IUsageContext,
} from "../internal";

export interface ICapabilityStatement extends IDomainResource {
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

  instantiates?: Array<IPrimitiveCanonical>;
  _instantiates?: Array<IElement | null>;

  imports?: Array<IPrimitiveCanonical>;
  _imports?: Array<IElement | null>;

  software?: ICapabilityStatementSoftware;

  implementation?: ICapabilityStatementImplementation;

  fhirVersion?: IFHIRVersion;
  _fhirVersion?: IElement;

  format?: Array<IMimeType>;
  _format?: Array<IElement | null>;

  patchFormat?: Array<IMimeType>;
  _patchFormat?: Array<IElement | null>;

  implementationGuide?: Array<IPrimitiveCanonical>;
  _implementationGuide?: Array<IElement | null>;

  rest?: Array<ICapabilityStatementRest>;

  messaging?: Array<ICapabilityStatementMessaging>;

  document?: Array<ICapabilityStatementDocument>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

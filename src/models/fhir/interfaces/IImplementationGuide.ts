/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IContactDetail,
  IDomainResource,
  IElement,
  IFHIRVersion,
  IImplementationGuideDefinition,
  IImplementationGuideDependsOn,
  IImplementationGuideGlobal,
  IImplementationGuideManifest,
  IPrimitiveBoolean,
  IPrimitiveDateTime,
  IPrimitiveId,
  IPrimitiveMarkdown,
  IPrimitiveString,
  IPrimitiveUri,
  IPublicationStatus,
  ISPDXLicense,
  IUsageContext,
} from "../internal";

export interface IImplementationGuide extends IDomainResource {
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

  copyright?: IPrimitiveMarkdown;
  _copyright?: IElement;

  packageId?: IPrimitiveId;
  _packageId?: IElement;

  license?: ISPDXLicense;
  _license?: IElement;

  fhirVersion?: Array<IFHIRVersion>;
  _fhirVersion?: Array<IElement | null>;

  dependsOn?: Array<IImplementationGuideDependsOn>;

  global?: Array<IImplementationGuideGlobal>;

  definition?: IImplementationGuideDefinition;

  manifest?: IImplementationGuideManifest;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

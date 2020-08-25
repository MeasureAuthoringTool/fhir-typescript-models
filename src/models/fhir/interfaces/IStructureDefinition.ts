/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IDomainResource,
  IElement,
  IFHIRVersion,
  IIdentifier,
  IPrimitiveBoolean,
  IPrimitiveCanonical,
  IPrimitiveDateTime,
  IPrimitiveMarkdown,
  IPrimitiveString,
  IPrimitiveUri,
  IPublicationStatus,
  IStructureDefinitionContext,
  IStructureDefinitionDifferential,
  IStructureDefinitionKind,
  IStructureDefinitionMapping,
  IStructureDefinitionSnapshot,
  ITypeDerivationRule,
  IUsageContext,
} from "../internal";

export interface IStructureDefinition extends IDomainResource {
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

  keyword?: Array<ICoding>;

  fhirVersion?: IFHIRVersion;
  _fhirVersion?: IElement;

  mapping?: Array<IStructureDefinitionMapping>;

  kind?: IStructureDefinitionKind;
  _kind?: IElement;

  abstract?: IPrimitiveBoolean;
  _abstract?: IElement;

  context?: Array<IStructureDefinitionContext>;

  contextInvariant?: Array<IPrimitiveString>;
  _contextInvariant?: Array<IElement | null>;

  type?: IPrimitiveUri;
  _type?: IElement;

  baseDefinition?: IPrimitiveCanonical;
  _baseDefinition?: IElement;

  derivation?: ITypeDerivationRule;
  _derivation?: IElement;

  snapshot?: IStructureDefinitionSnapshot;

  differential?: IStructureDefinitionDifferential;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

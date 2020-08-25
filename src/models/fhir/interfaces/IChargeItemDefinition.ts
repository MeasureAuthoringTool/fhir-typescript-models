/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IChargeItemDefinitionApplicability,
  IChargeItemDefinitionPropertyGroup,
  ICodeableConcept,
  IContactDetail,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveBoolean,
  IPrimitiveCanonical,
  IPrimitiveDate,
  IPrimitiveDateTime,
  IPrimitiveMarkdown,
  IPrimitiveString,
  IPrimitiveUri,
  IPublicationStatus,
  IReference,
  IUsageContext,
} from "../internal";

export interface IChargeItemDefinition extends IDomainResource {
  url?: IPrimitiveUri;
  _url?: IElement;

  identifier?: Array<IIdentifier>;

  version?: IPrimitiveString;
  _version?: IElement;

  title?: IPrimitiveString;
  _title?: IElement;

  derivedFromUri?: Array<IPrimitiveUri>;
  _derivedFromUri?: Array<IElement | null>;

  partOf?: Array<IPrimitiveCanonical>;
  _partOf?: Array<IElement | null>;

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

  copyright?: IPrimitiveMarkdown;
  _copyright?: IElement;

  approvalDate?: IPrimitiveDate;
  _approvalDate?: IElement;

  lastReviewDate?: IPrimitiveDate;
  _lastReviewDate?: IElement;

  effectivePeriod?: IPeriod;

  code?: ICodeableConcept;

  instance?: Array<IReference>;

  applicability?: Array<IChargeItemDefinitionApplicability>;

  propertyGroup?: Array<IChargeItemDefinitionPropertyGroup>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

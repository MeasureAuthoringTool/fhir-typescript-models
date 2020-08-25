/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICatalogEntryRelatedEntry,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveBoolean,
  IPrimitiveDateTime,
  IPublicationStatus,
  IReference,
} from "../internal";

export interface ICatalogEntry extends IDomainResource {
  identifier?: Array<IIdentifier>;

  type?: ICodeableConcept;

  orderable?: IPrimitiveBoolean;
  _orderable?: IElement;

  referencedItem?: IReference;

  additionalIdentifier?: Array<IIdentifier>;

  classification?: Array<ICodeableConcept>;

  status?: IPublicationStatus;
  _status?: IElement;

  validityPeriod?: IPeriod;

  validTo?: IPrimitiveDateTime;
  _validTo?: IElement;

  lastUpdated?: IPrimitiveDateTime;
  _lastUpdated?: IElement;

  additionalCharacteristic?: Array<ICodeableConcept>;

  additionalClassification?: Array<ICodeableConcept>;

  relatedEntry?: Array<ICatalogEntryRelatedEntry>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

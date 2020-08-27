/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  IAttachment,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IMediaStatus,
  IPeriod,
  IPrimitiveDateTime,
  IPrimitiveDecimal,
  IPrimitiveInstant,
  IPrimitivePositiveInt,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IMedia extends IDomainResource {
  identifier?: Array<IIdentifier>;

  basedOn?: Array<IReference>;

  partOf?: Array<IReference>;

  status?: IMediaStatus;
  _status?: IElement;

  type?: ICodeableConcept;

  modality?: ICodeableConcept;

  view?: ICodeableConcept;

  subject?: IReference;

  encounter?: IReference;

  createdDateTime?: IPrimitiveDateTime;
  _createdDateTime?: IElement;
  
  createdPeriod?: IPeriod;

  issued?: IPrimitiveInstant;
  _issued?: IElement;

  operator?: IReference;

  reasonCode?: Array<ICodeableConcept>;

  bodySite?: ICodeableConcept;

  deviceName?: IPrimitiveString;
  _deviceName?: IElement;

  device?: IReference;

  height?: IPrimitivePositiveInt;
  _height?: IElement;

  width?: IPrimitivePositiveInt;
  _width?: IElement;

  frames?: IPrimitivePositiveInt;
  _frames?: IElement;

  duration?: IPrimitiveDecimal;
  _duration?: IElement;

  content?: IAttachment;

  note?: Array<IAnnotation>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  IClinicalImpressionFinding,
  IClinicalImpressionInvestigation,
  IClinicalImpressionStatus,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveDateTime,
  IPrimitiveString,
  IPrimitiveUri,
  IReference,
} from "../internal";

export interface IClinicalImpression extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IClinicalImpressionStatus;
  _status?: IElement;

  statusReason?: ICodeableConcept;

  code?: ICodeableConcept;

  description?: IPrimitiveString;
  _description?: IElement;

  subject?: IReference;

  encounter?: IReference;

  effectiveDateTime?: IPrimitiveDateTime;
  _effectiveDateTime?: IElement;
  
  effectivePeriod?: IPeriod;

  date?: IPrimitiveDateTime;
  _date?: IElement;

  assessor?: IReference;

  previous?: IReference;

  problem?: Array<IReference>;

  investigation?: Array<IClinicalImpressionInvestigation>;

  protocol?: Array<IPrimitiveUri>;
  _protocol?: Array<IElement | null>;

  summary?: IPrimitiveString;
  _summary?: IElement;

  finding?: Array<IClinicalImpressionFinding>;

  prognosisCodeableConcept?: Array<ICodeableConcept>;

  prognosisReference?: Array<IReference>;

  supportingInfo?: Array<IReference>;

  note?: Array<IAnnotation>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

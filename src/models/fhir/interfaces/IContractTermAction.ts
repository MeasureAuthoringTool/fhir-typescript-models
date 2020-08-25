/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  IBackboneElement,
  ICodeableConcept,
  IContractTermActionSubject,
  IElement,
  IPeriod,
  IPrimitiveBoolean,
  IPrimitiveDateTime,
  IPrimitiveString,
  IPrimitiveUnsignedInt,
  IReference,
  ITiming,
} from "../internal";

export interface IContractTermAction extends IBackboneElement {
  doNotPerform?: IPrimitiveBoolean;
  _doNotPerform?: IElement;

  type?: ICodeableConcept;

  subject?: Array<IContractTermActionSubject>;

  intent?: ICodeableConcept;

  linkId?: Array<IPrimitiveString>;
  _linkId?: Array<IElement | null>;

  status?: ICodeableConcept;

  context?: IReference;

  contextLinkId?: Array<IPrimitiveString>;
  _contextLinkId?: Array<IElement | null>;

  occurrenceDateTime?: IPrimitiveDateTime;
  _occurrenceDateTime?: IElement;
  
  occurrencePeriod?: IPeriod;
  
  occurrenceTiming?: ITiming;

  requester?: Array<IReference>;

  requesterLinkId?: Array<IPrimitiveString>;
  _requesterLinkId?: Array<IElement | null>;

  performerType?: Array<ICodeableConcept>;

  performerRole?: ICodeableConcept;

  performer?: IReference;

  performerLinkId?: Array<IPrimitiveString>;
  _performerLinkId?: Array<IElement | null>;

  reasonCode?: Array<ICodeableConcept>;

  reasonReference?: Array<IReference>;

  reason?: Array<IPrimitiveString>;
  _reason?: Array<IElement | null>;

  reasonLinkId?: Array<IPrimitiveString>;
  _reasonLinkId?: Array<IElement | null>;

  note?: Array<IAnnotation>;

  securityLabelNumber?: Array<IPrimitiveUnsignedInt>;
  _securityLabelNumber?: Array<IElement | null>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

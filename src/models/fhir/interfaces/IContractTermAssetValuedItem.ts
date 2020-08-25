/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IMoney,
  IPrimitiveDateTime,
  IPrimitiveDecimal,
  IPrimitiveString,
  IPrimitiveUnsignedInt,
  IReference,
  ISimpleQuantity,
} from "../internal";

export interface IContractTermAssetValuedItem extends IBackboneElement {
  entityCodeableConcept?: ICodeableConcept;
  
  entityReference?: IReference;

  identifier?: IIdentifier;

  effectiveTime?: IPrimitiveDateTime;
  _effectiveTime?: IElement;

  quantity?: ISimpleQuantity;

  unitPrice?: IMoney;

  factor?: IPrimitiveDecimal;
  _factor?: IElement;

  points?: IPrimitiveDecimal;
  _points?: IElement;

  net?: IMoney;

  payment?: IPrimitiveString;
  _payment?: IElement;

  paymentDate?: IPrimitiveDateTime;
  _paymentDate?: IElement;

  responsible?: IReference;

  recipient?: IReference;

  linkId?: Array<IPrimitiveString>;
  _linkId?: Array<IElement | null>;

  securityLabelNumber?: Array<IPrimitiveUnsignedInt>;
  _securityLabelNumber?: Array<IElement | null>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

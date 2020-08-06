/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  ICoding,
  IContractTermAssetContext,
  IContractTermAssetValuedItem,
  IContractTermOfferAnswer,
  IElement,
  IPeriod,
  IPrimitiveString,
  IPrimitiveUnsignedInt,
  IReference,
} from "../internal";

export interface IContractTermAsset extends IBackboneElement {
  scope?: ICodeableConcept;

  type?: Array<ICodeableConcept>;

  typeReference?: Array<IReference>;

  subtype?: Array<ICodeableConcept>;

  relationship?: ICoding;

  context?: Array<IContractTermAssetContext>;

  condition?: IPrimitiveString;
  _condition?: IElement;

  periodType?: Array<ICodeableConcept>;

  period?: Array<IPeriod>;

  usePeriod?: Array<IPeriod>;

  text?: IPrimitiveString;
  _text?: IElement;

  linkId?: Array<IPrimitiveString>;
  _linkId?: Array<IElement | null>;

  answer?: Array<IContractTermOfferAnswer>;

  securityLabelNumber?: Array<IPrimitiveUnsignedInt>;
  _securityLabelNumber?: Array<IElement | null>;

  valuedItem?: Array<IContractTermAssetValuedItem>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

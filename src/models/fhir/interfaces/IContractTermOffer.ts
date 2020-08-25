/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IContractTermOfferAnswer,
  IContractTermOfferParty,
  IElement,
  IIdentifier,
  IPrimitiveString,
  IPrimitiveUnsignedInt,
  IReference,
} from "../internal";

export interface IContractTermOffer extends IBackboneElement {
  identifier?: Array<IIdentifier>;

  party?: Array<IContractTermOfferParty>;

  topic?: IReference;

  type?: ICodeableConcept;

  decision?: ICodeableConcept;

  decisionMode?: Array<ICodeableConcept>;

  answer?: Array<IContractTermOfferAnswer>;

  text?: IPrimitiveString;
  _text?: IElement;

  linkId?: Array<IPrimitiveString>;
  _linkId?: Array<IElement | null>;

  securityLabelNumber?: Array<IPrimitiveUnsignedInt>;
  _securityLabelNumber?: Array<IElement | null>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

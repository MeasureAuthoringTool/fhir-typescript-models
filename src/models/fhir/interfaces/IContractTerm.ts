/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IContractTermAction,
  IContractTermAsset,
  IContractTermOffer,
  IContractTermSecurityLabel,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveDateTime,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IContractTerm extends IBackboneElement {
  identifier?: IIdentifier;

  issued?: IPrimitiveDateTime;
  _issued?: IElement;

  applies?: IPeriod;

  topicCodeableConcept?: ICodeableConcept;
  
  topicReference?: IReference;

  type?: ICodeableConcept;

  subType?: ICodeableConcept;

  text?: IPrimitiveString;
  _text?: IElement;

  securityLabel?: Array<IContractTermSecurityLabel>;

  offer?: IContractTermOffer;

  asset?: Array<IContractTermAsset>;

  action?: Array<IContractTermAction>;

  group?: Array<IContractTerm>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

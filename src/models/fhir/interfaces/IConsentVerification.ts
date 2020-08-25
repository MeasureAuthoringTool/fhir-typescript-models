/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveDateTime,
  IReference,
} from "../internal";

export interface IConsentVerification extends IBackboneElement {
  verified?: IPrimitiveBoolean;
  _verified?: IElement;

  verifiedWith?: IReference;

  verificationDate?: IPrimitiveDateTime;
  _verificationDate?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

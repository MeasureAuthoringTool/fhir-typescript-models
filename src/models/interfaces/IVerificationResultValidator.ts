/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveString,
  IReference,
  ISignature,
} from "../internal";

export interface IVerificationResultValidator extends IBackboneElement {
  organization?: IReference;

  identityCertificate?: IPrimitiveString;
  _identityCertificate?: IElement;

  attestationSignature?: ISignature;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

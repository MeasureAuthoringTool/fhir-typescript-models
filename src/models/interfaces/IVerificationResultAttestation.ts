/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveDate,
  IPrimitiveString,
  IReference,
  ISignature,
} from "../internal";

export interface IVerificationResultAttestation extends IBackboneElement {
  who?: IReference;

  onBehalfOf?: IReference;

  communicationMethod?: ICodeableConcept;

  date?: IPrimitiveDate;
  _date?: IElement;

  sourceIdentityCertificate?: IPrimitiveString;
  _sourceIdentityCertificate?: IElement;

  proxyIdentityCertificate?: IPrimitiveString;
  _proxyIdentityCertificate?: IElement;

  proxySignature?: ISignature;

  sourceSignature?: ISignature;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

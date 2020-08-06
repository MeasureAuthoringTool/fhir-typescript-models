/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IVerificationResultValidator,
  PrimitiveString,
  Reference,
  Signature,
} from "../internal";

export class VerificationResultValidator extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "VerificationResult.Validator";

  public organization?: Reference;

  public identityCertificate?: PrimitiveString;

  public attestationSignature?: Signature;

  public static parse(
    json: IVerificationResultValidator,
    providedInstance: VerificationResultValidator = new VerificationResultValidator()
  ): VerificationResultValidator {
    const newInstance: VerificationResultValidator = BackboneElement.parse(json, providedInstance);
  
    if (json.organization) {
      newInstance.organization = Reference.parse(json.organization);
    }
    if (json.identityCertificate) {
      newInstance.identityCertificate = PrimitiveString.parsePrimitive(json.identityCertificate, json._identityCertificate);
    }
    if (json.attestationSignature) {
      newInstance.attestationSignature = Signature.parse(json.attestationSignature);
    }
    return newInstance;
  }

  public static isVerificationResultValidator(input?: unknown): input is VerificationResultValidator {
    const castInput = input as VerificationResultValidator;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "VerificationResultValidator";
  }

  public toJSON(): IVerificationResultValidator {
    const result: IVerificationResultValidator = super.toJSON();

    if (this.organization) {
      result.organization = this.organization.toJSON();
    }

    if (this.identityCertificate) {
      result.identityCertificate = this.identityCertificate.value;
      result._identityCertificate = Extension.serializePrimitiveExtension(this.identityCertificate);
    }

    if (this.attestationSignature) {
      result.attestationSignature = this.attestationSignature.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "VerificationResultValidator";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

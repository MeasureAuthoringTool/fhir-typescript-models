/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IVerificationResultValidator,
  PrimitiveString,
  Reference,
  Signature,
  FhirType
} from "../internal";

@FhirType("VerificationResultValidator", "BackboneElement")
export class VerificationResultValidator extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "VerificationResult.Validator";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Reference")
  public organization?: Reference;

  @FhirField("PrimitiveString")
  public identityCertificate?: PrimitiveString;

  @FhirField("Signature")
  public attestationSignature?: Signature;

  public static parse(
    json: IVerificationResultValidator,
    providedInstance: VerificationResultValidator = new VerificationResultValidator()
  ): VerificationResultValidator {
    const newInstance: VerificationResultValidator = BackboneElement.parse(json, providedInstance);
  
    if (json.organization !== undefined) {
      newInstance.organization = Reference.parse(json.organization);
    }
    if (json.identityCertificate !== undefined) {
      newInstance.identityCertificate = PrimitiveString.parsePrimitive(json.identityCertificate, json._identityCertificate);
    }
    if (json.attestationSignature !== undefined) {
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

  public clone(): VerificationResultValidator {
    return VerificationResultValidator.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "VerificationResultValidator";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

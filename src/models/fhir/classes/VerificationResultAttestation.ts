/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  IVerificationResultAttestation,
  PrimitiveDate,
  PrimitiveString,
  Reference,
  Signature,
  FhirType
} from "../internal";

@FhirType("VerificationResultAttestation", "BackboneElement")
export class VerificationResultAttestation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "VerificationResult.Attestation";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Reference")
  public who?: Reference;

  @FhirField("Reference")
  public onBehalfOf?: Reference;

  @FhirField("CodeableConcept")
  public communicationMethod?: CodeableConcept;

  @FhirField("PrimitiveDate")
  public date?: PrimitiveDate;

  @FhirField("PrimitiveString")
  public sourceIdentityCertificate?: PrimitiveString;

  @FhirField("PrimitiveString")
  public proxyIdentityCertificate?: PrimitiveString;

  @FhirField("Signature")
  public proxySignature?: Signature;

  @FhirField("Signature")
  public sourceSignature?: Signature;

  public static parse(
    json: IVerificationResultAttestation,
    providedInstance: VerificationResultAttestation = new VerificationResultAttestation()
  ): VerificationResultAttestation {
    const newInstance: VerificationResultAttestation = BackboneElement.parse(json, providedInstance);
  
    if (json.who !== undefined) {
      newInstance.who = Reference.parse(json.who);
    }
    if (json.onBehalfOf !== undefined) {
      newInstance.onBehalfOf = Reference.parse(json.onBehalfOf);
    }
    if (json.communicationMethod !== undefined) {
      newInstance.communicationMethod = CodeableConcept.parse(json.communicationMethod);
    }
    if (json.date !== undefined) {
      newInstance.date = PrimitiveDate.parsePrimitive(json.date, json._date);
    }
    if (json.sourceIdentityCertificate !== undefined) {
      newInstance.sourceIdentityCertificate = PrimitiveString.parsePrimitive(json.sourceIdentityCertificate, json._sourceIdentityCertificate);
    }
    if (json.proxyIdentityCertificate !== undefined) {
      newInstance.proxyIdentityCertificate = PrimitiveString.parsePrimitive(json.proxyIdentityCertificate, json._proxyIdentityCertificate);
    }
    if (json.proxySignature !== undefined) {
      newInstance.proxySignature = Signature.parse(json.proxySignature);
    }
    if (json.sourceSignature !== undefined) {
      newInstance.sourceSignature = Signature.parse(json.sourceSignature);
    }
    return newInstance;
  }

  public static isVerificationResultAttestation(input?: unknown): input is VerificationResultAttestation {
    const castInput = input as VerificationResultAttestation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "VerificationResultAttestation";
  }

  public toJSON(): IVerificationResultAttestation {
    const result: IVerificationResultAttestation = super.toJSON();

    if (this.who) {
      result.who = this.who.toJSON();
    }

    if (this.onBehalfOf) {
      result.onBehalfOf = this.onBehalfOf.toJSON();
    }

    if (this.communicationMethod) {
      result.communicationMethod = this.communicationMethod.toJSON();
    }

    if (this.date) {
      result.date = this.date.value;
      result._date = Extension.serializePrimitiveExtension(this.date);
    }

    if (this.sourceIdentityCertificate) {
      result.sourceIdentityCertificate = this.sourceIdentityCertificate.value;
      result._sourceIdentityCertificate = Extension.serializePrimitiveExtension(this.sourceIdentityCertificate);
    }

    if (this.proxyIdentityCertificate) {
      result.proxyIdentityCertificate = this.proxyIdentityCertificate.value;
      result._proxyIdentityCertificate = Extension.serializePrimitiveExtension(this.proxyIdentityCertificate);
    }

    if (this.proxySignature) {
      result.proxySignature = this.proxySignature.toJSON();
    }

    if (this.sourceSignature) {
      result.sourceSignature = this.sourceSignature.toJSON();
    }

    return result;
  }

  public clone(): VerificationResultAttestation {
    return VerificationResultAttestation.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "VerificationResultAttestation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

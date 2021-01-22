/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  FhirList,
  IVerificationResultPrimarySource,
  PrimitiveDateTime,
  Reference,
  FhirType
} from "../internal";

@FhirType("VerificationResultPrimarySource", "BackboneElement")
export class VerificationResultPrimarySource extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "VerificationResult.PrimarySource";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Reference")
  public who?: Reference;

  @FhirList("CodeableConcept")
  public type?: Array<CodeableConcept>;

  @FhirList("CodeableConcept")
  public communicationMethod?: Array<CodeableConcept>;

  @FhirField("CodeableConcept")
  public validationStatus?: CodeableConcept;

  @FhirField("PrimitiveDateTime")
  public validationDate?: PrimitiveDateTime;

  @FhirField("CodeableConcept")
  public canPushUpdates?: CodeableConcept;

  @FhirList("CodeableConcept")
  public pushTypeAvailable?: Array<CodeableConcept>;

  public static parse(
    json: IVerificationResultPrimarySource,
    providedInstance: VerificationResultPrimarySource = new VerificationResultPrimarySource()
  ): VerificationResultPrimarySource {
    const newInstance: VerificationResultPrimarySource = BackboneElement.parse(json, providedInstance);
  
    if (json.who !== undefined) {
      newInstance.who = Reference.parse(json.who);
    }
    if (json.type !== undefined) {
      newInstance.type = json.type.map((x) => CodeableConcept.parse(x));
    }
    if (json.communicationMethod !== undefined) {
      newInstance.communicationMethod = json.communicationMethod.map((x) => CodeableConcept.parse(x));
    }
    if (json.validationStatus !== undefined) {
      newInstance.validationStatus = CodeableConcept.parse(json.validationStatus);
    }
    if (json.validationDate !== undefined) {
      newInstance.validationDate = PrimitiveDateTime.parsePrimitive(json.validationDate, json._validationDate);
    }
    if (json.canPushUpdates !== undefined) {
      newInstance.canPushUpdates = CodeableConcept.parse(json.canPushUpdates);
    }
    if (json.pushTypeAvailable !== undefined) {
      newInstance.pushTypeAvailable = json.pushTypeAvailable.map((x) => CodeableConcept.parse(x));
    }
    return newInstance;
  }

  public static isVerificationResultPrimarySource(input?: unknown): input is VerificationResultPrimarySource {
    const castInput = input as VerificationResultPrimarySource;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "VerificationResultPrimarySource";
  }

  public toJSON(): IVerificationResultPrimarySource {
    const result: IVerificationResultPrimarySource = super.toJSON();

    if (this.who) {
      result.who = this.who.toJSON();
    }

    if (this.type) {
      result.type = this.type.map((x) => x.toJSON());
    }

    if (this.communicationMethod) {
      result.communicationMethod = this.communicationMethod.map((x) => x.toJSON());
    }

    if (this.validationStatus) {
      result.validationStatus = this.validationStatus.toJSON();
    }

    if (this.validationDate) {
      result.validationDate = this.validationDate.value;
      result._validationDate = Extension.serializePrimitiveExtension(this.validationDate);
    }

    if (this.canPushUpdates) {
      result.canPushUpdates = this.canPushUpdates.toJSON();
    }

    if (this.pushTypeAvailable) {
      result.pushTypeAvailable = this.pushTypeAvailable.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): VerificationResultPrimarySource {
    return VerificationResultPrimarySource.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "VerificationResultPrimarySource";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

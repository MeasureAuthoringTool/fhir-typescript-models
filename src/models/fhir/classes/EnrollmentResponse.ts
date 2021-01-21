/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  DomainResource,
  EnrollmentResponseStatus,
  Extension,
  FhirField,
  FhirList,
  Identifier,
  IEnrollmentResponse,
  PrimitiveDateTime,
  PrimitiveString,
  Reference,
  RemittanceOutcome,
  FhirType
} from "../internal";

@FhirType("EnrollmentResponse", "DomainResource")
export class EnrollmentResponse extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EnrollmentResponse";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("EnrollmentResponseStatus")
  public status?: EnrollmentResponseStatus;

  @FhirField("Reference")
  public request?: Reference;

  @FhirField("RemittanceOutcome")
  public outcome?: RemittanceOutcome;

  @FhirField("PrimitiveString")
  public disposition?: PrimitiveString;

  @FhirField("PrimitiveDateTime")
  public created?: PrimitiveDateTime;

  @FhirField("Reference")
  public organization?: Reference;

  @FhirField("Reference")
  public requestProvider?: Reference;

  public static parse(
    json: IEnrollmentResponse,
    providedInstance: EnrollmentResponse = new EnrollmentResponse()
  ): EnrollmentResponse {
    const newInstance: EnrollmentResponse = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = EnrollmentResponseStatus.parsePrimitive(json.status, json._status);
    }
    if (json.request !== undefined) {
      newInstance.request = Reference.parse(json.request);
    }
    if (json.outcome !== undefined) {
      newInstance.outcome = RemittanceOutcome.parsePrimitive(json.outcome, json._outcome);
    }
    if (json.disposition !== undefined) {
      newInstance.disposition = PrimitiveString.parsePrimitive(json.disposition, json._disposition);
    }
    if (json.created !== undefined) {
      newInstance.created = PrimitiveDateTime.parsePrimitive(json.created, json._created);
    }
    if (json.organization !== undefined) {
      newInstance.organization = Reference.parse(json.organization);
    }
    if (json.requestProvider !== undefined) {
      newInstance.requestProvider = Reference.parse(json.requestProvider);
    }
    return newInstance;
  }

  public static isEnrollmentResponse(input?: unknown): input is EnrollmentResponse {
    const castInput = input as EnrollmentResponse;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EnrollmentResponse";
  }

  public toJSON(): IEnrollmentResponse {
    const result: IEnrollmentResponse = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.request) {
      result.request = this.request.toJSON();
    }

    if (this.outcome) {
      result.outcome = this.outcome.value;
      result._outcome = Extension.serializePrimitiveExtension(this.outcome);
    }

    if (this.disposition) {
      result.disposition = this.disposition.value;
      result._disposition = Extension.serializePrimitiveExtension(this.disposition);
    }

    if (this.created) {
      result.created = this.created.value;
      result._created = Extension.serializePrimitiveExtension(this.created);
    }

    if (this.organization) {
      result.organization = this.organization.toJSON();
    }

    if (this.requestProvider) {
      result.requestProvider = this.requestProvider.toJSON();
    }

    return result;
  }

  public clone(): EnrollmentResponse {
    return EnrollmentResponse.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "EnrollmentResponse";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

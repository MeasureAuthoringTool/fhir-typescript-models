/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  DomainResource,
  EnrollmentResponseStatus,
  Extension,
  Identifier,
  IEnrollmentResponse,
  PrimitiveDateTime,
  PrimitiveString,
  Reference,
  RemittanceOutcome,
} from "../internal";

export class EnrollmentResponse extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EnrollmentResponse";

  public identifier?: Array<Identifier>;

  public status?: EnrollmentResponseStatus;

  public request?: Reference;

  public outcome?: RemittanceOutcome;

  public disposition?: PrimitiveString;

  public created?: PrimitiveDateTime;

  public organization?: Reference;

  public requestProvider?: Reference;

  public static parse(
    json: IEnrollmentResponse,
    providedInstance: EnrollmentResponse = new EnrollmentResponse()
  ): EnrollmentResponse {
    const newInstance: EnrollmentResponse = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status) {
      newInstance.status = EnrollmentResponseStatus.parsePrimitive(json.status, json._status);
    }
    if (json.request) {
      newInstance.request = Reference.parse(json.request);
    }
    if (json.outcome) {
      newInstance.outcome = RemittanceOutcome.parsePrimitive(json.outcome, json._outcome);
    }
    if (json.disposition) {
      newInstance.disposition = PrimitiveString.parsePrimitive(json.disposition, json._disposition);
    }
    if (json.created) {
      newInstance.created = PrimitiveDateTime.parsePrimitive(json.created, json._created);
    }
    if (json.organization) {
      newInstance.organization = Reference.parse(json.organization);
    }
    if (json.requestProvider) {
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
  
  public getTypeName(): string {
    return "EnrollmentResponse";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

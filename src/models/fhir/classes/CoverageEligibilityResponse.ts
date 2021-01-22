/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  CoverageEligibilityResponseError,
  CoverageEligibilityResponseInsurance,
  DomainResource,
  EligibilityResponsePurpose,
  EligibilityResponseStatus,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  ICoverageEligibilityResponse,
  Identifier,
  Period,
  PrimitiveDate,
  PrimitiveDateTime,
  PrimitiveString,
  Reference,
  RemittanceOutcome,
  FhirType
} from "../internal";

@FhirType("CoverageEligibilityResponse", "DomainResource")
export class CoverageEligibilityResponse extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CoverageEligibilityResponse";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("EligibilityResponseStatus")
  public status?: EligibilityResponseStatus;

  @FhirList("EligibilityResponsePurpose")
  public purpose?: Array<EligibilityResponsePurpose>;

  @FhirField("Reference")
  public patient?: Reference;

  @FhirChoice("PrimitiveDate", "Period")
  public serviced?: PrimitiveDate | Period;

  @FhirField("PrimitiveDateTime")
  public created?: PrimitiveDateTime;

  @FhirField("Reference")
  public requestor?: Reference;

  @FhirField("Reference")
  public request?: Reference;

  @FhirField("RemittanceOutcome")
  public outcome?: RemittanceOutcome;

  @FhirField("PrimitiveString")
  public disposition?: PrimitiveString;

  @FhirField("Reference")
  public insurer?: Reference;

  @FhirList("CoverageEligibilityResponseInsurance")
  public insurance?: Array<CoverageEligibilityResponseInsurance>;

  @FhirField("PrimitiveString")
  public preAuthRef?: PrimitiveString;

  @FhirField("CodeableConcept")
  public form?: CodeableConcept;

  @FhirList("CoverageEligibilityResponseError")
  public error?: Array<CoverageEligibilityResponseError>;

  public static parse(
    json: ICoverageEligibilityResponse,
    providedInstance: CoverageEligibilityResponse = new CoverageEligibilityResponse()
  ): CoverageEligibilityResponse {
    const newInstance: CoverageEligibilityResponse = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = EligibilityResponseStatus.parsePrimitive(json.status, json._status);
    }
    if (json.purpose !== undefined) {
      newInstance.purpose = json.purpose.map((x, i) => EligibilityResponsePurpose.parsePrimitive(x, json._purpose?.[i]));
    }
    if (json.patient !== undefined) {
      newInstance.patient = Reference.parse(json.patient);
    }
    if (json.servicedDate !== undefined) {
      newInstance.serviced = PrimitiveDate.parsePrimitive(json.servicedDate, json._servicedDate);
    }
    if (json.servicedPeriod !== undefined) {
      newInstance.serviced = Period.parse(json.servicedPeriod);
    }
    if (json.created !== undefined) {
      newInstance.created = PrimitiveDateTime.parsePrimitive(json.created, json._created);
    }
    if (json.requestor !== undefined) {
      newInstance.requestor = Reference.parse(json.requestor);
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
    if (json.insurer !== undefined) {
      newInstance.insurer = Reference.parse(json.insurer);
    }
    if (json.insurance !== undefined) {
      newInstance.insurance = json.insurance.map((x) => CoverageEligibilityResponseInsurance.parse(x));
    }
    if (json.preAuthRef !== undefined) {
      newInstance.preAuthRef = PrimitiveString.parsePrimitive(json.preAuthRef, json._preAuthRef);
    }
    if (json.form !== undefined) {
      newInstance.form = CodeableConcept.parse(json.form);
    }
    if (json.error !== undefined) {
      newInstance.error = json.error.map((x) => CoverageEligibilityResponseError.parse(x));
    }
    return newInstance;
  }

  public static isCoverageEligibilityResponse(input?: unknown): input is CoverageEligibilityResponse {
    const castInput = input as CoverageEligibilityResponse;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CoverageEligibilityResponse";
  }

  public toJSON(): ICoverageEligibilityResponse {
    const result: ICoverageEligibilityResponse = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.purpose) {
      result.purpose = this.purpose.filter(x => !!x).map(x => x.value) as typeof result.purpose;
      result._purpose = Extension.serializePrimitiveExtensionArray(this.purpose);
    }

    if (this.patient) {
      result.patient = this.patient.toJSON();
    }

    if (this.serviced && PrimitiveDate.isPrimitiveDate(this.serviced)) {
      result.servicedDate = this.serviced.value;
      result._servicedDate = Extension.serializePrimitiveExtension(this.serviced);
    }

    if (this.serviced && Period.isPeriod(this.serviced)) {
      result.servicedPeriod = this.serviced.toJSON();
    }

    if (this.created) {
      result.created = this.created.value;
      result._created = Extension.serializePrimitiveExtension(this.created);
    }

    if (this.requestor) {
      result.requestor = this.requestor.toJSON();
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

    if (this.insurer) {
      result.insurer = this.insurer.toJSON();
    }

    if (this.insurance) {
      result.insurance = this.insurance.map((x) => x.toJSON());
    }

    if (this.preAuthRef) {
      result.preAuthRef = this.preAuthRef.value;
      result._preAuthRef = Extension.serializePrimitiveExtension(this.preAuthRef);
    }

    if (this.form) {
      result.form = this.form.toJSON();
    }

    if (this.error) {
      result.error = this.error.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): CoverageEligibilityResponse {
    return CoverageEligibilityResponse.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CoverageEligibilityResponse";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

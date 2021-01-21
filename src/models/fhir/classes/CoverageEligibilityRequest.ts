/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  CoverageEligibilityRequestInsurance,
  CoverageEligibilityRequestItem,
  CoverageEligibilityRequestSupportingInfo,
  DomainResource,
  EligibilityRequestPurpose,
  EligibilityRequestStatus,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  ICoverageEligibilityRequest,
  Identifier,
  Period,
  PrimitiveDate,
  PrimitiveDateTime,
  Reference,
  FhirType
} from "../internal";

@FhirType("CoverageEligibilityRequest", "DomainResource")
export class CoverageEligibilityRequest extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CoverageEligibilityRequest";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("EligibilityRequestStatus")
  public status?: EligibilityRequestStatus;

  @FhirField("CodeableConcept")
  public priority?: CodeableConcept;

  @FhirList("EligibilityRequestPurpose")
  public purpose?: Array<EligibilityRequestPurpose>;

  @FhirField("Reference")
  public patient?: Reference;

  @FhirChoice("PrimitiveDate", "Period")
  public serviced?: PrimitiveDate | Period;

  @FhirField("PrimitiveDateTime")
  public created?: PrimitiveDateTime;

  @FhirField("Reference")
  public enterer?: Reference;

  @FhirField("Reference")
  public provider?: Reference;

  @FhirField("Reference")
  public insurer?: Reference;

  @FhirField("Reference")
  public facility?: Reference;

  @FhirList("CoverageEligibilityRequestSupportingInfo")
  public supportingInfo?: Array<CoverageEligibilityRequestSupportingInfo>;

  @FhirList("CoverageEligibilityRequestInsurance")
  public insurance?: Array<CoverageEligibilityRequestInsurance>;

  @FhirList("CoverageEligibilityRequestItem")
  public item?: Array<CoverageEligibilityRequestItem>;

  public static parse(
    json: ICoverageEligibilityRequest,
    providedInstance: CoverageEligibilityRequest = new CoverageEligibilityRequest()
  ): CoverageEligibilityRequest {
    const newInstance: CoverageEligibilityRequest = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = EligibilityRequestStatus.parsePrimitive(json.status, json._status);
    }
    if (json.priority !== undefined) {
      newInstance.priority = CodeableConcept.parse(json.priority);
    }
    if (json.purpose !== undefined) {
      newInstance.purpose = json.purpose.map((x, i) => EligibilityRequestPurpose.parsePrimitive(x, json._purpose?.[i]));
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
    if (json.enterer !== undefined) {
      newInstance.enterer = Reference.parse(json.enterer);
    }
    if (json.provider !== undefined) {
      newInstance.provider = Reference.parse(json.provider);
    }
    if (json.insurer !== undefined) {
      newInstance.insurer = Reference.parse(json.insurer);
    }
    if (json.facility !== undefined) {
      newInstance.facility = Reference.parse(json.facility);
    }
    if (json.supportingInfo !== undefined) {
      newInstance.supportingInfo = json.supportingInfo.map((x) => CoverageEligibilityRequestSupportingInfo.parse(x));
    }
    if (json.insurance !== undefined) {
      newInstance.insurance = json.insurance.map((x) => CoverageEligibilityRequestInsurance.parse(x));
    }
    if (json.item !== undefined) {
      newInstance.item = json.item.map((x) => CoverageEligibilityRequestItem.parse(x));
    }
    return newInstance;
  }

  public static isCoverageEligibilityRequest(input?: unknown): input is CoverageEligibilityRequest {
    const castInput = input as CoverageEligibilityRequest;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CoverageEligibilityRequest";
  }

  public toJSON(): ICoverageEligibilityRequest {
    const result: ICoverageEligibilityRequest = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.priority) {
      result.priority = this.priority.toJSON();
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

    if (this.enterer) {
      result.enterer = this.enterer.toJSON();
    }

    if (this.provider) {
      result.provider = this.provider.toJSON();
    }

    if (this.insurer) {
      result.insurer = this.insurer.toJSON();
    }

    if (this.facility) {
      result.facility = this.facility.toJSON();
    }

    if (this.supportingInfo) {
      result.supportingInfo = this.supportingInfo.map((x) => x.toJSON());
    }

    if (this.insurance) {
      result.insurance = this.insurance.map((x) => x.toJSON());
    }

    if (this.item) {
      result.item = this.item.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): CoverageEligibilityRequest {
    return CoverageEligibilityRequest.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CoverageEligibilityRequest";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

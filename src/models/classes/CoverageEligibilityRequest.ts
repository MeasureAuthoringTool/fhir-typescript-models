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
  ICoverageEligibilityRequest,
  Identifier,
  Period,
  PrimitiveDate,
  PrimitiveDateTime,
  Reference,
} from "../internal";

export class CoverageEligibilityRequest extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CoverageEligibilityRequest";

  public identifier?: Array<Identifier>;

  public status?: EligibilityRequestStatus;

  public priority?: CodeableConcept;

  public purpose?: Array<EligibilityRequestPurpose>;

  public patient?: Reference;

  public serviced?: PrimitiveDate | Period;

  public created?: PrimitiveDateTime;

  public enterer?: Reference;

  public provider?: Reference;

  public insurer?: Reference;

  public facility?: Reference;

  public supportingInfo?: Array<CoverageEligibilityRequestSupportingInfo>;

  public insurance?: Array<CoverageEligibilityRequestInsurance>;

  public item?: Array<CoverageEligibilityRequestItem>;

  public static parse(
    json: ICoverageEligibilityRequest,
    providedInstance: CoverageEligibilityRequest = new CoverageEligibilityRequest()
  ): CoverageEligibilityRequest {
    const newInstance: CoverageEligibilityRequest = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status) {
      newInstance.status = EligibilityRequestStatus.parsePrimitive(json.status, json._status);
    }
    if (json.priority) {
      newInstance.priority = CodeableConcept.parse(json.priority);
    }
    if (json.purpose) {
      newInstance.purpose = json.purpose.map((x, i) => {
        const ext = json._purpose && json._purpose[i];
        return EligibilityRequestPurpose.parsePrimitive(x, ext);
      });
    }
    if (json.patient) {
      newInstance.patient = Reference.parse(json.patient);
    }
    if (json.servicedDate) {
      newInstance.serviced = PrimitiveDate.parsePrimitive(json.servicedDate, json._servicedDate);
    }
    if (json.servicedPeriod) {
      newInstance.serviced = Period.parse(json.servicedPeriod);
    }
    if (json.created) {
      newInstance.created = PrimitiveDateTime.parsePrimitive(json.created, json._created);
    }
    if (json.enterer) {
      newInstance.enterer = Reference.parse(json.enterer);
    }
    if (json.provider) {
      newInstance.provider = Reference.parse(json.provider);
    }
    if (json.insurer) {
      newInstance.insurer = Reference.parse(json.insurer);
    }
    if (json.facility) {
      newInstance.facility = Reference.parse(json.facility);
    }
    if (json.supportingInfo) {
      newInstance.supportingInfo = json.supportingInfo.map((x) => CoverageEligibilityRequestSupportingInfo.parse(x));
    }
    if (json.insurance) {
      newInstance.insurance = json.insurance.map((x) => CoverageEligibilityRequestInsurance.parse(x));
    }
    if (json.item) {
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
  
  public getTypeName(): string {
    return "CoverageEligibilityRequest";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

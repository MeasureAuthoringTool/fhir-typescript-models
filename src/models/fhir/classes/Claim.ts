/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  ClaimAccident,
  ClaimCareTeam,
  ClaimDiagnosis,
  ClaimInsurance,
  ClaimItem,
  ClaimPayee,
  ClaimProcedure,
  ClaimRelated,
  ClaimStatus,
  ClaimSupportingInfo,
  CodeableConcept,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  IClaim,
  Identifier,
  Money,
  Period,
  PrimitiveDateTime,
  Reference,
  Use,
  FhirType
} from "../internal";

@FhirType("Claim", "DomainResource")
export class Claim extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Claim";

  static readonly primaryCodePath: string | null = "type";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("ClaimStatus")
  public status?: ClaimStatus;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("CodeableConcept")
  public subType?: CodeableConcept;

  @FhirField("Use")
  public use?: Use;

  @FhirField("Reference")
  public patient?: Reference;

  @FhirField("Period")
  public billablePeriod?: Period;

  @FhirField("PrimitiveDateTime")
  public created?: PrimitiveDateTime;

  @FhirField("Reference")
  public enterer?: Reference;

  @FhirField("Reference")
  public insurer?: Reference;

  @FhirField("Reference")
  public provider?: Reference;

  @FhirField("CodeableConcept")
  public priority?: CodeableConcept;

  @FhirField("CodeableConcept")
  public fundsReserve?: CodeableConcept;

  @FhirList("ClaimRelated")
  public related?: Array<ClaimRelated>;

  @FhirField("Reference")
  public prescription?: Reference;

  @FhirField("Reference")
  public originalPrescription?: Reference;

  @FhirField("ClaimPayee")
  public payee?: ClaimPayee;

  @FhirField("Reference")
  public referral?: Reference;

  @FhirField("Reference")
  public facility?: Reference;

  @FhirList("ClaimCareTeam")
  public careTeam?: Array<ClaimCareTeam>;

  @FhirList("ClaimSupportingInfo")
  public supportingInfo?: Array<ClaimSupportingInfo>;

  @FhirList("ClaimDiagnosis")
  public diagnosis?: Array<ClaimDiagnosis>;

  @FhirList("ClaimProcedure")
  public procedure?: Array<ClaimProcedure>;

  @FhirList("ClaimInsurance")
  public insurance?: Array<ClaimInsurance>;

  @FhirField("ClaimAccident")
  public accident?: ClaimAccident;

  @FhirList("ClaimItem")
  public item?: Array<ClaimItem>;

  @FhirField("Money")
  public total?: Money;

  get primaryCode(): CodeableConcept | undefined {
    return this?.type;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.type = primaryCode;
  }

  public static parse(
    json: IClaim,
    providedInstance: Claim = new Claim()
  ): Claim {
    const newInstance: Claim = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = ClaimStatus.parsePrimitive(json.status, json._status);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.subType !== undefined) {
      newInstance.subType = CodeableConcept.parse(json.subType);
    }
    if (json.use !== undefined) {
      newInstance.use = Use.parsePrimitive(json.use, json._use);
    }
    if (json.patient !== undefined) {
      newInstance.patient = Reference.parse(json.patient);
    }
    if (json.billablePeriod !== undefined) {
      newInstance.billablePeriod = Period.parse(json.billablePeriod);
    }
    if (json.created !== undefined) {
      newInstance.created = PrimitiveDateTime.parsePrimitive(json.created, json._created);
    }
    if (json.enterer !== undefined) {
      newInstance.enterer = Reference.parse(json.enterer);
    }
    if (json.insurer !== undefined) {
      newInstance.insurer = Reference.parse(json.insurer);
    }
    if (json.provider !== undefined) {
      newInstance.provider = Reference.parse(json.provider);
    }
    if (json.priority !== undefined) {
      newInstance.priority = CodeableConcept.parse(json.priority);
    }
    if (json.fundsReserve !== undefined) {
      newInstance.fundsReserve = CodeableConcept.parse(json.fundsReserve);
    }
    if (json.related !== undefined) {
      newInstance.related = json.related.map((x) => ClaimRelated.parse(x));
    }
    if (json.prescription !== undefined) {
      newInstance.prescription = Reference.parse(json.prescription);
    }
    if (json.originalPrescription !== undefined) {
      newInstance.originalPrescription = Reference.parse(json.originalPrescription);
    }
    if (json.payee !== undefined) {
      newInstance.payee = ClaimPayee.parse(json.payee);
    }
    if (json.referral !== undefined) {
      newInstance.referral = Reference.parse(json.referral);
    }
    if (json.facility !== undefined) {
      newInstance.facility = Reference.parse(json.facility);
    }
    if (json.careTeam !== undefined) {
      newInstance.careTeam = json.careTeam.map((x) => ClaimCareTeam.parse(x));
    }
    if (json.supportingInfo !== undefined) {
      newInstance.supportingInfo = json.supportingInfo.map((x) => ClaimSupportingInfo.parse(x));
    }
    if (json.diagnosis !== undefined) {
      newInstance.diagnosis = json.diagnosis.map((x) => ClaimDiagnosis.parse(x));
    }
    if (json.procedure !== undefined) {
      newInstance.procedure = json.procedure.map((x) => ClaimProcedure.parse(x));
    }
    if (json.insurance !== undefined) {
      newInstance.insurance = json.insurance.map((x) => ClaimInsurance.parse(x));
    }
    if (json.accident !== undefined) {
      newInstance.accident = ClaimAccident.parse(json.accident);
    }
    if (json.item !== undefined) {
      newInstance.item = json.item.map((x) => ClaimItem.parse(x));
    }
    if (json.total !== undefined) {
      newInstance.total = Money.parse(json.total);
    }
    return newInstance;
  }

  public static isClaim(input?: unknown): input is Claim {
    const castInput = input as Claim;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Claim";
  }

  public toJSON(): IClaim {
    const result: IClaim = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.subType) {
      result.subType = this.subType.toJSON();
    }

    if (this.use) {
      result.use = this.use.value;
      result._use = Extension.serializePrimitiveExtension(this.use);
    }

    if (this.patient) {
      result.patient = this.patient.toJSON();
    }

    if (this.billablePeriod) {
      result.billablePeriod = this.billablePeriod.toJSON();
    }

    if (this.created) {
      result.created = this.created.value;
      result._created = Extension.serializePrimitiveExtension(this.created);
    }

    if (this.enterer) {
      result.enterer = this.enterer.toJSON();
    }

    if (this.insurer) {
      result.insurer = this.insurer.toJSON();
    }

    if (this.provider) {
      result.provider = this.provider.toJSON();
    }

    if (this.priority) {
      result.priority = this.priority.toJSON();
    }

    if (this.fundsReserve) {
      result.fundsReserve = this.fundsReserve.toJSON();
    }

    if (this.related) {
      result.related = this.related.map((x) => x.toJSON());
    }

    if (this.prescription) {
      result.prescription = this.prescription.toJSON();
    }

    if (this.originalPrescription) {
      result.originalPrescription = this.originalPrescription.toJSON();
    }

    if (this.payee) {
      result.payee = this.payee.toJSON();
    }

    if (this.referral) {
      result.referral = this.referral.toJSON();
    }

    if (this.facility) {
      result.facility = this.facility.toJSON();
    }

    if (this.careTeam) {
      result.careTeam = this.careTeam.map((x) => x.toJSON());
    }

    if (this.supportingInfo) {
      result.supportingInfo = this.supportingInfo.map((x) => x.toJSON());
    }

    if (this.diagnosis) {
      result.diagnosis = this.diagnosis.map((x) => x.toJSON());
    }

    if (this.procedure) {
      result.procedure = this.procedure.map((x) => x.toJSON());
    }

    if (this.insurance) {
      result.insurance = this.insurance.map((x) => x.toJSON());
    }

    if (this.accident) {
      result.accident = this.accident.toJSON();
    }

    if (this.item) {
      result.item = this.item.map((x) => x.toJSON());
    }

    if (this.total) {
      result.total = this.total.toJSON();
    }

    return result;
  }

  public clone(): Claim {
    return Claim.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Claim";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

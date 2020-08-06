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
  IClaim,
  Identifier,
  Money,
  Period,
  PrimitiveDateTime,
  Reference,
  Use,
} from "../internal";

export class Claim extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Claim";

  public identifier?: Array<Identifier>;

  public status?: ClaimStatus;

  public type?: CodeableConcept;

  public subType?: CodeableConcept;

  public use?: Use;

  public patient?: Reference;

  public billablePeriod?: Period;

  public created?: PrimitiveDateTime;

  public enterer?: Reference;

  public insurer?: Reference;

  public provider?: Reference;

  public priority?: CodeableConcept;

  public fundsReserve?: CodeableConcept;

  public related?: Array<ClaimRelated>;

  public prescription?: Reference;

  public originalPrescription?: Reference;

  public payee?: ClaimPayee;

  public referral?: Reference;

  public facility?: Reference;

  public careTeam?: Array<ClaimCareTeam>;

  public supportingInfo?: Array<ClaimSupportingInfo>;

  public diagnosis?: Array<ClaimDiagnosis>;

  public procedure?: Array<ClaimProcedure>;

  public insurance?: Array<ClaimInsurance>;

  public accident?: ClaimAccident;

  public item?: Array<ClaimItem>;

  public total?: Money;

  public static parse(
    json: IClaim,
    providedInstance: Claim = new Claim()
  ): Claim {
    const newInstance: Claim = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status) {
      newInstance.status = ClaimStatus.parsePrimitive(json.status, json._status);
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.subType) {
      newInstance.subType = CodeableConcept.parse(json.subType);
    }
    if (json.use) {
      newInstance.use = Use.parsePrimitive(json.use, json._use);
    }
    if (json.patient) {
      newInstance.patient = Reference.parse(json.patient);
    }
    if (json.billablePeriod) {
      newInstance.billablePeriod = Period.parse(json.billablePeriod);
    }
    if (json.created) {
      newInstance.created = PrimitiveDateTime.parsePrimitive(json.created, json._created);
    }
    if (json.enterer) {
      newInstance.enterer = Reference.parse(json.enterer);
    }
    if (json.insurer) {
      newInstance.insurer = Reference.parse(json.insurer);
    }
    if (json.provider) {
      newInstance.provider = Reference.parse(json.provider);
    }
    if (json.priority) {
      newInstance.priority = CodeableConcept.parse(json.priority);
    }
    if (json.fundsReserve) {
      newInstance.fundsReserve = CodeableConcept.parse(json.fundsReserve);
    }
    if (json.related) {
      newInstance.related = json.related.map((x) => ClaimRelated.parse(x));
    }
    if (json.prescription) {
      newInstance.prescription = Reference.parse(json.prescription);
    }
    if (json.originalPrescription) {
      newInstance.originalPrescription = Reference.parse(json.originalPrescription);
    }
    if (json.payee) {
      newInstance.payee = ClaimPayee.parse(json.payee);
    }
    if (json.referral) {
      newInstance.referral = Reference.parse(json.referral);
    }
    if (json.facility) {
      newInstance.facility = Reference.parse(json.facility);
    }
    if (json.careTeam) {
      newInstance.careTeam = json.careTeam.map((x) => ClaimCareTeam.parse(x));
    }
    if (json.supportingInfo) {
      newInstance.supportingInfo = json.supportingInfo.map((x) => ClaimSupportingInfo.parse(x));
    }
    if (json.diagnosis) {
      newInstance.diagnosis = json.diagnosis.map((x) => ClaimDiagnosis.parse(x));
    }
    if (json.procedure) {
      newInstance.procedure = json.procedure.map((x) => ClaimProcedure.parse(x));
    }
    if (json.insurance) {
      newInstance.insurance = json.insurance.map((x) => ClaimInsurance.parse(x));
    }
    if (json.accident) {
      newInstance.accident = ClaimAccident.parse(json.accident);
    }
    if (json.item) {
      newInstance.item = json.item.map((x) => ClaimItem.parse(x));
    }
    if (json.total) {
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
  
  public getTypeName(): string {
    return "Claim";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

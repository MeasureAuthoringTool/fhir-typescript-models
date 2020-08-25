/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Attachment,
  CodeableConcept,
  DomainResource,
  ExplanationOfBenefitAccident,
  ExplanationOfBenefitAddItem,
  ExplanationOfBenefitBenefitBalance,
  ExplanationOfBenefitCareTeam,
  ExplanationOfBenefitDiagnosis,
  ExplanationOfBenefitInsurance,
  ExplanationOfBenefitItem,
  ExplanationOfBenefitItemAdjudication,
  ExplanationOfBenefitPayee,
  ExplanationOfBenefitPayment,
  ExplanationOfBenefitProcedure,
  ExplanationOfBenefitProcessNote,
  ExplanationOfBenefitRelated,
  ExplanationOfBenefitStatus,
  ExplanationOfBenefitSupportingInfo,
  ExplanationOfBenefitTotal,
  Extension,
  Identifier,
  IExplanationOfBenefit,
  Period,
  PrimitiveDateTime,
  PrimitivePositiveInt,
  PrimitiveString,
  Reference,
  RemittanceOutcome,
  Use,
} from "../internal";

export class ExplanationOfBenefit extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExplanationOfBenefit";

  public identifier?: Array<Identifier>;

  public status?: ExplanationOfBenefitStatus;

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

  public fundsReserveRequested?: CodeableConcept;

  public fundsReserve?: CodeableConcept;

  public related?: Array<ExplanationOfBenefitRelated>;

  public prescription?: Reference;

  public originalPrescription?: Reference;

  public payee?: ExplanationOfBenefitPayee;

  public referral?: Reference;

  public facility?: Reference;

  public claim?: Reference;

  public claimResponse?: Reference;

  public outcome?: RemittanceOutcome;

  public disposition?: PrimitiveString;

  public preAuthRef?: Array<PrimitiveString>;

  public preAuthRefPeriod?: Array<Period>;

  public careTeam?: Array<ExplanationOfBenefitCareTeam>;

  public supportingInfo?: Array<ExplanationOfBenefitSupportingInfo>;

  public diagnosis?: Array<ExplanationOfBenefitDiagnosis>;

  public procedure?: Array<ExplanationOfBenefitProcedure>;

  public precedence?: PrimitivePositiveInt;

  public insurance?: Array<ExplanationOfBenefitInsurance>;

  public accident?: ExplanationOfBenefitAccident;

  public item?: Array<ExplanationOfBenefitItem>;

  public addItem?: Array<ExplanationOfBenefitAddItem>;

  public adjudication?: Array<ExplanationOfBenefitItemAdjudication>;

  public total?: Array<ExplanationOfBenefitTotal>;

  public payment?: ExplanationOfBenefitPayment;

  public formCode?: CodeableConcept;

  public form?: Attachment;

  public processNote?: Array<ExplanationOfBenefitProcessNote>;

  public benefitPeriod?: Period;

  public benefitBalance?: Array<ExplanationOfBenefitBenefitBalance>;

  public static parse(
    json: IExplanationOfBenefit,
    providedInstance: ExplanationOfBenefit = new ExplanationOfBenefit()
  ): ExplanationOfBenefit {
    const newInstance: ExplanationOfBenefit = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = ExplanationOfBenefitStatus.parsePrimitive(json.status, json._status);
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
    if (json.fundsReserveRequested !== undefined) {
      newInstance.fundsReserveRequested = CodeableConcept.parse(json.fundsReserveRequested);
    }
    if (json.fundsReserve !== undefined) {
      newInstance.fundsReserve = CodeableConcept.parse(json.fundsReserve);
    }
    if (json.related !== undefined) {
      newInstance.related = json.related.map((x) => ExplanationOfBenefitRelated.parse(x));
    }
    if (json.prescription !== undefined) {
      newInstance.prescription = Reference.parse(json.prescription);
    }
    if (json.originalPrescription !== undefined) {
      newInstance.originalPrescription = Reference.parse(json.originalPrescription);
    }
    if (json.payee !== undefined) {
      newInstance.payee = ExplanationOfBenefitPayee.parse(json.payee);
    }
    if (json.referral !== undefined) {
      newInstance.referral = Reference.parse(json.referral);
    }
    if (json.facility !== undefined) {
      newInstance.facility = Reference.parse(json.facility);
    }
    if (json.claim !== undefined) {
      newInstance.claim = Reference.parse(json.claim);
    }
    if (json.claimResponse !== undefined) {
      newInstance.claimResponse = Reference.parse(json.claimResponse);
    }
    if (json.outcome !== undefined) {
      newInstance.outcome = RemittanceOutcome.parsePrimitive(json.outcome, json._outcome);
    }
    if (json.disposition !== undefined) {
      newInstance.disposition = PrimitiveString.parsePrimitive(json.disposition, json._disposition);
    }
    if (json.preAuthRef !== undefined) {
      newInstance.preAuthRef = json.preAuthRef.map((x, i) => {
        const ext = json._preAuthRef && json._preAuthRef[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.preAuthRefPeriod !== undefined) {
      newInstance.preAuthRefPeriod = json.preAuthRefPeriod.map((x) => Period.parse(x));
    }
    if (json.careTeam !== undefined) {
      newInstance.careTeam = json.careTeam.map((x) => ExplanationOfBenefitCareTeam.parse(x));
    }
    if (json.supportingInfo !== undefined) {
      newInstance.supportingInfo = json.supportingInfo.map((x) => ExplanationOfBenefitSupportingInfo.parse(x));
    }
    if (json.diagnosis !== undefined) {
      newInstance.diagnosis = json.diagnosis.map((x) => ExplanationOfBenefitDiagnosis.parse(x));
    }
    if (json.procedure !== undefined) {
      newInstance.procedure = json.procedure.map((x) => ExplanationOfBenefitProcedure.parse(x));
    }
    if (json.precedence !== undefined) {
      newInstance.precedence = PrimitivePositiveInt.parsePrimitive(json.precedence, json._precedence);
    }
    if (json.insurance !== undefined) {
      newInstance.insurance = json.insurance.map((x) => ExplanationOfBenefitInsurance.parse(x));
    }
    if (json.accident !== undefined) {
      newInstance.accident = ExplanationOfBenefitAccident.parse(json.accident);
    }
    if (json.item !== undefined) {
      newInstance.item = json.item.map((x) => ExplanationOfBenefitItem.parse(x));
    }
    if (json.addItem !== undefined) {
      newInstance.addItem = json.addItem.map((x) => ExplanationOfBenefitAddItem.parse(x));
    }
    if (json.adjudication !== undefined) {
      newInstance.adjudication = json.adjudication.map((x) => ExplanationOfBenefitItemAdjudication.parse(x));
    }
    if (json.total !== undefined) {
      newInstance.total = json.total.map((x) => ExplanationOfBenefitTotal.parse(x));
    }
    if (json.payment !== undefined) {
      newInstance.payment = ExplanationOfBenefitPayment.parse(json.payment);
    }
    if (json.formCode !== undefined) {
      newInstance.formCode = CodeableConcept.parse(json.formCode);
    }
    if (json.form !== undefined) {
      newInstance.form = Attachment.parse(json.form);
    }
    if (json.processNote !== undefined) {
      newInstance.processNote = json.processNote.map((x) => ExplanationOfBenefitProcessNote.parse(x));
    }
    if (json.benefitPeriod !== undefined) {
      newInstance.benefitPeriod = Period.parse(json.benefitPeriod);
    }
    if (json.benefitBalance !== undefined) {
      newInstance.benefitBalance = json.benefitBalance.map((x) => ExplanationOfBenefitBenefitBalance.parse(x));
    }
    return newInstance;
  }

  public static isExplanationOfBenefit(input?: unknown): input is ExplanationOfBenefit {
    const castInput = input as ExplanationOfBenefit;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExplanationOfBenefit";
  }

  public toJSON(): IExplanationOfBenefit {
    const result: IExplanationOfBenefit = super.toJSON();

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

    if (this.fundsReserveRequested) {
      result.fundsReserveRequested = this.fundsReserveRequested.toJSON();
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

    if (this.claim) {
      result.claim = this.claim.toJSON();
    }

    if (this.claimResponse) {
      result.claimResponse = this.claimResponse.toJSON();
    }

    if (this.outcome) {
      result.outcome = this.outcome.value;
      result._outcome = Extension.serializePrimitiveExtension(this.outcome);
    }

    if (this.disposition) {
      result.disposition = this.disposition.value;
      result._disposition = Extension.serializePrimitiveExtension(this.disposition);
    }

    if (this.preAuthRef) {
      result.preAuthRef = this.preAuthRef.filter(x => !!x).map(x => x.value) as typeof result.preAuthRef;
      result._preAuthRef = Extension.serializePrimitiveExtensionArray(this.preAuthRef);
    }

    if (this.preAuthRefPeriod) {
      result.preAuthRefPeriod = this.preAuthRefPeriod.map((x) => x.toJSON());
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

    if (this.precedence) {
      result.precedence = this.precedence.value;
      result._precedence = Extension.serializePrimitiveExtension(this.precedence);
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

    if (this.addItem) {
      result.addItem = this.addItem.map((x) => x.toJSON());
    }

    if (this.adjudication) {
      result.adjudication = this.adjudication.map((x) => x.toJSON());
    }

    if (this.total) {
      result.total = this.total.map((x) => x.toJSON());
    }

    if (this.payment) {
      result.payment = this.payment.toJSON();
    }

    if (this.formCode) {
      result.formCode = this.formCode.toJSON();
    }

    if (this.form) {
      result.form = this.form.toJSON();
    }

    if (this.processNote) {
      result.processNote = this.processNote.map((x) => x.toJSON());
    }

    if (this.benefitPeriod) {
      result.benefitPeriod = this.benefitPeriod.toJSON();
    }

    if (this.benefitBalance) {
      result.benefitBalance = this.benefitBalance.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ExplanationOfBenefit {
    return ExplanationOfBenefit.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ExplanationOfBenefit";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

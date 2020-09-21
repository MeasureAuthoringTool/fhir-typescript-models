/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Address,
  BackboneElement,
  CodeableConcept,
  ExplanationOfBenefitItemAdjudication,
  ExplanationOfBenefitItemDetail,
  Extension,
  IExplanationOfBenefitItem,
  Money,
  Period,
  PrimitiveDate,
  PrimitiveDecimal,
  PrimitivePositiveInt,
  Reference,
  SimpleQuantity,
} from "../internal";

export class ExplanationOfBenefitItem extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExplanationOfBenefit.Item";
  
  static readonly primaryCodePath: string | null = null;

  public sequence?: PrimitivePositiveInt;

  public careTeamSequence?: Array<PrimitivePositiveInt>;

  public diagnosisSequence?: Array<PrimitivePositiveInt>;

  public procedureSequence?: Array<PrimitivePositiveInt>;

  public informationSequence?: Array<PrimitivePositiveInt>;

  public revenue?: CodeableConcept;

  public category?: CodeableConcept;

  public productOrService?: CodeableConcept;

  public modifier?: Array<CodeableConcept>;

  public programCode?: Array<CodeableConcept>;

  public serviced?: PrimitiveDate | Period;

  public location?: CodeableConcept | Address | Reference;

  public quantity?: SimpleQuantity;

  public unitPrice?: Money;

  public factor?: PrimitiveDecimal;

  public net?: Money;

  public udi?: Array<Reference>;

  public bodySite?: CodeableConcept;

  public subSite?: Array<CodeableConcept>;

  public encounter?: Array<Reference>;

  public noteNumber?: Array<PrimitivePositiveInt>;

  public adjudication?: Array<ExplanationOfBenefitItemAdjudication>;

  public detail?: Array<ExplanationOfBenefitItemDetail>;

  public static parse(
    json: IExplanationOfBenefitItem,
    providedInstance: ExplanationOfBenefitItem = new ExplanationOfBenefitItem()
  ): ExplanationOfBenefitItem {
    const newInstance: ExplanationOfBenefitItem = BackboneElement.parse(json, providedInstance);
  
    if (json.sequence !== undefined) {
      newInstance.sequence = PrimitivePositiveInt.parsePrimitive(json.sequence, json._sequence);
    }
    if (json.careTeamSequence !== undefined) {
      newInstance.careTeamSequence = json.careTeamSequence.map((x, i) => {
        const ext = json._careTeamSequence && json._careTeamSequence[i];
        return PrimitivePositiveInt.parsePrimitive(x, ext);
      });
    }
    if (json.diagnosisSequence !== undefined) {
      newInstance.diagnosisSequence = json.diagnosisSequence.map((x, i) => {
        const ext = json._diagnosisSequence && json._diagnosisSequence[i];
        return PrimitivePositiveInt.parsePrimitive(x, ext);
      });
    }
    if (json.procedureSequence !== undefined) {
      newInstance.procedureSequence = json.procedureSequence.map((x, i) => {
        const ext = json._procedureSequence && json._procedureSequence[i];
        return PrimitivePositiveInt.parsePrimitive(x, ext);
      });
    }
    if (json.informationSequence !== undefined) {
      newInstance.informationSequence = json.informationSequence.map((x, i) => {
        const ext = json._informationSequence && json._informationSequence[i];
        return PrimitivePositiveInt.parsePrimitive(x, ext);
      });
    }
    if (json.revenue !== undefined) {
      newInstance.revenue = CodeableConcept.parse(json.revenue);
    }
    if (json.category !== undefined) {
      newInstance.category = CodeableConcept.parse(json.category);
    }
    if (json.productOrService !== undefined) {
      newInstance.productOrService = CodeableConcept.parse(json.productOrService);
    }
    if (json.modifier !== undefined) {
      newInstance.modifier = json.modifier.map((x) => CodeableConcept.parse(x));
    }
    if (json.programCode !== undefined) {
      newInstance.programCode = json.programCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.servicedDate !== undefined) {
      newInstance.serviced = PrimitiveDate.parsePrimitive(json.servicedDate, json._servicedDate);
    }
    if (json.servicedPeriod !== undefined) {
      newInstance.serviced = Period.parse(json.servicedPeriod);
    }
    if (json.locationCodeableConcept !== undefined) {
      newInstance.location = CodeableConcept.parse(json.locationCodeableConcept);
    }
    if (json.locationAddress !== undefined) {
      newInstance.location = Address.parse(json.locationAddress);
    }
    if (json.locationReference !== undefined) {
      newInstance.location = Reference.parse(json.locationReference);
    }
    if (json.quantity !== undefined) {
      newInstance.quantity = SimpleQuantity.parse(json.quantity);
    }
    if (json.unitPrice !== undefined) {
      newInstance.unitPrice = Money.parse(json.unitPrice);
    }
    if (json.factor !== undefined) {
      newInstance.factor = PrimitiveDecimal.parsePrimitive(json.factor, json._factor);
    }
    if (json.net !== undefined) {
      newInstance.net = Money.parse(json.net);
    }
    if (json.udi !== undefined) {
      newInstance.udi = json.udi.map((x) => Reference.parse(x));
    }
    if (json.bodySite !== undefined) {
      newInstance.bodySite = CodeableConcept.parse(json.bodySite);
    }
    if (json.subSite !== undefined) {
      newInstance.subSite = json.subSite.map((x) => CodeableConcept.parse(x));
    }
    if (json.encounter !== undefined) {
      newInstance.encounter = json.encounter.map((x) => Reference.parse(x));
    }
    if (json.noteNumber !== undefined) {
      newInstance.noteNumber = json.noteNumber.map((x, i) => {
        const ext = json._noteNumber && json._noteNumber[i];
        return PrimitivePositiveInt.parsePrimitive(x, ext);
      });
    }
    if (json.adjudication !== undefined) {
      newInstance.adjudication = json.adjudication.map((x) => ExplanationOfBenefitItemAdjudication.parse(x));
    }
    if (json.detail !== undefined) {
      newInstance.detail = json.detail.map((x) => ExplanationOfBenefitItemDetail.parse(x));
    }
    return newInstance;
  }

  public static isExplanationOfBenefitItem(input?: unknown): input is ExplanationOfBenefitItem {
    const castInput = input as ExplanationOfBenefitItem;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExplanationOfBenefitItem";
  }

  public toJSON(): IExplanationOfBenefitItem {
    const result: IExplanationOfBenefitItem = super.toJSON();

    if (this.sequence) {
      result.sequence = this.sequence.value;
      result._sequence = Extension.serializePrimitiveExtension(this.sequence);
    }

    if (this.careTeamSequence) {
      result.careTeamSequence = this.careTeamSequence.filter(x => !!x).map(x => x.value) as typeof result.careTeamSequence;
      result._careTeamSequence = Extension.serializePrimitiveExtensionArray(this.careTeamSequence);
    }

    if (this.diagnosisSequence) {
      result.diagnosisSequence = this.diagnosisSequence.filter(x => !!x).map(x => x.value) as typeof result.diagnosisSequence;
      result._diagnosisSequence = Extension.serializePrimitiveExtensionArray(this.diagnosisSequence);
    }

    if (this.procedureSequence) {
      result.procedureSequence = this.procedureSequence.filter(x => !!x).map(x => x.value) as typeof result.procedureSequence;
      result._procedureSequence = Extension.serializePrimitiveExtensionArray(this.procedureSequence);
    }

    if (this.informationSequence) {
      result.informationSequence = this.informationSequence.filter(x => !!x).map(x => x.value) as typeof result.informationSequence;
      result._informationSequence = Extension.serializePrimitiveExtensionArray(this.informationSequence);
    }

    if (this.revenue) {
      result.revenue = this.revenue.toJSON();
    }

    if (this.category) {
      result.category = this.category.toJSON();
    }

    if (this.productOrService) {
      result.productOrService = this.productOrService.toJSON();
    }

    if (this.modifier) {
      result.modifier = this.modifier.map((x) => x.toJSON());
    }

    if (this.programCode) {
      result.programCode = this.programCode.map((x) => x.toJSON());
    }

    if (this.serviced && PrimitiveDate.isPrimitiveDate(this.serviced)) {
      result.servicedDate = this.serviced.value;
      result._servicedDate = Extension.serializePrimitiveExtension(this.serviced);
    }

    if (this.serviced && Period.isPeriod(this.serviced)) {
      result.servicedPeriod = this.serviced.toJSON();
    }

    if (this.location && CodeableConcept.isCodeableConcept(this.location)) {
      result.locationCodeableConcept = this.location.toJSON();
    }

    if (this.location && Address.isAddress(this.location)) {
      result.locationAddress = this.location.toJSON();
    }

    if (this.location && Reference.isReference(this.location)) {
      result.locationReference = this.location.toJSON();
    }

    if (this.quantity) {
      result.quantity = this.quantity.toJSON();
    }

    if (this.unitPrice) {
      result.unitPrice = this.unitPrice.toJSON();
    }

    if (this.factor) {
      result.factor = this.factor.value;
      result._factor = Extension.serializePrimitiveExtension(this.factor);
    }

    if (this.net) {
      result.net = this.net.toJSON();
    }

    if (this.udi) {
      result.udi = this.udi.map((x) => x.toJSON());
    }

    if (this.bodySite) {
      result.bodySite = this.bodySite.toJSON();
    }

    if (this.subSite) {
      result.subSite = this.subSite.map((x) => x.toJSON());
    }

    if (this.encounter) {
      result.encounter = this.encounter.map((x) => x.toJSON());
    }

    if (this.noteNumber) {
      result.noteNumber = this.noteNumber.filter(x => !!x).map(x => x.value) as typeof result.noteNumber;
      result._noteNumber = Extension.serializePrimitiveExtensionArray(this.noteNumber);
    }

    if (this.adjudication) {
      result.adjudication = this.adjudication.map((x) => x.toJSON());
    }

    if (this.detail) {
      result.detail = this.detail.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ExplanationOfBenefitItem {
    return ExplanationOfBenefitItem.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ExplanationOfBenefitItem";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

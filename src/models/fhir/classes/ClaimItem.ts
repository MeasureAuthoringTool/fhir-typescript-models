/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Address,
  BackboneElement,
  ClaimItemDetail,
  CodeableConcept,
  Extension,
  IClaimItem,
  Money,
  Period,
  PrimitiveDate,
  PrimitiveDecimal,
  PrimitivePositiveInt,
  Reference,
  SimpleQuantity,
} from "../internal";

export class ClaimItem extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Claim.Item";

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

  public detail?: Array<ClaimItemDetail>;

  public static parse(
    json: IClaimItem,
    providedInstance: ClaimItem = new ClaimItem()
  ): ClaimItem {
    const newInstance: ClaimItem = BackboneElement.parse(json, providedInstance);
  
    if (json.sequence) {
      newInstance.sequence = PrimitivePositiveInt.parsePrimitive(json.sequence, json._sequence);
    }
    if (json.careTeamSequence) {
      newInstance.careTeamSequence = json.careTeamSequence.map((x, i) => {
        const ext = json._careTeamSequence && json._careTeamSequence[i];
        return PrimitivePositiveInt.parsePrimitive(x, ext);
      });
    }
    if (json.diagnosisSequence) {
      newInstance.diagnosisSequence = json.diagnosisSequence.map((x, i) => {
        const ext = json._diagnosisSequence && json._diagnosisSequence[i];
        return PrimitivePositiveInt.parsePrimitive(x, ext);
      });
    }
    if (json.procedureSequence) {
      newInstance.procedureSequence = json.procedureSequence.map((x, i) => {
        const ext = json._procedureSequence && json._procedureSequence[i];
        return PrimitivePositiveInt.parsePrimitive(x, ext);
      });
    }
    if (json.informationSequence) {
      newInstance.informationSequence = json.informationSequence.map((x, i) => {
        const ext = json._informationSequence && json._informationSequence[i];
        return PrimitivePositiveInt.parsePrimitive(x, ext);
      });
    }
    if (json.revenue) {
      newInstance.revenue = CodeableConcept.parse(json.revenue);
    }
    if (json.category) {
      newInstance.category = CodeableConcept.parse(json.category);
    }
    if (json.productOrService) {
      newInstance.productOrService = CodeableConcept.parse(json.productOrService);
    }
    if (json.modifier) {
      newInstance.modifier = json.modifier.map((x) => CodeableConcept.parse(x));
    }
    if (json.programCode) {
      newInstance.programCode = json.programCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.servicedDate) {
      newInstance.serviced = PrimitiveDate.parsePrimitive(json.servicedDate, json._servicedDate);
    }
    if (json.servicedPeriod) {
      newInstance.serviced = Period.parse(json.servicedPeriod);
    }
    if (json.locationCodeableConcept) {
      newInstance.location = CodeableConcept.parse(json.locationCodeableConcept);
    }
    if (json.locationAddress) {
      newInstance.location = Address.parse(json.locationAddress);
    }
    if (json.locationReference) {
      newInstance.location = Reference.parse(json.locationReference);
    }
    if (json.quantity) {
      newInstance.quantity = SimpleQuantity.parse(json.quantity);
    }
    if (json.unitPrice) {
      newInstance.unitPrice = Money.parse(json.unitPrice);
    }
    if (json.factor) {
      newInstance.factor = PrimitiveDecimal.parsePrimitive(json.factor, json._factor);
    }
    if (json.net) {
      newInstance.net = Money.parse(json.net);
    }
    if (json.udi) {
      newInstance.udi = json.udi.map((x) => Reference.parse(x));
    }
    if (json.bodySite) {
      newInstance.bodySite = CodeableConcept.parse(json.bodySite);
    }
    if (json.subSite) {
      newInstance.subSite = json.subSite.map((x) => CodeableConcept.parse(x));
    }
    if (json.encounter) {
      newInstance.encounter = json.encounter.map((x) => Reference.parse(x));
    }
    if (json.detail) {
      newInstance.detail = json.detail.map((x) => ClaimItemDetail.parse(x));
    }
    return newInstance;
  }

  public static isClaimItem(input?: unknown): input is ClaimItem {
    const castInput = input as ClaimItem;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ClaimItem";
  }

  public toJSON(): IClaimItem {
    const result: IClaimItem = super.toJSON();

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

    if (this.detail) {
      result.detail = this.detail.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ClaimItem";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

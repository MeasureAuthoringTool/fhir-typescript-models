/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Address,
  BackboneElement,
  ClaimItemDetail,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  IClaimItem,
  Money,
  Period,
  PrimitiveDate,
  PrimitiveDecimal,
  PrimitivePositiveInt,
  Reference,
  SimpleQuantity,
  FhirType
} from "../internal";

@FhirType("ClaimItem", "BackboneElement")
export class ClaimItem extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Claim.Item";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitivePositiveInt")
  public sequence?: PrimitivePositiveInt;

  @FhirList("PrimitivePositiveInt")
  public careTeamSequence?: Array<PrimitivePositiveInt>;

  @FhirList("PrimitivePositiveInt")
  public diagnosisSequence?: Array<PrimitivePositiveInt>;

  @FhirList("PrimitivePositiveInt")
  public procedureSequence?: Array<PrimitivePositiveInt>;

  @FhirList("PrimitivePositiveInt")
  public informationSequence?: Array<PrimitivePositiveInt>;

  @FhirField("CodeableConcept")
  public revenue?: CodeableConcept;

  @FhirField("CodeableConcept")
  public category?: CodeableConcept;

  @FhirField("CodeableConcept")
  public productOrService?: CodeableConcept;

  @FhirList("CodeableConcept")
  public modifier?: Array<CodeableConcept>;

  @FhirList("CodeableConcept")
  public programCode?: Array<CodeableConcept>;

  @FhirChoice("PrimitiveDate", "Period")
  public serviced?: PrimitiveDate | Period;

  @FhirChoice("CodeableConcept", "Address", "Reference")
  public location?: CodeableConcept | Address | Reference;

  @FhirField("SimpleQuantity")
  public quantity?: SimpleQuantity;

  @FhirField("Money")
  public unitPrice?: Money;

  @FhirField("PrimitiveDecimal")
  public factor?: PrimitiveDecimal;

  @FhirField("Money")
  public net?: Money;

  @FhirList("Reference")
  public udi?: Array<Reference>;

  @FhirField("CodeableConcept")
  public bodySite?: CodeableConcept;

  @FhirList("CodeableConcept")
  public subSite?: Array<CodeableConcept>;

  @FhirList("Reference")
  public encounter?: Array<Reference>;

  @FhirList("ClaimItemDetail")
  public detail?: Array<ClaimItemDetail>;

  public static parse(
    json: IClaimItem,
    providedInstance: ClaimItem = new ClaimItem()
  ): ClaimItem {
    const newInstance: ClaimItem = BackboneElement.parse(json, providedInstance);
  
    if (json.sequence !== undefined) {
      newInstance.sequence = PrimitivePositiveInt.parsePrimitive(json.sequence, json._sequence);
    }
    if (json.careTeamSequence !== undefined) {
      newInstance.careTeamSequence = json.careTeamSequence.map((x, i) => PrimitivePositiveInt.parsePrimitive(x, json._careTeamSequence?.[i]));
    }
    if (json.diagnosisSequence !== undefined) {
      newInstance.diagnosisSequence = json.diagnosisSequence.map((x, i) => PrimitivePositiveInt.parsePrimitive(x, json._diagnosisSequence?.[i]));
    }
    if (json.procedureSequence !== undefined) {
      newInstance.procedureSequence = json.procedureSequence.map((x, i) => PrimitivePositiveInt.parsePrimitive(x, json._procedureSequence?.[i]));
    }
    if (json.informationSequence !== undefined) {
      newInstance.informationSequence = json.informationSequence.map((x, i) => PrimitivePositiveInt.parsePrimitive(x, json._informationSequence?.[i]));
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
    if (json.detail !== undefined) {
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

  public clone(): ClaimItem {
    return ClaimItem.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ClaimItem";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

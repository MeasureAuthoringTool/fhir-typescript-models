/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  ISubstanceSpecificationRelationship,
  PrimitiveBoolean,
  PrimitiveString,
  Quantity,
  Range,
  Ratio,
  Reference,
  FhirType
} from "../internal";

@FhirType("SubstanceSpecificationRelationship", "BackboneElement")
export class SubstanceSpecificationRelationship extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceSpecification.Relationship";

  static readonly primaryCodePath: string | null = null;

  @FhirChoice("Reference", "CodeableConcept")
  public substance?: Reference | CodeableConcept;

  @FhirField("CodeableConcept")
  public relationship?: CodeableConcept;

  @FhirField("PrimitiveBoolean")
  public isDefining?: PrimitiveBoolean;

  @FhirChoice("Quantity", "Range", "Ratio", "PrimitiveString")
  public amount?: Quantity | Range | Ratio | PrimitiveString;

  @FhirField("Ratio")
  public amountRatioLowLimit?: Ratio;

  @FhirField("CodeableConcept")
  public amountType?: CodeableConcept;

  @FhirList("Reference")
  public source?: Array<Reference>;

  public static parse(
    json: ISubstanceSpecificationRelationship,
    providedInstance: SubstanceSpecificationRelationship = new SubstanceSpecificationRelationship()
  ): SubstanceSpecificationRelationship {
    const newInstance: SubstanceSpecificationRelationship = BackboneElement.parse(json, providedInstance);
  
    if (json.substanceReference !== undefined) {
      newInstance.substance = Reference.parse(json.substanceReference);
    }
    if (json.substanceCodeableConcept !== undefined) {
      newInstance.substance = CodeableConcept.parse(json.substanceCodeableConcept);
    }
    if (json.relationship !== undefined) {
      newInstance.relationship = CodeableConcept.parse(json.relationship);
    }
    if (json.isDefining !== undefined) {
      newInstance.isDefining = PrimitiveBoolean.parsePrimitive(json.isDefining, json._isDefining);
    }
    if (json.amountQuantity !== undefined) {
      newInstance.amount = Quantity.parse(json.amountQuantity);
    }
    if (json.amountRange !== undefined) {
      newInstance.amount = Range.parse(json.amountRange);
    }
    if (json.amountRatio !== undefined) {
      newInstance.amount = Ratio.parse(json.amountRatio);
    }
    if (json.amountString !== undefined) {
      newInstance.amount = PrimitiveString.parsePrimitive(json.amountString, json._amountString);
    }
    if (json.amountRatioLowLimit !== undefined) {
      newInstance.amountRatioLowLimit = Ratio.parse(json.amountRatioLowLimit);
    }
    if (json.amountType !== undefined) {
      newInstance.amountType = CodeableConcept.parse(json.amountType);
    }
    if (json.source !== undefined) {
      newInstance.source = json.source.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isSubstanceSpecificationRelationship(input?: unknown): input is SubstanceSpecificationRelationship {
    const castInput = input as SubstanceSpecificationRelationship;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceSpecificationRelationship";
  }

  public toJSON(): ISubstanceSpecificationRelationship {
    const result: ISubstanceSpecificationRelationship = super.toJSON();

    if (this.substance && Reference.isReference(this.substance)) {
      result.substanceReference = this.substance.toJSON();
    }

    if (this.substance && CodeableConcept.isCodeableConcept(this.substance)) {
      result.substanceCodeableConcept = this.substance.toJSON();
    }

    if (this.relationship) {
      result.relationship = this.relationship.toJSON();
    }

    if (this.isDefining) {
      result.isDefining = this.isDefining.value;
      result._isDefining = Extension.serializePrimitiveExtension(this.isDefining);
    }

    if (this.amount && Quantity.isQuantity(this.amount)) {
      result.amountQuantity = this.amount.toJSON();
    }

    if (this.amount && Range.isRange(this.amount)) {
      result.amountRange = this.amount.toJSON();
    }

    if (this.amount && Ratio.isRatio(this.amount)) {
      result.amountRatio = this.amount.toJSON();
    }

    if (this.amount && PrimitiveString.isPrimitiveString(this.amount)) {
      result.amountString = this.amount.value;
      result._amountString = Extension.serializePrimitiveExtension(this.amount);
    }

    if (this.amountRatioLowLimit) {
      result.amountRatioLowLimit = this.amountRatioLowLimit.toJSON();
    }

    if (this.amountType) {
      result.amountType = this.amountType.toJSON();
    }

    if (this.source) {
      result.source = this.source.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): SubstanceSpecificationRelationship {
    return SubstanceSpecificationRelationship.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceSpecificationRelationship";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

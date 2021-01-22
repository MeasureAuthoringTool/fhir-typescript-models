/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  Identifier,
  ISubstanceReferenceInformationTarget,
  PrimitiveString,
  Quantity,
  Range,
  Reference,
  FhirType
} from "../internal";

@FhirType("SubstanceReferenceInformationTarget", "BackboneElement")
export class SubstanceReferenceInformationTarget extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceReferenceInformation.Target";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Identifier")
  public target?: Identifier;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("CodeableConcept")
  public interaction?: CodeableConcept;

  @FhirField("CodeableConcept")
  public organism?: CodeableConcept;

  @FhirField("CodeableConcept")
  public organismType?: CodeableConcept;

  @FhirChoice("Quantity", "Range", "PrimitiveString")
  public amount?: Quantity | Range | PrimitiveString;

  @FhirField("CodeableConcept")
  public amountType?: CodeableConcept;

  @FhirList("Reference")
  public source?: Array<Reference>;

  public static parse(
    json: ISubstanceReferenceInformationTarget,
    providedInstance: SubstanceReferenceInformationTarget = new SubstanceReferenceInformationTarget()
  ): SubstanceReferenceInformationTarget {
    const newInstance: SubstanceReferenceInformationTarget = BackboneElement.parse(json, providedInstance);
  
    if (json.target !== undefined) {
      newInstance.target = Identifier.parse(json.target);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.interaction !== undefined) {
      newInstance.interaction = CodeableConcept.parse(json.interaction);
    }
    if (json.organism !== undefined) {
      newInstance.organism = CodeableConcept.parse(json.organism);
    }
    if (json.organismType !== undefined) {
      newInstance.organismType = CodeableConcept.parse(json.organismType);
    }
    if (json.amountQuantity !== undefined) {
      newInstance.amount = Quantity.parse(json.amountQuantity);
    }
    if (json.amountRange !== undefined) {
      newInstance.amount = Range.parse(json.amountRange);
    }
    if (json.amountString !== undefined) {
      newInstance.amount = PrimitiveString.parsePrimitive(json.amountString, json._amountString);
    }
    if (json.amountType !== undefined) {
      newInstance.amountType = CodeableConcept.parse(json.amountType);
    }
    if (json.source !== undefined) {
      newInstance.source = json.source.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isSubstanceReferenceInformationTarget(input?: unknown): input is SubstanceReferenceInformationTarget {
    const castInput = input as SubstanceReferenceInformationTarget;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceReferenceInformationTarget";
  }

  public toJSON(): ISubstanceReferenceInformationTarget {
    const result: ISubstanceReferenceInformationTarget = super.toJSON();

    if (this.target) {
      result.target = this.target.toJSON();
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.interaction) {
      result.interaction = this.interaction.toJSON();
    }

    if (this.organism) {
      result.organism = this.organism.toJSON();
    }

    if (this.organismType) {
      result.organismType = this.organismType.toJSON();
    }

    if (this.amount && Quantity.isQuantity(this.amount)) {
      result.amountQuantity = this.amount.toJSON();
    }

    if (this.amount && Range.isRange(this.amount)) {
      result.amountRange = this.amount.toJSON();
    }

    if (this.amount && PrimitiveString.isPrimitiveString(this.amount)) {
      result.amountString = this.amount.value;
      result._amountString = Extension.serializePrimitiveExtension(this.amount);
    }

    if (this.amountType) {
      result.amountType = this.amountType.toJSON();
    }

    if (this.source) {
      result.source = this.source.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): SubstanceReferenceInformationTarget {
    return SubstanceReferenceInformationTarget.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceReferenceInformationTarget";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

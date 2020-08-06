/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  Identifier,
  ISubstanceReferenceInformationTarget,
  PrimitiveString,
  Quantity,
  Range,
  Reference,
} from "../internal";

export class SubstanceReferenceInformationTarget extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceReferenceInformation.Target";

  public target?: Identifier;

  public type?: CodeableConcept;

  public interaction?: CodeableConcept;

  public organism?: CodeableConcept;

  public organismType?: CodeableConcept;

  public amount?: Quantity | Range | PrimitiveString;

  public amountType?: CodeableConcept;

  public source?: Array<Reference>;

  public static parse(
    json: ISubstanceReferenceInformationTarget,
    providedInstance: SubstanceReferenceInformationTarget = new SubstanceReferenceInformationTarget()
  ): SubstanceReferenceInformationTarget {
    const newInstance: SubstanceReferenceInformationTarget = BackboneElement.parse(json, providedInstance);
  
    if (json.target) {
      newInstance.target = Identifier.parse(json.target);
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.interaction) {
      newInstance.interaction = CodeableConcept.parse(json.interaction);
    }
    if (json.organism) {
      newInstance.organism = CodeableConcept.parse(json.organism);
    }
    if (json.organismType) {
      newInstance.organismType = CodeableConcept.parse(json.organismType);
    }
    if (json.amountQuantity) {
      newInstance.amount = Quantity.parse(json.amountQuantity);
    }
    if (json.amountRange) {
      newInstance.amount = Range.parse(json.amountRange);
    }
    if (json.amountString) {
      newInstance.amount = PrimitiveString.parsePrimitive(json.amountString, json._amountString);
    }
    if (json.amountType) {
      newInstance.amountType = CodeableConcept.parse(json.amountType);
    }
    if (json.source) {
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
  
  public getTypeName(): string {
    return "SubstanceReferenceInformationTarget";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

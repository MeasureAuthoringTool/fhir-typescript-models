/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Element,
  ISubstanceAmountReferenceRange,
  Quantity,
  FieldMetadata
} from "../internal";

export class SubstanceAmountReferenceRange extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceAmount.ReferenceRange";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...Element.fieldInfo, {
      fieldName: "lowLimit",
      fieldType: [Quantity],
      isArray: false
    }, {
      fieldName: "highLimit",
      fieldType: [Quantity],
      isArray: false
    }];
  }

  public lowLimit?: Quantity;

  public highLimit?: Quantity;

  public static parse(
    json: ISubstanceAmountReferenceRange,
    providedInstance: SubstanceAmountReferenceRange = new SubstanceAmountReferenceRange()
  ): SubstanceAmountReferenceRange {
    const newInstance: SubstanceAmountReferenceRange = Element.parse(json, providedInstance);
  
    if (json.lowLimit !== undefined) {
      newInstance.lowLimit = Quantity.parse(json.lowLimit);
    }
    if (json.highLimit !== undefined) {
      newInstance.highLimit = Quantity.parse(json.highLimit);
    }
    return newInstance;
  }

  public static isSubstanceAmountReferenceRange(input?: unknown): input is SubstanceAmountReferenceRange {
    const castInput = input as SubstanceAmountReferenceRange;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceAmountReferenceRange";
  }

  public toJSON(): ISubstanceAmountReferenceRange {
    const result: ISubstanceAmountReferenceRange = super.toJSON();

    if (this.lowLimit) {
      result.lowLimit = this.lowLimit.toJSON();
    }

    if (this.highLimit) {
      result.highLimit = this.highLimit.toJSON();
    }

    return result;
  }

  public clone(): SubstanceAmountReferenceRange {
    return SubstanceAmountReferenceRange.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceAmountReferenceRange";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

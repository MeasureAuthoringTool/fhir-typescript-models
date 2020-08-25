/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IValueSetCompose,
  PrimitiveBoolean,
  PrimitiveDate,
  ValueSetComposeInclude,
} from "../internal";

export class ValueSetCompose extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ValueSet.Compose";

  public lockedDate?: PrimitiveDate;

  public inactive?: PrimitiveBoolean;

  public include?: Array<ValueSetComposeInclude>;

  public exclude?: Array<ValueSetComposeInclude>;

  public static parse(
    json: IValueSetCompose,
    providedInstance: ValueSetCompose = new ValueSetCompose()
  ): ValueSetCompose {
    const newInstance: ValueSetCompose = BackboneElement.parse(json, providedInstance);
  
    if (json.lockedDate) {
      newInstance.lockedDate = PrimitiveDate.parsePrimitive(json.lockedDate, json._lockedDate);
    }
    if (json.inactive) {
      newInstance.inactive = PrimitiveBoolean.parsePrimitive(json.inactive, json._inactive);
    }
    if (json.include) {
      newInstance.include = json.include.map((x) => ValueSetComposeInclude.parse(x));
    }
    if (json.exclude) {
      newInstance.exclude = json.exclude.map((x) => ValueSetComposeInclude.parse(x));
    }
    return newInstance;
  }

  public static isValueSetCompose(input?: unknown): input is ValueSetCompose {
    const castInput = input as ValueSetCompose;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ValueSetCompose";
  }

  public toJSON(): IValueSetCompose {
    const result: IValueSetCompose = super.toJSON();

    if (this.lockedDate) {
      result.lockedDate = this.lockedDate.value;
      result._lockedDate = Extension.serializePrimitiveExtension(this.lockedDate);
    }

    if (this.inactive) {
      result.inactive = this.inactive.value;
      result._inactive = Extension.serializePrimitiveExtension(this.inactive);
    }

    if (this.include) {
      result.include = this.include.map((x) => x.toJSON());
    }

    if (this.exclude) {
      result.exclude = this.exclude.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ValueSetCompose";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  FhirList,
  IValueSetCompose,
  PrimitiveBoolean,
  PrimitiveDate,
  ValueSetComposeInclude,
  FhirType
} from "../internal";

@FhirType("ValueSetCompose", "BackboneElement")
export class ValueSetCompose extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ValueSet.Compose";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveDate")
  public lockedDate?: PrimitiveDate;

  @FhirField("PrimitiveBoolean")
  public inactive?: PrimitiveBoolean;

  @FhirList("ValueSetComposeInclude")
  public include?: Array<ValueSetComposeInclude>;

  @FhirList("ValueSetComposeInclude")
  public exclude?: Array<ValueSetComposeInclude>;

  public static parse(
    json: IValueSetCompose,
    providedInstance: ValueSetCompose = new ValueSetCompose()
  ): ValueSetCompose {
    const newInstance: ValueSetCompose = BackboneElement.parse(json, providedInstance);
  
    if (json.lockedDate !== undefined) {
      newInstance.lockedDate = PrimitiveDate.parsePrimitive(json.lockedDate, json._lockedDate);
    }
    if (json.inactive !== undefined) {
      newInstance.inactive = PrimitiveBoolean.parsePrimitive(json.inactive, json._inactive);
    }
    if (json.include !== undefined) {
      newInstance.include = json.include.map((x) => ValueSetComposeInclude.parse(x));
    }
    if (json.exclude !== undefined) {
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

  public clone(): ValueSetCompose {
    return ValueSetCompose.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ValueSetCompose";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

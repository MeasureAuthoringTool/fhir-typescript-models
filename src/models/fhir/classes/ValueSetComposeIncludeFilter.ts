/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  FilterOperator,
  IValueSetComposeIncludeFilter,
  PrimitiveCode,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("ValueSetComposeIncludeFilter", "BackboneElement")
export class ValueSetComposeIncludeFilter extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ValueSet.Compose.Include.Filter";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveCode")
  public property?: PrimitiveCode;

  @FhirField("FilterOperator")
  public op?: FilterOperator;

  @FhirField("PrimitiveString")
  public value?: PrimitiveString;

  public static parse(
    json: IValueSetComposeIncludeFilter,
    providedInstance: ValueSetComposeIncludeFilter = new ValueSetComposeIncludeFilter()
  ): ValueSetComposeIncludeFilter {
    const newInstance: ValueSetComposeIncludeFilter = BackboneElement.parse(json, providedInstance);
  
    if (json.property !== undefined) {
      newInstance.property = PrimitiveCode.parsePrimitive(json.property, json._property);
    }
    if (json.op !== undefined) {
      newInstance.op = FilterOperator.parsePrimitive(json.op, json._op);
    }
    if (json.value !== undefined) {
      newInstance.value = PrimitiveString.parsePrimitive(json.value, json._value);
    }
    return newInstance;
  }

  public static isValueSetComposeIncludeFilter(input?: unknown): input is ValueSetComposeIncludeFilter {
    const castInput = input as ValueSetComposeIncludeFilter;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ValueSetComposeIncludeFilter";
  }

  public toJSON(): IValueSetComposeIncludeFilter {
    const result: IValueSetComposeIncludeFilter = super.toJSON();

    if (this.property) {
      result.property = this.property.value;
      result._property = Extension.serializePrimitiveExtension(this.property);
    }

    if (this.op) {
      result.op = this.op.value;
      result._op = Extension.serializePrimitiveExtension(this.op);
    }

    if (this.value) {
      result.value = this.value.value;
      result._value = Extension.serializePrimitiveExtension(this.value);
    }

    return result;
  }

  public clone(): ValueSetComposeIncludeFilter {
    return ValueSetComposeIncludeFilter.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ValueSetComposeIncludeFilter";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

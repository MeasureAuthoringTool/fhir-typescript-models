/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Duration,
  Element,
  Extension,
  FhirChoice,
  FhirField,
  IDataRequirementDateFilter,
  Period,
  PrimitiveDateTime,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("DataRequirementDateFilter", "Element")
export class DataRequirementDateFilter extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DataRequirement.DateFilter";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public path?: PrimitiveString;

  @FhirField("PrimitiveString")
  public searchParam?: PrimitiveString;

  @FhirChoice("PrimitiveDateTime", "Period", "Duration")
  public value?: PrimitiveDateTime | Period | Duration;

  public static parse(
    json: IDataRequirementDateFilter,
    providedInstance: DataRequirementDateFilter = new DataRequirementDateFilter()
  ): DataRequirementDateFilter {
    const newInstance: DataRequirementDateFilter = Element.parse(json, providedInstance);
  
    if (json.path !== undefined) {
      newInstance.path = PrimitiveString.parsePrimitive(json.path, json._path);
    }
    if (json.searchParam !== undefined) {
      newInstance.searchParam = PrimitiveString.parsePrimitive(json.searchParam, json._searchParam);
    }
    if (json.valueDateTime !== undefined) {
      newInstance.value = PrimitiveDateTime.parsePrimitive(json.valueDateTime, json._valueDateTime);
    }
    if (json.valuePeriod !== undefined) {
      newInstance.value = Period.parse(json.valuePeriod);
    }
    if (json.valueDuration !== undefined) {
      newInstance.value = Duration.parse(json.valueDuration);
    }
    return newInstance;
  }

  public static isDataRequirementDateFilter(input?: unknown): input is DataRequirementDateFilter {
    const castInput = input as DataRequirementDateFilter;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DataRequirementDateFilter";
  }

  public toJSON(): IDataRequirementDateFilter {
    const result: IDataRequirementDateFilter = super.toJSON();

    if (this.path) {
      result.path = this.path.value;
      result._path = Extension.serializePrimitiveExtension(this.path);
    }

    if (this.searchParam) {
      result.searchParam = this.searchParam.value;
      result._searchParam = Extension.serializePrimitiveExtension(this.searchParam);
    }

    if (this.value && PrimitiveDateTime.isPrimitiveDateTime(this.value)) {
      result.valueDateTime = this.value.value;
      result._valueDateTime = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && Period.isPeriod(this.value)) {
      result.valuePeriod = this.value.toJSON();
    }

    if (this.value && Duration.isDuration(this.value)) {
      result.valueDuration = this.value.toJSON();
    }

    return result;
  }

  public clone(): DataRequirementDateFilter {
    return DataRequirementDateFilter.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DataRequirementDateFilter";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

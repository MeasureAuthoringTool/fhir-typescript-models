/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Duration,
  Element,
  Extension,
  IDataRequirementDateFilter,
  Period,
  PrimitiveDateTime,
  PrimitiveString,
} from "../internal";

export class DataRequirementDateFilter extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DataRequirement.DateFilter";

  public path?: PrimitiveString;

  public searchParam?: PrimitiveString;

  public value?: PrimitiveDateTime | Period | Duration;

  public static parse(
    json: IDataRequirementDateFilter,
    providedInstance: DataRequirementDateFilter = new DataRequirementDateFilter()
  ): DataRequirementDateFilter {
    const newInstance: DataRequirementDateFilter = Element.parse(json, providedInstance);
  
    if (json.path) {
      newInstance.path = PrimitiveString.parsePrimitive(json.path, json._path);
    }
    if (json.searchParam) {
      newInstance.searchParam = PrimitiveString.parsePrimitive(json.searchParam, json._searchParam);
    }
    if (json.valueDateTime) {
      newInstance.value = PrimitiveDateTime.parsePrimitive(json.valueDateTime, json._valueDateTime);
    }
    if (json.valuePeriod) {
      newInstance.value = Period.parse(json.valuePeriod);
    }
    if (json.valueDuration) {
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
  
  public getTypeName(): string {
    return "DataRequirementDateFilter";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

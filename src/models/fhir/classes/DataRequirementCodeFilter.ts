/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Coding,
  Element,
  Extension,
  FhirField,
  FhirList,
  IDataRequirementCodeFilter,
  PrimitiveCanonical,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("DataRequirementCodeFilter", "Element")
export class DataRequirementCodeFilter extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DataRequirement.CodeFilter";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public path?: PrimitiveString;

  @FhirField("PrimitiveString")
  public searchParam?: PrimitiveString;

  @FhirField("PrimitiveCanonical")
  public valueSet?: PrimitiveCanonical;

  @FhirList("Coding")
  public code?: Array<Coding>;

  public static parse(
    json: IDataRequirementCodeFilter,
    providedInstance: DataRequirementCodeFilter = new DataRequirementCodeFilter()
  ): DataRequirementCodeFilter {
    const newInstance: DataRequirementCodeFilter = Element.parse(json, providedInstance);
  
    if (json.path !== undefined) {
      newInstance.path = PrimitiveString.parsePrimitive(json.path, json._path);
    }
    if (json.searchParam !== undefined) {
      newInstance.searchParam = PrimitiveString.parsePrimitive(json.searchParam, json._searchParam);
    }
    if (json.valueSet !== undefined) {
      newInstance.valueSet = PrimitiveCanonical.parsePrimitive(json.valueSet, json._valueSet);
    }
    if (json.code !== undefined) {
      newInstance.code = json.code.map((x) => Coding.parse(x));
    }
    return newInstance;
  }

  public static isDataRequirementCodeFilter(input?: unknown): input is DataRequirementCodeFilter {
    const castInput = input as DataRequirementCodeFilter;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DataRequirementCodeFilter";
  }

  public toJSON(): IDataRequirementCodeFilter {
    const result: IDataRequirementCodeFilter = super.toJSON();

    if (this.path) {
      result.path = this.path.value;
      result._path = Extension.serializePrimitiveExtension(this.path);
    }

    if (this.searchParam) {
      result.searchParam = this.searchParam.value;
      result._searchParam = Extension.serializePrimitiveExtension(this.searchParam);
    }

    if (this.valueSet) {
      result.valueSet = this.valueSet.value;
      result._valueSet = Extension.serializePrimitiveExtension(this.valueSet);
    }

    if (this.code) {
      result.code = this.code.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): DataRequirementCodeFilter {
    return DataRequirementCodeFilter.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DataRequirementCodeFilter";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

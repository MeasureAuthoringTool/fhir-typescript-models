/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Coding,
  Element,
  Extension,
  IDataRequirementCodeFilter,
  PrimitiveCanonical,
  PrimitiveString,
  FieldMetadata
} from "../internal";

export class DataRequirementCodeFilter extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DataRequirement.CodeFilter";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...Element.fieldInfo, {
      fieldName: "path",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "searchParam",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "valueSet",
      fieldType: [PrimitiveCanonical],
      isArray: false
    }, {
      fieldName: "code",
      fieldType: [Coding],
      isArray: true
    }];
  }

  public path?: PrimitiveString;

  public searchParam?: PrimitiveString;

  public valueSet?: PrimitiveCanonical;

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

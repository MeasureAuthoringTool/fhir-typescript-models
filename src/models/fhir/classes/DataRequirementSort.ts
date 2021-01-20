/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Element,
  Extension,
  FhirField,
  IDataRequirementSort,
  PrimitiveString,
  SortDirection,
  FhirType
} from "../internal";

@FhirType("DataRequirementSort", "Element")
export class DataRequirementSort extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DataRequirement.Sort";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public path?: PrimitiveString;

  @FhirField("SortDirection")
  public direction?: SortDirection;

  public static parse(
    json: IDataRequirementSort,
    providedInstance: DataRequirementSort = new DataRequirementSort()
  ): DataRequirementSort {
    const newInstance: DataRequirementSort = Element.parse(json, providedInstance);
  
    if (json.path !== undefined) {
      newInstance.path = PrimitiveString.parsePrimitive(json.path, json._path);
    }
    if (json.direction !== undefined) {
      newInstance.direction = SortDirection.parsePrimitive(json.direction, json._direction);
    }
    return newInstance;
  }

  public static isDataRequirementSort(input?: unknown): input is DataRequirementSort {
    const castInput = input as DataRequirementSort;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DataRequirementSort";
  }

  public toJSON(): IDataRequirementSort {
    const result: IDataRequirementSort = super.toJSON();

    if (this.path) {
      result.path = this.path.value;
      result._path = Extension.serializePrimitiveExtension(this.path);
    }

    if (this.direction) {
      result.direction = this.direction.value;
      result._direction = Extension.serializePrimitiveExtension(this.direction);
    }

    return result;
  }

  public clone(): DataRequirementSort {
    return DataRequirementSort.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DataRequirementSort";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  getFieldList,
  getTypeName,
  getParentTypeName,
  getFieldInfo,
  lookupType,
  FieldMetadata,
  IType,
  FhirType
} from "../internal";

@FhirType("Type")
export class Type {
  static readonly baseType: string = "";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Type";

  static readonly primaryCodePath: string | null = null;

  static get fieldList(): ReadonlyArray<string> {
    return getFieldList(this.prototype);
  }

  static get parentType(): typeof Type | null {
    const parentTypeName = getParentTypeName(this.prototype) || "";
    const parentTypeRef = lookupType(parentTypeName);
    return parentTypeRef || null;
  }

  get fhirTypeRef(): typeof Type {
    const typeName = getTypeName(this) || "";
    const typeRef = lookupType(typeName);
    if (!typeRef) {
      throw new Error("Cannot find name of FHIR type");
    }
    return typeRef;
  }

  static get fieldInfo(): ReadonlyArray<FieldMetadata> {
    const result = this.fieldList.map((fieldName) => {
      const fieldMetadata = getFieldInfo(this.prototype, fieldName);
      if (!fieldMetadata) {
        throw new Error(`Cannot find metadata for field ${fieldName}`);
      }
      return fieldMetadata;
    });
    return result;
  }

  get primaryCode(): Type | undefined {
    return undefined;
  }

  public static parse(
    json: IType,
    providedInstance: Type = new Type()
  ): Type {
    const newInstance: Type = providedInstance;
  
    return newInstance;
  }

  public static isType(input?: unknown): input is Type {
    const castInput = input as Type;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Type";
  }

  public toJSON(): IType {
    const result: IType = {};

    return result;
  }

  public clone(): Type {
    return Type.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Type";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

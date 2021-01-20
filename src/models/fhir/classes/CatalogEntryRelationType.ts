/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("CatalogEntryRelationType", "PrimitiveCode")
export class CatalogEntryRelationType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CatalogEntryRelationType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: CatalogEntryRelationType = new CatalogEntryRelationType()
  ): CatalogEntryRelationType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isCatalogEntryRelationType(input?: unknown): input is CatalogEntryRelationType {
    const castInput = input as CatalogEntryRelationType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CatalogEntryRelationType";
  }

  public clone(): CatalogEntryRelationType {
    const result = new CatalogEntryRelationType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "CatalogEntryRelationType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

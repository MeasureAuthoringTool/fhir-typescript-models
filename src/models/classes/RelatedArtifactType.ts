/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class RelatedArtifactType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "RelatedArtifactType";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: RelatedArtifactType = new RelatedArtifactType()
  ): RelatedArtifactType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isRelatedArtifactType(input?: unknown): input is RelatedArtifactType {
    const castInput = input as RelatedArtifactType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "RelatedArtifactType";
  }
  
  public getTypeName(): string {
    return "RelatedArtifactType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

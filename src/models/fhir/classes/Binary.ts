/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Extension,
  FhirField,
  IBinary,
  MimeType,
  PrimitiveBase64Binary,
  Reference,
  Resource,
  FhirType
} from "../internal";

@FhirType("Binary", "Resource")
export class Binary extends Resource {
  static readonly baseType: string = "FHIR.Resource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Binary";

  static readonly primaryCodePath: string | null = null;

  @FhirField("MimeType")
  public contentType?: MimeType;

  @FhirField("Reference")
  public securityContext?: Reference;

  @FhirField("PrimitiveBase64Binary")
  public data?: PrimitiveBase64Binary;

  public static parse(
    json: IBinary,
    providedInstance: Binary = new Binary()
  ): Binary {
    const newInstance: Binary = Resource.parse(json, providedInstance);
  
    if (json.contentType !== undefined) {
      newInstance.contentType = MimeType.parsePrimitive(json.contentType, json._contentType);
    }
    if (json.securityContext !== undefined) {
      newInstance.securityContext = Reference.parse(json.securityContext);
    }
    if (json.data !== undefined) {
      newInstance.data = PrimitiveBase64Binary.parsePrimitive(json.data, json._data);
    }
    return newInstance;
  }

  public static isBinary(input?: unknown): input is Binary {
    const castInput = input as Binary;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Binary";
  }

  public toJSON(): IBinary {
    const result: IBinary = super.toJSON();

    if (this.contentType) {
      result.contentType = this.contentType.value;
      result._contentType = Extension.serializePrimitiveExtension(this.contentType);
    }

    if (this.securityContext) {
      result.securityContext = this.securityContext.toJSON();
    }

    if (this.data) {
      result.data = this.data.value;
      result._data = Extension.serializePrimitiveExtension(this.data);
    }

    return result;
  }

  public clone(): Binary {
    return Binary.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Binary";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Extension,
  IBinary,
  MimeType,
  PrimitiveBase64Binary,
  Reference,
  Resource,
} from "../internal";

export class Binary extends Resource {
  static readonly baseType: string = "FHIR.Resource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Binary";

  public contentType?: MimeType;

  public securityContext?: Reference;

  public data?: PrimitiveBase64Binary;

  public static parse(
    json: IBinary,
    providedInstance: Binary = new Binary()
  ): Binary {
    const newInstance: Binary = Resource.parse(json, providedInstance);
  
    if (json.contentType) {
      newInstance.contentType = MimeType.parsePrimitive(json.contentType, json._contentType);
    }
    if (json.securityContext) {
      newInstance.securityContext = Reference.parse(json.securityContext);
    }
    if (json.data) {
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
  
  public getTypeName(): string {
    return "Binary";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

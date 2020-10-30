/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Element,
  Extension,
  IAttachment,
  MimeType,
  PrimitiveBase64Binary,
  PrimitiveCode,
  PrimitiveDateTime,
  PrimitiveString,
  PrimitiveUnsignedInt,
  PrimitiveUrl,
  FieldMetadata
} from "../internal";

export class Attachment extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Attachment";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...Element.fieldInfo, {
      fieldName: "contentType",
      fieldType: [MimeType],
      isArray: false
    }, {
      fieldName: "language",
      fieldType: [PrimitiveCode],
      isArray: false
    }, {
      fieldName: "data",
      fieldType: [PrimitiveBase64Binary],
      isArray: false
    }, {
      fieldName: "url",
      fieldType: [PrimitiveUrl],
      isArray: false
    }, {
      fieldName: "size",
      fieldType: [PrimitiveUnsignedInt],
      isArray: false
    }, {
      fieldName: "hash",
      fieldType: [PrimitiveBase64Binary],
      isArray: false
    }, {
      fieldName: "title",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "creation",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }];
  }

  public contentType?: MimeType;

  public language?: PrimitiveCode;

  public data?: PrimitiveBase64Binary;

  public url?: PrimitiveUrl;

  public size?: PrimitiveUnsignedInt;

  public hash?: PrimitiveBase64Binary;

  public title?: PrimitiveString;

  public creation?: PrimitiveDateTime;

  public static parse(
    json: IAttachment,
    providedInstance: Attachment = new Attachment()
  ): Attachment {
    const newInstance: Attachment = Element.parse(json, providedInstance);
  
    if (json.contentType !== undefined) {
      newInstance.contentType = MimeType.parsePrimitive(json.contentType, json._contentType);
    }
    if (json.language !== undefined) {
      newInstance.language = PrimitiveCode.parsePrimitive(json.language, json._language);
    }
    if (json.data !== undefined) {
      newInstance.data = PrimitiveBase64Binary.parsePrimitive(json.data, json._data);
    }
    if (json.url !== undefined) {
      newInstance.url = PrimitiveUrl.parsePrimitive(json.url, json._url);
    }
    if (json.size !== undefined) {
      newInstance.size = PrimitiveUnsignedInt.parsePrimitive(json.size, json._size);
    }
    if (json.hash !== undefined) {
      newInstance.hash = PrimitiveBase64Binary.parsePrimitive(json.hash, json._hash);
    }
    if (json.title !== undefined) {
      newInstance.title = PrimitiveString.parsePrimitive(json.title, json._title);
    }
    if (json.creation !== undefined) {
      newInstance.creation = PrimitiveDateTime.parsePrimitive(json.creation, json._creation);
    }
    return newInstance;
  }

  public static isAttachment(input?: unknown): input is Attachment {
    const castInput = input as Attachment;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Attachment";
  }

  public toJSON(): IAttachment {
    const result: IAttachment = super.toJSON();

    if (this.contentType) {
      result.contentType = this.contentType.value;
      result._contentType = Extension.serializePrimitiveExtension(this.contentType);
    }

    if (this.language) {
      result.language = this.language.value;
      result._language = Extension.serializePrimitiveExtension(this.language);
    }

    if (this.data) {
      result.data = this.data.value;
      result._data = Extension.serializePrimitiveExtension(this.data);
    }

    if (this.url) {
      result.url = this.url.value;
      result._url = Extension.serializePrimitiveExtension(this.url);
    }

    if (this.size) {
      result.size = this.size.value;
      result._size = Extension.serializePrimitiveExtension(this.size);
    }

    if (this.hash) {
      result.hash = this.hash.value;
      result._hash = Extension.serializePrimitiveExtension(this.hash);
    }

    if (this.title) {
      result.title = this.title.value;
      result._title = Extension.serializePrimitiveExtension(this.title);
    }

    if (this.creation) {
      result.creation = this.creation.value;
      result._creation = Extension.serializePrimitiveExtension(this.creation);
    }

    return result;
  }

  public clone(): Attachment {
    return Attachment.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Attachment";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

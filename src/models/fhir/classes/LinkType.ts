/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
  FieldMetadata
} from "../internal";

export class LinkType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "LinkType";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...PrimitiveCode.fieldInfo, 
    ];
  }

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: LinkType = new LinkType()
  ): LinkType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isLinkType(input?: unknown): input is LinkType {
    const castInput = input as LinkType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "LinkType";
  }

  public clone(): LinkType {
    const result = new LinkType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "LinkType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

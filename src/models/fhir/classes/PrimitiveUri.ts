/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Element,
  IElement,
  FieldMetadata
} from "../internal";

export class PrimitiveUri extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "uri";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...Element.fieldInfo, {
      fieldName: "value",
      fieldType: [String],
      isArray: false
    }];
  }

  public value?: string;

  public static parsePrimitive(
    value: string,
    extension?: IElement | null,
    providedInstance: PrimitiveUri = new PrimitiveUri()
  ): PrimitiveUri {
      let newInstance: PrimitiveUri;
  
      if (extension) {
        newInstance = Element.parse(extension, providedInstance);
      } else {
        newInstance = providedInstance;
      }
    
      newInstance.value = value;
      
      return newInstance;
  }

  public static isPrimitiveUri(input?: unknown): input is PrimitiveUri {
    const castInput = input as PrimitiveUri;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PrimitiveUri";
  }

  public clone(): PrimitiveUri {
    const result = new PrimitiveUri();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "PrimitiveUri";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

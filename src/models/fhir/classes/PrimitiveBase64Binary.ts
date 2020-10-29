/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Element,
  IElement,
  FieldMetadata
} from "../internal";

export class PrimitiveBase64Binary extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "base64Binary";
  
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
    providedInstance: PrimitiveBase64Binary = new PrimitiveBase64Binary()
  ): PrimitiveBase64Binary {
      let newInstance: PrimitiveBase64Binary;
  
      if (extension) {
        newInstance = Element.parse(extension, providedInstance);
      } else {
        newInstance = providedInstance;
      }
    
      newInstance.value = value;
      
      return newInstance;
  }

  public static isPrimitiveBase64Binary(input?: unknown): input is PrimitiveBase64Binary {
    const castInput = input as PrimitiveBase64Binary;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PrimitiveBase64Binary";
  }

  public clone(): PrimitiveBase64Binary {
    const result = new PrimitiveBase64Binary();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "PrimitiveBase64Binary";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Element,
  IElement,
  FieldMetadata
} from "../internal";

export class PrimitiveInstant extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "instant";
  
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
    providedInstance: PrimitiveInstant = new PrimitiveInstant()
  ): PrimitiveInstant {
      let newInstance: PrimitiveInstant;
  
      if (extension) {
        newInstance = Element.parse(extension, providedInstance);
      } else {
        newInstance = providedInstance;
      }
    
      newInstance.value = value;
      
      return newInstance;
  }

  public static isPrimitiveInstant(input?: unknown): input is PrimitiveInstant {
    const castInput = input as PrimitiveInstant;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PrimitiveInstant";
  }

  public clone(): PrimitiveInstant {
    const result = new PrimitiveInstant();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "PrimitiveInstant";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

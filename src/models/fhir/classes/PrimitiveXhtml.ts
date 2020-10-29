/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Element,
  IElement,
  FieldMetadata
} from "../internal";

export class PrimitiveXhtml extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "xhtml";
  
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
    providedInstance: PrimitiveXhtml = new PrimitiveXhtml()
  ): PrimitiveXhtml {
      let newInstance: PrimitiveXhtml;
  
      if (extension) {
        newInstance = Element.parse(extension, providedInstance);
      } else {
        newInstance = providedInstance;
      }
    
      newInstance.value = value;
      
      return newInstance;
  }

  public static isPrimitiveXhtml(input?: unknown): input is PrimitiveXhtml {
    const castInput = input as PrimitiveXhtml;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PrimitiveXhtml";
  }

  public clone(): PrimitiveXhtml {
    const result = new PrimitiveXhtml();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "PrimitiveXhtml";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

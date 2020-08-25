/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Element,
  IElement,
} from "../internal";

export class PrimitiveString extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "string";

  public value?: string;

  public static parsePrimitive(
    value: string,
    extension?: IElement | null,
    providedInstance: PrimitiveString = new PrimitiveString()
  ): PrimitiveString {
      let newInstance: PrimitiveString;
  
      if (extension) {
        newInstance = Element.parse(extension);
      } else {
        newInstance = providedInstance;
      }
    
      newInstance.value = value;
      
      return newInstance;
  }

  public static isPrimitiveString(input?: unknown): input is PrimitiveString {
    const castInput = input as PrimitiveString;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PrimitiveString";
  }
  
  public getTypeName(): string {
    return "PrimitiveString";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

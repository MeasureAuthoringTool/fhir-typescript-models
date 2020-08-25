/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Element,
  IElement,
} from "../internal";

export class PrimitiveTime extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "time";

  public value?: string;

  public static parsePrimitive(
    value: string,
    extension?: IElement | null,
    providedInstance: PrimitiveTime = new PrimitiveTime()
  ): PrimitiveTime {
      let newInstance: PrimitiveTime;
  
      if (extension) {
        newInstance = Element.parse(extension);
      } else {
        newInstance = providedInstance;
      }
    
      newInstance.value = value;
      
      return newInstance;
  }

  public static isPrimitiveTime(input?: unknown): input is PrimitiveTime {
    const castInput = input as PrimitiveTime;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PrimitiveTime";
  }
  
  public getTypeName(): string {
    return "PrimitiveTime";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

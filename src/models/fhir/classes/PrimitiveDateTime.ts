/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Element,
  IElement,
} from "../internal";

export class PrimitiveDateTime extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "dateTime";

  public value?: string;

  public static parsePrimitive(
    value: string,
    extension?: IElement | null,
    providedInstance: PrimitiveDateTime = new PrimitiveDateTime()
  ): PrimitiveDateTime {
      let newInstance: PrimitiveDateTime;
  
      if (extension) {
        newInstance = Element.parse(extension, providedInstance);
      } else {
        newInstance = providedInstance;
      }
    
      newInstance.value = value;
      
      return newInstance;
  }

  public static isPrimitiveDateTime(input?: unknown): input is PrimitiveDateTime {
    const castInput = input as PrimitiveDateTime;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PrimitiveDateTime";
  }

  public clone(): PrimitiveDateTime {
    const result = new PrimitiveDateTime();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "PrimitiveDateTime";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

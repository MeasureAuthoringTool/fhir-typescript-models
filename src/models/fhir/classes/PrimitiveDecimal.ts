/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Element,
  IElement,
} from "../internal";

export class PrimitiveDecimal extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "decimal";
  
  static readonly primaryCodePath: string | null = null;

  public value?: number;

  public static parsePrimitive(
    value: number,
    extension?: IElement | null,
    providedInstance: PrimitiveDecimal = new PrimitiveDecimal()
  ): PrimitiveDecimal {
      let newInstance: PrimitiveDecimal;
  
      if (extension) {
        newInstance = Element.parse(extension, providedInstance);
      } else {
        newInstance = providedInstance;
      }
    
      newInstance.value = value;
      
      return newInstance;
  }

  public static isPrimitiveDecimal(input?: unknown): input is PrimitiveDecimal {
    const castInput = input as PrimitiveDecimal;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PrimitiveDecimal";
  }

  public clone(): PrimitiveDecimal {
    const result = new PrimitiveDecimal();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "PrimitiveDecimal";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

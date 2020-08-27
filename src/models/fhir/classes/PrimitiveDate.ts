/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Element,
  IElement,
} from "../internal";

export class PrimitiveDate extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "date";

  public value?: string;

  public static parsePrimitive(
    value: string,
    extension?: IElement | null,
    providedInstance: PrimitiveDate = new PrimitiveDate()
  ): PrimitiveDate {
      let newInstance: PrimitiveDate;
  
      if (extension) {
        newInstance = Element.parse(extension, providedInstance);
      } else {
        newInstance = providedInstance;
      }
    
      newInstance.value = value;
      
      return newInstance;
  }

  public static isPrimitiveDate(input?: unknown): input is PrimitiveDate {
    const castInput = input as PrimitiveDate;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PrimitiveDate";
  }

  public clone(): PrimitiveDate {
    const result = new PrimitiveDate();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "PrimitiveDate";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

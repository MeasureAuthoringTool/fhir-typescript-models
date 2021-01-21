/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Element,
  FhirField,
  IElement,
  FhirType
} from "../internal";

@FhirType("PrimitiveString", "Element")
export class PrimitiveString extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "string";

  static readonly primaryCodePath: string | null = null;

  @FhirField("SystemString")
  public value?: string;

  public static parsePrimitive(
    value: string,
    extension?: IElement | null,
    providedInstance: PrimitiveString = new PrimitiveString()
  ): PrimitiveString {
      let newInstance: PrimitiveString;
  
      if (extension) {
        newInstance = Element.parse(extension, providedInstance);
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

  public clone(): PrimitiveString {
    const result = new PrimitiveString();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "PrimitiveString";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Element,
  FhirField,
  IElement,
  FhirType
} from "../internal";

@FhirType("PrimitiveBoolean", "Element")
export class PrimitiveBoolean extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "boolean";

  static readonly primaryCodePath: string | null = null;

  @FhirField("SystemBoolean")
  public value?: boolean;

  public static parsePrimitive(
    value: boolean,
    extension?: IElement | null,
    providedInstance: PrimitiveBoolean = new PrimitiveBoolean()
  ): PrimitiveBoolean {
      let newInstance: PrimitiveBoolean;
  
      if (extension) {
        newInstance = Element.parse(extension, providedInstance);
      } else {
        newInstance = providedInstance;
      }
    
      newInstance.value = value;
      
      return newInstance;
  }

  public static isPrimitiveBoolean(input?: unknown): input is PrimitiveBoolean {
    const castInput = input as PrimitiveBoolean;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PrimitiveBoolean";
  }

  public clone(): PrimitiveBoolean {
    const result = new PrimitiveBoolean();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "PrimitiveBoolean";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Element,
  FhirField,
  IElement,
  FhirType
} from "../internal";

@FhirType("PrimitiveTime", "Element")
export class PrimitiveTime extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "time";

  static readonly primaryCodePath: string | null = null;

  @FhirField("SystemString")
  public value?: string;

  public static parsePrimitive(
    value: string,
    extension?: IElement | null,
    providedInstance: PrimitiveTime = new PrimitiveTime()
  ): PrimitiveTime {
      let newInstance: PrimitiveTime;
  
      if (extension) {
        newInstance = Element.parse(extension, providedInstance);
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

  public clone(): PrimitiveTime {
    const result = new PrimitiveTime();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "PrimitiveTime";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

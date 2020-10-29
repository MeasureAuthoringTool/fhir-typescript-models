/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
  FieldMetadata
} from "../internal";

export class CompartmentCode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CompartmentCode";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...PrimitiveCode.fieldInfo, 
    ];
  }

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: CompartmentCode = new CompartmentCode()
  ): CompartmentCode {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isCompartmentCode(input?: unknown): input is CompartmentCode {
    const castInput = input as CompartmentCode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CompartmentCode";
  }

  public clone(): CompartmentCode {
    const result = new CompartmentCode();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "CompartmentCode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

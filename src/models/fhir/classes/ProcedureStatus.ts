/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
  FieldMetadata
} from "../internal";

export class ProcedureStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ProcedureStatus";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...PrimitiveCode.fieldInfo, 
    ];
  }

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ProcedureStatus = new ProcedureStatus()
  ): ProcedureStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isProcedureStatus(input?: unknown): input is ProcedureStatus {
    const castInput = input as ProcedureStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ProcedureStatus";
  }

  public clone(): ProcedureStatus {
    const result = new ProcedureStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ProcedureStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

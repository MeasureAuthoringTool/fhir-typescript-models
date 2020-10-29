/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
  FieldMetadata
} from "../internal";

export class DeviceUseStatementStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DeviceUseStatementStatus";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...PrimitiveCode.fieldInfo, 
    ];
  }

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: DeviceUseStatementStatus = new DeviceUseStatementStatus()
  ): DeviceUseStatementStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isDeviceUseStatementStatus(input?: unknown): input is DeviceUseStatementStatus {
    const castInput = input as DeviceUseStatementStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DeviceUseStatementStatus";
  }

  public clone(): DeviceUseStatementStatus {
    const result = new DeviceUseStatementStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "DeviceUseStatementStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

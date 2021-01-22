/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("RemittanceOutcome", "PrimitiveCode")
export class RemittanceOutcome extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "RemittanceOutcome";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: RemittanceOutcome = new RemittanceOutcome()
  ): RemittanceOutcome {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isRemittanceOutcome(input?: unknown): input is RemittanceOutcome {
    const castInput = input as RemittanceOutcome;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "RemittanceOutcome";
  }

  public clone(): RemittanceOutcome {
    const result = new RemittanceOutcome();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "RemittanceOutcome";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

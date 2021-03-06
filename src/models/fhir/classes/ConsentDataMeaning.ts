/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ConsentDataMeaning", "PrimitiveCode")
export class ConsentDataMeaning extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ConsentDataMeaning";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ConsentDataMeaning = new ConsentDataMeaning()
  ): ConsentDataMeaning {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isConsentDataMeaning(input?: unknown): input is ConsentDataMeaning {
    const castInput = input as ConsentDataMeaning;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ConsentDataMeaning";
  }

  public clone(): ConsentDataMeaning {
    const result = new ConsentDataMeaning();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ConsentDataMeaning";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

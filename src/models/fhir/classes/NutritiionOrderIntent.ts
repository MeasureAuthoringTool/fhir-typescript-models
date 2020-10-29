/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
  FieldMetadata
} from "../internal";

export class NutritiionOrderIntent extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "NutritiionOrderIntent";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...PrimitiveCode.fieldInfo, 
    ];
  }

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: NutritiionOrderIntent = new NutritiionOrderIntent()
  ): NutritiionOrderIntent {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isNutritiionOrderIntent(input?: unknown): input is NutritiionOrderIntent {
    const castInput = input as NutritiionOrderIntent;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "NutritiionOrderIntent";
  }

  public clone(): NutritiionOrderIntent {
    const result = new NutritiionOrderIntent();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "NutritiionOrderIntent";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Extension,
  ISimpleQuantity,
  PrimitiveCode,
  PrimitiveDecimal,
  PrimitiveString,
  PrimitiveUri,
  Quantity,
  FieldMetadata
} from "../internal";

export class SimpleQuantity extends Quantity {
  static readonly baseType: string = "FHIR.Quantity";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SimpleQuantity";
  
  static readonly primaryCodePath: string | null = "code";

  static get fieldInfo(): Array<FieldMetadata> {
    return [...Quantity.fieldInfo, {
      fieldName: "value",
      fieldType: [PrimitiveDecimal],
      isArray: false
    }, {
      fieldName: "unit",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "system",
      fieldType: [PrimitiveUri],
      isArray: false
    }, {
      fieldName: "code",
      fieldType: [PrimitiveCode],
      isArray: false
    }];
  }

  public value?: PrimitiveDecimal;

  public unit?: PrimitiveString;

  public system?: PrimitiveUri;

  public code?: PrimitiveCode;

  get primaryCode(): PrimitiveCode | undefined {
    return this?.code;
  }

  set primaryCode(primaryCode: PrimitiveCode | undefined) {
    this.code = primaryCode;
  }

  public static parse(
    json: ISimpleQuantity,
    providedInstance: SimpleQuantity = new SimpleQuantity()
  ): SimpleQuantity {
    const newInstance: SimpleQuantity = Quantity.parse(json, providedInstance);
  
    if (json.value !== undefined) {
      newInstance.value = PrimitiveDecimal.parsePrimitive(json.value, json._value);
    }
    if (json.unit !== undefined) {
      newInstance.unit = PrimitiveString.parsePrimitive(json.unit, json._unit);
    }
    if (json.system !== undefined) {
      newInstance.system = PrimitiveUri.parsePrimitive(json.system, json._system);
    }
    if (json.code !== undefined) {
      newInstance.code = PrimitiveCode.parsePrimitive(json.code, json._code);
    }
    return newInstance;
  }

  public static isSimpleQuantity(input?: unknown): input is SimpleQuantity {
    const castInput = input as SimpleQuantity;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SimpleQuantity";
  }

  public toJSON(): ISimpleQuantity {
    const result: ISimpleQuantity = super.toJSON();

    if (this.value) {
      result.value = this.value.value;
      result._value = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.unit) {
      result.unit = this.unit.value;
      result._unit = Extension.serializePrimitiveExtension(this.unit);
    }

    if (this.system) {
      result.system = this.system.value;
      result._system = Extension.serializePrimitiveExtension(this.system);
    }

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    return result;
  }

  public clone(): SimpleQuantity {
    return SimpleQuantity.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SimpleQuantity";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

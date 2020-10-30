/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Extension,
  IMoneyQuantity,
  PrimitiveCode,
  PrimitiveDecimal,
  PrimitiveString,
  PrimitiveUri,
  Quantity,
  QuantityComparator,
  FieldMetadata
} from "../internal";

export class MoneyQuantity extends Quantity {
  static readonly baseType: string = "FHIR.Quantity";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MoneyQuantity";
  
  static readonly primaryCodePath: string | null = "code";

  static get fieldInfo(): Array<FieldMetadata> {
    return [...Quantity.fieldInfo, {
      fieldName: "value",
      fieldType: [PrimitiveDecimal],
      isArray: false
    }, {
      fieldName: "comparator",
      fieldType: [QuantityComparator],
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

  public comparator?: QuantityComparator;

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
    json: IMoneyQuantity,
    providedInstance: MoneyQuantity = new MoneyQuantity()
  ): MoneyQuantity {
    const newInstance: MoneyQuantity = Quantity.parse(json, providedInstance);
  
    if (json.value !== undefined) {
      newInstance.value = PrimitiveDecimal.parsePrimitive(json.value, json._value);
    }
    if (json.comparator !== undefined) {
      newInstance.comparator = QuantityComparator.parsePrimitive(json.comparator, json._comparator);
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

  public static isMoneyQuantity(input?: unknown): input is MoneyQuantity {
    const castInput = input as MoneyQuantity;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MoneyQuantity";
  }

  public toJSON(): IMoneyQuantity {
    const result: IMoneyQuantity = super.toJSON();

    if (this.value) {
      result.value = this.value.value;
      result._value = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.comparator) {
      result.comparator = this.comparator.value;
      result._comparator = Extension.serializePrimitiveExtension(this.comparator);
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

  public clone(): MoneyQuantity {
    return MoneyQuantity.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MoneyQuantity";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IGroupCharacteristic,
  Period,
  PrimitiveBoolean,
  Quantity,
  Range,
  Reference,
  FieldMetadata
} from "../internal";

export class GroupCharacteristic extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Group.Characteristic";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "code",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "value",
      fieldType: [CodeableConcept, PrimitiveBoolean, Quantity, Range, Reference],
      isArray: false
    }, {
      fieldName: "exclude",
      fieldType: [PrimitiveBoolean],
      isArray: false
    }, {
      fieldName: "period",
      fieldType: [Period],
      isArray: false
    }];
  }

  public code?: CodeableConcept;

  public value?: CodeableConcept | PrimitiveBoolean | Quantity | Range | Reference;

  public exclude?: PrimitiveBoolean;

  public period?: Period;

  public static parse(
    json: IGroupCharacteristic,
    providedInstance: GroupCharacteristic = new GroupCharacteristic()
  ): GroupCharacteristic {
    const newInstance: GroupCharacteristic = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.valueCodeableConcept !== undefined) {
      newInstance.value = CodeableConcept.parse(json.valueCodeableConcept);
    }
    if (json.valueBoolean !== undefined) {
      newInstance.value = PrimitiveBoolean.parsePrimitive(json.valueBoolean, json._valueBoolean);
    }
    if (json.valueQuantity !== undefined) {
      newInstance.value = Quantity.parse(json.valueQuantity);
    }
    if (json.valueRange !== undefined) {
      newInstance.value = Range.parse(json.valueRange);
    }
    if (json.valueReference !== undefined) {
      newInstance.value = Reference.parse(json.valueReference);
    }
    if (json.exclude !== undefined) {
      newInstance.exclude = PrimitiveBoolean.parsePrimitive(json.exclude, json._exclude);
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    return newInstance;
  }

  public static isGroupCharacteristic(input?: unknown): input is GroupCharacteristic {
    const castInput = input as GroupCharacteristic;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "GroupCharacteristic";
  }

  public toJSON(): IGroupCharacteristic {
    const result: IGroupCharacteristic = super.toJSON();

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.value && CodeableConcept.isCodeableConcept(this.value)) {
      result.valueCodeableConcept = this.value.toJSON();
    }

    if (this.value && PrimitiveBoolean.isPrimitiveBoolean(this.value)) {
      result.valueBoolean = this.value.value;
      result._valueBoolean = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && Quantity.isQuantity(this.value)) {
      result.valueQuantity = this.value.toJSON();
    }

    if (this.value && Range.isRange(this.value)) {
      result.valueRange = this.value.toJSON();
    }

    if (this.value && Reference.isReference(this.value)) {
      result.valueReference = this.value.toJSON();
    }

    if (this.exclude) {
      result.exclude = this.exclude.value;
      result._exclude = Extension.serializePrimitiveExtension(this.exclude);
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    return result;
  }

  public clone(): GroupCharacteristic {
    return GroupCharacteristic.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "GroupCharacteristic";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

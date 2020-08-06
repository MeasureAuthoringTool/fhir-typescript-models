/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  DataRequirement,
  Element,
  Expression,
  Extension,
  ITriggerDefinition,
  PrimitiveDate,
  PrimitiveDateTime,
  PrimitiveString,
  Reference,
  Timing,
  TriggerType,
} from "../internal";

export class TriggerDefinition extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TriggerDefinition";

  public type?: TriggerType;

  public name?: PrimitiveString;

  public timing?: Timing | Reference | PrimitiveDate | PrimitiveDateTime;

  public data?: Array<DataRequirement>;

  public condition?: Expression;

  public static parse(
    json: ITriggerDefinition,
    providedInstance: TriggerDefinition = new TriggerDefinition()
  ): TriggerDefinition {
    const newInstance: TriggerDefinition = Element.parse(json, providedInstance);
  
    if (json.type) {
      newInstance.type = TriggerType.parsePrimitive(json.type, json._type);
    }
    if (json.name) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.timingTiming) {
      newInstance.timing = Timing.parse(json.timingTiming);
    }
    if (json.timingReference) {
      newInstance.timing = Reference.parse(json.timingReference);
    }
    if (json.timingDate) {
      newInstance.timing = PrimitiveDate.parsePrimitive(json.timingDate, json._timingDate);
    }
    if (json.timingDateTime) {
      newInstance.timing = PrimitiveDateTime.parsePrimitive(json.timingDateTime, json._timingDateTime);
    }
    if (json.data) {
      newInstance.data = json.data.map((x) => DataRequirement.parse(x));
    }
    if (json.condition) {
      newInstance.condition = Expression.parse(json.condition);
    }
    return newInstance;
  }

  public static isTriggerDefinition(input?: unknown): input is TriggerDefinition {
    const castInput = input as TriggerDefinition;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TriggerDefinition";
  }

  public toJSON(): ITriggerDefinition {
    const result: ITriggerDefinition = super.toJSON();

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.timing && Timing.isTiming(this.timing)) {
      result.timingTiming = this.timing.toJSON();
    }

    if (this.timing && Reference.isReference(this.timing)) {
      result.timingReference = this.timing.toJSON();
    }

    if (this.timing && PrimitiveDate.isPrimitiveDate(this.timing)) {
      result.timingDate = this.timing.value;
      result._timingDate = Extension.serializePrimitiveExtension(this.timing);
    }

    if (this.timing && PrimitiveDateTime.isPrimitiveDateTime(this.timing)) {
      result.timingDateTime = this.timing.value;
      result._timingDateTime = Extension.serializePrimitiveExtension(this.timing);
    }

    if (this.data) {
      result.data = this.data.map((x) => x.toJSON());
    }

    if (this.condition) {
      result.condition = this.condition.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "TriggerDefinition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

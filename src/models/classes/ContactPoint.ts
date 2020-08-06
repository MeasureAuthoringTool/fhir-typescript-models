/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  ContactPointSystem,
  ContactPointUse,
  Element,
  Extension,
  IContactPoint,
  Period,
  PrimitivePositiveInt,
  PrimitiveString,
} from "../internal";

export class ContactPoint extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ContactPoint";

  public system?: ContactPointSystem;

  public value?: PrimitiveString;

  public use?: ContactPointUse;

  public rank?: PrimitivePositiveInt;

  public period?: Period;

  public static parse(
    json: IContactPoint,
    providedInstance: ContactPoint = new ContactPoint()
  ): ContactPoint {
    const newInstance: ContactPoint = Element.parse(json, providedInstance);
  
    if (json.system) {
      newInstance.system = ContactPointSystem.parsePrimitive(json.system, json._system);
    }
    if (json.value) {
      newInstance.value = PrimitiveString.parsePrimitive(json.value, json._value);
    }
    if (json.use) {
      newInstance.use = ContactPointUse.parsePrimitive(json.use, json._use);
    }
    if (json.rank) {
      newInstance.rank = PrimitivePositiveInt.parsePrimitive(json.rank, json._rank);
    }
    if (json.period) {
      newInstance.period = Period.parse(json.period);
    }
    return newInstance;
  }

  public static isContactPoint(input?: unknown): input is ContactPoint {
    const castInput = input as ContactPoint;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ContactPoint";
  }

  public toJSON(): IContactPoint {
    const result: IContactPoint = super.toJSON();

    if (this.system) {
      result.system = this.system.value;
      result._system = Extension.serializePrimitiveExtension(this.system);
    }

    if (this.value) {
      result.value = this.value.value;
      result._value = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.use) {
      result.use = this.use.value;
      result._use = Extension.serializePrimitiveExtension(this.use);
    }

    if (this.rank) {
      result.rank = this.rank.value;
      result._rank = Extension.serializePrimitiveExtension(this.rank);
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ContactPoint";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

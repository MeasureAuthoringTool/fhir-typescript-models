/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  ContactPointSystem,
  ContactPointUse,
  Element,
  Extension,
  FhirField,
  IContactPoint,
  Period,
  PrimitivePositiveInt,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("ContactPoint", "Element")
export class ContactPoint extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ContactPoint";

  static readonly primaryCodePath: string | null = null;

  @FhirField("ContactPointSystem")
  public system?: ContactPointSystem;

  @FhirField("PrimitiveString")
  public value?: PrimitiveString;

  @FhirField("ContactPointUse")
  public use?: ContactPointUse;

  @FhirField("PrimitivePositiveInt")
  public rank?: PrimitivePositiveInt;

  @FhirField("Period")
  public period?: Period;

  public static parse(
    json: IContactPoint,
    providedInstance: ContactPoint = new ContactPoint()
  ): ContactPoint {
    const newInstance: ContactPoint = Element.parse(json, providedInstance);
  
    if (json.system !== undefined) {
      newInstance.system = ContactPointSystem.parsePrimitive(json.system, json._system);
    }
    if (json.value !== undefined) {
      newInstance.value = PrimitiveString.parsePrimitive(json.value, json._value);
    }
    if (json.use !== undefined) {
      newInstance.use = ContactPointUse.parsePrimitive(json.use, json._use);
    }
    if (json.rank !== undefined) {
      newInstance.rank = PrimitivePositiveInt.parsePrimitive(json.rank, json._rank);
    }
    if (json.period !== undefined) {
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

  public clone(): ContactPoint {
    return ContactPoint.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ContactPoint";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

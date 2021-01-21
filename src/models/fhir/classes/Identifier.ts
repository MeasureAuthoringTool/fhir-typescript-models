/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  Element,
  Extension,
  FhirField,
  IdentifierUse,
  IIdentifier,
  Period,
  PrimitiveString,
  PrimitiveUri,
  Reference,
  FhirType
} from "../internal";

@FhirType("Identifier", "Element")
export class Identifier extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Identifier";

  static readonly primaryCodePath: string | null = null;

  @FhirField("IdentifierUse")
  public use?: IdentifierUse;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("PrimitiveUri")
  public system?: PrimitiveUri;

  @FhirField("PrimitiveString")
  public value?: PrimitiveString;

  @FhirField("Period")
  public period?: Period;

  @FhirField("Reference")
  public assigner?: Reference;

  public static parse(
    json: IIdentifier,
    providedInstance: Identifier = new Identifier()
  ): Identifier {
    const newInstance: Identifier = Element.parse(json, providedInstance);
  
    if (json.use !== undefined) {
      newInstance.use = IdentifierUse.parsePrimitive(json.use, json._use);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.system !== undefined) {
      newInstance.system = PrimitiveUri.parsePrimitive(json.system, json._system);
    }
    if (json.value !== undefined) {
      newInstance.value = PrimitiveString.parsePrimitive(json.value, json._value);
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.assigner !== undefined) {
      newInstance.assigner = Reference.parse(json.assigner);
    }
    return newInstance;
  }

  public static isIdentifier(input?: unknown): input is Identifier {
    const castInput = input as Identifier;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Identifier";
  }

  public toJSON(): IIdentifier {
    const result: IIdentifier = super.toJSON();

    if (this.use) {
      result.use = this.use.value;
      result._use = Extension.serializePrimitiveExtension(this.use);
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.system) {
      result.system = this.system.value;
      result._system = Extension.serializePrimitiveExtension(this.system);
    }

    if (this.value) {
      result.value = this.value.value;
      result._value = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    if (this.assigner) {
      result.assigner = this.assigner.toJSON();
    }

    return result;
  }

  public clone(): Identifier {
    return Identifier.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Identifier";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

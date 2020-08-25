/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  Element,
  Extension,
  IdentifierUse,
  IIdentifier,
  Period,
  PrimitiveString,
  PrimitiveUri,
  Reference,
} from "../internal";

export class Identifier extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Identifier";

  public use?: IdentifierUse;

  public type?: CodeableConcept;

  public system?: PrimitiveUri;

  public value?: PrimitiveString;

  public period?: Period;

  public assigner?: Reference;

  public static parse(
    json: IIdentifier,
    providedInstance: Identifier = new Identifier()
  ): Identifier {
    const newInstance: Identifier = Element.parse(json, providedInstance);
  
    if (json.use) {
      newInstance.use = IdentifierUse.parsePrimitive(json.use, json._use);
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.system) {
      newInstance.system = PrimitiveUri.parsePrimitive(json.system, json._system);
    }
    if (json.value) {
      newInstance.value = PrimitiveString.parsePrimitive(json.value, json._value);
    }
    if (json.period) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.assigner) {
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
  
  public getTypeName(): string {
    return "Identifier";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

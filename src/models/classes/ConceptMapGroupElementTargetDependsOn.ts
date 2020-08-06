/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IConceptMapGroupElementTargetDependsOn,
  PrimitiveCanonical,
  PrimitiveString,
  PrimitiveUri,
} from "../internal";

export class ConceptMapGroupElementTargetDependsOn extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ConceptMap.Group.Element.Target.DependsOn";

  public property?: PrimitiveUri;

  public system?: PrimitiveCanonical;

  public value?: PrimitiveString;

  public display?: PrimitiveString;

  public static parse(
    json: IConceptMapGroupElementTargetDependsOn,
    providedInstance: ConceptMapGroupElementTargetDependsOn = new ConceptMapGroupElementTargetDependsOn()
  ): ConceptMapGroupElementTargetDependsOn {
    const newInstance: ConceptMapGroupElementTargetDependsOn = BackboneElement.parse(json, providedInstance);
  
    if (json.property) {
      newInstance.property = PrimitiveUri.parsePrimitive(json.property, json._property);
    }
    if (json.system) {
      newInstance.system = PrimitiveCanonical.parsePrimitive(json.system, json._system);
    }
    if (json.value) {
      newInstance.value = PrimitiveString.parsePrimitive(json.value, json._value);
    }
    if (json.display) {
      newInstance.display = PrimitiveString.parsePrimitive(json.display, json._display);
    }
    return newInstance;
  }

  public static isConceptMapGroupElementTargetDependsOn(input?: unknown): input is ConceptMapGroupElementTargetDependsOn {
    const castInput = input as ConceptMapGroupElementTargetDependsOn;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ConceptMapGroupElementTargetDependsOn";
  }

  public toJSON(): IConceptMapGroupElementTargetDependsOn {
    const result: IConceptMapGroupElementTargetDependsOn = super.toJSON();

    if (this.property) {
      result.property = this.property.value;
      result._property = Extension.serializePrimitiveExtension(this.property);
    }

    if (this.system) {
      result.system = this.system.value;
      result._system = Extension.serializePrimitiveExtension(this.system);
    }

    if (this.value) {
      result.value = this.value.value;
      result._value = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.display) {
      result.display = this.display.value;
      result._display = Extension.serializePrimitiveExtension(this.display);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ConceptMapGroupElementTargetDependsOn";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

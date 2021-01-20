/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IConceptMapGroupElementTargetDependsOn,
  PrimitiveCanonical,
  PrimitiveString,
  PrimitiveUri,
  FhirType
} from "../internal";

@FhirType("ConceptMapGroupElementTargetDependsOn", "BackboneElement")
export class ConceptMapGroupElementTargetDependsOn extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ConceptMap.Group.Element.Target.DependsOn";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveUri")
  public property?: PrimitiveUri;

  @FhirField("PrimitiveCanonical")
  public system?: PrimitiveCanonical;

  @FhirField("PrimitiveString")
  public value?: PrimitiveString;

  @FhirField("PrimitiveString")
  public display?: PrimitiveString;

  public static parse(
    json: IConceptMapGroupElementTargetDependsOn,
    providedInstance: ConceptMapGroupElementTargetDependsOn = new ConceptMapGroupElementTargetDependsOn()
  ): ConceptMapGroupElementTargetDependsOn {
    const newInstance: ConceptMapGroupElementTargetDependsOn = BackboneElement.parse(json, providedInstance);
  
    if (json.property !== undefined) {
      newInstance.property = PrimitiveUri.parsePrimitive(json.property, json._property);
    }
    if (json.system !== undefined) {
      newInstance.system = PrimitiveCanonical.parsePrimitive(json.system, json._system);
    }
    if (json.value !== undefined) {
      newInstance.value = PrimitiveString.parsePrimitive(json.value, json._value);
    }
    if (json.display !== undefined) {
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

  public clone(): ConceptMapGroupElementTargetDependsOn {
    return ConceptMapGroupElementTargetDependsOn.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ConceptMapGroupElementTargetDependsOn";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

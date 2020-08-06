/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  ICoverageClass,
  PrimitiveString,
} from "../internal";

export class CoverageClass extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Coverage.Class";

  public type?: CodeableConcept;

  public value?: PrimitiveString;

  public name?: PrimitiveString;

  public static parse(
    json: ICoverageClass,
    providedInstance: CoverageClass = new CoverageClass()
  ): CoverageClass {
    const newInstance: CoverageClass = BackboneElement.parse(json, providedInstance);
  
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.value) {
      newInstance.value = PrimitiveString.parsePrimitive(json.value, json._value);
    }
    if (json.name) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    return newInstance;
  }

  public static isCoverageClass(input?: unknown): input is CoverageClass {
    const castInput = input as CoverageClass;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CoverageClass";
  }

  public toJSON(): ICoverageClass {
    const result: ICoverageClass = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.value) {
      result.value = this.value.value;
      result._value = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "CoverageClass";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

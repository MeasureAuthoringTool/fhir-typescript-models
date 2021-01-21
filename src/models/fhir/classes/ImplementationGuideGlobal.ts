/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IImplementationGuideGlobal,
  PrimitiveCanonical,
  ResourceType,
  FhirType
} from "../internal";

@FhirType("ImplementationGuideGlobal", "BackboneElement")
export class ImplementationGuideGlobal extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImplementationGuide.Global";

  static readonly primaryCodePath: string | null = null;

  @FhirField("ResourceType")
  public type?: ResourceType;

  @FhirField("PrimitiveCanonical")
  public profile?: PrimitiveCanonical;

  public static parse(
    json: IImplementationGuideGlobal,
    providedInstance: ImplementationGuideGlobal = new ImplementationGuideGlobal()
  ): ImplementationGuideGlobal {
    const newInstance: ImplementationGuideGlobal = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = ResourceType.parsePrimitive(json.type, json._type);
    }
    if (json.profile !== undefined) {
      newInstance.profile = PrimitiveCanonical.parsePrimitive(json.profile, json._profile);
    }
    return newInstance;
  }

  public static isImplementationGuideGlobal(input?: unknown): input is ImplementationGuideGlobal {
    const castInput = input as ImplementationGuideGlobal;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImplementationGuideGlobal";
  }

  public toJSON(): IImplementationGuideGlobal {
    const result: IImplementationGuideGlobal = super.toJSON();

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.profile) {
      result.profile = this.profile.value;
      result._profile = Extension.serializePrimitiveExtension(this.profile);
    }

    return result;
  }

  public clone(): ImplementationGuideGlobal {
    return ImplementationGuideGlobal.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ImplementationGuideGlobal";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

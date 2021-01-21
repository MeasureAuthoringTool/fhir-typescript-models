/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirChoice,
  ISpecimenDefinitionTypeTestedContainerAdditive,
  Reference,
  FhirType
} from "../internal";

@FhirType("SpecimenDefinitionTypeTestedContainerAdditive", "BackboneElement")
export class SpecimenDefinitionTypeTestedContainerAdditive extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SpecimenDefinition.TypeTested.Container.Additive";

  static readonly primaryCodePath: string | null = null;

  @FhirChoice("CodeableConcept", "Reference")
  public additive?: CodeableConcept | Reference;

  public static parse(
    json: ISpecimenDefinitionTypeTestedContainerAdditive,
    providedInstance: SpecimenDefinitionTypeTestedContainerAdditive = new SpecimenDefinitionTypeTestedContainerAdditive()
  ): SpecimenDefinitionTypeTestedContainerAdditive {
    const newInstance: SpecimenDefinitionTypeTestedContainerAdditive = BackboneElement.parse(json, providedInstance);
  
    if (json.additiveCodeableConcept !== undefined) {
      newInstance.additive = CodeableConcept.parse(json.additiveCodeableConcept);
    }
    if (json.additiveReference !== undefined) {
      newInstance.additive = Reference.parse(json.additiveReference);
    }
    return newInstance;
  }

  public static isSpecimenDefinitionTypeTestedContainerAdditive(input?: unknown): input is SpecimenDefinitionTypeTestedContainerAdditive {
    const castInput = input as SpecimenDefinitionTypeTestedContainerAdditive;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SpecimenDefinitionTypeTestedContainerAdditive";
  }

  public toJSON(): ISpecimenDefinitionTypeTestedContainerAdditive {
    const result: ISpecimenDefinitionTypeTestedContainerAdditive = super.toJSON();

    if (this.additive && CodeableConcept.isCodeableConcept(this.additive)) {
      result.additiveCodeableConcept = this.additive.toJSON();
    }

    if (this.additive && Reference.isReference(this.additive)) {
      result.additiveReference = this.additive.toJSON();
    }

    return result;
  }

  public clone(): SpecimenDefinitionTypeTestedContainerAdditive {
    return SpecimenDefinitionTypeTestedContainerAdditive.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SpecimenDefinitionTypeTestedContainerAdditive";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

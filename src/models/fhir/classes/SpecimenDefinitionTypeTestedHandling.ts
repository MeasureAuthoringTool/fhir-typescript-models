/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Duration,
  Extension,
  FhirField,
  ISpecimenDefinitionTypeTestedHandling,
  PrimitiveString,
  Range,
  FhirType
} from "../internal";

@FhirType("SpecimenDefinitionTypeTestedHandling", "BackboneElement")
export class SpecimenDefinitionTypeTestedHandling extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SpecimenDefinition.TypeTested.Handling";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public temperatureQualifier?: CodeableConcept;

  @FhirField("Range")
  public temperatureRange?: Range;

  @FhirField("Duration")
  public maxDuration?: Duration;

  @FhirField("PrimitiveString")
  public instruction?: PrimitiveString;

  public static parse(
    json: ISpecimenDefinitionTypeTestedHandling,
    providedInstance: SpecimenDefinitionTypeTestedHandling = new SpecimenDefinitionTypeTestedHandling()
  ): SpecimenDefinitionTypeTestedHandling {
    const newInstance: SpecimenDefinitionTypeTestedHandling = BackboneElement.parse(json, providedInstance);
  
    if (json.temperatureQualifier !== undefined) {
      newInstance.temperatureQualifier = CodeableConcept.parse(json.temperatureQualifier);
    }
    if (json.temperatureRange !== undefined) {
      newInstance.temperatureRange = Range.parse(json.temperatureRange);
    }
    if (json.maxDuration !== undefined) {
      newInstance.maxDuration = Duration.parse(json.maxDuration);
    }
    if (json.instruction !== undefined) {
      newInstance.instruction = PrimitiveString.parsePrimitive(json.instruction, json._instruction);
    }
    return newInstance;
  }

  public static isSpecimenDefinitionTypeTestedHandling(input?: unknown): input is SpecimenDefinitionTypeTestedHandling {
    const castInput = input as SpecimenDefinitionTypeTestedHandling;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SpecimenDefinitionTypeTestedHandling";
  }

  public toJSON(): ISpecimenDefinitionTypeTestedHandling {
    const result: ISpecimenDefinitionTypeTestedHandling = super.toJSON();

    if (this.temperatureQualifier) {
      result.temperatureQualifier = this.temperatureQualifier.toJSON();
    }

    if (this.temperatureRange) {
      result.temperatureRange = this.temperatureRange.toJSON();
    }

    if (this.maxDuration) {
      result.maxDuration = this.maxDuration.toJSON();
    }

    if (this.instruction) {
      result.instruction = this.instruction.value;
      result._instruction = Extension.serializePrimitiveExtension(this.instruction);
    }

    return result;
  }

  public clone(): SpecimenDefinitionTypeTestedHandling {
    return SpecimenDefinitionTypeTestedHandling.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SpecimenDefinitionTypeTestedHandling";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

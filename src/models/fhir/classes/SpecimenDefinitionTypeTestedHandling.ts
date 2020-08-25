/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Duration,
  Extension,
  ISpecimenDefinitionTypeTestedHandling,
  PrimitiveString,
  Range,
} from "../internal";

export class SpecimenDefinitionTypeTestedHandling extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SpecimenDefinition.TypeTested.Handling";

  public temperatureQualifier?: CodeableConcept;

  public temperatureRange?: Range;

  public maxDuration?: Duration;

  public instruction?: PrimitiveString;

  public static parse(
    json: ISpecimenDefinitionTypeTestedHandling,
    providedInstance: SpecimenDefinitionTypeTestedHandling = new SpecimenDefinitionTypeTestedHandling()
  ): SpecimenDefinitionTypeTestedHandling {
    const newInstance: SpecimenDefinitionTypeTestedHandling = BackboneElement.parse(json, providedInstance);
  
    if (json.temperatureQualifier) {
      newInstance.temperatureQualifier = CodeableConcept.parse(json.temperatureQualifier);
    }
    if (json.temperatureRange) {
      newInstance.temperatureRange = Range.parse(json.temperatureRange);
    }
    if (json.maxDuration) {
      newInstance.maxDuration = Duration.parse(json.maxDuration);
    }
    if (json.instruction) {
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
  
  public getTypeName(): string {
    return "SpecimenDefinitionTypeTestedHandling";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  ISpecimenDefinitionTypeTestedContainer,
  PrimitiveString,
  SimpleQuantity,
  SpecimenDefinitionTypeTestedContainerAdditive,
  FhirType
} from "../internal";

@FhirType("SpecimenDefinitionTypeTestedContainer", "BackboneElement")
export class SpecimenDefinitionTypeTestedContainer extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SpecimenDefinition.TypeTested.Container";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public material?: CodeableConcept;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("CodeableConcept")
  public cap?: CodeableConcept;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirField("SimpleQuantity")
  public capacity?: SimpleQuantity;

  @FhirChoice("SimpleQuantity", "PrimitiveString")
  public minimumVolume?: SimpleQuantity | PrimitiveString;

  @FhirList("SpecimenDefinitionTypeTestedContainerAdditive")
  public additive?: Array<SpecimenDefinitionTypeTestedContainerAdditive>;

  @FhirField("PrimitiveString")
  public preparation?: PrimitiveString;

  public static parse(
    json: ISpecimenDefinitionTypeTestedContainer,
    providedInstance: SpecimenDefinitionTypeTestedContainer = new SpecimenDefinitionTypeTestedContainer()
  ): SpecimenDefinitionTypeTestedContainer {
    const newInstance: SpecimenDefinitionTypeTestedContainer = BackboneElement.parse(json, providedInstance);
  
    if (json.material !== undefined) {
      newInstance.material = CodeableConcept.parse(json.material);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.cap !== undefined) {
      newInstance.cap = CodeableConcept.parse(json.cap);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.capacity !== undefined) {
      newInstance.capacity = SimpleQuantity.parse(json.capacity);
    }
    if (json.minimumVolumeQuantity !== undefined) {
      newInstance.minimumVolume = SimpleQuantity.parse(json.minimumVolumeQuantity);
    }
    if (json.minimumVolumeString !== undefined) {
      newInstance.minimumVolume = PrimitiveString.parsePrimitive(json.minimumVolumeString, json._minimumVolumeString);
    }
    if (json.additive !== undefined) {
      newInstance.additive = json.additive.map((x) => SpecimenDefinitionTypeTestedContainerAdditive.parse(x));
    }
    if (json.preparation !== undefined) {
      newInstance.preparation = PrimitiveString.parsePrimitive(json.preparation, json._preparation);
    }
    return newInstance;
  }

  public static isSpecimenDefinitionTypeTestedContainer(input?: unknown): input is SpecimenDefinitionTypeTestedContainer {
    const castInput = input as SpecimenDefinitionTypeTestedContainer;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SpecimenDefinitionTypeTestedContainer";
  }

  public toJSON(): ISpecimenDefinitionTypeTestedContainer {
    const result: ISpecimenDefinitionTypeTestedContainer = super.toJSON();

    if (this.material) {
      result.material = this.material.toJSON();
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.cap) {
      result.cap = this.cap.toJSON();
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.capacity) {
      result.capacity = this.capacity.toJSON();
    }

    if (this.minimumVolume && SimpleQuantity.isSimpleQuantity(this.minimumVolume)) {
      result.minimumVolumeQuantity = this.minimumVolume.toJSON();
    }

    if (this.minimumVolume && PrimitiveString.isPrimitiveString(this.minimumVolume)) {
      result.minimumVolumeString = this.minimumVolume.value;
      result._minimumVolumeString = Extension.serializePrimitiveExtension(this.minimumVolume);
    }

    if (this.additive) {
      result.additive = this.additive.map((x) => x.toJSON());
    }

    if (this.preparation) {
      result.preparation = this.preparation.value;
      result._preparation = Extension.serializePrimitiveExtension(this.preparation);
    }

    return result;
  }

  public clone(): SpecimenDefinitionTypeTestedContainer {
    return SpecimenDefinitionTypeTestedContainer.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SpecimenDefinitionTypeTestedContainer";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

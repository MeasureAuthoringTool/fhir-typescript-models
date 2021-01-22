/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  Identifier,
  ISpecimenContainer,
  PrimitiveString,
  Reference,
  SimpleQuantity,
  FhirType
} from "../internal";

@FhirType("SpecimenContainer", "BackboneElement")
export class SpecimenContainer extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Specimen.Container";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("SimpleQuantity")
  public capacity?: SimpleQuantity;

  @FhirField("SimpleQuantity")
  public specimenQuantity?: SimpleQuantity;

  @FhirChoice("CodeableConcept", "Reference")
  public additive?: CodeableConcept | Reference;

  public static parse(
    json: ISpecimenContainer,
    providedInstance: SpecimenContainer = new SpecimenContainer()
  ): SpecimenContainer {
    const newInstance: SpecimenContainer = BackboneElement.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.capacity !== undefined) {
      newInstance.capacity = SimpleQuantity.parse(json.capacity);
    }
    if (json.specimenQuantity !== undefined) {
      newInstance.specimenQuantity = SimpleQuantity.parse(json.specimenQuantity);
    }
    if (json.additiveCodeableConcept !== undefined) {
      newInstance.additive = CodeableConcept.parse(json.additiveCodeableConcept);
    }
    if (json.additiveReference !== undefined) {
      newInstance.additive = Reference.parse(json.additiveReference);
    }
    return newInstance;
  }

  public static isSpecimenContainer(input?: unknown): input is SpecimenContainer {
    const castInput = input as SpecimenContainer;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SpecimenContainer";
  }

  public toJSON(): ISpecimenContainer {
    const result: ISpecimenContainer = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.capacity) {
      result.capacity = this.capacity.toJSON();
    }

    if (this.specimenQuantity) {
      result.specimenQuantity = this.specimenQuantity.toJSON();
    }

    if (this.additive && CodeableConcept.isCodeableConcept(this.additive)) {
      result.additiveCodeableConcept = this.additive.toJSON();
    }

    if (this.additive && Reference.isReference(this.additive)) {
      result.additiveReference = this.additive.toJSON();
    }

    return result;
  }

  public clone(): SpecimenContainer {
    return SpecimenContainer.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SpecimenContainer";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

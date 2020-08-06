/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  Identifier,
  ISpecimenContainer,
  PrimitiveString,
  Reference,
  SimpleQuantity,
} from "../internal";

export class SpecimenContainer extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Specimen.Container";

  public identifier?: Array<Identifier>;

  public description?: PrimitiveString;

  public type?: CodeableConcept;

  public capacity?: SimpleQuantity;

  public specimenQuantity?: SimpleQuantity;

  public additive?: CodeableConcept | Reference;

  public static parse(
    json: ISpecimenContainer,
    providedInstance: SpecimenContainer = new SpecimenContainer()
  ): SpecimenContainer {
    const newInstance: SpecimenContainer = BackboneElement.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.capacity) {
      newInstance.capacity = SimpleQuantity.parse(json.capacity);
    }
    if (json.specimenQuantity) {
      newInstance.specimenQuantity = SimpleQuantity.parse(json.specimenQuantity);
    }
    if (json.additiveCodeableConcept) {
      newInstance.additive = CodeableConcept.parse(json.additiveCodeableConcept);
    }
    if (json.additiveReference) {
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
  
  public getTypeName(): string {
    return "SpecimenContainer";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

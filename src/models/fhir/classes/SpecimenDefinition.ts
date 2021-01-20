/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  Identifier,
  ISpecimenDefinition,
  PrimitiveString,
  SpecimenDefinitionTypeTested,
  FhirType
} from "../internal";

@FhirType("SpecimenDefinition", "DomainResource")
export class SpecimenDefinition extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SpecimenDefinition";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Identifier")
  public identifier?: Identifier;

  @FhirField("CodeableConcept")
  public typeCollected?: CodeableConcept;

  @FhirList("CodeableConcept")
  public patientPreparation?: Array<CodeableConcept>;

  @FhirField("PrimitiveString")
  public timeAspect?: PrimitiveString;

  @FhirList("CodeableConcept")
  public collection?: Array<CodeableConcept>;

  @FhirList("SpecimenDefinitionTypeTested")
  public typeTested?: Array<SpecimenDefinitionTypeTested>;

  public static parse(
    json: ISpecimenDefinition,
    providedInstance: SpecimenDefinition = new SpecimenDefinition()
  ): SpecimenDefinition {
    const newInstance: SpecimenDefinition = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.typeCollected !== undefined) {
      newInstance.typeCollected = CodeableConcept.parse(json.typeCollected);
    }
    if (json.patientPreparation !== undefined) {
      newInstance.patientPreparation = json.patientPreparation.map((x) => CodeableConcept.parse(x));
    }
    if (json.timeAspect !== undefined) {
      newInstance.timeAspect = PrimitiveString.parsePrimitive(json.timeAspect, json._timeAspect);
    }
    if (json.collection !== undefined) {
      newInstance.collection = json.collection.map((x) => CodeableConcept.parse(x));
    }
    if (json.typeTested !== undefined) {
      newInstance.typeTested = json.typeTested.map((x) => SpecimenDefinitionTypeTested.parse(x));
    }
    return newInstance;
  }

  public static isSpecimenDefinition(input?: unknown): input is SpecimenDefinition {
    const castInput = input as SpecimenDefinition;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SpecimenDefinition";
  }

  public toJSON(): ISpecimenDefinition {
    const result: ISpecimenDefinition = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.toJSON();
    }

    if (this.typeCollected) {
      result.typeCollected = this.typeCollected.toJSON();
    }

    if (this.patientPreparation) {
      result.patientPreparation = this.patientPreparation.map((x) => x.toJSON());
    }

    if (this.timeAspect) {
      result.timeAspect = this.timeAspect.value;
      result._timeAspect = Extension.serializePrimitiveExtension(this.timeAspect);
    }

    if (this.collection) {
      result.collection = this.collection.map((x) => x.toJSON());
    }

    if (this.typeTested) {
      result.typeTested = this.typeTested.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): SpecimenDefinition {
    return SpecimenDefinition.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SpecimenDefinition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

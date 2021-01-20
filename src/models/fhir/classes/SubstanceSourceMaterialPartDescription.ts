/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  ISubstanceSourceMaterialPartDescription,
  FhirType
} from "../internal";

@FhirType("SubstanceSourceMaterialPartDescription", "BackboneElement")
export class SubstanceSourceMaterialPartDescription extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceSourceMaterial.PartDescription";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public part?: CodeableConcept;

  @FhirField("CodeableConcept")
  public partLocation?: CodeableConcept;

  public static parse(
    json: ISubstanceSourceMaterialPartDescription,
    providedInstance: SubstanceSourceMaterialPartDescription = new SubstanceSourceMaterialPartDescription()
  ): SubstanceSourceMaterialPartDescription {
    const newInstance: SubstanceSourceMaterialPartDescription = BackboneElement.parse(json, providedInstance);
  
    if (json.part !== undefined) {
      newInstance.part = CodeableConcept.parse(json.part);
    }
    if (json.partLocation !== undefined) {
      newInstance.partLocation = CodeableConcept.parse(json.partLocation);
    }
    return newInstance;
  }

  public static isSubstanceSourceMaterialPartDescription(input?: unknown): input is SubstanceSourceMaterialPartDescription {
    const castInput = input as SubstanceSourceMaterialPartDescription;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceSourceMaterialPartDescription";
  }

  public toJSON(): ISubstanceSourceMaterialPartDescription {
    const result: ISubstanceSourceMaterialPartDescription = super.toJSON();

    if (this.part) {
      result.part = this.part.toJSON();
    }

    if (this.partLocation) {
      result.partLocation = this.partLocation.toJSON();
    }

    return result;
  }

  public clone(): SubstanceSourceMaterialPartDescription {
    return SubstanceSourceMaterialPartDescription.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceSourceMaterialPartDescription";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  IMedicinalProductPharmaceuticalCharacteristics,
  FhirType
} from "../internal";

@FhirType("MedicinalProductPharmaceuticalCharacteristics", "BackboneElement")
export class MedicinalProductPharmaceuticalCharacteristics extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductPharmaceutical.Characteristics";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirField("CodeableConcept")
  public status?: CodeableConcept;

  public static parse(
    json: IMedicinalProductPharmaceuticalCharacteristics,
    providedInstance: MedicinalProductPharmaceuticalCharacteristics = new MedicinalProductPharmaceuticalCharacteristics()
  ): MedicinalProductPharmaceuticalCharacteristics {
    const newInstance: MedicinalProductPharmaceuticalCharacteristics = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.status !== undefined) {
      newInstance.status = CodeableConcept.parse(json.status);
    }
    return newInstance;
  }

  public static isMedicinalProductPharmaceuticalCharacteristics(input?: unknown): input is MedicinalProductPharmaceuticalCharacteristics {
    const castInput = input as MedicinalProductPharmaceuticalCharacteristics;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductPharmaceuticalCharacteristics";
  }

  public toJSON(): IMedicinalProductPharmaceuticalCharacteristics {
    const result: IMedicinalProductPharmaceuticalCharacteristics = super.toJSON();

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.status) {
      result.status = this.status.toJSON();
    }

    return result;
  }

  public clone(): MedicinalProductPharmaceuticalCharacteristics {
    return MedicinalProductPharmaceuticalCharacteristics.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicinalProductPharmaceuticalCharacteristics";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

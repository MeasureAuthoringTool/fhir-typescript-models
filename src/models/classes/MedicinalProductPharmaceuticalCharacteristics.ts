/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IMedicinalProductPharmaceuticalCharacteristics,
} from "../internal";

export class MedicinalProductPharmaceuticalCharacteristics extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductPharmaceutical.Characteristics";

  public code?: CodeableConcept;

  public status?: CodeableConcept;

  public static parse(
    json: IMedicinalProductPharmaceuticalCharacteristics,
    providedInstance: MedicinalProductPharmaceuticalCharacteristics = new MedicinalProductPharmaceuticalCharacteristics()
  ): MedicinalProductPharmaceuticalCharacteristics {
    const newInstance: MedicinalProductPharmaceuticalCharacteristics = BackboneElement.parse(json, providedInstance);
  
    if (json.code) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.status) {
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
  
  public getTypeName(): string {
    return "MedicinalProductPharmaceuticalCharacteristics";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

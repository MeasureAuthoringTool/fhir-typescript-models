/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IMedicinalProductContraindicationOtherTherapy,
  Reference,
} from "../internal";

export class MedicinalProductContraindicationOtherTherapy extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductContraindication.OtherTherapy";

  public therapyRelationshipType?: CodeableConcept;

  public medication?: CodeableConcept | Reference;

  public static parse(
    json: IMedicinalProductContraindicationOtherTherapy,
    providedInstance: MedicinalProductContraindicationOtherTherapy = new MedicinalProductContraindicationOtherTherapy()
  ): MedicinalProductContraindicationOtherTherapy {
    const newInstance: MedicinalProductContraindicationOtherTherapy = BackboneElement.parse(json, providedInstance);
  
    if (json.therapyRelationshipType) {
      newInstance.therapyRelationshipType = CodeableConcept.parse(json.therapyRelationshipType);
    }
    if (json.medicationCodeableConcept) {
      newInstance.medication = CodeableConcept.parse(json.medicationCodeableConcept);
    }
    if (json.medicationReference) {
      newInstance.medication = Reference.parse(json.medicationReference);
    }
    return newInstance;
  }

  public static isMedicinalProductContraindicationOtherTherapy(input?: unknown): input is MedicinalProductContraindicationOtherTherapy {
    const castInput = input as MedicinalProductContraindicationOtherTherapy;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductContraindicationOtherTherapy";
  }

  public toJSON(): IMedicinalProductContraindicationOtherTherapy {
    const result: IMedicinalProductContraindicationOtherTherapy = super.toJSON();

    if (this.therapyRelationshipType) {
      result.therapyRelationshipType = this.therapyRelationshipType.toJSON();
    }

    if (this.medication && CodeableConcept.isCodeableConcept(this.medication)) {
      result.medicationCodeableConcept = this.medication.toJSON();
    }

    if (this.medication && Reference.isReference(this.medication)) {
      result.medicationReference = this.medication.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MedicinalProductContraindicationOtherTherapy";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

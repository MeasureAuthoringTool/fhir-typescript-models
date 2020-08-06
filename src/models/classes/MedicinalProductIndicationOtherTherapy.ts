/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IMedicinalProductIndicationOtherTherapy,
  Reference,
} from "../internal";

export class MedicinalProductIndicationOtherTherapy extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductIndication.OtherTherapy";

  public therapyRelationshipType?: CodeableConcept;

  public medication?: CodeableConcept | Reference;

  public static parse(
    json: IMedicinalProductIndicationOtherTherapy,
    providedInstance: MedicinalProductIndicationOtherTherapy = new MedicinalProductIndicationOtherTherapy()
  ): MedicinalProductIndicationOtherTherapy {
    const newInstance: MedicinalProductIndicationOtherTherapy = BackboneElement.parse(json, providedInstance);
  
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

  public static isMedicinalProductIndicationOtherTherapy(input?: unknown): input is MedicinalProductIndicationOtherTherapy {
    const castInput = input as MedicinalProductIndicationOtherTherapy;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductIndicationOtherTherapy";
  }

  public toJSON(): IMedicinalProductIndicationOtherTherapy {
    const result: IMedicinalProductIndicationOtherTherapy = super.toJSON();

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
    return "MedicinalProductIndicationOtherTherapy";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

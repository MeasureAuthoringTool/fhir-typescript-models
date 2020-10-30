/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IMedicinalProductIndicationOtherTherapy,
  Reference,
  FieldMetadata
} from "../internal";

export class MedicinalProductIndicationOtherTherapy extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductIndication.OtherTherapy";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "therapyRelationshipType",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "medication",
      fieldType: [CodeableConcept, Reference],
      isArray: false
    }];
  }

  public therapyRelationshipType?: CodeableConcept;

  public medication?: CodeableConcept | Reference;

  public static parse(
    json: IMedicinalProductIndicationOtherTherapy,
    providedInstance: MedicinalProductIndicationOtherTherapy = new MedicinalProductIndicationOtherTherapy()
  ): MedicinalProductIndicationOtherTherapy {
    const newInstance: MedicinalProductIndicationOtherTherapy = BackboneElement.parse(json, providedInstance);
  
    if (json.therapyRelationshipType !== undefined) {
      newInstance.therapyRelationshipType = CodeableConcept.parse(json.therapyRelationshipType);
    }
    if (json.medicationCodeableConcept !== undefined) {
      newInstance.medication = CodeableConcept.parse(json.medicationCodeableConcept);
    }
    if (json.medicationReference !== undefined) {
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

  public clone(): MedicinalProductIndicationOtherTherapy {
    return MedicinalProductIndicationOtherTherapy.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicinalProductIndicationOtherTherapy";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

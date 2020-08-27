/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics,
  PrimitiveString,
  SimpleQuantity,
} from "../internal";

export class MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationKnowledge.AdministrationGuidelines.PatientCharacteristics";

  public characteristic?: CodeableConcept | SimpleQuantity;

  public value?: Array<PrimitiveString>;

  public static parse(
    json: IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics,
    providedInstance: MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics = new MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics()
  ): MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics {
    const newInstance: MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics = BackboneElement.parse(json, providedInstance);
  
    if (json.characteristicCodeableConcept !== undefined) {
      newInstance.characteristic = CodeableConcept.parse(json.characteristicCodeableConcept);
    }
    if (json.characteristicSimpleQuantity !== undefined) {
      newInstance.characteristic = SimpleQuantity.parse(json.characteristicSimpleQuantity);
    }
    if (json.value !== undefined) {
      newInstance.value = json.value.map((x, i) => {
        const ext = json._value && json._value[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    return newInstance;
  }

  public static isMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics(input?: unknown): input is MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics {
    const castInput = input as MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics";
  }

  public toJSON(): IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics {
    const result: IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics = super.toJSON();

    if (this.characteristic && CodeableConcept.isCodeableConcept(this.characteristic)) {
      result.characteristicCodeableConcept = this.characteristic.toJSON();
    }

    if (this.characteristic && SimpleQuantity.isSimpleQuantity(this.characteristic)) {
      result.characteristicSimpleQuantity = this.characteristic.toJSON();
    }

    if (this.value) {
      result.value = this.value.filter(x => !!x).map(x => x.value) as typeof result.value;
      result._value = Extension.serializePrimitiveExtensionArray(this.value);
    }

    return result;
  }

  public clone(): MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics {
    return MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

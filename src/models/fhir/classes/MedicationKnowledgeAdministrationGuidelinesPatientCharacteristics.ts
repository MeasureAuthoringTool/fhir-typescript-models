/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirList,
  IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics,
  PrimitiveString,
  SimpleQuantity,
  FhirType
} from "../internal";

@FhirType("MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics", "BackboneElement")
export class MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationKnowledge.AdministrationGuidelines.PatientCharacteristics";

  static readonly primaryCodePath: string | null = null;

  @FhirChoice("CodeableConcept", "SimpleQuantity")
  public characteristic?: CodeableConcept | SimpleQuantity;

  @FhirList("PrimitiveString")
  public value?: Array<PrimitiveString>;

  public static parse(
    json: IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics,
    providedInstance: MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics = new MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics()
  ): MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics {
    const newInstance: MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics = BackboneElement.parse(json, providedInstance);
  
    if (json.characteristicCodeableConcept !== undefined) {
      newInstance.characteristic = CodeableConcept.parse(json.characteristicCodeableConcept);
    }
    if (json.characteristicQuantity !== undefined) {
      newInstance.characteristic = SimpleQuantity.parse(json.characteristicQuantity);
    }
    if (json.value !== undefined) {
      newInstance.value = json.value.map((x, i) => PrimitiveString.parsePrimitive(x, json._value?.[i]));
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
      result.characteristicQuantity = this.characteristic.toJSON();
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

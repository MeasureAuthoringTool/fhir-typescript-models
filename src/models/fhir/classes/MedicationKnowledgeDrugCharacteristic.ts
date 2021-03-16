/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  IMedicationKnowledgeDrugCharacteristic,
  PrimitiveBase64Binary,
  PrimitiveString,
  SimpleQuantity,
  FhirType
} from "../internal";

@FhirType("MedicationKnowledgeDrugCharacteristic", "BackboneElement")
export class MedicationKnowledgeDrugCharacteristic extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationKnowledge.DrugCharacteristic";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirChoice("CodeableConcept", "PrimitiveString", "SimpleQuantity", "PrimitiveBase64Binary")
  public value?: CodeableConcept | PrimitiveString | SimpleQuantity | PrimitiveBase64Binary;

  public static parse(
    json: IMedicationKnowledgeDrugCharacteristic,
    providedInstance: MedicationKnowledgeDrugCharacteristic = new MedicationKnowledgeDrugCharacteristic()
  ): MedicationKnowledgeDrugCharacteristic {
    const newInstance: MedicationKnowledgeDrugCharacteristic = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.valueCodeableConcept !== undefined) {
      newInstance.value = CodeableConcept.parse(json.valueCodeableConcept);
    }
    if (json.valueString !== undefined) {
      newInstance.value = PrimitiveString.parsePrimitive(json.valueString, json._valueString);
    }
    if (json.valueQuantity !== undefined) {
      newInstance.value = SimpleQuantity.parse(json.valueQuantity);
    }
    if (json.valueBase64Binary !== undefined) {
      newInstance.value = PrimitiveBase64Binary.parsePrimitive(json.valueBase64Binary, json._valueBase64Binary);
    }
    return newInstance;
  }

  public static isMedicationKnowledgeDrugCharacteristic(input?: unknown): input is MedicationKnowledgeDrugCharacteristic {
    const castInput = input as MedicationKnowledgeDrugCharacteristic;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationKnowledgeDrugCharacteristic";
  }

  public toJSON(): IMedicationKnowledgeDrugCharacteristic {
    const result: IMedicationKnowledgeDrugCharacteristic = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.value && CodeableConcept.isCodeableConcept(this.value)) {
      result.valueCodeableConcept = this.value.toJSON();
    }

    if (this.value && PrimitiveString.isPrimitiveString(this.value)) {
      result.valueString = this.value.value;
      result._valueString = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && SimpleQuantity.isSimpleQuantity(this.value)) {
      result.valueQuantity = this.value.toJSON();
    }

    if (this.value && PrimitiveBase64Binary.isPrimitiveBase64Binary(this.value)) {
      result.valueBase64Binary = this.value.value;
      result._valueBase64Binary = Extension.serializePrimitiveExtension(this.value);
    }

    return result;
  }

  public clone(): MedicationKnowledgeDrugCharacteristic {
    return MedicationKnowledgeDrugCharacteristic.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicationKnowledgeDrugCharacteristic";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

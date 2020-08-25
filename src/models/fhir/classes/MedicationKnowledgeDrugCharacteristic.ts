/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IMedicationKnowledgeDrugCharacteristic,
  PrimitiveBase64Binary,
  PrimitiveString,
  SimpleQuantity,
} from "../internal";

export class MedicationKnowledgeDrugCharacteristic extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationKnowledge.DrugCharacteristic";

  public type?: CodeableConcept;

  public value?: CodeableConcept | PrimitiveString | SimpleQuantity | PrimitiveBase64Binary;

  public static parse(
    json: IMedicationKnowledgeDrugCharacteristic,
    providedInstance: MedicationKnowledgeDrugCharacteristic = new MedicationKnowledgeDrugCharacteristic()
  ): MedicationKnowledgeDrugCharacteristic {
    const newInstance: MedicationKnowledgeDrugCharacteristic = BackboneElement.parse(json, providedInstance);
  
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.valueCodeableConcept) {
      newInstance.value = CodeableConcept.parse(json.valueCodeableConcept);
    }
    if (json.valueString) {
      newInstance.value = PrimitiveString.parsePrimitive(json.valueString, json._valueString);
    }
    if (json.valueSimpleQuantity) {
      newInstance.value = SimpleQuantity.parse(json.valueSimpleQuantity);
    }
    if (json.valueBase64Binary) {
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
      result.valueSimpleQuantity = this.value.toJSON();
    }

    if (this.value && PrimitiveBase64Binary.isPrimitiveBase64Binary(this.value)) {
      result.valueBase64Binary = this.value.value;
      result._valueBase64Binary = Extension.serializePrimitiveExtension(this.value);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MedicationKnowledgeDrugCharacteristic";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

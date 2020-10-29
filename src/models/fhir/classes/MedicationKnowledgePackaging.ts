/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IMedicationKnowledgePackaging,
  SimpleQuantity,
  FieldMetadata
} from "../internal";

export class MedicationKnowledgePackaging extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationKnowledge.Packaging";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "type",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "quantity",
      fieldType: [SimpleQuantity],
      isArray: false
    }];
  }

  public type?: CodeableConcept;

  public quantity?: SimpleQuantity;

  public static parse(
    json: IMedicationKnowledgePackaging,
    providedInstance: MedicationKnowledgePackaging = new MedicationKnowledgePackaging()
  ): MedicationKnowledgePackaging {
    const newInstance: MedicationKnowledgePackaging = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.quantity !== undefined) {
      newInstance.quantity = SimpleQuantity.parse(json.quantity);
    }
    return newInstance;
  }

  public static isMedicationKnowledgePackaging(input?: unknown): input is MedicationKnowledgePackaging {
    const castInput = input as MedicationKnowledgePackaging;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationKnowledgePackaging";
  }

  public toJSON(): IMedicationKnowledgePackaging {
    const result: IMedicationKnowledgePackaging = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.quantity) {
      result.quantity = this.quantity.toJSON();
    }

    return result;
  }

  public clone(): MedicationKnowledgePackaging {
    return MedicationKnowledgePackaging.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicationKnowledgePackaging";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

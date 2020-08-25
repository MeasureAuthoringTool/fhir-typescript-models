/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IMedicationKnowledgeRegulatorySubstitution,
  PrimitiveBoolean,
} from "../internal";

export class MedicationKnowledgeRegulatorySubstitution extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationKnowledge.Regulatory.Substitution";

  public type?: CodeableConcept;

  public allowed?: PrimitiveBoolean;

  public static parse(
    json: IMedicationKnowledgeRegulatorySubstitution,
    providedInstance: MedicationKnowledgeRegulatorySubstitution = new MedicationKnowledgeRegulatorySubstitution()
  ): MedicationKnowledgeRegulatorySubstitution {
    const newInstance: MedicationKnowledgeRegulatorySubstitution = BackboneElement.parse(json, providedInstance);
  
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.allowed) {
      newInstance.allowed = PrimitiveBoolean.parsePrimitive(json.allowed, json._allowed);
    }
    return newInstance;
  }

  public static isMedicationKnowledgeRegulatorySubstitution(input?: unknown): input is MedicationKnowledgeRegulatorySubstitution {
    const castInput = input as MedicationKnowledgeRegulatorySubstitution;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationKnowledgeRegulatorySubstitution";
  }

  public toJSON(): IMedicationKnowledgeRegulatorySubstitution {
    const result: IMedicationKnowledgeRegulatorySubstitution = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.allowed) {
      result.allowed = this.allowed.value;
      result._allowed = Extension.serializePrimitiveExtension(this.allowed);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MedicationKnowledgeRegulatorySubstitution";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
